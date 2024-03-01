import { useState } from 'react';
import CartHeader from './../CartHeader/CartHeader';
import Product from './../Product/Product';
import CartFooter from '../CartFooter/CartFooter';
import data from './../../data';

const Cart = () => {

	const [cart, setCart] = useState(data);

	const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product) => id!== product.id));
	}

	const increase = (id) => {

		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
							count: ++product.count,
							priceTotal: product.count * product.price
					};
				}
				return product;
			})
		})
	}

	const decrease = (id) => {

		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
							count: product.count - 1 > 1 ? product.count - 1 : 1,
							priceTotal: (product.count - 1 > 1 ? --product.count : 1) * product.price
					};
				}
				return product;
			})
		})
	}


	const products = cart.map((product) => {
		return <Product 
					product={product} 
					key={product.id} 
					deleteProduct={deleteProduct} 
					increase={increase}
					decrease={decrease}
				/>;
	});

	return ( 
		<section className="cart">
			    <CartHeader />
                {products}
				<CartFooter />
		</section>
	 );
}
 
export default Cart;