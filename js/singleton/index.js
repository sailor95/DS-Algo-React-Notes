const Singleton = (function () {
  let cache = undefined;

  return function () {
    if (typeof cache === 'object') return cache;

    this.p = 'public';
    cache = this;
  };
})();

const obj1 = new Singleton();
const obj2 = new Singleton();
console.log(obj1 === obj2); // should be true
