import React from 'react';

import ReactMiXin from 'react-mixin';
import MixinLog from './mixins';

import { Input } from 'antd';
import 'antd/dist/antd.css';

import BodyChildren from './bodyChildren.js'


const defaultProps = {
    userName : "this is default value"
};

export default class BodyLogin extends React.Component{

    constructor(){
        super();
        this.state = {userName : 'Parry'}
    }

    componentWillMount(){
        console.log('BodyLogin - componentWillMount');
    }

    componentDidMount(){
        console.log('BodyLogin - componentDidMount');
    }

    changeUserInfo(name){
        this.setState({userName : name})

        //不推荐
        // var mySubmitBtn = document.getElementById("submitButton");
        // ReactDOM.findDOMNode(mySubmitBtn).style.color = 'red';

        //
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color = 'red';
        MixinLog.log();
    }

    changeChildValue(event){
        this.setState({userName : event.target.value})

    }

    render(){
        var userName = '';
        var inputBoolean = false;
        var html='mu&nbsp;ke'
        // setTimeout(()=>{
        //     this.setState({userName : '慕课 '});
        // }, 1000);

        return (
            <div>
                <h1>这里是login 的 body</h1>
                <p>{userName =='' ? 'not login' : '用户名'+ userName}</p>
                <p><input type="button" value="提交" disabled={inputBoolean}/> </p>
                {/*asdfasfd*/}//asdfasf
                <p>{html}</p>
                <hr/>

                <p dangerouslySetInnerHTML = {{__html :html}}></p>
                <p >{this.state.userName}</p>
                <hr/>

                <p >this.props</p>
                <p >userId:{this.props.userId} - userName:{this.props.userName}</p>
                <hr/>

                <p ><input id="submitButton" ref="submitButton" type="button" value="提交2" onClick={this.changeUserInfo.bind(this, 'asdfasf')}/></p>
                <hr/>

                <BodyChildren {...this.props} id={4} changeChildValue={this.changeChildValue.bind(this)} />

                <hr/>
                <p>
                </p>
            </div>
        )
    }
};

BodyLogin.propTypes = {
    userId:React.PropTypes.number.isRequired
};

BodyLogin.defaultProps = defaultProps;
ReactMiXin(BodyLogin.prototype, MixinLog);