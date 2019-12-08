var frame = {
    width: 700,
    height: 395
}

var svg = d3.select('#app')
            .append("svg")
            .attr("viewBox", [0, 0, frame.width, frame.height]);


var g = svg.append("g")
      .attr("cursor", "grab");

    g.append("svg:image")
      .attr("xlink:href", "imgs/timg.jpeg")
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', frame.width)
      .attr('height', frame.height);

    g.append('circle')
        .attr('fill', 'red')
        .attr('cx', 120)
        .attr('cy', 60)
        .attr('r', 15)
    

    svg.call(d3.zoom()
        .extent([[0, 0], [frame.width, frame.height]])
        .scaleExtent([0.5, 8])
        .on("zoom", zoomed));

function dragstarted() {
    d3.select(this).raise();
    g.attr("cursor", "grabbing");
}
        
function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended() {
    g.attr("cursor", "grab");
}

function zoomed() {
    g.attr("transform", d3.event.transform);
}

