import React, { useState, useEffect } from "react";
import useCounter from "./userCounter";

const MAX_CAPACITY = 10;  //최대 카운트 갯수

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count ,increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {  //의존성 배열이 없는 형태
        console.log("============================")
        console.log("useEffect() is called.")
        console.log(`isFull: ${isFull}`)
    });

    useEffect(() => {  //의존성 배열이 있는 형태
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`Total ${count}명 수용하였습니다`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
            {/* 최대 카운트 개수를 초과하면 빨간색으로 경고문이 나타남 */}
        </div>
    )
}

export default Accommodate;