
var scroller = scrollama();

function handleStepEnter(response) {
    response.element.style.opacity=1;
    document.body.style.backgroundImage='url(data-step)';
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