import cn from 'classnames';

import styles from './CardButton.module.css';

function CardButton({children}) {
	return (
		<button className={cn(styles['card-button'])}>
			{children}
		</button>
	);
}

export default CardButton;