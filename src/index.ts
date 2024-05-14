console.log('Hello World');

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const mainAsync = async () => {
  await delay(1000);
  console.log('1s');

  await delay(1000);
  console.log('2s');

  await delay(1000);
  console.log('3s');
};

mainAsync();

// const main = () => {
//   setTimeout(() => {
//     console.log('1');
//   }, 1000);
// };
