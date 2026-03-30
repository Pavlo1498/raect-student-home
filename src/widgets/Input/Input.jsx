import cn from 'classnames';

import styles from './Input.module.css';

function Input({value, placeholder, onChange, icon  }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<div className={cn(styles['input'])}>
			<img
				src={icon}
				alt="image"
			/>
			<input
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Input;