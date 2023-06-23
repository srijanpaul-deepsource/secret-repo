import value, { func } from 'lib'
export const foo = value && false
const result = func(1, 2, undefined);

export const exp = result && result.method();
export const exp2 = result && result.method2();

