import React, {FC} from 'react';
import './App.css';
import {SimsDiv} from "./components/My-Component-SimsDiv/My-Component-Div";


const App = () => {
  return (
    <div>
      <SimsDiv infoName={'Bart'} infoSurname={'Simpson'} infoAge={10} infoImage={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} ></SimsDiv>
      <SimsDiv infoName={'Homer'} infoSurname={'Simpson'} infoAge={40} infoImage={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}></SimsDiv>
      <SimsDiv infoName={'Marge'} infoSurname={'Simpson'} infoAge={38} infoImage={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}></SimsDiv>
    </div>
  );
}

export default App;
