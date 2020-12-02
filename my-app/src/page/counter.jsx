import React from "react"

import {Button} from "react-bootstrap"

import {connect} from "react-redux"


import {plus,min} from "../action"

class Counter extends React.Component{

    btntambah=()=>{
        this.props.plus()
    }

    btnkurang=()=>{
        this.props.min()
    }
    render(){
        return(
            <div style={styles.counter}>
                <h1 style={styles.h1}>{this.props.count}</h1>
                <Button style={styles.button} onClick={this.btntambah}>➕</Button>
                <Button style={styles.button}onClick={this.btnkurang}>➖</Button>
            </div>
        )
    }
}

let styles={
    counter:{
        width:"300px",
        margin:"auto",
        background:"#bedcfa"
    },
    h1:{
        margin:"150px",
        size:"80px"
    },
    button:{
        margin:"0 50px"
    }
}

let mapStateToProps=(state)=>{
    return{
        count:state.counter.count

    }
}

export default connect(mapStateToProps,{plus,min}) (Counter)