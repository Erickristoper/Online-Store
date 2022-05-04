import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const  HeaderCartButton = () => {
    return (
        <button className='btn btn-primary'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className='px-2'> Your Cart </span>
            <span className="px-2 badge badge-light"> 3 </span>
        </button>
    );
}

export default HeaderCartButton;