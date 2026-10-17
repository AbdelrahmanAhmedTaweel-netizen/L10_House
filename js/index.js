let  navbar = document.querySelector(".navbar"),
     links = document.querySelectorAll(".navbar-nav .nav-link:not(.dropdown-toggle)"),
    contentServices = document.querySelector("#Services .row"),
    contentSectors = document.querySelector(".popup[data-popup-name='Sectors'] .row"),
    contentLanguages= document.querySelector(".popup[ data-popup-name='language'] .body"),
    services =[],
    loadingPageEle=document.querySelector(".loadingScreen");

function navScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", navScroll);
navScroll();
    


// function setActive() {
//   links.forEach(function (link) {
//     const section = document.querySelector(link.getAttribute("href"));
//     if (!section) return;
//     const top = section.offsetTop - navbar.offsetHeight;
//     const bottom = top + section.offsetHeight;

//     if (window.scrollY >= top && window.scrollY < bottom) {
//       links.forEach(function (l) {
//         l.classList.remove("active");
//       });
//       link.classList.add("active");
//     }
//   });
// }

// window.addEventListener("scroll", setActive);
// setActive();


async function getServices() {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/services");
     services = await res.json();
    console.log(services);

    let i=0;

    services.forEach(function (item) {
        contentServices.innerHTML += `
        <div class="col-md-6 box text-center wow ${((i+1)%2 ==0)? 'animate__fadeInRight' : 'animate__fadeInLeft'}">
            <div class="item">
                <img src="images/${item.icon}" alt="">
                <h4 class="my-3">${item.title}</h4>
                <p>${preparedesc(item.description.slice(0,150))}... <a class="first" onclick="showService(${i})">Read More</a></p>
            </div>
        </div>
        `;
        i++
    });
}
getServices();


async function getSectors() {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");
    let sectors = await res.json();
    console.log(sectors);
    sectors.forEach(function (item) {
        contentSectors.innerHTML += `
        <div class="col-lg-3 text-center">
            <div class="item rounded-3 p-3">
                <img src="images/sec/${item.icon}" class="img-fluid mb-3" alt="">
                <p class="mb-0">${item.name}</p>
            </div>
        </div>
        `;
    });
}
getSectors();


async function getLanguages() {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/languages");
    let languages = await res.json();
    console.log(languages);

    languages.forEach(function (item) {
        let list = "";

        item.languages.forEach(function (lang) {
            list += `<li><i class="far fa-dot-circle me-2"></i>${lang}</li>`;
        });

        contentLanguages.innerHTML += `
        <div class="content">
            <h5>${item.continent}</h5>
            <ul class="list-unstyled">
                ${list}
            </ul>
        </div>
        `;
    });
}
getLanguages();

 new WOW({
    animateClass: 'animate__animated'
 }).init();

 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:5,
    responsive:{
        0: {
            items:1
        },
        650: {
            items:2
        },
        850: {
            items:3
        },
        1050: {
            items:4
        },
        1250: {
            items:5
        }
    }
  });
});

window.addEventListener("load", function () {
        loadingPageEle.classList.add("hide");
        setTimeout(function () {
            loadingPageEle.classList.add("d-none");
        }, 1000);
});






