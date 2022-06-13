import CareScale from './CareScale.js';
import '../styles/PlantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter un ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;
