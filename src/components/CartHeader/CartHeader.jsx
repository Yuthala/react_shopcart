import './style.scss';


const CartHeader = () => {
	return ( 
		<header className="cart-header">
			<div className="cart-header__title">наименование</div>
			<div className="cart-header__price">количество</div>
			<div className="cart-header__cost">стоимость</div>
		</header>
	 );
}
 
export default CartHeader;