import { Fragment } from 'react';
import foodHeder from '../../assets/food_header.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <div className='container-fluid px-0'>
                <header className='navbar px-3'>
                    <h2> ReactMeals </h2>
                    <HeaderCartButton />
                </header>
                <img className='img-fluid w-100' src={foodHeder} alt='A healthy food for all!'/>
            </div>
        </Fragment>
    );
}

export default Header;