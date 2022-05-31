let addBtn = document.querySelectorAll(".addBtn")



addBtn.forEach(btn => {
    btn.addEventListener("click", function (a) {
        a.preventDefault();
        
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let arr = JSON.parse(localStorage.getItem("basket"))

        let productId = this.parentElement.getAttribute("data-id");
        let existProduct = arr.find(p => { p.id == productId })
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
        console.log(arr);
    })
})



//49cu deqiqe