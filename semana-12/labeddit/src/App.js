import React from 'react';
import Router from './routes/Router';
import GlobalProvider from './global/GlobalProvider';
function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;