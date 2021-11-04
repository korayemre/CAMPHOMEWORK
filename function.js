
function addToCart(productName, quantıty) {
    console.log(productName + "  sepete eklendi!!!" + "adet " + quantıty)

}

addToCart("yumurta", 12)
addToCart("elma")
let sayHello = (result) => {
    console.log("hello word!!")
    console.log("maraba" + result)
}
sayHello("tele")

let sayHello2 = function () {
    console.log("hello word222!!")
}
sayHello2()

function addToCart(ProductName, quantıty, unitPrice) {

}
let product1 = { productName: "elma", unitPrice: "10", pquantıty: 5 }
function addToCart3(product) {
    console.log("adı: " + product.productName)
}

addToCart3(product1)

let product2 = { productName: "elma", unitPrice: "10", pquantıty: 5 }
let product3 = { productName: "elma", unitPrice: "10", pquantıty: 5 }
product2 = product3
product2.productName = "karpuz"
console.log(product3.productName)

function addTocart4(...x) {
    // console.log(products[0].productName)
    console.log(x)
}
//addTocart4("elma" , "kavun" , "çilek")
let products = [
    { productName: "elma", unitPrice: "10", pquantıty: 5 },
    { productName: "kavun", unitPrice: "10", pquantıty: 5 }
]
addTocart4(products)
function add(...numbers) {

    for (let i = 0; i < numbers.length; i++) {

        console.log(numbers[i])

    }
}
add(10, 20)
add(10, 20, 30)

let numbers = [1, 2, 3, 5, 16]
console.log(Math.max(...numbers))

let [icanadolu, marmara, kara , [icAnadSehir , marmaraSehir , KaraSehir]] = [
    { name: "İç Anadolu", population: "20m" },
    { name: "Marmara", population: "30m" },
    { name: "Karadeniz", population: "10m" },
    [
        ["ankara" , "konya"] ,
        ["istanbul" , "bursa"],
        ["sinop" , "trabzon"] 
    ]
  
]
 console.log(icAnadSehir)
 console.log(KaraSehir)
let productnam, unitprice2, quantıtynew
({
    productName: productnam,
    unitPrice: unitprice2,
    pquantıty: quantıtynew
} = {
    productName: "elmaarmut", unitPrice: "101234568"
    , pquantıty: 51255
})

console.log(productnam)
console.log(unitprice2)