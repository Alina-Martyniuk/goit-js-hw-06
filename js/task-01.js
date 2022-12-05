const itemsInCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsInCategories.length}`);
console.log("\r\n")


for (let item of itemsInCategories) {
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelectorAll("li").length}`)
    console.log("\r\n")
}


