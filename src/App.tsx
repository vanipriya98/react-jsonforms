import React from 'react';
import './App.css';
import CustomLayout from './custom-layout-component/custom-layout-component';
function App() {
    return (
      <div className='App'>
        {/* <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data, errors }) => setData(data)}
        /> */}

        <h1>Custom Layout Testing</h1>
        <CustomLayout />
      </div>
    );
  }


export default App;
