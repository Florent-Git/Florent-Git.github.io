let _GET = function(name) {
    let ret;
    window.location.search
        .split("&")
        .forEach(arg =>
            arg.match(`\\??${name}=\\w+`) ?
                ret = arg.split("=")[1] : undefined
        );
    return ret;
};

$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#content").load(_GET("page") === undefined ? "pages/home.html" : `pages/${_GET("page")}.html`);
});