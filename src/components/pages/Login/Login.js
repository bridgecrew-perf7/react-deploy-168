
import React, { Component } from 'react'
import {Redirect} from'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';

export default class Login extends Component {
  constructor(props){
    let loggedIn=false
    super(); 
    this.state={
      username:'',
      password:'',
      usernameError:'',
      passwordError:'',
      loggedIn
    }
    this.onChange=this.onChange.bind(this)
    this.submitFrom=this.submitFrom.bind(this)
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

submitFrom(e){
  e.preventDefault()
  const{username,password}=this.state
  if(username === "A"&& password === "B"){
    localStorage.setItem("token","kdashflsajbhfljeb")

    this.setState(
      {
        loggedIn:true
      }
    )

  }
  else if(username!="A"&& password!="B"){
    this.setState(
      {
        usernameError:"enter valid name",passwordError:"password invalid"
        
      }
    )
  }
  else if(username!="A"){
    this.setState(
      {
        usernameError:"enter valid name" 
      }
    )
  }
  else if(password!="B"){
    this.setState(
      {
        passwordError:"password invalid"
      }
    )
  }
}
  render() {
    if(this.state.loggedIn){
      this.setState(
        {
          usernameError:"",passwordError:""
          
        }
      )
      
      return<Redirect to="/productpage"/>
    }
    return (
      <div >  
            <div className="container" style={{display:'flex',
  justifyContent: 'center',
  flexDirection: 'row'}}>
        <div className="row text-center">
          
          <div className="col-12">
          <Card style={{marginTop:'180px',padding:'50px',width: '20rem',backgroundColor:'whitesmoke'}}>
          <h1>Login</h1>
          <br></br>
       <form onSubmit={this.submitFrom}> 
         <TextField type="text" label="Username" variant="outlined" name="username" value={this.state.username} onChange={this.onChange}/>
         <p style={{color:'red'}}>{this.state.usernameError}</p>
         <br/>
         <TextField type="password" label="Password" variant="outlined" name="password" value={this.state.password} onChange={this.onChange}/>
         <p style={{color:'red'}}>{this.state.passwordError}</p>
         <br/>
         <Button type="submit"  variant="primary">Submit</Button>
         <br/>
         </form>
         </Card> 
         </div>
         </div>
         </div>
         </div>

        
    )
  }
}
