import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import {connect} from 'react-redux'

class SnackBar extends Component {
state={
    setOpen:false
}

    componentWillReceiveProps({error}){
        if(error && error.handleAlert !== null){
            this.setState({
                setOpen:true
            })
        }else{
            this.setState({
                setOpen:false
            })
        }
    }

     handleClose = () => {
    this.setState({
        setOpen:false
    })
    }

    render(){
        return(
            <Snackbar open={this.state.setOpen} autoHideDuration={2000} onClose={()=>this.handleClose()}>
            <MuiAlert elevation={6} variant="filled" onClose={()=>this.handleClose()} severity={this.props.errorType}>
                {this.props.errorText}
              </MuiAlert>
            </Snackbar>
        )
    }
}

function mapStateToProps(error){
    return{
        error,
        errorText:error.handleError !== null ? error.handleError.error : '',
        errorType:error.handleError !== null ? error.handleError.type : 'success'
    }
}

export default connect(mapStateToProps)(SnackBar)