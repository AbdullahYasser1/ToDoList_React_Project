import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import AddTask from './AddTask';
import {connect} from 'react-redux';
import ItemToDo from './ItemToDo';
class App extends Component {
  render() {

    return (
      <div className='container'>
        <h2>Application Task</h2>
      
        <AddTask></AddTask><br/>
        <h2>My Tasks</h2><br/>

        {this.props.ToDoList.map((data,index)=> (data.status!="completed")?<ItemToDo key={index} data={data} index={index}></ItemToDo> :'')}

      <h2>Completed Tasks</h2>
        <div className="row no-gutters ">
           {this.props.ToDoList.map((data,index)=> (data.status=="completed")?<ItemToDo key={index} data={data} index={index} status="completed"></ItemToDo> :'')}

      </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> { 
  return{
    ToDoList:state.ToDoList
  }

}

export default connect(mapStateToProps,null) (App);
