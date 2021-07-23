import React, {useState} from 'react';

import './form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');


  const handleSubmit = e =>{
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    console.log("Im in",formData);
    props.handleApiCall(formData);
  }

  const handleButton = e =>{
    e.preventDefault();
    setMethod(e.target.value)
    console.log("i did it handleButton")
  }

 

  
    return (
      <>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <label >
            <input onChange={(e)=> setUrl(e.target.value)} className="url-input" placeholder="Enter URL" name='url' type='text' />
            <button className="search-button" data-testid="button" type="submit">🔍</button>
          </label>
          <label className="methods">
            <button onClick={(e)=> handleButton(e)} value="PUT" id="put">PUT</button>
            <button onClick={(e)=> handleButton(e)} value="DELETE" id="delete">DELETE</button>
            <button onClick={(e)=> handleButton(e)} value="GET" id="get">GET</button>
            <button onClick={(e)=> handleButton(e)} value="POST" id="post">POST</button>
          </label>
        </form>
      </>
    );
  
}

export default Form;
