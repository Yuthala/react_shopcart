import './style.scss';
import Count from './../Count/Count';
import ButtonDelete from './../ButtonDelete/ButtonDelete';

const Product = () => {
	return ( 
		<section class="product">
			<div class="product__img"><img src="./img/products/potatoes.jpg" alt="potatoes"/></div>
			<div class="product__title">Картофель ранний, 1 кг</div>
			<div class="product__count">
				<Count />
			</div>
			<div class="product__price">70 руб.</div>
			<div class="product__controls">
				<ButtonDelete />
			</div>
		</section>
	 );
}
 
export default Product;