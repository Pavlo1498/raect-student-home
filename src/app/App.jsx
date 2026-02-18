import './App.css';


import SearchFilmsPages from '../pages/SearchFilmsPages/SearchFilmsPages';
import Header from '../shared/components/Header/Header';

function App() {
	return (
		<div className='app-content'>
			<Header />
			<SearchFilmsPages />
		</div>
	);
}

export default App;
