import { useState } from "react";
import axios from "axios";

const Callforpic = () => {
    const [imgsrc,setimgsrc] = useState(null);

    function callforpicture() {
        axios
            .get("http://34.92.189.46:5000/get_image", { responseType: 'blob' })
            .then((res) => {
                // const inpaintImage = new Image()
                // inpaintImage.crossOrigin = 'Anonymous'
                // inpaintImage.src = URL.createObjectURL(res.data)
                // console.log(inpaintImage.src)
                // inpaintImage.onload = () => {
                //     const newImage = new fabric.Image(inpaintImage)
                //     clearCanvas()
                //     storeInpaintSnapShots(
                //         newImage,
                //         inpaintSnapShots,
                //         inpaintSnapShotsID,
                //         setInpaintSnapShots,
                //         setInpaintSnapShotsID,
                //     )
                //     setOriginImage(newImage)
                //     message.success('success')
                //     setIsLoading(false)
                // }
                console.log(res)
                const src=URL.createObjectURL(res.data)
                setimgsrc(src)
            })
            .catch((err) => {
                message.error(err.message)
                setIsLoading(false)
            })
    }

    return (
        <div>
            <button onClick={callforpicture}></button>
            <img src={imgsrc} alt="" />
        </div>
    )
}

export default Callforpic;

