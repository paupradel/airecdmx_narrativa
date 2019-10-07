
var scroller = scrollama();

function handleStepEnter(response) {
    response.element.style.opacity=1;
    let img_url=response.element.getAttribute("data-step");
    document.body.style.backgroundImage='url('+img_url+'),url("resources/images/background_1.png")';
}

function handleStepExit(response) {
    response.element.style.opacity=0.4;
}

scroller
    .setup({
        step: ".step",
       // debug: true,
        offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);