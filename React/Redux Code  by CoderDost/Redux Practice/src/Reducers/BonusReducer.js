import { bonusPoints } from "../Actions";

export function BonusReducer(state={points:0},action){
    switch(action.type){
        case bonusPoints: return {points:state.points+1}
        default: return state
    }
}