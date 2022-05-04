const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <div className="card-body border my-1" key={props.key}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>
            </div>
        </div>
    );
};

export default MealItem;