import { actionTypes } from "./action";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finished?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}


export function cyclesReducer(state: CycleState, action){
    switch (action.type) {
          case actionTypes.ADD_NEW_CYCLE:
            return {
              ...state,
              cycles: [...state.cycles, action.payload.newCycle],
              activeCycleId: action.payload.newCycle.id,
              
            };
          case actionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
            return {
              ...state,
              cycles: state.cycles.map((cycle) => {
                if (cycle.id === action.payload.activeCycleId) {
                  return { ...cycle, finished: new Date() };
                }
                return cycle;
              }),
              activeCycleId: null,
            };
          case  actionTypes.INTERRUPT_CURRENT_CYCLE:
            return { 
              ...state,
              cycles: state.cycles.map((cycle) => {
                if (cycle.id === action.payload.activeCycleId) {
                  return { ...cycle, interruptedDate: new Date() };
                }
                return cycle;
              }),
              activeCycleId: null,
            };
            default: return state
          }
}