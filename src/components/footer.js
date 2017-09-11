import React from 'react';

// var footerCss=require("../css/footer.css")

export default class ComponentFooter extends React.Component{
    render(){
        //http://staxmanade.com/CssToReact/
        var footerConvert= {
            "miniFooter": {
                "backgroundColor": "#333333",
                "color": "#ffffff",
                "paddingLeft": "20px",
                "paddingTop": "3px",
                "paddingBottom": "3px"
            },
            "miniFooter_h1": {
                "fontSize": "15px"
            }
        };

        // console.log(footerCss)

        return (
            <footer style={footerConvert.miniFooter}>
                <hr/>
                <h1 style={footerConvert.miniFooter_h1}>这里是footer</h1>
            </footer>
        )
    }
};