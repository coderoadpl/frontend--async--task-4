// never resolving promise – all time in pending state
const promise1 = new Promise(() => { })
console.log(promise1)
promise1.then((value) => {
    console.log('promise1 then callback', value)
})
promise1.catch((error) => {
    console.log('promise1 catch callback', error)
})

// resolved / fulfilled promise
const promise2 = new Promise((resolve, reject) => {
    resolve('promise resolve value')
    // no use of calling reject here - promise can change state only once
    // reject()
})
console.log(promise2)
promise2.then((value) => {
    console.log('promise2 then callback', value)
})
promise2.catch((error) => {
    console.log('promise2 catch callback', error)
})

// rejected promise
const promise3 = new Promise((resolve, reject) => {
    reject('reason of rejection')
    // no use of calling resolve here - promise can change state only once
    // resolve()
})
console.log(promise3)
promise3.then((value) => {
    console.log('promise3 then callback', value)
})
promise3.catch((error) => {
    console.log('promise3 catch callback', error)
})