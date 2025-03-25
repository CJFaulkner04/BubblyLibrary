let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let acc = document.querySelector(".acc");
let navPro = document.querySelector(".navPro");

window.onscroll = () => {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //nav.style.backgroundColor = "rgba(227, 227, 227, 0.8)";
        nav.style.width = "300px";
        nav.style.border = "none";
        nav.style.borderRadius= "20px";
        nav.style.padding = "5px";
        nav.style.boxShadow = " 0 0px 5px 1px rgba(0,0,0,0.1)"
        ul.style.width = "200px";
        //acc.innerHTML = `<i class="fa-solid fa-phone fa-md"></i>`;
        acc.style.width ="30px";
        
        navPro.style.width = "30px";
        navPro.innerHTML = `<div class="imgWrapper">
                    <img src="images/me.png">
                </div>`;
    } else {
        nav.style.backgroundColor = "white";
        nav.style.width = "100vw";
        nav.style.border = "none";
        nav.style.borderBottom = "1px solid rgb(223, 223, 223)";
        nav.style.borderRadius = "0";
        nav.style.padding = "10px 0";
        nav.style.boxShadow = "none"
        ul.style.width = "250px";
       // acc.innerHTML = `<i class="fa-solid fa-phone fa-md"></i> <i class="fa-brands fa-linkedin-in fa-lg"></i> <i class="fa-brands fa-github-alt fa-lg"></i>`;
        acc.style.width ="100px";
        navPro.style.width = "100px";
        navPro.innerHTML = `<div class="imgWrapper">
                    <img src="images/me.png">
                </div>
                <h1>Bubbly</h1>`;

    }
}