let table = document.getElementById("table")
let sumTotalPrice = 0;
if (localStorage.getItem("basket")!=null) {
    let arr = JSON.parse(localStorage.getItem("basket"))
    arr.forEach(product => {
        if (product.count>0) {
            
            let tr = document.createElement("tr")
            let tdImage = document.createElement("td")
            let image = document.createElement("img")
            image.src=product.imageURL
            image.style.width="100px"
            tdImage.append(image)
    
            let tdName = document.createElement("td")
            tdName.innerText=product.name
            let tdPrice = document.createElement("td")
            tdPrice.innerText=product.price + "$"
            let tdCount = document.createElement("td")
            tdCount.innerText=product.count
            let SubTd = document.createElement("td")
            let spantag = `<span class="span" style="cursor: pointer" id="span">x</span>`
            let deleteTd = document.createElement("td")
            deleteTd.innerHTML=spantag
            SubTd.innerHTML=product.count*product.price; 
            tr.append(tdImage, tdName, tdPrice, tdCount, SubTd, deleteTd)
            table.lastElementChild.append(tr)
            sumTotalPrice+=product.count*product.price;
            deleteTd.onclick=function(){
                this.parentElement.remove()
                if (product.count > 0) {
                    product.count = 0;
                    localStorage.setItem("basket", JSON.stringify(arr));
                    
                    location.reload()

                }        }
            
        }


    });
    let div = document.getElementById("total-price")
    div.classList.add("container", "total-price-section")
    div.classList.remove("d-none")
    let tdTotal = document.createElement("p")
    tdTotal.innerText="Total value: "
    let tdTotalPrice = document.createElement("p")
    tdTotalPrice.innerText+=sumTotalPrice + " $"
    div.append(tdTotal, tdTotalPrice)
    

}