const products = items.results

// console.log (productList)

const productsHtml = products.map (function (item) {
    return `
    <div class = "etsy-items">
        <div class = "item-images">
            <img src = "${item.Images[0].url_170x135})">
        </div>
        <h2 class = "title">${item.title}</h2> 
        <div class = "shop">Ad by: ${item.Shop.shop_name}</div>
        <div class = "stars">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="views">(${item.views})</span>
        </div>
            <strong>$${item.price}</strong>
    </div>`
}).join('')
// console.log (productsHtml)

document.querySelector('#grid').innerHTML = productsHtml

//  Creating the InnerHTML for the side hover panel in   VV
//  the drop down list.                                  VV

const arr = ['Scotch', 'Bourbon', 'Vodka','Champagne']
const arrSubItems = ['Glassware', 'Shakers', 'Recipes']

let subItems =
arrSubItems.map ((subMenu) => `<li><a class= "sub-sub-menu" href= "#">${subMenu}</a></li>`).join ('')
// console.log(subItems)

let dropMenu =
arr.map (function (menuItems) {
    return `<ul class= "drop-list-side">
                <li class= "bold"><a class="alcohol" href="#"> ${menuItems} </a></li>${subItems}`           
}).join('')

console.log(dropMenu)
document.querySelector('.drop-down-over').innerHTML = dropMenu

// document.querySelector('.sub-sub').innerHTML = dropMenu




