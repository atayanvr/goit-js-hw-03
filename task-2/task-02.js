'use strict';

const countProps = function (obj) {
  const keys = Object.keys(obj);
  let amount = 0;
  // eslint-disable-next-line
  for (const key of keys) {
    amount += 1;
  }
  return amount;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));