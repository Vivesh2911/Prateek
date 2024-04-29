// import React, { Component } from 'react'
// import Form from './components/Form'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Form/>
//       </div>
//     )
//   }
// }
import React from 'react';

const Comp = ({ chi }) => {
  return (
    <div> {chi} </div>
  );
};
export default function App() {
  return (
    <Comp> <h1>Hiiii</h1>
      <p>paasssss child </p>
    </Comp>
  );
}



