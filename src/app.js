import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };

    axios.get(requestParams.url)
      .then(res => {
        const data = res.data;
        this.setState({data, requestParams});
      })

    console.log("this is the request",requestParams)
  }



    

    
  

  


  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Form handleApiCall={this.callApi} />
           <div className="grid">

             <div className="left">
              
                {
                  (this.state.data===null)
                  ? <div></div>
                  : <div className="row">
                      <div className="method">{this.state.requestParams.method}</div>
                      <div className="url">{this.state.requestParams.url}</div>
                    </div>
                }
              
             </div>

             <div className="right">
              <Results data={this.state.data} />
             </div>
             
           </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
