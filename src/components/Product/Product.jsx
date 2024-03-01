import './style.scss';
import Count from './../Count/Count';
import ButtonDelete from './../ButtonDelete/ButtonDelete';

const Product = ({product, deleteProduct}) => {
	
	const {img, title, price, count, id} = product;

	return ( 
		<section class="product">
			<div class="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
			<div class="product__title">{title}</div>
			<div class="product__count">
				<Count />
			</div>
			<div class="product__price">{price} руб.</div>
			<div class="product__controls">
				<ButtonDelete deleteProduct={deleteProduct} id={id}/>
			</div>
		</section>
	 );
}
 
export default Product;