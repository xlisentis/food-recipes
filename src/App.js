import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { MealRecipe } from './pages/MealRecipe';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <main className='container content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:name' element={<Category />} />
                    <Route path='/meal/:id' element={<MealRecipe />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
