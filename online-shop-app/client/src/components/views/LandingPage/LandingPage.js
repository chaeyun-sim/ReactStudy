import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from './LandingPage.module.css'
import { Card, Icon, Col, Row, Button } from "antd";
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Section/CheckBox';
import RadioBox from './Section/RadioBox';
import SearchFeature from './Section/SearchFeature';
import { continentsData, priceData } from './Section/Data'

function LandingPage() {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(8);
    const [postSize, setPostSize] = useState(0);
    const [filterState, setFilterState] = useState({
        continents: [],
        price: []
    });
    const [searchTerm, setSearchTerm] = useState("")

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
                <Card cover={<a href={`/product/${product._id}`}><ImageSlider images={product.images} className={styles.img}  /></a>}>
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

    const handlePrice = (value) => {
        const data = priceData;
        let array = [];

        for(let key in data){
            if (data[key]._id === parseInt(value, 10)){
                array = data[key].array;  //데이터의 array를 이 함수의 array에 추가
            }
        };

        return array;
    };

    const handleFilters = (filters, category) => {
        const newFilters = {...filterState};
        newFilters[category] = filters;  // id값

        if (category === "price"){
            let priceValues = handlePrice(filters);  // [100~110] 이런거
            newFilters[category] = priceValues;
        }

        showFilteredResults(newFilters);
        setFilterState(newFilters)
    };

    const updateSearchTerm = (newSearchTerm) => {

        let body = {
            skip: 0,
            limit: limit,
            filter: filterState,
            searchTerm: newSearchTerm,
        }

        setSkip(0);
        setSearchTerm(newSearchTerm)
        getProducts(body);
    };

    return (
        <div className={styles.container}>

            {/* Title */}
            
            <div className={styles.title}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /> </h2>
            </div>

            {/* Filter */}

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox list={continentsData} handleFilters={filter => handleFilters(filter, "continents")} />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox list={priceData} handleFilters={filter => handleFilters(filter, "price")} />
                </Col>
            </Row>

            {/* Search */}

            <div className={styles.searchdiv}>
                <SearchFeature refreshFunction={updateSearchTerm} />
            </div>

            {/* Card */}

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>
            <br/>

            {/* Load More Button */}

            {
                postSize >= limit && <div className={styles.btndiv}>
                        <Button className={styles.button} onClick={loadMoreHandler}>
                            더보기
                        </Button>
                </div>
            }
            
        </div>
    )
}

export default LandingPage
