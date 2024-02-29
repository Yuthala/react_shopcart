import './style.scss';


const CartHeader = () => {
	return ( 
		<header class="cart-header">
			<div class="cart-header__title">наименование</div>
			<div class="cart-header__count">количество</div>
			<div class="cart-header__cost">стоимость</div>
		</header>
	 );
}
 
export default CartHeader;