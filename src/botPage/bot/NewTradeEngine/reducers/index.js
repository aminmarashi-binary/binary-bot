import { combineReducers } from 'redux';
import initData from './initData';
import lastTick from './lastTick';
import balance from './balance';
import contract from './contract';
import stage from './stage';
import tradeOption from './tradeOption';
import proposals from './proposals';
import contractId from './contractId';

export default combineReducers({
    initData,
    lastTick,
    balance,
    stage,
    contract,
    tradeOption,
    proposals,
    contractId,
});
