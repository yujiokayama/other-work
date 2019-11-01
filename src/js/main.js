import TestDestructuring from './modules/test_destructuring';
import TestAsync from './modules/test_async';
import TestFunction from './modules/test_function';

const async = new TestAsync();
const destructuring = new TestDestructuring();
const functionTest = new TestFunction();

console.group(
  '%cECMAScriptテスト環境',
  'color: #fdca11; font-size: 2rem; font-weight: bold'
);

/*
////////////////////////////////////////////////////////////////////////
関数
////////////////////////////////////////////////////////////////////////
*/
console.group('%c関数', 'color: #41b883; font-size: 1rem; font-weight: bold');

functionTest.returnUndifindTset('ng');

functionTest.propagationTset();

console.groupEnd();
/*
////////////////////////////////////////////////////////////////////////
分割代入
////////////////////////////////////////////////////////////////////////
*/

console.group(
  '%c分割代入',
  'color: #41b883; font-size: 1rem; font-weight: bold'
);
// オブジェクトの分割代入
destructuring.objectDestructuring();

// 関数の引数で分割代入(オブジェクト)
destructuring.objectDestructuringArgs();

// 配列の分割代入
destructuring.arrayDestructuring();

// 関数の引数で分割代入(配列)
destructuring.arrayDestructuringArgs();

// 配列内のオブジェクトのpropartyにアクセス
destructuring.arrayInObject();

// オブジェクトの中の配列要素にアクセス
destructuring.objectInArray();

// useCase
destructuring.useCaseArrayMap();
destructuring.useCaseArrayFilter();
destructuring.useCaseArrayFind();

console.groupEnd();

/*
////////////////////////////////////////////////////////////////////////
非同期処理(promise・async/await)
////////////////////////////////////////////////////////////////////////
*/

console.group(
  '%c非同期処理',
  'color: #41b883; font-size: 1rem; font-weight: bold'
);
/*
/////////////////////////////////////
promiseasync
/////////////////////////////////////
*/
async
  .promiseTest()
  .then(val => {
    // 非同期処理成功
    console.log(val);
  })
  .catch(err => {
    // 例外処理(呼ばれない)
    console.log(err);
  });
/*
/////////////////////////////////////
async
/////////////////////////////////////
*/
// resolve
async.asyncResolveTest().then(val => {
  console.log(val);
});
// reject
async.asyncRejectTest().catch(err => {
  console.log(err);
});

// async・await
async.awaitTest().then(val => {
  console.log(val);
});

// consoleネタ
console.count(); // default: 1

console.time();
console.timeLog();
console.timeEnd();

const logObjectInArray = {
  name: 'hoge',
  age: 50,
  skill: ['ねる', 'あそぶ', '食べる']
};
const logArrayInObject = [
  { name: 'hoge', age: 50, skill: 'ねる' },
  { name: 'hoge', age: 50, skill: 'ねる' },
  { name: 'hoge', age: 50, skill: 'ねる' }
];

console.table([logObjectInArray]);
console.table(logArrayInObject);
