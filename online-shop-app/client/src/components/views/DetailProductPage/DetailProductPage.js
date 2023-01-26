import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./DetailProductPage.module.css";
import ConvertCountryName from "./ConvertCountryName";
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

const DetailProductPage = (props) => {
    const [productState, setProudct] = useState({});

    const productId = props.match.params.productId;

    useEffect(() => {
        axios.get(`/api/product/product_by_id?id=${productId}&type=single`)
        // type=single은 하나만 가져온다는 뜻
        .then((result) => {
            if(result.data.success){
                // console.log('data', result.data)
                setProudct(result.data.product[0])
            } else {
                alert('상세 정보 가져오기를 실패했습니다.')
            }
        })
    }, [productId])

    const DirectionHandler = (directionValue) => {
        return (
            <ConvertCountryName
                value={productState.title}
                direction={directionValue}
            />
        )
    };

    // console.log('Products', productState)

    return (
        <div className={styles.page}>
            <div className={styles.title}>
                {
                    DirectionHandler('left')
                }
                <h1>{productState.title}</h1>
                {
                    DirectionHandler('right')
                }
            </div>
            <br />
            <Row gutter={[16, 16]} >
                <Col lg={12} sm={24}><ProductImage detail={productState} /></Col>
                <Col lg={12} sm={24}><ProductInfo detail={productState}/></Col>
            </Row>
        </div>
    )
};

export default DetailProductPage;