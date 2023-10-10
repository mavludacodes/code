function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("func1: Good");
      reject("func1: Bad");
    }, 100);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("func2: Bad");
      resolve("func2: Good");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}
function onError(error) {
  console.log(`Error: ${error}`);
}
/* Case 1: 
  resolved -> rejected => onError 
*/
fun1().then(fun2, onError).then(onSuccess, onError);

/* Case 2: 
  resolved -> resolved => onSucces 
*/
fun1().then(fun2, onError).then(onSuccess, onError);

/* Case 3: 
  rejected -> resolved => onError -> onSuccess
*/
fun1().then(fun2, onError).then(onSuccess, onError);

/* Case 4: 
  resolved -> rejected => onError
*/
fun1().then(fun2, onError).then(onSuccess, onError);

// With catch block
// Case 1: resolve -> reject => onError
fun1().then(fun2).then(onSuccess).catch(onError);

// Case 2: reject -> resolve => onError
fun1().then(fun2).then(onSuccess).catch(onError);
