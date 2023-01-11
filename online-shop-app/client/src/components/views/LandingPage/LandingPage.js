import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from './LandingPage.module.css'
import { Card, Icon, Col, Row } from "antd";
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Section/CheckBox';
import { continentsData } from './Section/Data'

function LandingPage() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(8);
    const [postSize, setPostSize] = useState(0);
    const [filterState, setFilterState] = useState({
        continents: [],
        price: []
    })

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
                if(body.loadMore){
                    setProducts([...products, ...result.data.productsInfo])
                } else {
                    setProducts(result.data.productsInfo)
                }
                setPostSize(result.data.postSize)
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

    const renderCards = products.map((product, index) => {
        return (
            <Col key={index} lg={6} md={8} xs={12}>
                <Card cover={<ImageSlider images={product.images} className={styles.img}  />}>
                    <Meta
                        title={product.title}
                        description={`$${product.price}`}
                        // price={item.price}
                    />
                </Card>
            </Col>
        )
    });

    const showFilteredResults = (filters) => {
        let body = {
            skip: 0,
            limit: limit,
            filters: filters
        }
        getProducts(body);
        setSkip(0);
    };

    const handleFilters = (filters, category) => {
        const newFilters = {...filterState};
        newFilters[category] = filters;

        showFilteredResults(newFilters);
        // 여기에 파라미터를 지정해주지 않으면 필터가 작동하지 않는다.
        // console.log(newFilters)
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            <CheckBox list={continentsData} handleFilters={filter => handleFilters(filter, "continents")} />

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            {
                postSize >= limit && <div className={styles.button}>
                    <button onClick={loadMoreHandler}>더보기</button>
                </div>
            }
            
        </div>
    )
}

export default LandingPage
