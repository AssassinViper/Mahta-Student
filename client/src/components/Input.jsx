import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    clear(){

        this.input.value = "";
    }

    state = {  }
    render() { 
        return ( 
            <input 
            placeholder={this.props.placeholder}
            type={this.props.type || "text"}
            defaultValue={this.props.defaultValue}
            onChange={this.props.onChange}
            title={this.props.title}
            pattern={this.props.pattern}
            maxLength={this.props.maxLength || 200}
            ref={(ref)=>this.input=ref}
            max={this.props.max}
            
            style={{

                height:this.props.height,
                width:this.props.width,
                fontFamily:'amp',
                fontWeight:'bold', 
                fontSize:'0.8em',
                textAlign:'center',
                borderRadius:5,
                padding:'4px 6px',
                backgroundColor:'rgba(255,255,255,0.9)',
                marginTop:15,
                marginBottom:15,
                marginRight:28,
                marginLeft:28, 

                color:'rgb(65,76,82)'}}>
              
            </input>
         );
    }
}
 
export default Input;