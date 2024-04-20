var products = [{
    bName : "Apple",
    pName : "iphone13",
    price : 90000
},{
    bName : "Samsung",
    pName : "Samsung A13",
    price : 15000
},{
    bName : "Vivo",
    pName : "Vivo Y17",
    price : 20000
},{
    bName : "Oppo",
    pName : "Oppo s3",
    price : 10000
},]

var filteredData = products.filter(function(ele){
    return ele.bName == "Apple"
})
console.log(filteredData)

var filteredData = products.filter(function(ele){
    return ele.price > 10000
})
console.log(filteredData)