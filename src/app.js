let dishCategoryButtons = document.querySelectorAll(".dishCategoryButton");

dishCategoryButtons.forEach((item, index) => {
    item.addEventListener("click", () => {
        dishCategoryButtons.forEach((button) => {
            button.classList.remove("selectedDishCategoryButton");
        })
        item.classList.add("selectedDishCategoryButton");
    })
});

