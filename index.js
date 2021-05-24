const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce( function(element, accumulator) {return element + accumulator;}     ,0);




























// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
  
//   function ourReduce(arr, accumulator, init) {
//       let accum = init;
//       for (const element of arr) {
//           accum = accumulator(accum, element);
//       };
//       return accum;
//   }
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
  
//   console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15
  

//   const doubledAndSummed = [1, 2, 3];
//   doubledAndSummed.reduce(function(accumulator, element){ return element * 2 + accumulator})
// // => 11

// const points= [24, 7, 13, 10]; // equals to 54

// const newPoints = points.reduce(  function(element, accumulator) {return (element + 10) + accumulator} ,10); //should return first thing plus 50 which is 104

// console.log(newPoints);