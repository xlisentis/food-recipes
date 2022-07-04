import { useNavigate } from 'react-router-dom';
import { Meal } from './Meal';

function MealsList({ meals = [] }) {
    const navigate = useNavigate();
    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
            <div className='meals'>
                {meals.map((item) => (
                    <Meal key={item.idMeal} {...item} />
                ))}
            </div>
        </>
    );
}

export { MealsList };
