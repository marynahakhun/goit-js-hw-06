const navEl = document.querySelectorAll(`.item `);
console.log(`Number of categories:`,navEl.length);

navEl.forEach(item =>{
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})


// for (const item of navEl) {
//     const navElCategory = item.querySelector(` h2`).textContent; 
//     const allEl = item.querySelectorAll(` li `).length;
// console.log(`Category: ${navElCategory}`);
// console.log(`Elements: ${allEl}`);
// }









// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
