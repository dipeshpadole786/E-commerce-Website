let side_bar_button = document.querySelector(".heading_text .side");
let login_button = document.querySelector(".heading_text .login");
let close_button = document.querySelector(".login_form .close");
let cart = document.querySelector(".heading_text .cart");
let by_button = document.querySelector(".product_box .box button");
let productbox = document.querySelector(".product_box");
let text = document.querySelector(".product_box .box p").innerHTML;
let image = document.createElement("img");
let price = document.createElement("p");
let sidebar = document.querySelector(".sidebar_2");
let  close_cart_bar = document.querySelector(".sidebar_2 .close");
let input_email = document.querySelector(".login_form .input_box #email");
let input_password = document.querySelector(".login_form .input_box #e");
let input_username = document.querySelector(".login_form .input_box #Username");
let submit_button = document.querySelector(".login_form button");
let y =0;
submit_button.addEventListener("click", ()=>{
    let x = (Math.floor(Math.random()*10000))+1;
    let code = prompt("Enter varification code \n Varification code is "+x);
    if(code==x){
        y = 1;
        alert("Username ="+input_username.value + "\nGmail ID = "+input_email.value+"\n Password is = "+input_password.value+"\n Thank you");
        login_button.innerHTML = input_username.value;
        document.querySelector(".login_form").classList.remove("active");
        document.querySelector(".main_content .items").classList.remove("bt_active");

    }
});



let i = 1;

side_bar_button.addEventListener("click", ()=>{
    i++;
    if(i%2==0){
        document.querySelector(".main_content .side_bar").classList.add("active");
        document.querySelector(".main_content .items").classList.add("active");
        console.log("side bar activated");
    }else{
        document.querySelector(".main_content .side_bar").classList.remove("active");
        document.querySelector(".main_content .items").classList.remove("active");

        console.log("side bar activated");
    }
    
});
login_button.addEventListener("click", ()=>{
    document.querySelector(".login_form").classList.add("active");
    document.querySelector(".main_content .items").classList.add("bt_active");
});
close_button.addEventListener("click", ()=>{
    document.querySelector(".login_form").classList.remove("active");
    document.querySelector(".main_content .items").classList.remove("bt_active");
})
by_button.addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    console.log("it is clicked");
    image.src = "file:///C:/Users/Dipesh%20Padole/Documents/E%20commerse%20Website/grame.webp";
    image.height = 200;
    image.width = 200;
    image.style.borderRadius = "20px";
    sidebar.appendChild(image);
    price.innerHTML =  " Price is 250 Ruppes";
    price.style.fontSize = "20px";
    price.style.color = "white";
    price.style.fontWeight = "400";
    sidebar.appendChild(price);
    }else{
        alert("login first");
    }


});
document.querySelector(".product_box .box .bt2").addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    let image1 = document.createElement("img");
    let price1 = document.createElement("p");
    
    console.log("it is clicked");
    image1.src = "file:///C:/Users/Dipesh%20Padole/Documents/E%20commerse%20Website/pocket%20scale.webp";
    image1.height = 200;
    image1.width = 200;
    image1.style.borderRadius = "20px";
    sidebar.appendChild(image1);
    price1.innerHTML = "Price is 250 Ruppes";
    price1.style.fontSize = "20px";
    price1.style.color = "white";
    price1.style.fontWeight = "400";
    sidebar.appendChild(price1);
    }else{
        alert("login first");
    }
})
document.querySelector(".product_box .box .bt3").addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    let image2 = document.createElement("img");
    let price2 = document.createElement("p");
    
    console.log("it is clicked");
    image2.src = "http://127.0.0.1:5500/pocket%20scale.webp";
    image2.height = 200;
    image2.width = 200;
    image2.style.borderRadius = "20px";
    sidebar.appendChild(image2);
    price2.innerHTML = "Price is 250 Ruppes";
    price2.style.fontSize = "20px";
    price2.style.color = "white";
    price2.style.fontWeight = "400";
    sidebar.appendChild(price2);
    }else{
        alert("login first");
    }
    
})
document.querySelector(".product_box .box .bt4").addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    let image3 = document.createElement("img");
    let price3 = document.createElement("p");
    
    console.log("it is clicked");
    image3.src = "http://127.0.0.1:5500/pocket%20scale.webp";
    image3.height = 200;
    image3.width = 200;
    image3.style.borderRadius = "20px";
    sidebar.appendChild(image3);
    price3.innerHTML = "Price is 250 Ruppes";
    price3.style.fontSize = "20px";
    price3.style.color = "white";
    price3.style.fontWeight = "400";
    sidebar.appendChild(price3);
    }else{
        alert("login first");
    }
})
document.querySelector(".product_box .box .bt5").addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    let image4 = document.createElement("img");
    let price4 = document.createElement("p");
    
    console.log("it is clicked");
    image4.src = "http://127.0.0.1:5500/pocket%20scale.webp";
    image4.height = 200;
    image4.width = 200;
    image4.style.borderRadius = "20px";
    sidebar.appendChild(image4);
    price4.innerHTML = "Price is 250 Ruppes";
    price4.style.fontSize = "20px";
    price4.style.color = "white";
    price4.style.fontWeight = "400";
    sidebar.appendChild(price4);
    }else{
        alert("login first");
    }
})
document.querySelector(".product_box .box .bt6").addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    let image5 = document.createElement("img");
    let price5 = document.createElement("p");
    
    console.log("it is clicked");
    image5.src = "http://127.0.0.1:5500/pocket%20scale.webp";
    image5.height = 200;
    image5.width = 200;
    image5.style.borderRadius = "20px";
    sidebar.appendChild(image5);
    price5.innerHTML = "Price is 250 Ruppes";
    price5.style.fontSize = "20px";
    price5.style.color = "white";
    price5.style.fontWeight = "400";
    sidebar.appendChild(price5);
    }else{
        alert("login first");
    }
});
close_cart_bar.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    productbox.classList.remove("sideactive");
});
cart.addEventListener("click", ()=>{
    if(y==1){
    sidebar.classList.add("active");
    productbox.classList.add("sideactive");
    }else{
        alert("Login first");
    }
});

