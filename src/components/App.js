import { useState, useEffect } from 'react'
import Banner from './Banner.js';
import logo from '../assets/logo.png';
import Cart from './Cart.js';
import Footer from './Footer.js';
import ShoppingList from './ShoppingList.js';
import '../styles/Layout.css';

function App() {
	const savedCart = localStorage.getItem('cart')

	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {localStorage.setItem('cart', JSON.stringify(cart))}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La Maison Jungle</h1>
			</Banner>

			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			<Footer />
		</div>
	)
}

export default App;
