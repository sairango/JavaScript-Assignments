// question from here
// https://brindle-goal-102.notion.site/QUESTIONS-FOR-JS-WEEKEND-26d46b36b2e980a0b299fbf0d87840af

//  20 basic (Objects + Arrays)

//prblm 1
// const obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
// Object.keys(obj).forEach(key => {
//     let sum = 0;
//     for (let i = 0; i < obj[key].length; i++){
//         sum = sum + obj[key][i];
//     }
//     obj[key] = sum;
// })
// console.log(obj);

//prblm 2
// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const ans = {};
// arr.forEach(item => {
//     if (ans[item]) {
//         ans[item]++;
//     } else {
//         ans[item] = 1;
//     }
// })
// console.log(ans);

//prblm 3
// const obj = { a: "x", b: "y", c: "z" };
// const res = {};
// Object.keys(obj).forEach(key => {
//     res[obj[key]] = key;
// })
// console.log(res)

//prblm 4
// const obj = { a: 10, b: 50, c: 20 };
// let ans = -Infinity;
// Object.keys(obj).forEach(key => {
//     if (obj[key] > ans) {
//         ans = obj[key];
//     }
// })
// console.log(ans);

//prblm 5
// const obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// const arr = [];

// Object.keys(obj).forEach(key => {
//     obj[key].forEach(val => {
//         arr.push(val);
//     })

// })
// console.log(arr);

//prblm 6
// const arr = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];

// const ans = {};
// arr.forEach(item => {
//     if (ans[item.city]) {
//         ans[item.city].push(item.name);
//     } else {
//         ans[item.city] = [];
//          ans[item.city].push(item.name);
//     }

// })
// console.log(ans);

//prblm 7
// const obj = { a: 20, b: 60, c: 40, d: 90 };
// const filt = {};
// Object.keys(obj).forEach(key => {
//     if (obj[key] > 50) {
//         filt[key] = obj[key];
//     }
// })
// console.log(filt);

// prblm 8
// const obj = { A: [80, 90], B: [70, 75, 85] };
// let ans;
// let max = 0;
// Object.keys(obj).forEach(key => {
//     let totalval=0;
//     let totalitem = 0;
//     obj[key].forEach(val => {
//         totalitem++;
//         totalval += val;
//     })
//     if (totalitem > 0) {
//         totalval = totalval / totalitem;

//     }

//     if (totalval > max) {
//         max = totalval;
//         ans = key;
//     }
// })
// console.log(ans);

// prblm 9
// const obj = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
// const res = [];
// Object.keys(obj).forEach(key => {

//     obj[key].forEach(val => {
//         if (!res.includes(val)) {
//             res.push(val);
//         }
//     })
// })
// console.log(res);

//prblm 10
// const obj = { name: "Rahul", age: 23, city: "Noida" };
// const arr = ["name", "city"];
// const filteredarr = Object.entries(obj).filter(([key, val]) => {
//   return arr.includes(key);
// });
// const finalobj = Object.fromEntries(filteredarr);
// console.log(finalobj);

//prblm 11
// const obj = { A: [80, 90], B: [70, 75, 85] };
// let ans;
// let max = 0;
// Object.keys(obj).forEach(key => {
//     let totalval=0;
//     let totalitem = 0;
//     obj[key].forEach(val => {
//         totalitem++;
//         totalval += val;
//     })
//     if (totalitem > 0) {
//         totalval = totalval / totalitem;

//     }

//     if (totalval > max) {
//         max = totalval;
//         ans = key;
//     }
// })
// console.log(ans);

//prblm 12
// const obj = { a: 3, b: 1, c: 2 };
// const objarr = Object.entries(obj);
// console.log(objarr);
// objarr.sort(([b1,v1], [b2,v2]) => {
//     if (v1 < v2) return -1;
//     if (v1 > v2) return 1;
//     return 0;
// });
// console.log(objarr);

//prblm 13
// const obj = { a: 1, b: 2, c: 3 };
// const objarr = Object.entries(obj);
// console.log(objarr.length);
// let noofkeys = 0;
// for (const key in obj) {
//     noofkeys+=1;
// }
// console.log(noofkeys);

//prblm 14
// const obj = { name: "alice", city: "delhi" };
// Object.keys(obj).forEach(key => {
//     obj[key] = obj[key][0].toUpperCase() + obj[key].slice(1);
// })
// console.log(obj);

//prblm 15
// const obj = { name: "Alice", age: 25 };
// let ansstr = "";
// for (const key in obj) {
//     ansstr += `${key}=${obj[key]}&`
// }
// ansstr = ansstr.slice(0, -1);
// console.log(ansstr);

//prblm 16
// const arr = [1, 2, 3, 4, 5, 6];
// const obj = {};
// obj['even'] = 0;
// obj['odd'] = 0;
// arr.forEach(val => {
//     if (val % 2 == 0) {
//         obj['even'] += 1;
//     } else {
//         obj['odd'] += 1;
//     }
// })
// console.log(obj)

//prblm 17
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, c: 5, d: 6 };
// const obj1arr = Object.entries(obj1);
// const obj2arr = Object.entries(obj2);
// const comm = [];
// obj1arr.forEach(([key, val])=> {
//     obj2arr.forEach(([key1, val1]) => {
//         if (key === key1) {
//             comm.push(key);
//         }
//     })
// })
// console.log(comm);

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, c: 5, d: 6 };

// const comm = Object.keys(obj1).filter(key => {
//     return Object.keys(obj2).includes(key);
// });
// console.log(comm);

//prblm 18
// const arr = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];
// const lookUpObj = {};

// arr.forEach(item => {
//     lookUpObj[item.id] = item;

// })
// console.log(lookUpObj);

//prblm 19
// const obj = { a: 1, b: "hello", c: 3 };
// let allvalues = true;
// for (const key in obj) {
//     if (typeof obj[key] !== "number") {
//         allvalues = false;
//         break;
//     }
// }
// console.log(allvalues)

//20 intermediate (Objects + Arrays)
//prblm 1 Sum all transactions per user
// const arr = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 },
// ];
// let outputObj = {};
// arr.forEach((item) => {
//   if (outputObj[item.user]) {
//     outputObj[item.user] += item.amount;
//   } else {
//     outputObj[item.user] = item.amount;
//   }
// });
// console.log(outputObj);

//prblm 2 Transform API response to object (id → name)
// const resp = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// const obj = resp.reduce((respobj , item) => {
//     respobj[item.id] = item.name;
//     return respobj
// }, {});

// console.log(obj)

//prblm 3 Remove falsy values from object
// const obj = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// const objarr = Object.entries(obj);
// const ans = Object.fromEntries(objarr.filter(([v1, v2]) => {
//     return v2;
// }))
// console.log(ans);

//prblm 4 Check for permissions from roles
// const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
// const checkRole = "user";
// const action = "write";

// const ans = roles[checkRole].includes(action);
// console.log(ans);

//prblm 5 Transform array of orders into revenue per category
// const arr = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 },
// ];

// const rev = arr.reduce((accu, item) => {
//     if (!accu[item.category]) {
//         accu[item.category] = item.price;
//     } else {
//         accu[item.category] += item.price;
//     }
//     return accu;
// }, {})
// console.log(rev);

// prblm 6 Remove duplicate objects by id
// const arr = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];
// const filtered = arr.reduce((accum, item) => {
//   let exist = false;
//     accum.forEach((obj) => {
//     if (obj.id === item.id) {
//       exist = true;
//     }
//   });
//   if (!exist) {
//     accum.push(item);
//   }

//   return accum;
// }, []);
// console.log(filtered);

function calculateTotalSpentByCategory(transactions) {
    const output = transactions.reduce((accu , item) => {
        if (!accu[item.category]) {
            accu[item.category] = item.price;
        } else {
            accu[item.category] += item.price;
        }
    } ,{})
    
  return Object.entries(output);
}

module.exports = calculateTotalSpentByCategory;