//TO DO
//добавить поле цена - выводить туда price из БД

import './style.scss';
import Count from './../Count/Count';
import ButtonDelete from './../ButtonDelete/ButtonDelete';

const Product = ({product, deleteProduct, increase, decrease}) => {
	
	const {img, title, priceTotal, count, id} = product;

	return ( 
		<section class="product">
			<div class="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
			<div class="product__title">{title}</div>
			<div class="product__count">
				<Count 
					count={count} 
					increase={increase} 
					decrease={decrease} 
					id={id}
				/>
			</div>
			<div class="product__price">{priceTotal} руб.</div>
			<div class="product__controls">
				<ButtonDelete deleteProduct={deleteProduct} id={id}/>
			</div>
		</section>
	 );
}
 
export default Product;