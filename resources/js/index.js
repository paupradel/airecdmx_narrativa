
var scroller = scrollama();

// function handleStepEnter(response) {
//     response.element.style.opacity=1;
//     let img_url=response.element.getAttribute("data-step");
//     document.body.style.backgroundImage='url('+img_url+'),url("resources/images/background_1.png")';
//     document.body.style.backgroundBlendMode = "multiply";
// }

function handleStepEnter(response) {
    response.element.style.opacity=1;
    if (response.element.getAttribute("data-step-1")) {
        let img_url = response.element.getAttribute("data-step-1");
        document.body.style.backgroundImage = 'url(' +img_url+ '), url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";

    }

    else if (response.element.getAttribute("data-step-2")) {
        let img_url = response.element.getAttribute("data-step-2");
        document.body.style.backgroundImage = 'url(' +img_url+ '), url("resources/images/background_9_1.png"),' +
            ' url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";

    }

    else if (response.element.getAttribute("data-step-3")) {
        let img_url = response.element.getAttribute("data-step-3");
        document.body.style.backgroundImage = 'url(' +img_url+ '),url("resources/images/background_9_2.png"), ' +
            'url("resources/images/background_9_1.png"), url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";
    }

    else if (response.element.getAttribute("data-step-4")) {
        let img_url = response.element.getAttribute("data-step-4");
        document.body.style.backgroundImage = 'url(' +img_url+ '), url("resources/images/background_9_3.png"), ' +
            'url("resources/images/background_9_2.png"), url("resources/images/background_9_1.png"), ' +
            'url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";

    }

    else if (response.element.getAttribute("data-step-5")) {
        let img_url = response.element.getAttribute("data-step-5");
        document.body.style.backgroundImage = 'url(' + img_url + '), url("resources/images/lineas_9.png"),' +
            'url("resources/images/background_9_4.png"),url("resources/images/background_9_3.png")' +
            ',url("resources/images/background_9_2.png"), url("resources/images/background_9_1.png"), ' +
            'url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";
    }

    else {
        let img_url = response.element.getAttribute("data-step");
        document.body.style.backgroundImage = 'url(' +img_url+ '),url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode = "multiply";
    }
}

function handleStepExit(response) {
    response.element.style.opacity=0.4;
}

scroller
    .setup({
        step: ".step",
        debug: true,
        offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);
