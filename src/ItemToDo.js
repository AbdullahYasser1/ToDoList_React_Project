import React, { Component } from 'react';
import * as actions from './reducer'
import { connect } from 'react-redux';

class itemToDo extends Component {
    constructor(props){
        super(props);
        this.state = {task:[], disabled:true}
    }
    handleRemove=(e)=>{
        e.preventDefault();
        this.props.Remove(this.props.index);
    }
    handleComplete= (e)=>{
        e.preventDefault()
       this.props.Complete(this.props.index,this.props.data.task)
       
      }
    

    render() {
                
        return (
            
            <div className='row container'>
                
                    <div className='col-sm-6'>
                    <div className="card">
                    <div className='card-body'>
                    <h5 className="card-title">Do Your Task</h5>
                    
                <input type='text' disabled={this.state.disabled} defaultValue={this.props.data.task} className='card-text form-control fs-3' />
                
                <div className='"d-grid gap-2 d-md-block"'>
                <div className={this.props.data.status ? "d-none ":"bg-light"}>
                <input type='button' value='Complete' onClick={this.handleComplete} className=' btn btn-success'/>
                <input type = 'button' value='I Did It !!' className=' btn btn-danger' onClick={this.handleRemove} />
                </div>

                </div>
                </div>
                </div>
                </div>
                
                
                
                
            </div>
        );
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
    Remove:(index) => dispatch(actions.RemoveTask(index)),
    Complete: (index,task) => dispatch(actions.CompleteTask(index,task))
  }
  }

export default connect(null,mapDispatchToProps) (itemToDo);