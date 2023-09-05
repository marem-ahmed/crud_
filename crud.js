let nameProudct =document.getElementById("nameproduct");
let priceProudct = document.getElementById("price");
let categorytProudct = document.getElementById("category");
let descriptionProudct = document.getElementById("description");
let button=document.getElementById("btn")
let button2 = document.getElementById("btn2")

let fix;
if(button){
    button.addEventListener("click", creatproduct);
}






var products=[]
if(localStorage.getItem("allproducts") !=null){
     products = JSON.parse(localStorage.getItem("allproducts"));
     display()
}

function creatproduct(e){
        e.preventDefault()

    if(validation()==true){

   
  var product = {
        name:nameProudct.value,
        price:priceProudct.value,
        category: categorytProudct.value,
        description:descriptionProudct.value,




    }
    products.push(product);
    localStorage.setItem("allproducts", JSON.stringify(products));
    display();
    clear();




}
else{
    window.alert("please complete the data")
}
}
function clear(){
     nameProudct.value=""
     priceProudct.value=""
    descriptionProudct.value=""
    categorytProudct.value=""
}
function display(){
    let container=``;
    for( let i=0;i< products.length;i++){
   
        container += `  <tr>
    <td>${i} </td>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].description}</td>
    <td><button class="bg-warning border-0 text-white rounded-1" onclick="update(${i})">Update</button></td>
    <td><button class="bg-danger border-0 text-white rounded-1" onclick="deleteData(${i})">delete</button></td>
  </tr>
   
   
   
  `
    }
    document.getElementById("tbody").innerHTML =container;
    
}

function deleteData(i){

products.splice(i,1)
localStorage.setItem("allproducts",JSON.stringify(products))
display();
}

let inSearch = document.getElementById("search").addEventListener("keyup", search)


 function search(term){
    console.log("mariam")

     let container = ``
     for (let i = 0; i < products.length; i++) {

         if (products[i].name.toLowerCase().includes(term.toLowerCase() )== true) {
             container += `<tr>
            <td>${i}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].description}</td>
            <td><button class="bg-warning border-0 text-white rounded-1" onclick="update(${i})">Update</button></td>
            <td><button class="bg-danger border-0 text-white rounded-1" onclick="deleteData(${i})">delete</button></td>
        </tr>`;
         }
     }
     document.getElementById("tbody").innerHTML = container;
    

 } 





function validation(){
    if (nameProudct.value != "" && priceProudct.value != "" && categorytProudct.value!= ""){
        return true;
    }
    else{
        return false;
    }
}

function update(i){
    fix=i;
    console.log(fix)
    
    nameProudct.value=products[i].name 
    categorytProudct.value = products[i].category
    descriptionProudct.value = products[i].description 
    priceProudct.value=products[i].price
   button.style.display='none'
   button2.style.display='flex'
}
 if(button2){
    button2.addEventListener("click",edit)
}
function edit(e){
    e.preventDefault
    products[fix].name = nameProudct.value
    products[fix].category=categorytProudct.value
    products[fix].description=descriptionProudct.value
    products[fix].price=priceProudct.value
    localStorage.setItem("allproducts", JSON.stringify(products));

    var container = ``;
    for (var i = 0; i < products.length; i++) {

        container += `  <tr>
    <td>${fix} </td>
    <td>${products[fix].name}</td>
    <td>${products[fix].price}</td>
    <td>${products[fix].category}</td>
    <td>${products[fix].description}</td>
    <td><button class="bg-warning border-0 text-white rounded-1" onclick="update(${i})">Update</button></td>
    <td><button class="bg-danger border-0 text-white rounded-1" onclick="deleteData(${i})">delete</button></td>
    </tr>`
}
   
   
   
    
    


    }