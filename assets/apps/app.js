let addBtn = document.querySelectorAll(".addBtn")
let productCount = document.getElementById("productCount")


addBtn.forEach(btn => {
    btn.addEventListener("click", function (a) {
        a.preventDefault();

        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let arr = JSON.parse(localStorage.getItem("basket"))

        let productId = this.parentElement.getAttribute("data-id");
        let existProduct = arr.find(p => p.id == productId )
        if (existProduct == undefined) {
            arr.push({
                id: productId,
                price: this.previousElementSibling.firstElementChild.innerText,
                imageURL: this.parentElement.previousElementSibling.getAttribute("src"),
                name: this.parentElement.firstElementChild.innerText,
                count: 1
            })
        }
        else {
            existProduct.count++;
        }
        localStorage.setItem("basket", JSON.stringify(arr))
        console.log();
        writeProductCount()

    })
})

function writeProductCount(){
    if (localStorage.getItem("basket")!=null) {
        let arr = JSON.parse(localStorage.getItem("basket"))
        productCount.innerText=arr.length
        // let totalCount = 0;
        // arr.map(product=>{
        //     totalCount+=product.count
        // })
        // productCount.innerText=totalCount;
    }

}

writeProductCount()
