import React from 'react';


export default class ComponentHeader extends React.Component{


    constructor(){

        super();
        this.state = {}
            miniHeader:false
        ;
    }

    switchHeader(){

        this.setState({
            miniHeader : !this.state.miniHeader
        });

    }


    render(){
        const styleHeader = {
            header : {
                backgroundColor :"green",
                color : (this.state.miniHeader) ? '#000000':'#ffffff',
                paddingTop : (this.state.miniHeader) ? "3px" : "15px"
            }
        };

        return (
            <header style={styleHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
                <hr/>
            </header>
        )
    }
};
