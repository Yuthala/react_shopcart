import { useState, useEffect } from 'react';
import CartHeader from './../CartHeader/CartHeader';
import Product from './../Product/Product';
import CartFooter from '../CartFooter/CartFooter';
import data from './../../data';

const Cart = () => {
	//состояние корзины
	const [cart, setCart] = useState(data);

	//отдельное состояние для общего количества товаров в корзине и общую стоимость - total
	const [total, setTotal] = useState({
		price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
		count: cart.reduce((prev, curr) => prev + curr.count, 0)
	})

	//при изменении состояния корзины меняется состояние total
	//UseEffect срабатывает при изменении состояния объекта
	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count, 0)
		})
	}, [cart])

	//функция удаления продукта из корзины
	const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product) => id!== product.id));
	}

	//функция увеличения количества товара в корзине
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

	//функция уменьшения количества товара в корзине
	const decrease = (id) => {

		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

					return {
						...product,
							count: newCount,
							priceTotal: newCount * product.price
					};
				}
				return product;
			})
		})
	}

	//функция-обработчик события в инпуте "количество товара" 
	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((product) => {
				if(product.id === id) {
					return {
						...product,
						count: value,
						priceTotal: value * product.price
					}
				}
				return product
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
					changeValue={changeValue}
				/>;
	});

	return ( 
		<section className="cart">
			    <CartHeader />
                {products}
				<CartFooter total={total}/>
		</section>
	 );
}
 
export default Cart;