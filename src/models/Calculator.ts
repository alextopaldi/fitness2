export interface ICalculator {
    sex: string;
    age: number;
    height: number;
    weight: number;
    fat: number;
    activity: number;
    wish: number;
}

export interface ICalculatorResults {
    middle: number;
    miffin: number;
    harris: number;
}

export interface IUserInfoFetch {
    userValues: ICalculator,
    calcResults: ICalculatorResults
}