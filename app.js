var list=document.getElementById("item-list")
function addItem(){
     var item=document.getElementById("todo-item")
     var li=document.createElement('li')
     li.setAttribute("class","listedItem")
     var text=document.createTextNode(item.value)
     var dltBtn=document.createElement("button")
     var dltTxt=document.createTextNode("DELETE")
     dltBtn.setAttribute("onclick","dltItem(this)")
     dltBtn.setAttribute("class","dltItem")
     dltBtn.appendChild(dltTxt)
     var edtBtn=document.createElement("button")
     var edtTxt=document.createTextNode("EDIT")
     edtBtn.setAttribute("onclick","edtItem(this)")
     edtBtn.setAttribute("class","edtItem")
     edtBtn.appendChild(edtTxt)

     
     li.appendChild(text)
     li.appendChild(dltBtn)
     li.appendChild(edtBtn)
     list.appendChild(li)
     item.value=""
}
function dltAll(){
   
    list.innerHTML=""
}
function dltItem(e){
    e.parentNode.remove()
   
}
function edtItem(e){
    var val=prompt("Enter Item", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val
}
