import React from 'react';
import ReactDOM from 'react-dom';

class Helloa extends React.Component{
    render(){
        return <h1>你好</h1>
    }

}
ReactDOM.render(<Helloa/>,document.getElementById('hello'));