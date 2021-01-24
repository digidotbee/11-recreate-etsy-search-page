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
console.log (productsHtml)

document.querySelector('#grid').innerHTML = productsHtml
