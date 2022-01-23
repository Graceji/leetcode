const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function MyPromise(executor) {
  const self = this;
  self.status = 0;
  self.data = undefined;
  self.onResolvedcallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (self.status === 0) {
      self.status = 1;
      self.data = value;
      for (let i = 0; i < self.onResolvedcallback.length; i++) {
        self.onResolvedcallback[i](value);
      }
    }
  }

  function reject(reason) {
    if (self.status === 0) {
      self.status = 2;
      self.data = reason;
      for (let i = 0; i < self.onResolvedcallback.length; i++) {
        self.onRejectedCallback[i](reason);
      }
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;

  if (self.status === 0) {
    return new Promise(function (resolve, reject) {
      self.onResolvedcallback.push(function (value) {
        try {
          const x = onResolved(value);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          }
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallback.push(function (reason) {
        try {
          const x = onResolved(reason);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          }
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  if (self.status === 1) {
    return new Promise(function (resolve, reject) {
      try {
        const x = onResolved(self.data);
        if (x instanceof MyPromise) {
          x.then(resolve, reject);
        }
        resolve(x);
      } catch (e) {
        reject(e);
      }
    });
  }

  if (self.status === 2) {
    return new Promise(function (resolve, reject) {
      try {
        const x = onRejected(self.data);
        if (x instanceof MyPromise) {
          x.then(resolve, reject);
        }
        reject(x);
      } catch (e) {
        reject(e);
      }
    });
  }
};

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

new MyPromise((resolve, reject) => {
  resolve(1);
}).then((res) => {
  return new MyPromise((res, rej) => {});
});

function limitLoad(urls, handler, limit) {
  const sequence = [...urls];
  const promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => index);
  });

  return promises.reduce((prev, url) => {
      return prev.then(() => {
          return Promise.race(promises)
      })
      .then((fastIndex) => {
          promises[fastIndex] = handler(url).then(() => fastIndex)
      })
  }, Promise.resolve())
  .then(() => {
      Promise.all(promises);
  })
}
