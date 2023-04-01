'use strict';

const obj1 = {
  arr1: [1, 2, 3, 4],
  method1() {
    return this.arr1.filter(el => {
      console.log(this);
      return el % 2 === 0;
    });
  },
  method2(callback) {
    return this.arr1.filter(callback);
  },
};

const arrow = el => {
  console.log(this);
  return el % 2 === 0;
};

obj1.method1();
obj1.method2(arrow);
