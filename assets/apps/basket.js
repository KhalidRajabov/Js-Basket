let table = document.getElementById("table")
let sumTotalPrice = 0;
let clearLS = document.getElementById("clear-ls")
let fcont= document.getElementById("hide-it")
let scont= document.getElementById("hide-this")
let basketNotifier = document.getElementById("basket-notifier")
clearLS.onclick=_=>{
    localStorage.clear()
    location.reload()
}
window.addEventListener('load', (event) => {
    if (localStorage.getItem("basket")==null) {
     fcont.classList.add("d-none")
     scont.classList.add("d-none")
     basketNotifier.classList.remove("d-none")
    }
    else{
        fcont.classList.remove("d-none")
        scont.classList.remove("d-none")
        basketNotifier.classList.add("d-none")
    }
  });
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
            //let plusicon = document.createElement("i")
            //plusicon.classList.add("fa-solid", "fa-circle-plus")
            //let minusicon = document.createElement("i")
            //minusicon.classList.add("fa-solid", "fa-circle-minus")
            let tdCount = document.createElement("td")
            tdCount.innerText= product.count  ;
            
            let SubTd = document.createElement("td")
            let spantag = `<span class="span" style="cursor: pointer; color: red; font-size: 150%" id="span">x</span>`
            let deleteTd = document.createElement("td")
            deleteTd.innerHTML=spantag
            SubTd.innerHTML=product.count*product.price + "$"; 
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