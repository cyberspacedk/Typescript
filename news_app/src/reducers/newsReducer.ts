import {Reducer} from 'redux'

import {StoreStructure} from '../entities/StoreStructure';
import {ActionTypeBase} from '../actions/actionTypes';

import {LOAD_NEWS, ADD_NEWS, REMOVE_NEWS, EDIT_NEWS} from '../actions/newsActions';

const initialState:StoreStructure ={
  articles:[],
  read:[],
  favorite:[],
  withComplains:[]
}

export const newsReducer:Reducer<any> = (state:StoreStructure, action:ActionTypeBase)=>{
  switch(action.type){
    case LOAD_NEWS: console.log('LOAD NEWS action');break;
    case ADD_NEWS: console.log('ADD NEWS action');break;
    default: return state;
  }
}
