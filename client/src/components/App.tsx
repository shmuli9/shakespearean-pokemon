import React, {useState} from 'react';
import '../assets/styles/App.css';
import Results from './Results';
import Search from './Search';


function App() {
    const [flavorTexts, setFlavorTexts] = useState<string[]>([])
    return (
        <div className="App">
            <header className="App-header">
                <Search setData={setFlavorTexts}/>
                <Results data={flavorTexts}/>
            </header>
        </div>
    );
}

export default App;
