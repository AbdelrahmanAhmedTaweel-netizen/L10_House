function preparedesc(desc){
    return desc.replaceAll("L10N House" , `<span class="second fw-medium"><span class="first">L10N</span> House</span>`);
}

function openPopUp(popupName){
    $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000)
}

function closePopUp(popupName){
    $(`.popup[data-popup-name="${popupName}"]`).fadeOut(1000)
}

$(".popup .box").on("click", function(e){
    e.stopPropagation()
}) 

function showService(serviceIndex){
    let service = services[serviceIndex];
    let sectionsHtml = "";


service.sections.forEach(function(section){
    let pointEle = "";
    section.points.forEach(function(point){
        pointEle+=`<li>${point}</li>`;
    })
    sectionsHtml+=
            `<section class="mt-3">
                <h4>${section.title}</h4>
                <ol>${pointEle}</ol>
            </section>`;
});

    document.querySelector('.popup[data-popup-name="service"] .box').innerHTML = `
        <div class="head">
            <h4 class="text-center mb-3">services</h4>
            <i class="fas fa-times" onclick="closePopUp('service')"></i>
        </div>
        <div class="body">
            <h2 class="mb-5 second text-center">${service.title}</h2>
            <div class="row mb-4">
                <div class="col-lg-6">
                    <div class="item">
                        <p>${preparedesc(service.description)}</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item">
                        <img src="images/${service.img}" class="img-fluid rounded-3" alt="">
                    </div>
                </div>
            </div>
            ${sectionsHtml}
        </div>
    `;

    openPopUp("service");
}