express.renderComponent(function () {
    return (`
        <div class="wrapper-homepage">
            <!--header-->
                <header></header>
            <!--end header-->
        </div>
    `)
}, ".page-wrapper", {
    scripts: ["css/arMain.css", "css/headercomponents/headerArabic.css", "js/arabic-site/header.js"]
}, function (component) {

})

