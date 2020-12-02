import React from 'react'
import {
    tambah,
    kurang
} from '../action'
import {connect} from 'react-redux'

class Counter extends React.Component{
    tambahHandler = () => this.props.tambah()
    
    kurangHandler = () => this.props.kurang()

    render(){
        return(
            <div style={styles.main}>
                <div style={styles.count}>{this.props.counts}</div>
                <div>
                    <button onClick={this.tambahHandler} style={{margin: "5px"}}>➕</button>
                    <button onClick={this.kurangHandler} style={{margin: "5px"}}>➖</button>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin : "auto",
        marginTop: "50px",
        width: "20%",
        height: "30%",
        backgroundColor: "#ede0d4"
    },
    count: {
        fontSize: "100px",
        fontWeight: "400"
    }
}

const mapStateToProps = (state) => {
    return{
        counts: state.counts
    }
}

export default connect(mapStateToProps, {tambah, kurang})(Counter)