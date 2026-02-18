import './Card.css';

import like from '@assets/like.svg';
import star from '@assets/star.svg';


function Card({card}) {
	return (
		<div className='card'>
			<div className='card-wrapper'>
				<div className='poster'>
					<div className='rating'> 
						<img src={star}/>
						<span>{card.rating}</span>
					</div>
					<img src={`src/assets/${card.poster}.png`}/>
				</div>
				<span className='title'>
					{card.title}
				</span>
				<div className='favorite'>
					<img src={like} />
					<span>В избранном</span>
				</div>
			</div>
		</div>
	);
}

export default Card;