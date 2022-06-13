import Banner from './Banner.js';
import Footer from './Footer.js';
import logo from '../assets/logo.png';
// import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			{/* <Cart /> */}
      
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App;
