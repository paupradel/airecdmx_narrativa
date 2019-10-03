
var scroller = scrollama();

function handleStepEnter(response) {
    response.element.style.opacity=1;
}

scroller
    .setup({
        step: ".step",
        debug: true,
    })
    .onStepEnter(handleStepEnter)