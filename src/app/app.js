import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import initializeStore from "./config/initialize-store";
import {Provider} from "react-redux";
import ScratchPad from "./container/scratchpad/scratchpadContainer";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'icons';
  font-style: normal;
  font-weight: normal;
  src: url('../../public/assets/fonts/icomoon.woff?md92d0') format('woff');
}

`

function app() {
  const toolbarStore = initializeStore();
  console.log(JSON.stringify(toolbarStore.getState()));
  return (

          <Provider store={toolbarStore}>
                    <GlobalStyles/>
                    <ScratchPad/>

          </Provider>
  );
}

export default app;
