import { IExercise } from "./Exercise";

export interface IUserTraining {
    id? : number,
    name : string,
    description? : string,
    exercises? : IExercise[]
}