function* iterators(array) {
  for (let i = 0; i < array.length; i++) {
    yield Symbol(array[i]);
  }
}

const array = ['hello', 'world', 'test'];

const generator = iterators(array);

for (let key of generator) {
  console.log(key);
}