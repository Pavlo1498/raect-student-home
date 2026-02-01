import './Input.css';

function Input({value, placeholder, onChange, icon  }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<div className='input'>
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