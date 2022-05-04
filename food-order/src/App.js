import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <div className='d-flex flex-column'>
        <Header />
        <Meals />
      </div>
    </Fragment>
  );
}

export default App;
