import { Meal } from './Meal';

function MealsList({ meals = [] }) {
    return (
        <div className='meals'>
            {meals.map((item) => (
                <Meal key={item.idMeal} {...item} />
            ))}
        </div>
    );
}

export { MealsList };
