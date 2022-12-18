import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
        // children - reserved name
        // ExpenseItem 의 Card component 내부에 있는것을 쓰기 위해 props.children 을 적어줌
        // Card Component가 사용된 곳의 classname도 같이써줘야 적용이 된다. -> 우리가 쓸 + 컴포넌트에 써진 클래스네임
        // 이건 하는 이유는 중복되는 코드를 추출해서 하나의 코드를 가진 컴포넌트를 만들기 위해
    )
}

export default Card;