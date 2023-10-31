//NOTE - you can't comment inside of backticks 

let foodCard = (desc, id, imageURL, name, price) => { //setting the variables and defining the name, the ${} calls any specific variables to that spot in the html
    return `<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="product-item-title d-flex">
                <div class="bg-faded p-5 d-flex ms-auto rounded">
                    <h2 class="section-heading mb-0">
                        <span class="section-heading-upper">${name}</span> 
                        <span class="section-heading-lower">$${price}</span>
                    </h2>
                </div>
            </div>
            <img  class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${imageURL}" alt="..." />
            <div class="product-item-description d-flex me-auto">
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">${desc}.</p>
                </div>
                <br/>
                <button type="button" class="btn btn-primary" onclick='sendOrder(${JSON.stringify({ desc, id, imageURL, name, price })},this)'>Order</button>
            </div>
        </div>
    </div>
</section>`
}

//NOTE - this is displaying a limited version of the previous card for ordering
let orderCard = (name, price, imageURL) => {
    return `<section class="page-section">
    <div class="container">
        <div class="product-item">
            <div class="product-item-description d-flex">
                <div class="bg-faded p-5 d-flex ms-auto rounded">
                    <h2 class="section-heading mb-0">
                    <span class="section-heading-upper">${name}</span>
                    <span class="section-heading-lower">$${price}</span>
                    </h2>
                </div>
            </div>
        </div>
        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${imageURL}" alt="..." />
    </div>
</section>`
}