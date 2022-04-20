import React from 'react';
import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <div className="container-fluid main">
      <div className="row justify-content-start">
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
