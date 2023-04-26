const menu = [
    {
        id:1,
        title:"Pizza Quattro Stagioni",
        category:"Pizza",
        price: "49 EUR",
        img: "https://www.thespruceeats.com/thmb/N40MHqHgTlt9X6zPE9IPIs44USI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4stagionimontyrakusen-56d4672b3df78cfb37d746a0.jpg",
        desc:`The tomato and the mozzarella, arrange the other four toppings each in its separate quarter of the pizza;  with grated Parmigiano-Reggiano drizzle with a few drops olive oil`,
    },

    {
        id:2,
        title:"Limoncello Prosecco with Blueberries and Thyme",
        category:"Cocktail",
        price:"29 EUR",
        img:"https://i.pinimg.com/564x/02/c1/12/02c1125b0d38cf950d64295361894c6f.jpg",
        desc:`This limoncello prosecco cocktail is perfect for any celebration. It's just the right amount of sparkling lemony goodness, plus blueberries and thyme.`,
    },

    {
        id:3,
        title:"Orecchiette",
        category:"Pasta",
        price: "49 EUR",
        img: "https://www.thespruceeats.com/thmb/j12JLBp38wp9q0YCHBdmiPqsAiw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/orecchiette-with-sausage-and-broccoli-rabe-recipe-6823917-hero_01-7d8fa5a6a7ec470cb7aeb3b52144bdeb.jpg",
        desc:`Orecchiette with Sausage and Broccoli Rabe`,
    },

    {
        id:4,
        title:"Pizza Prosciutto Crudo e Rucola",
        category:"Pizza",
        price:"54 EUR",
        img: "https://www.thespruceeats.com/thmb/S26zGEozkkNsIr1hyP25fWtUF4U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sarkababicka-prosciuttorucola-56d468a35f9b5879cc8ffc19.jpg", 
        desc: `This fantastic pizza is basically a margherita with a generous handful of fresh, peppery wild arugula and whole slices of prosciutto added on top after baking.`,
    },

    {
        id:5,
        title:"Negroni Sbagliato",
        category:"Cocktail",
        price:"25 EUR",
        img: "https://i.pinimg.com/564x/f9/69/f5/f969f5768eebf395d5d3f191a6273e2c.jpg",
        desc: `A softer take on this classic Italian cocktail, the negroni sbagliato is finished with prosecco.`,
    },

    {
        id:6,
        title:"Mascarpone and Gorgonzola Pasta Sauce Recipe",
        category:"Pasta",
        price:"52 EUR",
        img: "https://www.thespruceeats.com/thmb/mKt0ul087kkgPAUtvZ9ZCs9MO0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2-cheese-sauce-56a9be7e5f9b58b7d0fe99b6.jpg",
        desc: `A simple and easy and very creamy Italian two-cheese pasta sauce made with Mascarpone and Gorgonzola cheeses. For serious cheese lovers only!`,
    },

    {
        id:7,
        title:"Pizza Prosciutto e Funghi",
        category:"Pizza",
        price: "45 EUR",
        img: "https://www.thespruceeats.com/thmb/jvp-khqEYGRbyUwm9RhPoJKJmAg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/prosciuttofunghirickpoon-56d464775f9b5879cc8fe448.jpg",
        desc: `Prosciutto and Mushrooms`,
    },

    {
        id:8,
        title:"Orange Italian Mule - Fernet Braca Cocktail",
        category:"Cocktail",
        price:"25 EUR",
        img:"https://i.pinimg.com/564x/03/34/e0/0334e02e73f51eb910936d6e6fe2c583.jpg",
        desc:`An easy cocktail with an herbal variation on the moscow mule!`,
    },

    {
        id:9,
        title:"Vegetarian Pasta e Fagioli",
        category:"Pasta",
        price:"35 EUR",
        img:"https://www.thespruceeats.com/thmb/SYjrj253JbVHtfWfXKoDsxUZy3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pasta-e-fagioli-white-beans-basil-3377123-9b96ed856b024b32a8f881b647f9bb3a.jpg",
        desc:`Vegetarian Pasta e Fagioli With White Beans and Basil Recipe`,
    }, 
] 

// ALL BUTTON
const btnAll = document.createElement("button") // öncelikle butonu oluşturuyoruz.
btnAll.type = "button" // tipini buton olarak belirliyoruz.
btnAll.classList.add("btn-item","btn-light","btn-outline-info") // classList ekliyoruz. btn-item css dosyasındaki ismi.Buton renklendirmesi size kalmış css btn-item den de yapışabilir.
btnAll.textContent = "ALL" // içinde ne yazacağına karar veriyoruz.
btnAll.id = "all" // bir id tanımlaması yapıyoruz.

const container1 = document.querySelector(".btn-container") // container1 i indexdeki btn-container bölümüne eşitliyoruz.
container1.appendChild(btnAll) // yukarıdaki butonu append(ekleme) ediyoruz.
//!Aşağıdaki kodları aynı şekilde devam ediyoruz.Extra eklemek isterseniz sadece tanımlamaları değiştirip istediğiniz kadar ekleyebilirsiniz.

//PİZZA BUTONU
const btnPizza = document.createElement("button")
btnPizza.type = "button"
btnPizza.classList.add("btn-item","btn-light","btn-outline-info")
btnPizza.textContent = "PIZZA"
btnPizza.id = "pizza"
const container2 = document.querySelector(".btn-container")
container2.appendChild(btnPizza)

//MAKARNA BUTONU
const btnPasta = document.createElement("button")
btnPasta.type = "button"
btnPasta.classList.add("btn-item","btn-light","btn-outline-info")
btnPasta.textContent = "PASTA"
btnPasta.id = "pasta"
const container3 = document.querySelector(".btn-container")
container3.appendChild(btnPasta)

//COCKTAIL BUTONU
const btnCocktail = document.createElement("button")
btnCocktail.type = "button"
btnCocktail.classList.add("btn-item","btn-light","btn-outline-info")
btnCocktail.textContent = "COCKTAIL"
btnCocktail.id = "cocktail"
const container4 = document.querySelector(".btn-container")
container4.appendChild(btnCocktail)


//! Butonu Ekranda Göstermek İçin
let allBtn = document.querySelector("#all") // Butonun nereye etki edeceğini gösterdik.
allBtn.addEventListener("click", menuShow) // Bu butona basıldığında "click" olduğunda "menuShow" diye bir fonksiyonu tetikleyeeğini söyledik.
const menu1 = document.querySelector(".section-center") // fonksiyondan yazdığımız html kodlarının nereye geleceğine karar veriyoruz.
menu1.id = "menu" //id ataması yapıyoruz.
function menuShow () { //fonksiyonu başlattık.
    let menuItems = menu.map(item => { //itemi map ediyoruz.
        return `
        <div class="card bg-light text-white photo">
        <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> 
`  //Burada return içine istediğiniz şekilde card ekleyebiilirsiniz. Hem kendiniz hemde bootstrapden ekleyebilirsiniz.
    })
    menu1.innerHTML = menuItems // menuItems i innerHTML e ekliyoruz.
}
menuShow(); // ve fonksiyonu bitiriyoruz


//Burdan sonra yukarıdakinin aynısını yapıyoruz ** Fakat bir fark var!!

let pizzaBtn = document.querySelector("#pizza")
pizzaBtn.addEventListener("click", pizzaMenu)
function pizzaMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Pizza"){ //Koşul ekliyoruz item.category sine koşullamanız lazım büyük ve küçük harflere dikkat edin!!
            return `
            <div class="card bg-light text-white photo">
            <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${item.title} </h5>
                    <p class="card-text"> ${item.desc} </p>
                    <div class="badge bg-primary text-wrap" style="width: 6rem;">
                    ${item.price}
                    </div>
                </div>
            </div> 
    ` 
        }
    })
    menu1.innerHTML = menuItems
}

let pastaBtn = document.querySelector("#pasta")
pastaBtn.addEventListener("click", pastaMenu)
function pastaMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Pasta"){ //Koşul ekliyoruz item.category sine koşullamanız lazım büyük ve küçük harflere dikkat edin!!
            return `
            <div class="card bg-light text-white photo">
            <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${item.title} </h5>
                    <p class="card-text"> ${item.desc} </p>
                    <div class="badge bg-primary text-wrap" style="width: 6rem;">
                    ${item.price}
                    </div>
                </div>
            </div> 
    ` 
        }
    })
    menu1.innerHTML = menuItems
}

let cocktailBtn = document.querySelector("#cocktail")
cocktailBtn.addEventListener("click", cocktailMenu)
function cocktailMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Cocktail"){ //Koşul ekliyoruz item.category sine koşullamanız lazım büyük ve küçük harflere dikkat edin!!
            return `
        <div class="card bg-light text-white photo">
        <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> 
` 
        }
    })
    menu1.innerHTML = menuItems
}
