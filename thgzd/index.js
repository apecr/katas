const eatings = {
  antelope: [ 'grass' ],
  'big-fish': [ 'little-fish' ],
  bug: [ 'leaves' ],
  bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  chicken: [ 'bug' ],
  cow: [ 'grass' ],
  fox: ['chicken', 'sheep'],
  giraffe: [ 'leaves' ],
  lion: ['antelope', 'cow'],
  panda: [ 'leaves' ],
  sheep: [ 'grass' ]
};

var whoEatsWho = zoo => {
  let arrayAnimals = zoo.split(',');
  let endArray = false;
  const eatingsHistory = [ zoo ];
  let modifiedArray = false;
  const filterFunction = (item, index, array) => {
    if (modifiedArray) {
      return true;
    }
    if (index > 0 && eatings[array[index - 1]] !== undefined && eatings[array[index - 1]].includes(item)) {
      eatingsHistory.push(`${array[index - 1]} eats ${array[index]}`);
      endArray = false;
      modifiedArray = true;
      return false;
    }
    if (index < array.length - 1 && eatings[array[index + 1]] !== undefined && eatings[array[index + 1]].includes(item)) {
      eatingsHistory.push(`${array[index + 1]} eats ${array[index]}`);
      endArray = false;
      modifiedArray = true;
      return false;
    }
    endArray = true;
    return true;
  };
  while (!endArray) {
    modifiedArray = false;
    arrayAnimals = arrayAnimals.filter(filterFunction);
  }

  // Your code here
  return eatingsHistory.concat(arrayAnimals.join(','));
};


module.exports = {
  whoEatsWho
};

