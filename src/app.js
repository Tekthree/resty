import React, { useState, useReducer, useEffect } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";

function reducer(state, action){
  return { ...state, data: [action.first, action.next] }
}

function addData(data){
  return{
    first: data,
    next: "test"
  }
}


function App(props) {
  const [state, dispatch] = useReducer(reducer, {data: null})

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  function callApi(requestParams) {
    axios.get(requestParams.url).then((res) => {
      const data = res.data;
      setData(data);
      setRequestParams(requestParams);
    });
    console.log("this is the request", requestParams);
  }

  useEffect(() => {
    dispatch(addData(data))
  }, [requestParams])

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Form handleApiCall={callApi} />
        <div className="grid">
          <div className="left">
            {data === null ? (
              <div></div>
            ) : (
              <div className="row">
                <div className="method">{requestParams.method}</div>
                <div className="url">{requestParams.url}</div>
              </div>
            )}
          </div>

          <div className="right">
            <Results data={state.data} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
