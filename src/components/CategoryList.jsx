import { CategoryItem } from './CategoryItem';

function CategoryList({ categories = [] }) {
    return (
        <div className='categories'>
            {categories.map((item) => (
                <CategoryItem key={item.idCategory} {...item} />
            ))}
        </div>
    );
}

export { CategoryList };
