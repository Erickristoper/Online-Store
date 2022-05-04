const Card = props => {
    return (
        <div className="card m-5 border-0">
            {props.children}
        </div>
    );
}

export default Card;