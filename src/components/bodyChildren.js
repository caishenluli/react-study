import React from 'react';

export default class bodyChildren extends React.Component{

    render(){
        return (

            <div >
                <p>this is children input : <input type="text" onChange={this.props.changeChildValue}/></p>
                <hr/>
                <font color="red">
                    {this.props.id}---{this.props.userId}---{this.props.userName}
                </font>

            </div>
        )
    }
}