import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenrateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header/>
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
