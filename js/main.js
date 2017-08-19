(function() {

    var queue = d3.queue(1);
    var keys = ["ukr", "hist", "eng", "math", "geo"];

    // завантажує всі svg по черзі
    keys.forEach(function(key) {
        queue.defer(load_svg, key);
    });


    d3.selectAll("ul.breadcrumb li")
        .on("click", function(d) {
            var test = d3.select(this).attr("data-test");

            d3.selectAll(".svg-container").classed("hidden", true);
            d3.select("#"+test).classed("hidden", false);

            d3.selectAll("ul.breadcrumb li").classed("active", false);
            d3.select(this).classed("active", true);
        });


    function load_svg(key, cb) {

        d3.text("svg/" + key + ".svg", function(err, data) {

            if (err) throw err;

            d3.select("#" + key)
                .html(data)
                .select("svg")
                .attr("width", "100%")
                .attr("height", "100%");
            cb(err);
        })
    }

})();

