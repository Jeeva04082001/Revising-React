import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import {Hello, World} from './App.jsx';
// import {Hello as Jeeva, World as Ruban} from './App.jsx';
import Hooks from './UseStateHook/Hooks';
import UseEffectHooks from './UseEffectHook/UseEffectHooks.jsx'

import UseRefs from './UseRefHook/UseRefs.jsx';

import UseMemo from './UseMemo/UseMemo.jsx';
import UseCallBack from './UseCallback/UseCallBack.jsx';
import Usecontext from './UseContextHook/Usecontext.jsx';
import Usereducer from './UseReducerHook/Usereducer.jsx';
import EffectAndLayout from './UseEffect & Uselayout Hook/EffectAndLayout.jsx';
import ReactRouter from './ReactRouter/ReactRouter.jsx';
import Practise from './Practise.jsx';
import ReduxRouter from './Redux/ReduxRouter.jsx';
import store from './Redux/store.js';
import { Provider } from 'react-redux';

import App from './ProtectedRoutes/App/App.jsx'
import AxiosVsFetch from './ApiCallAxiosVsFetch/AxiosVsFetch.jsx';
import ReactQuery from './ReactQuery/ReactQuery.jsx';
import VirtualizedList from './VirtualizedListForReact-window/VirtualizedList.jsx';
import ShowLazyLoad from './LazyLoad/ShowLazyLoad.jsx';

createRoot(document.getElementById('root')).render(
  
 
 <StrictMode>
  {/* <App/> */}
  {/* <Hooks/> */}
  {/* <UseEffectHooks/> */}
  {/* <UseRefs/> */}

  {/*-------------- 14-06-2025 */}
  
  <UseMemo/> 
  {/* <UseCallBack/> */}

  {/* //main data used multiple pages = USECONTEXT , first create content in main page 
  // after use the created contex in chid page  */}

  {/* <Usecontext/>   */}
  {/*------------ 16-06-2025 */}

  {/* <Usereducer/> */}
  {/* <EffectAndLayout/> */}
  {/* <ReactRouter /> */}

  {/* <ReduxRouter/> */}

  {/* ------03-08-2025------ */}

  {/* <Practise/> */}

  {/* ---------09-08-2025--------- */}
  
  {/* <App/> */}
  {/* <AxiosVsFetch/> */}
  
  {/* <ReactQuery /> */}


  {/*------------------- 18-08-2025---------------- */}

  {/* <VirtualizedList /> */}
  {/* <ShowLazyLoad /> */}
  


</StrictMode> 


///----------------------------------------------
//for redux 

  // <Provider store={store}>
  //   <ReduxRouter/>
  // </Provider>
 
)


