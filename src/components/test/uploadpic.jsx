import React, { useState } from "react";
import axios from "axios";

const UploadPic = () => {
    const [img1, setImg1] = useState(null);

    const handleImg1Change = (event) => {
        const fileData = event.target.files[0];
        const formdata = new FormData();
        formdata.append("img1", fileData);
        setImg1(formdata);
    };

    const handleComparisonResult = () => {
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        axios
            .post("http://34.92.189.46:5000/student/", img1, { headers: headers })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("错误");
                console.error(err);
            });
    };

    return (
        <div>
            <input type="file" name="file" multiple="multiple" id="uploadimg1" onChange={handleImg1Change} />
            <br />
            <button onClick={handleComparisonResult}>提交</button>
        </div>
    );
}

export default UploadPic