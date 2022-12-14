import React, {useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import styles from './FileUpload.module.css'
import axios from 'axios';

function FileUpload(props){
    const [images, setImages] = useState([])

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);

        axios.post(`/api/product/image`, formData, config).then((result) => {
            if (result.data.success) {
                setImages([...images, result.data.filePath]);
                props.refreshFunction([...images, result.data.filePath])
            } else {
                alert("파일 저장 실패")
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    const imageDeleteHandler = (image) => {
        const currentIndex = images.indexOf(image);
        // console.log(currentIndex);
        let newImages = [...images];
        newImages.splice(currentIndex, 1);
        setImages(newImages);
    };

    return (
        <div className={styles.container}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()} className={styles['file-icon']}>
                            <input {...getInputProps()} />
                            <Icon type="plus" className={styles['icon-size']} />
                        </div>
                    </section>
                )}
            </Dropzone>

            <div className={styles.showImage}>
                {images.map((item, index) => (
                    <div key={index} onClick={() => imageDeleteHandler(item)}>
                        <img className={styles.imgs} src={`http://localhost:5000/${item}`} alt={item.value} />
                    </div>
                ))} 
            </div>
        </div>
    )
};

export default FileUpload;