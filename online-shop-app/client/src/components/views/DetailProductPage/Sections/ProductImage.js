import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductImage.css';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map((item) => {
                return images.push({  // 여기 return 붙임
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            {props.detail.images ? <ImageGallery items={Images} /> : <p>이미지 가져오는 중 ...</p>}
        </div>
    )
}

export default ProductImage