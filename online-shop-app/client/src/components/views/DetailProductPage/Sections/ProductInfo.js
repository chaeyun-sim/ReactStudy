import React from "react";
import { Button, Descriptions } from "antd";
import styles from './ProductInfo.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from '../../../../_actions/user_actions'

function ProductInfo(props) {
    const data = props.detail;
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(addToCart(data._id));
    };

    return (
        <div>
            <Descriptions title="상품 정보" bordered>
                <Descriptions.Item label="Price">{data.price}</Descriptions.Item>
                <Descriptions.Item label="Soldout">{data.soldout}</Descriptions.Item>
                <Descriptions.Item label="Views">{data.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            <div className={styles.button}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
};

export default ProductInfo;