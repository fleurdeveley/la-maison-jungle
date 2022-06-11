import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem.js';
import '../styles/ShoppingList.css';

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

	return (
		<div>
			<ul>
				{categories.map((cat, index) => (
					<li key={index}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList;
