
var React = require('react');
var ReactDOM = require('react-dom');


import ComponentHeader from './components/header';
import BodyLogin from './components/bodyLogin';
import ComponentFooter from './components/footer';

class Login extends React.Component{
    componentWillMount(){
        console.log('Login - componentWillMount');
    }

    componentDidMount(){
        console.log('Login - componentDidMount');
    }

    render(){
        return (
            <div>
                <ComponentHeader />
                <BodyLogin userId={123456123123} userName="nick"/>
                <ComponentFooter/>
            </div>
        )
    }
};

ReactDOM.render(<Login/>, document.getElementById('login'));

