export { };

// EXAMPLE 1 - Using generics in Arrow functions in TypeScript

const returnInArray = <T,>(value: T): T[] => {
  return [value];
};

const strArray = returnInArray<string>('bobbyhadz.com');
console.log(strArray);

const numArray = returnInArray<number>(100);
console.log(numArray);

// ---------------------------------------------------

// // EXAMPLE 2 - Applying constraints around generics in arrow functions

// type CanRun = {
//   run(): void;
// };

// // 👇️ Can only be called with an object that has run() method
// const callRun = <T extends CanRun>(obj: T) => {
//   obj.run();
// };

// // 👇️ the animal runs
// callRun({ run: () => console.log('the animal runs') });

// class Dog {
//   run() {
//     console.log('the dog runs');
//   }
// }

// callRun(new Dog()); // 👉️ the dog runs

// ---------------------------------------------------

// // EXAMPLE 3 - Using generics in arrow functions in classes

// class GenericArray {
//   public arr: (string | number)[] = [];

//   insert = <T extends string | number>(el: T): void => {
//     this.arr.push(el);
//   };

//   print = (): void => {
//     console.log(this.arr);
//   };
// }

// const ga1 = new GenericArray();

// ga1.insert<string>('a');
// ga1.insert<number>(1);

// ga1.print(); // 👉️ ['a', 1]

// ---------------------------------------------------

// // EXAMPLE 4 - When working in `.tsx` files, use a trailing comma

// const returnInArray = <T,>(value: T): T[] => {
//   return [value];
// };

// const strArray = returnInArray<string>('bobbyhadz.com');
// console.log(strArray);

// const numArray = returnInArray<number>(100);
// console.log(numArray);