var products = {
    pName : "IPhone14",
    bName : "Apple",
    Price : 90000,
}

//Reading properties of object
console.log(products)

//Reading specific property of object
console.log(products.pName)

//Add new property in existing object
products.OfferPrice = 80000
console.log(products)

//Updating value of property
products.OfferPrice = 70000
console.log(products)

//Delete existing property
delete products.Price
console.log(products)




