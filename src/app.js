//associative array storing all available dishes and their properties
const dishes = [
    //popular
    {
        category: "Popular",
        price: "$16.99",
        image: "https://lh5.googleusercontent.com/I1JY1xzIUNTofFG5blyrT0NWD-ZiHwbMvxNtNRop_YT5xo_Pz-10wzQQ_BY90Ukrj1Kjwdt0z6aAE2woGrbpGP4xQxGXLdT5zxN2KldDXNKN-iMr60H7iH5KieDNvns6cjvAxD-i=s0",
        name: "Black Pepper Chicken & Rice",
        description: "Made with tender chicken marinated in a savory black pepper sauce."
    },
    {
        category: "Popular",
        price: "$15.99",
        image: "https://minimalistbaker.com/wp-content/uploads/2019/01/Easy-Vegan-Pad-Thai-SQUARE.jpg",
        name: "Tofu Pad Thai",
        description: "Made with firm tofu, rice noodles, and assorted vegetables."
    },
    {
        category: "Popular",
        price: "$15.25",
        image: "https://i0.wp.com/www.onceuponachef.com/images/2023/02/pho.jpg?resize=760%2C936&ssl=1",
        name: "Beef Pho",
        description: "Made with sliced beef in a fragrant, spiced broth."
    },
    {
        category: "Popular",
        price: "$20.99",
        image: "https://lh4.googleusercontent.com/vkwS61KP7i4f3xI0lS50mpyFcWmAeTdmOx9URkKNZwbtqIw1R533LS0YpiH2vzSzCjQ7xUrrQGBYA8UqC5ATIPm-aMbAHGMgtos7Fi1h_X0emLXO9-54YxXOH_pQ6CVUp1-j10W1",
        name: "Honey Garlic Fried Chicken",
        description: "Featuring chicken thighs coated in a sweet and tangy honey garlic glaze."
    },
    {
        category: "Popular",
        price: "$18.05",
        image: "https://www.jocooks.com/wp-content/uploads/2023/08/teriyaki-chicken-1-4-730x913.jpg",
        name: "Chicken Teriyaki",
        description: "Made with rice, broccoli, and our signature chicken with Teriyaki sauce."
    },
    {
        category: "Popular",
        price: "$18.05",
        image: "https://www.dadwithapan.com/cdn-cgi/image/width=584,height=875,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/09/Chicken-Chow-Mein-From-Wok-03.jpg",
        name: "Chicken Chow Mein",
        description: "Made with our thin noodles, thinly cut chicken breast, and spicy sauce."
    },
    {
        category: "Popular",
        price: "$12.55",
        image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/09/2560x1706/gallery-1488466253-sesame-ginger-beef-stir-fryl5.jpg?resize=1200:*",
        name: "Ginger Beef",
        description: "Stir-fry style beef with ginger and other vegetables."
    },
    {
        category: "Popular",
        price: "$12.99",
        image: "https://www.elmundoeats.com/wp-content/uploads/2022/01/Spicy-ramen-with-chicken-katsu-in-a-bowl-view-from-top.jpg",
        name: "Chicken Katsu Ramen",
        description: "Eggs, noodles, and chicken cutlets in a rich broth with other vegetables."
    },    

    //appetizers
    {
        category: "Appetizers",
        price: "$11.99",
        image: "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*",
        name: "Sushi Rolls",
        description: "Assorted sushi rolls with fresh fish, avocado, and rice, served with soy sauce."
    },
    {
        category: "Appetizers",
        price: "$9.99",
        image: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-1024x1536.jpg",
        name: "Chicken Satay",
        description: "Grilled chicken skewers served with a flavorful peanut sauce."
    },
    {
        category: "Appetizers",
        price: "$8.99",
        image: "https://www.sugarsaltmagic.com/wp-content/uploads/2023/01/Chinese-Spring-Rolls-4FEAT-500x500.jpg",
        name: "Spring Rolls",
        description: "Crispy rolls filled with vegetables, served with a sweet dipping sauce."
    }, 
    {
        category: "Appetizers",
        price: "$9.99",
        image: "https://cardamommagazine.com/wp-content/uploads/2021/04/chicken-gyoza.jpg",
        name: "Gyoza",
        description: "Pan-fried Japanese dumplings filled with a savory mixture of pork and vegetables."
    },
    {
        category: "Appetizers",
        price: "$10.99",
        image: "https://twosleevers.com/wp-content/uploads/2023/03/Shrimp-Tempura-1-900x900.png",
        name: "Shrimp Tempura",
        description: "Crispy shrimp tempura served with a light dipping sauce."
    },
    {
        category: "Appetizers",
        price: "$8.49",
        image: "https://www.feastingathome.com/wp-content/uploads/2022/01/Miso-Soup-18.jpg",
        name: "Miso Soup",
        description: "Traditional Japanese soup made with fermented soybean paste, tofu, and seaweed."
    },
    {
        category: "Appetizers",
        price: "$7.99",
        image: "https://masalaeatsmiami.files.wordpress.com/2013/09/edamame-copy.jpg?w=1024&h=680",
        name: "Edamame",
        description: "Steamed soybeans sprinkled with sea salt, a classic appetizer."
    },
    {
        category: "Appetizers",
        price: "$10.99",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/04/air-fryer-tofu-1152x1536.jpg",
        name: "Crispy Tofu Bites",
        description: "Crispy fried tofu bites with a sweet and spicy dipping sauce."
    },

    //chicken
    {
        category: "Chicken",
        price: "$11.99",
        image: "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*",
        name: "Sushi Rolls",
        description: "Assorted sushi rolls with fresh fish, avocado, and rice, served with soy sauce."
    },
    {
        category: "Chicken",
        price: "$9.99",
        image: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-1024x1536.jpg",
        name: "Chicken Satay",
        description: "Grilled chicken skewers served with a flavorful peanut sauce."
    },
    {
        category: "Chicken",
        price: "$8.99",
        image: "https://www.sugarsaltmagic.com/wp-content/uploads/2023/01/Chinese-Spring-Rolls-4FEAT-500x500.jpg",
        name: "Spring Rolls",
        description: "Crispy rolls filled with vegetables, served with a sweet dipping sauce."
    }, 
    {
        category: "Chicken",
        price: "$9.99",
        image: "https://cardamommagazine.com/wp-content/uploads/2021/04/chicken-gyoza.jpg",
        name: "Gyoza",
        description: "Pan-fried Japanese dumplings filled with a savory mixture of pork and vegetables."
    },
    {
        category: "Chicken",
        price: "$10.99",
        image: "https://twosleevers.com/wp-content/uploads/2023/03/Shrimp-Tempura-1-900x900.png",
        name: "Shrimp Tempura",
        description: "Crispy shrimp tempura served with a light dipping sauce."
    },
    {
        category: "Chicken",
        price: "$8.49",
        image: "https://www.feastingathome.com/wp-content/uploads/2022/01/Miso-Soup-18.jpg",
        name: "Miso Soup",
        description: "Traditional Japanese soup made with fermented soybean paste, tofu, and seaweed."
    },
    {
        category: "Chicken",
        price: "$7.99",
        image: "https://masalaeatsmiami.files.wordpress.com/2013/09/edamame-copy.jpg?w=1024&h=680",
        name: "Edamame",
        description: "Steamed soybeans sprinkled with sea salt, a classic appetizer."
    },
    {
        category: "Chicken",
        price: "$10.99",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/04/air-fryer-tofu-1152x1536.jpg",
        name: "Crispy Tofu Bites",
        description: "Crispy fried tofu bites with a sweet and spicy dipping sauce."
    },

    //Beef
    {
        category: "Beef",
        price: "$11.99",
        image: "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*",
        name: "Sushi Rolls",
        description: "Assorted sushi rolls with fresh fish, avocado, and rice, served with soy sauce."
    },
    {
        category: "Beef",
        price: "$9.99",
        image: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-1024x1536.jpg",
        name: "Chicken Satay",
        description: "Grilled chicken skewers served with a flavorful peanut sauce."
    },
    {
        category: "Beef",
        price: "$8.99",
        image: "https://www.sugarsaltmagic.com/wp-content/uploads/2023/01/Chinese-Spring-Rolls-4FEAT-500x500.jpg",
        name: "Spring Rolls",
        description: "Crispy rolls filled with vegetables, served with a sweet dipping sauce."
    }, 
    {
        category: "Beef",
        price: "$9.99",
        image: "https://cardamommagazine.com/wp-content/uploads/2021/04/chicken-gyoza.jpg",
        name: "Gyoza",
        description: "Pan-fried Japanese dumplings filled with a savory mixture of pork and vegetables."
    },
    {
        category: "Beef",
        price: "$10.99",
        image: "https://twosleevers.com/wp-content/uploads/2023/03/Shrimp-Tempura-1-900x900.png",
        name: "Shrimp Tempura",
        description: "Crispy shrimp tempura served with a light dipping sauce."
    },
    {
        category: "Beef",
        price: "$8.49",
        image: "https://www.feastingathome.com/wp-content/uploads/2022/01/Miso-Soup-18.jpg",
        name: "Miso Soup",
        description: "Traditional Japanese soup made with fermented soybean paste, tofu, and seaweed."
    },
    {
        category: "Beef",
        price: "$7.99",
        image: "https://masalaeatsmiami.files.wordpress.com/2013/09/edamame-copy.jpg?w=1024&h=680",
        name: "Edamame",
        description: "Steamed soybeans sprinkled with sea salt, a classic appetizer."
    },
    {
        category: "Beef",
        price: "$10.99",
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/04/air-fryer-tofu-1152x1536.jpg",
        name: "Crispy Tofu Bites",
        description: "Crispy fried tofu bites with a sweet and spicy dipping sauce."
    },

    //drinks
    {
        category: "Drinks",
        price: "$11.99",
        image: "https://bakewithshivesh.com/wp-content/uploads/2022/04/IMG_9331-scaled.jpg",
        name: "Thai Vodka Cocktail",
        description: "A refreshing blend of Thai flavors and vodka, perfect for a tropical experience."
    },
    {
        category: "Drinks",
        price: "$9.99",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/12/Crown-and-Coke-002s.jpg",
        name: "Crown & Coke",
        description: "Classic combination of Crown Royal whisky and cola, a timeless favorite."
    },
    {
        category: "Drinks",
        price: "$8.99",
        image: "https://images.ctfassets.net/cnu0m8re1exe/3FREnSA5uoZBL9JD8Z9Vl8/9aae77b21629e9cfcbba1c4b39db6f89/shutterstock_1726203082.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
        name: "Jamieson Rum",
        description: "Smooth and flavorful Jamieson Rum, perfect for sipping or mixing."
    }, 
    {
        category: "Drinks",
        price: "$9.99",
        image: "https://hips.hearstapps.com/hmg-prod/images/martini-recipe-1657532229.jpg?crop=1.00xw:0.501xh;0,0.159xh&resize=1200:*",
        name: "Indo-Martini",
        description: "An exotic twist on the classic martini with Indo-inspired flavors."
    },
    {
        category: "Drinks",
        price: "$10.99",
        image: "https://www.brewer-world.com/wp-content/uploads/2021/04/real-ale-header.jpg",
        name: "Korean Ale",
        description: "A unique blend of Korean flavors in a craft ale, perfect for beer enthusiasts."
    },
    {
        category: "Drinks",
        price: "$8.49",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/25/0/CCWM_Pina-Colada-2_s3x4.jpg.rend.hgtvcom.1280.1280.suffix/1562077390568.jpeg",
        name: "Pina Colada",
        description: "A tropical delight with coconut and pineapple, a classic cocktail choice."
    },
    {
        category: "Drinks",
        price: "$7.99",
        image: "https://www.recipetineats.com/wp-content/uploads/2019/09/Frozen-Strawberry-Daiquiri_1.jpg",
        name: "Daiquiri",
        description: "A fruity and refreshing daiquiri, perfect for a light and zesty sip."
    },
    {
        category: "Drinks",
        price: "$10.99",
        image: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg",
        name: "Hurricane",
        description: "A vibrant and tropical hurricane cocktail, sure to add a splash to your evening."
    },


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

            imageDiv.style.backgroundImage = "url("+dish.image+")";

            dishItem.style.display = "block";    
        }
    })
}

let currentCategory = 'Popular'; // Default category

function setupDishClickListeners() {
    // Add listeners to category buttons
    const categoryButtons = document.querySelectorAll('.dishCategoryButton');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.textContent.trim();
        });
    });

    // Add listeners to dish items
    const imgDivs = document.querySelectorAll('.imgDiv');
    imgDivs.forEach((imgDiv, index) => {
        imgDiv.addEventListener('click', () => {
            const offset = getIndexOffset(currentCategory);
            const actualIndex = index + offset;

            if (dishes[actualIndex]) {
                const dishData = JSON.stringify(dishes[actualIndex]);
                localStorage.setItem('selectedDish', dishData);
                window.location.href = 'item.html';
            }
        });
    });
}

function getIndexOffset(category) {
    const categoryOrder = ['Popular', 'Appetizers', 'Chicken', 'Beef', 'Drinks'];
    let offset = 0;

    for (let i = 0; i < categoryOrder.indexOf(category); i++) {
        offset += dishes.filter(dish => dish.category === categoryOrder[i]).length;
    }

    return offset;
}

document.addEventListener('DOMContentLoaded', function () {
    setupDishClickListeners();

    // Select the "View Cart" link
    const viewCartLink = document.querySelector('.topNavList .selectTester a');

    // Add event listener for click event
    if (viewCartLink) {
        viewCartLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action
            window.location.href = 'cart.html'; // Redirect to cart.html
        });
    }
});


// nav bar navigation code below

const topNavListDiv = document.querySelectorAll(".topNavListDiv");
const trackOrderButton = document.querySelector(".trackOrderButton");
const viewCartButton = document.querySelector(".viewCartButton");
const viewBillButton = document.querySelector(".viewBillButton");
const selectedItemId = localStorage.getItem("selectedItemId");

if (selectedItemId) {
    const selectedItem = document.getElementById(selectedItemId);
    if (selectedItem) {
      selectedItem.classList.add("selectTester2");
    }
}

topNavListDiv.forEach(item => {
    item.addEventListener("click", () => {
        console.log("click");
        topNavListDiv.forEach((button) => {
            button.classList.remove("selectTester2");
        })

        item.classList.add("selectTester2");

        localStorage.setItem("selectedItemId", item.id);

        if(item.classList.contains("trackOrderButton")) {
            window.location.href = 'trackOrder.html'; 
        }
        else if(item.classList.contains("viewCartButtonz")) {
            window.location.href = 'cart.html'; 
        }
        else if(item.classList.contains("viewBillButton")) {
            window.location.href = 'viewBill.html'; 
        }
    })
});


//menu button 
const menuButton = document.querySelector(".backButton");
menuButton.addEventListener("click", () => {
    localStorage.setItem("selectedItemId", "");
})
