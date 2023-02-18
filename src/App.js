import './App.css';
import { TripList } from './components/TripList';
import React, { useState } from 'react';

function App() {
	const [showTrips, setShowTrips] = useState(true);
	return (
		<div className="App">
			<button onClick={() => setShowTrips(false)}>Hide Trips</button>
			{showTrips && <TripList />}
		</div>
	);
}

export default App;
