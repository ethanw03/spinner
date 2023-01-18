// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stout.write('\r|   ');
// }, 900);

const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\', '\r|   '];
let delay = 100;

for (const position in array){
  setTimeout(() => {
    process.stdout.write(array[position])
  }, delay)
  delay += 200
};
setTimeout(() => {
  process.stdout.write('\n')
}, delay);