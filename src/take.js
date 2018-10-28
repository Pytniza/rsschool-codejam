module.exports = function make(...args) {
    const argCount = args.length;
    const lastArg = args[argCount - 1];
    if (lastArg instanceof Function) {
        return args
            .slice(0, argCount - 1)
            .reduce(lastArg);
    } else {
        return make.bind(this, ...args);
    }
}