import React, { useState } from "react";
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from "../../utils/FileUpload";
import styles from './UploadProductPage.module.css'
import axios from "axios";


const Continents = [
    {
        key: 1,
        value: 'Africa'
    }, {
        key: 2,
        value: 'Europe'
    }, {
        key: 3,
        value: 'Asia'
    }, {
        key: 4,
        value: "North America",
    }, {
        key : 5,
        value: "South America",
    }, {
        key: 6,
        value: "Austrilia"
    }, {
        key: 7,
        value: 'Antarctica'
    }
]

function UploadProductPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [continentState, setContinentState] = useState("");
    const [images, setImages ] = useState([]);

    const TitleChangeHandler = (event) => {
        setTitle(event.currentTarget.value);
    }
    
    const DescriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value);
    }

    const PriceChangeHandler = (event) => {
        setPrice(event.currentTarget.value);
    }

    const CountriesChangeHandler = (event) => {
        setContinentState(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages);
    };

    const submitHandler = (event) => {
        event.preventDefault();  // 자동적으로 페이지가 리프레쉬되지 않게 설정

        if (!title || !description || !price || !continentState || !images){
            return alert("모든 입력를 채워주세요.")
        }

        const body = {
            writer: props.user.userData._id,
            title: title,
            description: description,
            price: price,
            continents: continentState,
            images: images,
        };

        axios.post("/api/product", body).then((result) => {
            if(result.data.success) {
                alert('상품 업로드에 성공하였습니다.');
                props.history.push('/');
            } else {
                alert('상품 업로드에 실패하였습니다.')
            }
        }).catch((err) => {
            console.error(err);
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Typography.Title level={2}>여행 상품 업로드</Typography.Title>
            </div>
            <Form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <label>Title</label>
                <Input onChange={TitleChangeHandler} value={title} />
                <br />
                <br />
                <label>Description</label>
                <Input.TextArea onChange={DescriptionChangeHandler} value={description} />
                <br />
                <br />
                <label>Price($)</label>
                <Input type="number" onChange={PriceChangeHandler} value={price} />
                <br />
                <br />
                <select onChange={CountriesChangeHandler} value={continentState}>  {/* value에 값이 없으면 select가 실행되지 않는다.*/}
                    {Continents.map(continent => (
                        <option key={continent.key} value={continent.key}>{continent.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default UploadProductPage;

