import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Search from './components/Search';
import GithubUser from "./components/GithubUser"

interface MyState {
  input: string,
  userData: any
}
class App extends Component<{}, MyState> {
  constructor(props: any){
    super(props);
    this.state= {
      input: "",
      userData: []
    };
  }

  SearchChange = (e: any) =>{
    if(e.currentTarget.value !== null){
      return this.setState({ input: e.currentTarget.value });
    }
    return;
  }

  getUser = async (e: any) => {
    e.preventDefault();
    try{
      let user = await axios.get(`https://api.github.com/users/${this.state.input}`) 
      return this.setState({ userData: user.data})
    }
    catch(err){
      alert('An error occured while getting user details. Ensure that you have valid username in the input field');
    }
  };

  render() {
    const { input, userData } = this.state;
    
    return (
      <div>
        <h1>Check a github user's profile by typing their username</h1>
        <Search input={input} SearchChange={this.SearchChange} getUser={this.getUser}/>
        <GithubUser userData={userData} />
      </div>
    );
  };
};

export default App;
