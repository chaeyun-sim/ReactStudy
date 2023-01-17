import React from "react";
import { Carousel } from "antd";
import styles from './ImageSlider.module.css'

const ImageSlider = (props) => {
    return (
        <Carousel autoplay>
            {props.images.map((image, index) => (
                <div key={index}>
                    <img className={styles.img} src={`http://localhost:5000/${image}`} alt="Image about this product"/>
                </div>
            ))}
        </Carousel>
    )
};

export default ImageSlider;