import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { history } from '@venturedive/api';

import { Auth } from './components';

function Root(props) {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Root;
