express.renderComponent(function () {
    return (`
            <div class="header-container animated slideInLeft">
                <nav class="nav-header">
                    <div class="container">
                       <div class="logo-site float-right">
                          <img class="responsive-img" src="images/logo-site.png" router="/ar"/>
                       </div>
                        <ul class="ul1-header float-left">
                            <li><a>دعوة صديق</a></li>
                             <li expName="languagesLi" class="li-language"><a>اختار اللغة</a>
                            <ul expName="languagesUl" class="ul-languages">
                                <li><a router="/en">الإنجليزية</a></li>
                                <li><a router="/ar">العربية</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                </nav>
                <!--end navbar-->
                <!--container of header content-->
                <div class="text-center container-header-content container">
                    <h1 class="animated bounce">البوت الأسلامي للمسلمين جميعا
                    </h1>
                    <button class="animated rubberBand login-btn-descord">الدخول بواسطة الدسكورد</button>
                </div>
                
                
                <!--end container of header content-->
                
            </div>
    `)
}, "header", {}, function (component) {
    component.languagesLi.toggleHover(function () {
        component.languagesUl.style.display = "block";
        component.languagesUl.animating([
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ], {
            duration: 400,
            fill: "forwards"
        });
    }, function () {
        component.languagesUl.animating([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], {
            duration: 400,
            fill: "forwards"
        }, function () {
            component.languagesUl.style.display = "none"
        });
    })
});
