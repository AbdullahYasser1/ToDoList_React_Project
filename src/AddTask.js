import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './reducer'

class AddTask extends Component {
    constructor(){
        super();
        this.state = {task:[]}
    }
    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});

    }
    addTask =(e)=>{
        e.preventDefault();
        this.props.AddTasks(this.state.task)
        }
    render() {
        return (
            <div>
                <form>
                    <input type='text' name='task' onChange={this.handleChange} className='form-control'/><br/>
                    <input type='button' value='Add Your Taske'  className=" btn btn-primary"  onClick={this.addTask}/>
                </form>
                
                
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        AddTasks:(task) => dispatch(actions.AddTask(task))
    }
}

export default connect(null,mapDispatchToProps) (AddTask);