let bagItems = [];
onLoad();

function onLoad(){
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagIcon();
}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if (bagItems.length > 0) {
         bagItemCountElement.style.visibility="visible";
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility="hidden";
    }

}





function displayItemsOnHomePage() {
    let itemsContainerELement = document.querySelector('.items-container');
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `<div class="item-container">
                <img src="${item.image}" alt="Item image" class="item-image">
                <div class="rating">
                   ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="Item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price"> Rs ${item.current_price} </span>
                    <span class="orignal-price">Rs ${item.original_price} </span>
                    <span class="discount">  ${item.discount_percentage}  off </span>
                </div>
                <button class="btn-add-bag" onclick ="addToBag(${item.id})" >Add to Bag</button>
            </div>`;

    });
    itemsContainerELement.innerHTML = innerHtml;
}











