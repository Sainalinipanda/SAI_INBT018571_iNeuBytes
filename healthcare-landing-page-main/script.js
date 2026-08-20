const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const department = document.getElementById("department").value;

    const message = document.getElementById("message").value.trim();

    if(
        name==="" ||
        email==="" ||
        phone==="" ||
        department==="" ||
        message==="")
    {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }

    if(phone.length!==10 || isNaN(phone)){
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    alert("Appointment Request Sent Successfully!");

    form.reset();

});
// ================= SERVICE MODAL =================

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const readButtons = document.querySelectorAll(".read-more");

const close = document.querySelector(".close");
const closeBtn = document.getElementById("closeBtn");

readButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        modalTitle.innerText=this.dataset.title;

        modalDescription.innerText=this.dataset.description;

        modal.style.display="flex";

    });

});

close.onclick=function(){

    modal.style.display="none";

}

closeBtn.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}
// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};