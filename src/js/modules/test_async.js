export default class TestAsync {
  constructor() {}
  /*
  //////////////////////////////////////////////////////////////
  promise
  //////////////////////////////////////////////////////////////
  */
  promiseTest() {
    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise((resolve, _reject) => {
      resolve('Async Hello world');
    });
  }
  /*
  //////////////////////////////////////////////////////////////
  async/await
  //////////////////////////////////////////////////////////////
  */
  async asyncResolveTest() {
    return 'resolve!!';
  }

  async asyncRejectTest() {
    throw this.errFunc();
  }

  errFunc() {
    return 'errorFuncをthrowした';
  }

  testTaskA(val) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(val * 2);
      }, 2000);
    });
  }

  testTaskB(val) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(val * 3);
      }, 3000);
    });
  }

  async awaitTest() {
    const taskA = await this.testTaskA(5);
    const taskB = await this.testTaskB(10);
    return taskA + taskB; // expected log 5seconds after 40
  }

  // 連続した非同期処理
}
