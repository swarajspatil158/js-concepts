const users = [
  { id: 1, firstName: "A", age: 20, present: true },
  { id: 2, firstName: "B", age: 10, present: true },
  { id: 3, firstName: "C", age: 20, present: false },
  { id: 4, firstName: "D", age: 30, present: false },
];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------------------------------------------------------------

const reduce_mtd = users.reduce(function (acc, curr) {
  if (curr.age < 21) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(reduce_mtd);

// ---------------------------------------------------------------

const map_mtd_1 = arr.map((x) => `${x}:${x % 2 === 0}`);
console.log(map_mtd_1);

const map_mtd_2 = users.filter((x) => {
  if (x.present) {
    return x.firstName;
  }
});
console.log(map_mtd_2);

// ---------------------------------------------------------------

const filter_mtd = arr.filter((x) => x % 2);
console.log(filter_mtd);
