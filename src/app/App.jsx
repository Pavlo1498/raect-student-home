import './App.css';


import Header from '../shared/components/Header/Header';
import SearchFilmsPages from '../pages/SearchFilmsPages/SearchFilmsPages';

function App() {
	return (
		<div className='app-content'>
			<Header />
			<SearchFilmsPages />
		</div>
	);
}

export default App;
