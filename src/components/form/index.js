import React, {useState} from 'react';

import './form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');


  const handleSubmit = e =>{
    e.preventDefault();
    const formData = {
      method:{method},
      url: {url},
    };
    props.handleApiCall(formData);
  }

  const changeMethod = (e) => {
    e.preventDefault()
    setMethod(e.target.value);
    console.log("it works")
  }

  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <input className="url-input" placeholder="Enter URL" name='url' type='text' />
            <button className="search-button" data-testid="button" type="submit">🔍</button>
          </label>
          <label className="methods">
            <span onClick={changeMethod} value="GET" id="get">GET</span>
            <span onClick={changeMethod} value="POST" id="post">POST</span>
            <span onClick={changeMethod} value="PUT" id="put">PUT</span>
            <span onClick={changeMethod} value="DELETE" id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  
}

export default Form;
