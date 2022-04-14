import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';
import Challenges from './Challenges';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header className='app-header'>
				<h1>Dashboard</h1>
			</header>
			<div className='app-body'>
				<span>
					<LoginButton />
					<LogoutButton />
				</span>
				<Routes>
					<Route path='/challenges' element={<Challenges />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
