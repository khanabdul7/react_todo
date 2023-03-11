import { Component } from 'react';

export default function FirstComponent(){ //this is a functional based component.
    return(
      <div className='FirstComp'> My First Component</div>
    )
  }
  
  function SecondComponent(){
    return(
      <div className='SecondComp'> My Second Component</div>
    )
  }
  
  class ThirdComponent extends Component{   // this is a class based component, needs to extends components
    render(){  // render method is required in class based  comp.
      return(
        <div className='ThirdComp'> My Third Component</div>
      )
    }
}