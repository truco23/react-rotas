import React, { Suspense } from 'react';
import Menu from './components/menu/Menu';
import appRoutes from './app.routes';
import { Route } from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      { 
        appRoutes.map((item, indice) => {
          console.log(item)
           return (
              <Suspense key={ indice } fallback={<div>Carregando</div>}>
                <Route 
                    exact={ item.exact }
                    path={ item.path }
                    component={ item.component }
                />
              </Suspense>
            )
        }) 
      }
    </div>
  );
}

export default App;
