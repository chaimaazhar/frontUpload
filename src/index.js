import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
//we can add redux devtools 
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*
const increment = ()=>{
  return{
    type:'INCREMENT'
  }
}
const decrement = ()=>{
  return{
    type:'DECREMENT'
  }
}
const initialState=0;
const counter=(state = 5,action)=>{
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }


}

let store = createStore(counter);

// display it in the console 

store.subscribe(()=>console.log(store.getState()));


//STORE ->global state-> va contenir 2 arguments => state and reducer

//ACTION

//REDUCER -> decrit comment vos actions transforment l'etat en autre etat => REDUCER verifie quelle action vous avez fait et en fonction de l'action cela va modifier le store 

//DISPATCH =envoyer => dispatch an action  = quelle action a été envoyé et en fonction de type reducer va effectuer un traitement sur l'ete et va retourner un nouveau etat->comment executer une action => dispatch cette action au reducteur afin que nous puissions envoyer cette action au reducer et reducer va verifier qu'est ce qui va faire  et en suite le store va faire une mise à jour
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
