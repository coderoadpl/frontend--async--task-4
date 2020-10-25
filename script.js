// never resolving promise – all time in pending state
const promise1 = new Promise(() => {})
console.log(promise1)

// resolved / fulfilled promise
const promise2 = new Promise((resolve, reject) => {
    resolve('promise resolve value')
    // no use of calling reject here - promise can change state only once
    // reject()
})
console.log(promise2)

// rejected promise
const promise3 = new Promise((resolve, reject) => {
    reject('reason of rejection')
    // no use of calling resolve here - promise can change state only once
    // resolve()
})
console.log(promise3)