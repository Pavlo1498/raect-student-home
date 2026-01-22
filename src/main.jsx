import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style/reset.css';
import './style/text.css';
import './style/color.css';
import './style/helper.css';

import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
