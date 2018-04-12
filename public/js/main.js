const express = new Express();
const router = express.Router;
router.initialRouter(function () {
    router.get("/", "home", function (req, res) {
        location.pathname = "/en"
    })
    router.get("/en", "home", function (req, res) {
        res.filterContent(".page-wrapper");
            res.render(false, "js/english-site/mainPage.js", ".page-wrapper");
    });
    router.get("/ar", "home", function (req, res) {
        res.filterContent(".page-wrapper");
        res.render(false, "js/arabic-site/mainPage.js", ".page-wrapper");
    });
});
