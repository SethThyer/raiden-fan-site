import React from 'react';

import Home from './views/Home';
import Mental from './views/Mental';
import Car from './views/Car';
import Addiction from './views/Addiction';
import Cat from './views/Cat';

class App extends React.Component {
    componentDidMount() {
        document.body.style.background  = "#d64242";
    }

    render() {
        return (
            <div>
                <Home />    
                <Mental />    
                <Car />    
                <Addiction />    
                <Cat />    
            </div>
        )
    }
}

export default App;  