import React, {useState} from 'react';

import './form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');


  const handleSubmit = e =>{
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }

  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <input className="url-input" placeholder="Enter URL" name='url' type='text' />
            <button className="search-button" data-testid="button" type="submit">🔍</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  
}

export default Form;
