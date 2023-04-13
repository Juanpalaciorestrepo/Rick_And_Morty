import {createStore, applyMiddlware,compose} from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import { Reducer  } from './reducer';


const composeEnhancer