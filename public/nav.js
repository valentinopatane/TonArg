const list = document.querySelector(".nav_ul");
const menu = document.querySelector(".menu_hamburger");
const sublist = document.querySelector(".nav_sublist");
const products = document.querySelector(".nav_products");


/*Menu button*/ 
menu.addEventListener('click',()=>{
    if(list.getAttribute('id')){
        list.removeAttribute('id')
    }else{
        list.setAttribute('id', 'nav_ul_display')
    }
});
/*Products button*/
products.addEventListener('click',()=>{
    if(products.getAttribute('id')){
        products.removeAttribute('id')
    }else{
        products.setAttribute('id', 'nav_products_active')
    }
    if(sublist.getAttribute('id')){
        sublist.removeAttribute('id')
    }else{
        sublist.setAttribute('id', 'show_sublist')
    }
});

/*Scrolling behavior*/

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset

    if(currentScroll <= 0){
        body.classList.remove("scroll_up")
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll_down")){
        body.classList.remove("scroll_up");
        body.classList.add("scroll_down");
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll_down")){
        body.classList.remove("scroll_down");
        body.classList.add("scroll_up");
    }

    lastScroll = currentScroll
})