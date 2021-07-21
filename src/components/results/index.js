import React from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import './results.scss';

function Results (props) {
  
    return (
      <section>
        <pre data-testid="data">{props.data ? <JSONPretty id="json-pretty" data={props.data} theme={JSONPrettyMon}></JSONPretty> : null}</pre>
      </section>
    );
 
}

export default Results;
