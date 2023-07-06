var count = 0;

const generateTransactionId = () => {
  const transactionId = "TRANSACTION_ID";

  return Symbol(`${transactionId}_${++count}`);
};

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);