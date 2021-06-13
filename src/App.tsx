import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

type MyState = {
  input: string
}
class App extends Component<{}, MyState> {
  constructor(props: any){
    super(props);
    this.state= {
      input: ""
    }
  }

  SearchChange = (e: any) =>{
    this.setState({ input: e.currentTarget.value })
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <Search input={input} SearchChange={this.SearchChange}/>
      </div>
    );
  };
};

export default App;
