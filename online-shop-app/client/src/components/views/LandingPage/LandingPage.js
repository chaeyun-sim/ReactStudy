import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from './LandingPage.module.css'
import { Card, Icon, Col, Row } from "antd";
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        let body = {
            skip: skip,
            limit: limit,
        };
        getProducts(body);
    }, []);

    const getProducts = (body) => {
        axios.post('/api/product/products', body)
        .then((result) => {
            if (result.data.success){
                // console.log(result.data)
                if(body.loadMore){
                    setProducts([...products, ...result.data.productsInfo])
                } else {
                    setProducts(result.data.productsInfo)
                }
            } else {
                alert("상품을 가져올 수 없습니다.")
            }
        })
    }

    const loadMoreHandler = () => {
        let skipAddLimit = skip + limit;

        let body = {
            skip: skipAddLimit,
            limit: limit,
            loadMore: true,
        };
        getProducts(body);
        setSkip(skipAddLimit);
    }

    const renderCards = products.map((item, index) => {
        // console.log(item)
        return (
            <Col key={index} lg={6} md={8} xs={12}>
                <Card cover={<ImageSlider images={item.images} className={styles.img}  />}>
                    <Meta
                        title={item.title}
                        description={item.description}
                        // price={item.price}
                    />
                </Card>
            </Col>
        )
    });

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            {/* {products.map((item) => {

            })}
            <Card>
                <Meta />
            </Card>
             */}
            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            <div className={styles.button}>
                <button onClick={loadMoreHandler}>더보기</button>
            </div>
        </div>
    )
}

export default LandingPage
