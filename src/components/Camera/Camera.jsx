import React, { useState, useRef } from 'react';
import NavBar from '../Layout/NavBar';
import "./cameraComponentStyle.css";
import axios from "axios";

const Camera = () => {
    const cameraVideoRef = useRef(null);
    const cameraCanvasRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const videoData = useRef([]);
    const embedVideoData = useRef(null);

    const [scoreStr, setScoreStr] = useState(null);
    const [imgs, setImgs] = useState(null);

    function successFunc(mediaStream) {
        const video = cameraVideoRef.current;
        if (video == null) return;
        video.controls = false;
        if ('srcObject' in video) {
            video.srcObject = mediaStream;
        }
        video.onloadedmetadata = () => {
            video.play();
        };
    }

    function errorFunc(err) {
        console.log(`${err.name}: ${err.message}`);
        // always check for errors at the end.
    }

    // 启动摄像头
    const openMedia = () => { // 打开摄像头
        const opt = {
            audio: false,
            video: {
                width: 720,
                height: 360
            }
        };
        navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
    };

    const startRecording = () => {
        if (cameraVideoRef.current == null) return;
        const mediaStream = cameraVideoRef.current.srcObject;
        mediaRecorderRef.current = new MediaRecorder(mediaStream, { mimeType: 'video/webm' });

        const recorder = mediaRecorderRef.current;
        recorder.start();

        recorder.addEventListener('dataavailable', ev => {
            videoData.current.push(ev.data);
        });

        recorder.addEventListener('stop', () => {
            embedVideoData.current = new Blob(videoData.current);
            videoData.current = [];
        })
    };

    const endRecording = () => {
        if (mediaRecorderRef.current == null) return;
        mediaRecorderRef.current.stop();
    };

    const playVideo = () => {
        if (embedVideoData.current === null) return false;
        // 清除 video 的媒体流
        const video = cameraVideoRef.current;
        if (video == null) return;
        video.srcObject = null;
        // 把视频数据转为 URL 传给 video 的 src
        video.src = URL.createObjectURL(embedVideoData.current);
        // 播放视频
        video.play();
        // 启用 video 的控制组件
        video.controls = true;
        // 删除媒体流
        video.srcObject = null;
    };


    const downloadFrame = (dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'frame.jpeg';
        link.click();
    };

    const saveFrame = () => {
        if (embedVideoData.current) {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = URL.createObjectURL(embedVideoData.current);
            video.onloadedmetadata = () => {
                // 确保视频加载完成后获取帧
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext('2d');
                if (context) {
                    const keyFrames = [0, 1, 2];
                    function seekedPromise() {
                        return new Promise((resolve) => {
                            video.addEventListener('seeked', () => {
                                resolve();
                            });
                        });
                    }
                    async function processKeyFrames() {
                        for (let kf of keyFrames) {
                            video.currentTime = kf;
                            console.log(kf);
                            await seekedPromise();
                            context.drawImage(video, 0, 0, canvas.width, canvas.height);
                            const frameDataUrl = canvas.toDataURL('image/jpeg');
                            // setFrameUrl(frameDataUrl);
                            downloadFrame(frameDataUrl);
                        }
                    }
                    processKeyFrames();
                }
            };
        }
    };

    // const sendPic = () => {

    // }

    // const sendRecord = () => {

    // }

    const selectImgs = (event) => {
        const fileData = event.target.files[0];
        const formdata = new FormData();
        formdata.append("img1", fileData);
        setImgs(formdata);
    };

    const sendImgs = () => {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        axios
            .post("http://34.92.189.46:5000/sendImgs/", imgs, { headers: headers })
            .then((res) => {
                // console.log(res.data);
                console.log(res.data);
                setScoreStr(res.data);
            })
            .catch((err) => {
                console.log("错误");
                console.error(err);
            });
    };

    return (
        <div className="container_col">
            <NavBar />
            <div>
                <video
                    id="cameraVideo"
                    ref={cameraVideoRef}
                    className="video"
                />
            </div>
            <div className="container_vol">
                <button className="button" onClick={openMedia} >Open Camera</button>
                <button className="button" onClick={startRecording}>Start Recording</button>
                <button className="button" onClick={endRecording}>Stop Recording</button>
                <button className="button" onClick={playVideo}>Play Video</button>
                <button className="button" onClick={saveFrame}>Save Frame</button>
                {/* <button className="button" onClick={sendRecord}>Send Record</button> */}
                <input type="file" name="Select Pics" multiple="multiple" onChange={selectImgs} />
                <button onClick={sendImgs}>Send Pics</button>
                <p>Get Score: {scoreStr}</p>
            </div>
        </div>
    )
}

export default Camera