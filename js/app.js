const btn= document.querySelectorAll("button.add");
btn.forEach(function(button,index){
 button.addEventListener("click",function(event){
    var btnItem= event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productGia = product.querySelector("span").innerText
    addCart(productImg, productGia, productName)
 })   
})
function addCart(productImg, productGia, productName){
    var addTr = document.createElement("tr")
    var cartItem= document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML== productName){
alert("Sẩn phẩm của bạn đã có trong giỏ hàng")
return
        }
    
    }
    var trcontent = '<tr><td style="display:flex ; align-items: center; width: 366px; " > <img style="width:80px ; height: 80px;margin: 5px;"  src="'+productImg+'"><span class="title" >'+productName+'</span></td><td style=" align-items: center;width: 265px;  " ><p><span class="prices">'+productGia+'</span><sup>đ</sup></p></td><td style=" align-items: center;width: 50px;  "> <input  style="width: 50px;outline:none; " type="number" value="1" min="1"></td><td style="cursor:pointer ; width: 50px;" ><span class="delete">Xóa</span></td></tr>'
    addTr.innerHTML = trcontent
    var cartTable= document.querySelector("tbody")
    cartTable.append(addTr)
    cartTotal()
    deleteCart()
    
    
}
//---------------------------------------------------------------------t otalprice
function cartTotal(){
    var cartItem= document.querySelectorAll("tbody tr")
   
    totalC= 0
    for (var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector('.prices').innerHTML
        totalA= inputValue*productPrice*1000
        // totalB = totalA.tolocaleString('de-DE')
        totalC=totalC+totalA
        // totalD= totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total p  span")
    var cartPrice = document.querySelector(".gio  span")
    cartTotalA.innerHTML= totalC.toLocaleString('de-DE')
    cartPrice.innerHTML= totalC.toLocaleString('de-DE')
    inputchange()
    
}
//------------------xóa-----------------------------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0 ; i<cartItem.length; i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete= event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            cartTotal()
        })
    }
    

}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0 ; i<cartItem.length; i++){
        var inputValue = document.querySelector("input")
       inputValue.addEventListener("change",function(){
        cartTotal()
       })
        
    }

}
