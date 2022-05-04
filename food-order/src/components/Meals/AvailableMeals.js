import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {id:'m1', name:"Ceasar's Salad", description:'Healthy... and green...', price: 35.99},
    {id:'m2', name:"Sushi", description:'Finest fish and Vegies', price: 15.34},
    {id:'m3', name:"Schnitzel", description:'A German specialty', price: 5}
];

const AvailableMeals = () => {
    return (
        <section>
               <Card> {DUMMY_MEALS.map(meal => 
                <MealItem
                    name={meal.name} 
                    description={meal.description} 
                    price={meal.price} 
                    key={meal.id}/>)}
               </Card>
        </section>
    );
};
export default AvailableMeals;