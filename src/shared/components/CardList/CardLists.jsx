import { moviesLists } from '../../../libs/mockdata'; 

import './CardLists.css';

import Card from '../Card/Card';

function CardLists() {
	return (
		<div className="cars-lists">
			{
				moviesLists.map(item => (
					<Card
						key={item.uuid}
						card={item}
					/>
				))
			}
		</div>
	);
}

export default CardLists;