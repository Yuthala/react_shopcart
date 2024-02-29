import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_section-cart.scss';
import Title from './../Title/Title';
import Cart from './../Cart/Cart';


function App() {
  return (
    <section class="section-cart">

        <header class="section-cart__header">
            <div class="container">
               <Title />
            </div>
        </header>

      <div class="section-cart__body">
          <div class="container">

              <Cart />

          </div>
      </div>
    </section>
  );
}

export default App;
