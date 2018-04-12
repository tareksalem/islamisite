express.renderComponent(function () {
    return (`
        <div class="wrapper-homepage">
            <!--header-->
                <header></header>
            <!--end header-->
        </div>
    `)
}, ".page-wrapper", {
    scripts: ["css/enMain.css", "css/headercomponents/headerEn.css", "js/english-site/header.js"]
}, function (component) {

})

