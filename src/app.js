//associative array storing all available dishes and their properties
const dishes = [
    //popular
    {
        category: "Popular",
        price: "$16.99",
        image: "img/popular1.jpg",
        name: "Black Pepper Chicken & Rice",
        description: "Made with tender chicken marinated in a savory black pepper sauce."
    },
    {
        category: "Popular",
        price: "$15.99",
        image: "img/popular2.jpg",
        name: "Tofu Pad Thai",
        description: "Made with firm tofu, rice noodles, and assorted vegetables."
    },
    {
        category: "Popular",
        price: "$15.25",
        image: "img/popular3.jpg",
        name: "Beef Pho",
        description: "Made with sliced beef in a fragrant, spiced broth."
    },
    {
        category: "Popular",
        price: "$20.99",
        image: "img/popular4.jpg",
        name: "Honey Garlic Fried Chicken",
        description: "Featuring chicken thighs coated in a sweet and tangy honey garlic glaze."
    },
    {
        category: "Popular",
        price: "$18.05",
        image: "img/popular5.jpg",
        name: "Chicken Teriyaki",
        description: "Made with rice, broccoli, and our signature chicken with Teriyaki sauce."
    },
    {
        category: "Popular",
        price: "$18.05",
        image: "img/popular6.jpg",
        name: "Chicken Chow Mein",
        description: "Made with our thin noodles, thinly cut chicken breast, and spicy sauce."
    },
    {
        category: "Popular",
        price: "$12.55",
        image: "img/popular7.jpg",
        name: "Ginger Beef",
        description: "Stir-fry style beef with ginger and other vegetables."
    },
    {
        category: "Popular",
        price: "$12.99",
        image: "img/popular8.jpg",
        name: "Chicken Katsu Ramen",
        description: "Eggs, noodles, and chicken cutlets in a rich broth with other vegetables."
    },    

    //appetizers
    {
        category: "Appetizers",
        price: "$8.99",
        imageURL: ".com",
        name: "Spring Rolls",
        description: "Crispy rolls filled with vegetables, served with a sweet dipping sauce."
    }, 
    {
        category: "Appetizers",
        price: "$7.99",
        image: "img/asian_appetizer2.jpg",
        name: "Edamame",
        description: "Steamed soybeans sprinkled with sea salt, a classic appetizer."
    },
    {
        category: "Appetizers",
        price: "$9.99",
        image: "img/asian_appetizer3.jpg",
        name: "Gyoza",
        description: "Pan-fried Japanese dumplings filled with a savory mixture of pork and vegetables."
    },
    {
        category: "Appetizers",
        price: "$10.99",
        image: "img/asian_appetizer4.jpg",
        name: "Shrimp Tempura",
        description: "Crispy shrimp tempura served with a light dipping sauce."
    },
    {
        category: "Appetizers",
        price: "$8.49",
        image: "img/asian_appetizer5.jpg",
        name: "Miso Soup",
        description: "Traditional Japanese soup made with fermented soybean paste, tofu, and seaweed."
    },
    {
        category: "Appetizers",
        price: "$11.99",
        image: "img/asian_appetizer6.jpg",
        name: "Sushi Rolls",
        description: "Assorted sushi rolls with fresh fish, avocado, and rice, served with soy sauce and pickled ginger."
    },
    {
        category: "Appetizers",
        price: "$9.99",
        image: "img/asian_appetizer7.jpg",
        name: "Chicken Satay",
        description: "Grilled chicken skewers served with a flavorful peanut sauce."
    },
    {
        category: "Appetizers",
        price: "$10.99",
        image: "img/asian_appetizer8.jpg",
        name: "Crispy Tofu Bites",
        description: "Crispy fried tofu bites with a sweet and spicy dipping sauce."
    }
]

let dishCategoryButtons = document.querySelectorAll(".dishCategoryButton");

dishCategoryButtons.forEach(item => {
    item.addEventListener("click", () => {
        dishCategoryButtons.forEach((button) => {
            button.classList.remove("selectedDishCategoryButton");
        })
        item.classList.add("selectedDishCategoryButton");
        let currSelectedCategory = item.textContent.trim();
        filterDishesByCurrSelectedCategory(currSelectedCategory);
    })
});

function filterDishesByCurrSelectedCategory(currSelectedCategory) {
    console.log(currSelectedCategory);
    let filteredDishes = dishes.filter(dish => {
        return dish.category === currSelectedCategory;
    })
    displayFilteredDishes(filteredDishes);
}

function displayFilteredDishes(filteredDishes) {
    console.log(filteredDishes);

    let allDishItems = document.querySelectorAll(".dishItem");
    allDishItems.forEach(item => {
        item.style.display = "none";
    })

    filteredDishes.forEach((dish, index) => {
        let dishItem = document.querySelector(".dishItem" + (index+1));
        if(dishItem) {
            let dishPrice = dishItem.querySelector(".dishPrice");
            let dishName = dishItem.querySelector(".dishName");
            let dishDescription = dishItem.querySelector(".dishDescription");
            let imageDiv = dishItem.querySelector(".imgDiv");

            console.log(dishPrice.classList);
            console.log(dish.price);

            //update content
            dishPrice.textContent = dish.price;
            dishName.textContent = dish.name;
            dishDescription.textContent = dish.description;

            //@TODO imageDiv.style.backgroundImage = 

            dishItem.style.display = "block";    
        }
    })
}

// Event listener for the specific dish item in menu.html
document.querySelector('.imgDiv4').addEventListener('click', function() {
    window.location.href = 'item.html';
});
