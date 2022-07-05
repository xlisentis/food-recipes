import { getAllCategories } from '../api';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { CategoriesNotFound } from '../components/CategoriesNotFound';

function Home() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCategories(
            categories.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
            setFilteredCategories(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.toLowerCase().split('=')[1])
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search callback={handleSearch} />
            {!categories.length ? (
                <Preloader />
            ) : filteredCategories.length ? (
                <CategoryList categories={filteredCategories} />
            ) : (
                <CategoriesNotFound />
            )}
        </>
    );
}

export { Home };
