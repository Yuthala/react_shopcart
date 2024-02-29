import CartHeader from './../CartHeader/CartHeader';
import Product from './../Product/Product';
import CartFooter from '../CartFooter/CartFooter';

const Cart = () => {
	return ( 
		<section class="cart">
			    <CartHeader />
                <Product />
				<CartFooter />
		</section>
	 )
}
 
export default Cart;