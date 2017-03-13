import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';



 class View extends React.Component{


  render(){
    return(
      <div>
      {this.props.addlist.map(user=>(<li key = {user.id} >{user.item}</li>))}
      <br></br>
      </div>
    );
  }
}

function mapStateToProps(state)
{
  console.log(state.Add+"hari");
  return {
    addlist : state.Add}
}
export default connect(mapStateToProps)(View);
