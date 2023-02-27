export interface IProductSearchResult {
    id: number;
    name: string;
    image: string;
}

export interface EstimatedCost {
    value: number;
    unit: string;
}

export interface Nutrient {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export interface Property {
    name: string;
    amount: number;
    unit: string;
}

export interface Flavonoid {
    name: string;
    amount: number;
    unit: string;
}

export interface CaloricBreakdown {
    percentProtein: number;
    percentFat: number;
    percentCarbs: number;
}

export interface WeightPerServing {
    amount: number;
    unit: string;
}

export interface Nutrition {
    nutrients: Nutrient[];
    properties: Property[];
    flavonoids: Flavonoid[];
    caloricBreakdown: CaloricBreakdown;
    weightPerServing: WeightPerServing;
}

export interface IProductInfoSearchResult {
    id: number;
    original: string;
    originalName: string;
    name: string;
    amount: number;
    unit: string;
    unitShort: string;
    unitLong: string;
    possibleUnits: string[];
    estimatedCost: EstimatedCost;
    consistency: string;
    shoppingListUnits: string[];
    aisle: string;
    image: string;
    meta: any[];
    nutrition: Nutrition;
    categoryPath: string[];
}

export interface CaloriesData {
    token: string,
    breakfast: Dish[],
    lanch: Dish[],
    dinner: Dish[],
    snack: Dish[],
}

export interface Dish {
    name: string, //apple
    value: number //300
}

const dick: CaloriesData = {
    token : 'wersadkgnfaospidg',
    breakfast : [{
        name: 'apple',
        value: 300
    }, 
    {
        name: 'eggs',
        value: 300
    }],
    lanch : [{
        name: 'apple',
        value: 500
    }],
    dinner : [{
        name: 'apple',
        value: 600
    }],
    snack : [{
        name: 'apple',
        value: 200
    }]
}