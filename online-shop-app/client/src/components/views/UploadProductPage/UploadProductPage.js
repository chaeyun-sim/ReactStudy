import React, { useState } from "react";
import { Typography, Button, Form, Input } from 'antd';

const Countries = [
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

function UploadProductPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [country, setCountry] = useState("");
    const [images, setImages] = useState("");

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
        setCountry(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Typography.Title level={2}>여행 상품 업로드</Typography.Title>
            </div>
            <Form>
                
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
                <select onChange={CountriesChangeHandler} value={country}>  {/* value에 값이 없으면 select가 실행되지 않는다.*/}
                    {Countries.map(country => (
                        <option key={country.key} value={country.key}>{country.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default UploadProductPage;
