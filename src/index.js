import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyArLjyvUGb79MyQyPxDDICWTTd0w5pRGXo';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));