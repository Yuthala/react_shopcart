//TO DO
//добавить поле цена - выводить туда price из БД

import './style.scss';
import Count from './../Count/Count';
import ButtonDelete from './../ButtonDelete/ButtonDelete';

const Product = ({ product, deleteProduct, increase, decrease, changeValue }) => {
	
	const {img, title, price, priceTotal, count, id} = product;

	return ( 
		<section className="product">
			<div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
			<div className="product__title">{title}<br/>Цена: {price} руб. </div>
			<div className="product__count">
				<Count 
					count={count} 
					increase={increase} 
					decrease={decrease} 
					id={id}
					changeValue={changeValue}
				/>
			</div>
			<div className="product__price">{priceTotal} руб.</div>
			<div className="product__controls">
				<ButtonDelete deleteProduct={deleteProduct} id={id}/>
			</div>
		</section>
	 );
}
 
export default Product;