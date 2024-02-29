import './_vars.scss';
import './_reset.scss';
import './_base.scss';


function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <div className="container">
                <h1 className="title-1">Корзина товаров</h1>
            </div>
        </header>
        <div className="section-cart__body">
            <div className="container">

                <section className="cart">
                    <header className="cart-header">
                        <div className="cart-header__title">наименование</div>
                        <div className="cart-header__count">количество</div>
                        <div className="cart-header__cost">стоимость</div>
                    </header>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/potatoes.jpg" alt="potatoes"/></div>
                        <div className="product__title">Картофель ранний, 1 кг</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="10" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">70 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/tomatoes.jpg" alt="tomatoes"/></div>
                        <div className="product__title">Томаты розовые, 1 кг</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="10" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">130 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/eggplant.jpg" alt="eggplant"/></div>
                        <div className="product__title">Баклажаны, 1 кг</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="10" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">80 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>

                    <section className="product">
                        <div className="product__img"><img src="./img/products/cucumber.jpg" alt="cucumber"/></div>
                        <div className="product__title">Огурцы свежие, 600 г</div>
                        <div className="product__count">
                            <div className="count">
                                <div className="count__box">
                                    <input type="number" className="count__input" min="1" max="10" value="1"/>
                                </div>
                                <div className="count__controls">
                                    <button type="button" className="count__up">
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button type="button" className="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product__price">100 руб.</div>
                        <div className="product__controls">
                            <button type="button">
                                <img src="./img/icons/cross.svg" alt="Delete"/>
                            </button>
                        </div>
                    </section>


                    <footer className="cart-footer">
                        <div className="cart-footer__count">4 единицы</div>
                        <div className="cart-footer__price">380 руб.</div>
                    </footer>
                </section>

            </div>
        </div>
    </section>
  );
}

export default App;
