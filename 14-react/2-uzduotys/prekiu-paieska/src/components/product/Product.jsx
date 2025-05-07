import Button from '../Button';
import './Product.css';

const Product = (props) => {
    let product = props.product;

    const onDeleteButtonClick = () => {
        props.onDeleteAction(product.id);
    }

    return (
        <div className='productContainer'>
            <div>
                <h4>{product.name}</h4>
                <p>price: {product.price}</p>
                <p>amount: {product.amount}</p>
            </div>
            <Button title="Delete" action={onDeleteButtonClick} />
        </div>
    )
}

export default Product;