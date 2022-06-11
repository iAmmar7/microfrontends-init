import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth } from './components';

function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Root;
