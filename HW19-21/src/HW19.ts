
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
};


interface StringToBooleanFunction {
    (input: string): boolean;
}
const isEmptyString: StringToBooleanFunction = (input) => input.length === 0;


type CompareStrings = (str1: string, str2: string) => boolean;
const areStringsEqual: CompareStrings = (str1, str2) => str1 === str2;


const getLastElement = <T>(array: T[]): T | undefined => {
    return array.length > 0 ? array[array.length - 1] : undefined;
};



const makeTriple = <T>(a: T, b: T, c: T): T[] => {
    return [a, b, c];
};
