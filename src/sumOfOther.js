export default function sumOfOther(args) {
    if (!Array.isArray(args)) {
        throw new TypeError('Expected array as first argument.');
    }
    return args.map((val, index) => {
        const emptySymbol = Symbol();
        return args.reduce((acc, val, sumIndex) => {
            return index == sumIndex
                ? acc
                : (acc == emptySymbol ? val : acc + val);
        }, emptySymbol);
    });
}
function sumOfOtherNumbers(args) {
    if (!Array.isArray(args)) {
        throw new TypeError('Expected array as first argument.');
    }
    
    const sum = args.reduce((acc, val) => acc + val);
    return args.map((val) => sum - val);
}