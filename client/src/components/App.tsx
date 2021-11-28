import React from 'react';
import '../assets/styles/App.css';
import Results from './Results';
import Search from './Search';


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Search/>
                <Results/>
            </header>
        </div>
    );
}

export default App;
