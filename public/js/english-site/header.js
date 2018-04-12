express.renderComponent(function () {
    return (`
            <div class="header-container animated slideInLeft">
                <nav class="nav-header">
                    <div class="container">
                       <div class="logo-site float-left">
                          <img class="responsive-img" src="images/logo-site.png" router="/"/>
                       </div>
                        <ul class="ul1-header float-right">
                            <li><a>invite a friend</a></li>
                             <li expName="languagesLi" class="li-language"><a>languages</a>
                            <ul expName="languagesUl" class="ul-languages">
                                <li><a router="/en">english</a></li>
                                <li><a router="/ar">arabic</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                </nav>
                <!--end navbar-->
                <!--container of header content-->
                <div class="text-center container-header-content container">
                    <h1 class="animated bounce">Islam Bot For All Muslims
                    </h1>
                    <button class="animated rubberBand login-btn-descord">Login With Discord</button>
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
