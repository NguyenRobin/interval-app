import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';

export interface GlobalState {
  min: number;
  minToSec: number;
  currentMinAnalog: number | null;
  isRunning: boolean;
  isInterval: boolean;
  isBreak: boolean;
  breakInSec: number;
}
interface Action {
  type: string;
  payload: any;
}

const BREAK_IN_SEC = 5 * 60;

const initialState: GlobalState = {
  min: 0,
  minToSec: 0,
  currentMinAnalog: null,
  isRunning: false,
  isInterval: false,
  isBreak: false,
  breakInSec: BREAK_IN_SEC,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        min: state.min + action.payload,
        minToSec: state.minToSec + action.payload * 60,
      };
    case 'decrement':
      return {
        ...state,
        min: state.min - action.payload,
        minToSec: state.minToSec - action.payload * 60,
      };
    case 'interval':
      return { ...state, isInterval: action.payload };
    case 'takeBreak':
      return { ...state, isBreak: action.payload };
    case 'startTimer':
      return { ...state, isRunning: true };
    case 'stopTimer':
      return initialState;
    case 'setNewTimer':
      return initialState;
    case 'updateCurrentMinAnalog':
      return {
        ...state,
        currentMinAnalog: state.currentMinAnalog + action.payload,
      };

    case 'countDown':
      if (state.isRunning && state.minToSec > 0) {
        return { ...state, minToSec: state.minToSec - 1 };
      } else {
        return state;
      }

    case 'countDownInterval':
      return { ...state, minToSec: state.min * 60 };

    case 'countDownBreak':
      if (state.breakInSec > 0) {
        return { ...state, breakInSec: state.breakInSec - 1 };
      } else if (state.breakInSec === 0) {
        return initialState;
      } else {
        return state;
      }
    case 'countDownBreakWithInterval':
      if (state.breakInSec > 0) {
        return { ...state, breakInSec: state.breakInSec - 1 };
      } else if (state.breakInSec === 0) {
        return {
          ...state,
          currentMinAnalog: null,
          minToSec: state.min * 60,
          breakInSec: BREAK_IN_SEC,
        };
      } else {
        return state;
      }
    case 'noPause':
      return {
        ...state,
        currentMinAnalog: null,
        minToSec: state.min * 60,
        breakInSec: BREAK_IN_SEC,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, composeWithDevTools());

export function increment(min: number) {
  return { type: 'increment', payload: min };
}

export function decrement(min: number) {
  return { type: 'decrement', payload: min };
}

export function startTimer() {
  return { type: 'startTimer' };
}

export function stopTimer() {
  return { type: 'stopTimer' };
}

export function setNewTimer() {
  return { type: 'setNewTimer' };
}

export function takeBreak(bool: boolean) {
  return { type: 'takeBreak', payload: bool };
}

export function interval(bool: boolean) {
  return { type: 'interval', payload: bool };
}

export function countDown() {
  return { type: 'countDown' };
}

export function countDownInterval() {
  return { type: 'countDownInterval' };
}

export function countDownBreak() {
  return { type: 'countDownBreak' };
}

export function countDownBreakWithInterval() {
  return { type: 'countDownBreakWithInterval' };
}
export function noPause() {
  return { type: 'noPause' };
}

export function updateCurrentMinAnalog(value: number) {
  return { type: 'updateCurrentMinAnalog', payload: value };
}
