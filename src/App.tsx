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
    this.setState({ input: e.currentTarget.value })
  }

  getUser = async (e: any) => {
    e.preventDefault();
    try{
      let user = await axios.get(`https://api.github.com/users/${this.state.input}`) 
      return this.setState({ userData: user.data})
    }
    catch(err){
      alert(err);
    }
  };

  render() {
    const { input, userData } = this.state;
    
    return (
      <div>
        <Search input={input} SearchChange={this.SearchChange} getUser={this.getUser}/>
        <GithubUser userData={userData} />
      </div>
    );
  };
};

export default App;
