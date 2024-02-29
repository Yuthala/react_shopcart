import './style.scss';

const Count = () => {
	return ( 
		<div class="count">
			<div class="count__box">
				<input type="number" class="count__input" min="1" max="10" value="1"/>
			</div>
			<div class="count__controls">
				<button type="button" class="count__up">
					<img src="./img/icons/icon-up.svg" alt="Increase"/>
				</button>
				<button type="button" class="count__down">
					<img src="./img/icons/icon-down.svg" alt="Decrease"/>
				</button>
			</div>
		</div>
	 );
}
 
export default Count;