export default new Map()

// doc
export function foo () {
  return new Promise((resolve, reject) => {
    if (reject) return resolve(123)
    return resolve(456)
  })
}

export const prom1 = new Promise();
export const prom2 = new Promise();
export const prom3 = new Promise();
export const prom4 = new Promise();

