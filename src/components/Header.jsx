import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='cyan darken-4'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo center'>
                    Recipes
                </Link>
            </div>
        </nav>
    );
}

export { Header };
