let productViews = new WeakMap();

let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
  //    let count = productViews.get(productId) || 0;
  //    productViews.set(productId, count + 1);

  if (productViews.has(productId)) {
    let count = productViews.get(productId);
    productViews.set(productId, count + 1);
    console.log(`Product ID: ${productId.id}, Count: ${count + 1}`);
  } else {
    productViews.set(productId, 1);
    console.log(`Product ID: ${productId.id}, Count: 1`);
  }
};


const productId = { id: 123 };

incrementProductViews(productId);
incrementProductViews(productId);
incrementProductViews(productId);
incrementProductViews(productId);

const addToCart = (productId) => {
  if (!cartItems.has(productId)) {
    cartItems.add(productId);
    console.log(`Product ID: ${productId.id}, added to cart`);
  } else {
    console.log(`Product ID: ${productId.id}, already in cart`);
  }
};

addToCart(productId);
addToCart(productId);

