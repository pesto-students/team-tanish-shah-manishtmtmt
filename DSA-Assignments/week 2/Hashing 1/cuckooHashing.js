function hashFunction1(key, size) {
  return key % size;
}

function hashFunction2(key, size) {
  // A simple hashing function to ensure a different index than hashFunction1
  return (2 * key + 1) % size;
}

function cuckooHashing(keyValuePairs) {
  const tableSize = keyValuePairs.length * 2; // Choose a suitable size for the hash tables
  const maxIterations = 100; // Maximum number of iterations to avoid infinite loops

  // Initialize two empty hash tables
  const hashTable1 = new Array(tableSize).fill(null);
  const hashTable2 = new Array(tableSize).fill(null);

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(" ");
    let keyValue = { key: parseInt(key), value };

    let iterations = 0;
    let currentTable = hashTable1;
    let hashFunction = hashFunction1;

    while (iterations < maxIterations) {
      const index = hashFunction(keyValue.key, tableSize);

      // If the slot is empty, place the key-value pair in the respective hash table
      if (currentTable[index] === null) {
        currentTable[index] = keyValue;
        break;
      }

      // If the slot is occupied, displace the current element to the other table
      // and continue the process with the displaced element
      [currentTable[index], keyValue] = [keyValue, currentTable[index]];
      currentTable = currentTable === hashTable1 ? hashTable2 : hashTable1;
      hashFunction =
        hashFunction === hashFunction1 ? hashFunction2 : hashFunction1;

      iterations++;
    }
  }

  return { hashTable1, hashTable2 };
}

// Function to display the contents of the hash tables
function displayHashTable(table) {
  for (let i = 0; i < table.length; i++) {
    const entry = table[i];
    if (entry !== null) {
      console.log(`- ${entry.key} ${entry.value}`);
    }
  }
}

const keyValuePairs = ["1 apple", "2 banana", "3 orange", "4 mango", "5 pineapple"];
const { hashTable1, hashTable2 } = cuckooHashing(keyValuePairs);

console.log("HashTable 1:");
displayHashTable(hashTable1);

console.log("HashTable 2:");
displayHashTable(hashTable2);

// Main program
// function main() {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   const keyValuePairs = [];

//   readline.question("Enter key-value pairs (e.g., 'key value'): ", (input) => {
//     const pairs = input.split("\n");
//     for (const pair of pairs) {
//       keyValuePairs.push(pair);
//     }

//     const { hashTable1, hashTable2 } = cuckooHashing(keyValuePairs);

//     console.log("HashTable 1:");
//     displayHashTable(hashTable1);

//     console.log("\nHashTable 2:");
//     displayHashTable(hashTable2);

//     readline.close();
//   });
// }

// main();
