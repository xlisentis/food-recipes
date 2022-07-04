import { getAllCategories } from '../api';
import { useState, useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => setCategories(data.categories));
    }, []);

    return (
        <>
            {!categories.length ? (
                <Preloader />
            ) : (
                <CategoryList categories={categories} />
            )}
        </>
    );
}

export { Home };
