
var scroller = scrollama();

function handleStepEnter(response) {
    response.element.style.opacity=1;
    if (response.element.getAttribute("data-step-1")) {
        let img_url = response.element.getAttribute("data-step-1");
        document.body.style.backgroundImage = 'url(' +img_url+ '), url("resources/images/background_9_3.png"),' +
            'url("resources/images/background_9_2.png"), url("resources/images/background_9_1.png"),' +
            'url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";
    }

    else if (response.element.getAttribute("data-step-2")) {
        let img_url = response.element.getAttribute("data-step-2");
        document.body.style.backgroundImage =  'url(' + img_url + '), url("resources/images/lineas_9.png"),' +
            'url("resources/images/background_9_4.png"),url("resources/images/background_9_3.png")' +
            ',url("resources/images/background_9_2.png"), url("resources/images/background_9_1.png"),' +
            'url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode= "normal";
    }

    else if (response.element.getAttribute("data-step-11")){
        let img_url = response.element.getAttribute("data-step-11");
        document.body.style.backgroundImage = 'url(' + img_url + '),url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundSize = "100% 100%";
        if (! document.querySelectorAll("#circulatorias > svg").length >= 1) {
            drawLines();
        }
    }

    else {
        let img_url = response.element.getAttribute("data-step");
        document.body.style.backgroundImage = 'url(' +img_url+ '),url("resources/images/background_1.png")';
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundSize = "100% 100%";
    }
}

function handleStepExit(response) {
    response.element.style.opacity=0.4;
}

function drawLines(){
    var margin = {top: 0, right: 0, bottom: 100, left: 0},
        width = window.innerWidth/5,
        height = window.innerHeight/6;

    var parseDate = d3.time.format("%Y-%m-%d").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickValues([])
        .tickSize(0)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .tickValues([])
        .tickSize(0)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.fecha); })
        .y(function(d) { return y(d.enfermedad); });

    var chart1 = d3.select("#circulatorias")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var chart2 = d3.select("#respiratorias")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    /* Leer los datos en el csv*/
    d3.csv("resources/data/muertes_anio.csv", function(error, data) {
        color.domain(d3.keys(data[0]).filter(function(key) { return key !== "fecha"; }));

        data.forEach(function(d) {
            d.fecha = parseDate(d.fecha);
        });

        var enfermedades = color.domain().map(function(name) {
            return {
                name: name,
                values: data.map(function(d) {
                    return {fecha: d.fecha, enfermedad: +d[name]};
                })
            };
        });


        x.domain(d3.extent(data, function(d) { return d.fecha; }));

        y.domain([
            d3.min(enfermedades, function(c) { return d3.min(c.values, function(v) { return v.enfermedad; }); }),
            d3.max(enfermedades, function(c) { return d3.max(c.values, function(v) { return v.enfermedad; }); })
        ]);

        chart1.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        chart1.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        chart1.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height + 16)
            .attr("font-size", 16)
            .text("enfermedades circulatorias");

        chart1.append("g")
            .append("text")
            .attr("y", height - 50)
            .attr("x", width - 40)
            .attr("font-size", 30)
            .style("text-anchor", "end")
            .text("22k");

        chart2.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        chart2.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        chart2.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height + 16)
            .attr("font-size", 16)
            .text("enfermedades respiratorias")

        chart2.append("g")
            .append("text")
            .attr("y", 30)
            .attr("x", width - 40)
            .attr("font-size", 30)
            .style("text-anchor", "end")
            .text("78k");

        var enfermedad_tipo1 = chart1.selectAll(".enfermedad_tipo")
            .data(enfermedades)
            .enter().append("g")
            .attr("class", "enfermedad_tipo");

        var path1 = chart1.selectAll(".enfermedad_tipo").append("path")
            .attr("class", "line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { if (d.name == "total_enfermedad_circulatorio")
            {return "#000";}
            else {return "rgba(255,255,255,0)";}
            });

        var enfermedad_tipo2 = chart2.selectAll(".enfermedad_tipo")
            .data(enfermedades)
            .enter().append("g")
            .attr("class", "enfermedad_tipo");

        var path2 = chart2.selectAll(".enfermedad_tipo").append("path")
            .attr("class", "line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { if (d.name == "total_enfermedad_respiratorio")
            {return "#000"}
            else {return "rgba(255,255,255,0)";}
            });

        var totalLength1 = [path1[0][0].getTotalLength(), path1[0][1].getTotalLength()];
        var totalLength2 = [path2[0][0].getTotalLength(), path2[0][1].getTotalLength()];

        console.log(totalLength1);
        console.log(totalLength2);

        d3.select(path1[0][0])
            .attr("stroke-dasharray", totalLength1[0] + " " + totalLength1[0] )
            .attr("stroke-dashoffset", totalLength1[0])
            .transition()
            .duration(5000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);

        d3.select(path1[0][1])
            .attr("stroke-dasharray", totalLength1[1] + " " + totalLength1[1] )
            .attr("stroke-dashoffset", totalLength1[1])
            .transition()
            .duration(5000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);

        d3.select(path2[0][0])
            .attr("stroke-dasharray", totalLength2[0] + " " + totalLength2[0] )
            .attr("stroke-dashoffset", totalLength2[0])
            .transition()
            .duration(5000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);

        d3.select(path2[0][1])
            .attr("stroke-dasharray", totalLength2[1] + " " + totalLength2[1] )
            .attr("stroke-dashoffset", totalLength2[1])
            .transition()
            .duration(5000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);
    });
}


scroller
    .setup({
        step: ".step",
        // debug: true,
        offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);


