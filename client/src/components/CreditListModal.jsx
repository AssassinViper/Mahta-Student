import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './ListModal.css';
import CreditListItem from '../components/CreditListItem';

class CreditListModal extends Component {
    
    state = { CompList:[] }

    componentDidMount(){

        //let list = [{name:"امیرمحمد پاکدل", credit:"2000", created:"1377/4/7"}];
        
        //this.showList(list);

        this.props.getCreditList(this.showList);
    }

    render() { 

        return ( 
            <Modal classNames={{modal:"lm_con"}} styles={{ closeButton:{...{cursor:"pointer"}}}} open={this.props.open} onClose={this.props.onClose} center>
                <div className="lm_list_con">
                    <div style={s.con2}>

                        <div style={s.header_con}>

                            <div style={s.space}/>
                            <div style={s.header}> تاریخ </div>
                            <div style={s.header}> مقدار اعتبار </div>
                            <div style={s.header2}> نام </div>

                            <div style={s.space}/>
                            <div style={s.space}/>

                        </div>

                            <div style={s.list_con2}>
                            <div style={{height:'auto'}}>
                                {this.state.CompList}
                            </div>

                        </div>

                    </div>
                </div>
            </Modal>
         );
    }

    showList = (list)=>{
        

        let CompList = [];
        let i = 1;

        list.forEach(element => {

            CompList.push(

                <CreditListItem key={i} history={this.props.history} element={element}/>
                
            )

            i++;
            
        });
        
        this.state.CompList= CompList;
        this.setState(this.state);
    }
}

const s = {

    con2:{
        display:'flex',
        flexDirection:'column',
        height:'95%',
        width:'98%',
    },

    space:{
        width:"2vw"
    },

    list_con2:{
        display:'flex',
        flexDirection:'column',
        height:'95%',
        width:'100%',
        overflowY:'scroll',
    },

    header_con:{
        display:'flex',
        
        height:30,
        width:'100%',
        marginBottom:8,
        backgroundColor:'white'
    },

    header:{
        width:'23vw',
        marginRight:'1vw',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
        backgroundColor:'rgb(80,80,80)',
        textAlign:'center',
        color:'white',
        fontFamily:'amp',
    },

    header2:{
        width:'36vw',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
        backgroundColor:'rgb(80,80,80)',
        textAlign:'center',
        color:'white',
        fontFamily:'amp',
    },

    sort_ic:{

        height:'80%',
        margin:6,
        cursor:'pointer'
    }
}
 
export default CreditListModal;