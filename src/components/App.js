import React from 'react';

class App extends React.Component {

    componentDidMount() {
        console.log('componentDidMount');
        return fetch(`/api/cards`, {accept: "application/json"}).then((res)=>{
            console.log('toto -- ', res);
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default App;
