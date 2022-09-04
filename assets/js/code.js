let body_pag = document.querySelector("body")

let set_main = document.createElement("section")
set_main.classList.add("backg","d-flex", "flex-column")
body_pag.appendChild(set_main)

let div_navBar = document.createElement("div")
div_navBar.classList.add("d-flex","row")
set_main.appendChild(div_navBar)

let img_paramount = document.createElement("img")
img_paramount.src = "/assets/img/paramount.svg"
img_paramount.classList.add("box")
div_navBar.appendChild(img_paramount)

let divInt = document.createElement("div")
divInt.classList.add("d-flex","col-8","align-items-center","mt-2","ms-2")
div_navBar.appendChild(divInt)

let navText = document.createElement("span")
navText.innerText = "HALO:"
navText.classList.add("fontText")
divInt.appendChild(navText)

let navText1 = document.createElement("span")
navText1.innerText = " VER AHORA"
navText1.classList.add("fontText1")
divInt.appendChild(navText1)

let divInt1 = document.createElement("ul")
divInt1.classList.add("d-flex","col-2","align-items-center","justify-content-center","mt-2","ps-5")
div_navBar.appendChild(divInt1)

let navA = document.createElement("a")
navA.innerText = "INICIAR SESIÓN"
navA.href = "https://www.paramountplus.com/co/signin/"
navA.classList.add("text-decoration-none","fontText2")
divInt1.appendChild(navA)

let divMain = document.createElement("div")
divMain.classList.add("d-flex","flex-column","padSet")
set_main.appendChild(divMain)

let divSet = document.createElement("div")
divSet.classList.add("d-flex","flex-column")
divMain.appendChild(divSet)

let setText1 = document.createElement("h1")
setText1.classList.add("texts")
setText1.innerHTML = "HISTORIAS ÚNICAS.<br>ESTRELLAS ICÓNICAS.<br>UNA MONTAÑA DE<br> ENTRETENIMIENTO."
divSet.appendChild(setText1)

let divSet1 = document.createElement("div")
divSet1.classList.add("d-flex","flex-column")
divMain.appendChild(divSet1)

let setText4 = document.createElement("span")
setText4.classList.add("texts1")
setText4.innerHTML = "Suscríbete por $13,900.00 COP al Mes,<br>Cancela en cualquier momento.<br>Únete ahora y obtén 7 días gratis."
divSet1.appendChild(setText4)

let divBtn = document.createElement("div")
divBtn.classList.add("d-flex","flex-column","pb-5","mb-5")
divMain.appendChild(divBtn)

let btn1 = document.createElement("a")
btn1.innerText = "SUSCRÍBETE A PARAMOUNT+"
btn1.classList.add("btn","btns")
divBtn.appendChild(btn1)

let btn2 = document.createElement("a")
btn2.innerText = "YA TENGO PARAMOUNT+"
btn2.classList.add("btn","btns1")
divBtn.appendChild(btn2)

let btn3 = document.createElement("a")
btn3.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
btn3.classList.add("btn","btns1")
divBtn.appendChild(btn3)

let set_main1 = document.createElement("section")
set_main1.classList.add("backg1")
body_pag.appendChild(set_main1)

let divset2 = document.createElement("div")
divset2.classList.add("d-flex","flex-column","padSet1")
set_main1.appendChild(divset2)

let setText5 = document.createElement("h3")
setText5.classList.add("texts")
setText5.innerHTML = "SOMOS ORIGINALES Y<br>EXCLUSIVOS"
divset2.appendChild(setText5)

let div1set2 = document.createElement("div")
div1set2.classList.add("texts1")
div1set2.innerHTML = "Disfruta de historias únicas, estrellas icónicas y programas<br> exclusivos que no encontrarás en ningún otro lugar."
divset2.appendChild(div1set2)

let set1Main1 = document.createElement("section")
set1Main1.classList.add("slider1","padSlider")
set_main1.appendChild(set1Main1)

let divSet1Main1 = document.createElement("div")
divSet1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(divSet1Main1)

let imgSet1Main1 = document.createElement("img")
imgSet1Main1.classList.add("w-100")
imgSet1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/halo_s1_poster_1400x2100_nb_022822_2.jpg"
divSet1Main1.appendChild(imgSet1Main1)

let div1Set1Main1 = document.createElement("div")
div1Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div1Set1Main1)

let img1Set1Main1 = document.createElement("img")
img1Set1Main1.classList.add("w-100")
img1Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/first_lady_s1_poster_1400x2100_nb_032322_2.jpg"
div1Set1Main1.appendChild(img1Set1Main1)

let div2Set1Main1 = document.createElement("div")
div2Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div2Set1Main1)

let img2Set1Main1 = document.createElement("img")
img2Set1Main1.classList.add("w-100")
img2Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/enviados_s1_latam_poster_1400x2100_nb_011822.jpg"
div2Set1Main1.appendChild(img2Set1Main1)

let div3Set1Main1 = document.createElement("div")
div3Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div3Set1Main1)

let img3Set1Main1 = document.createElement("img")
img3Set1Main1.classList.add("w-100")
img3Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowstone_s4_poster_1400x2100_nb_102621_1.jpg"
div3Set1Main1.appendChild(img3Set1Main1)

let div4Set1Main1 = document.createElement("div")
div4Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div4Set1Main1)

let img4Set1Main1 = document.createElement("img")
img4Set1Main1.classList.add("w-100")
img4Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/rupauls_dragrace_s14_poster_1400x2100_nb_012722_0.jpg"
div4Set1Main1.appendChild(img4Set1Main1)

let div5Set1Main1 = document.createElement("div")
div5Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div5Set1Main1)

let img5Set1Main1 = document.createElement("img")
img5Set1Main1.classList.add("w-100")
img5Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowjackets_s1_poster_1400x2100_nb_111021_1.jpg"
div5Set1Main1.appendChild(img5Set1Main1)

let div6Set1Main1 = document.createElement("div")
div6Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div6Set1Main1)

let img6Set1Main1 = document.createElement("img")
img6Set1Main1.classList.add("w-100")
img6Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/killing_eve_s4_poster_1400x2100_021822.jpg"
div6Set1Main1.appendChild(img6Set1Main1)

let div7Set1Main1 = document.createElement("div")
div7Set1Main1.classList.add("sizeImgSlider")
set1Main1.appendChild(div7Set1Main1)

let img7Set1Main1 = document.createElement("img")
img7Set1Main1.classList.add("w-100")
img7Set1Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/sproc_salone_poster_1400x2100_nb_121021_0.jpg"
div7Set1Main1.appendChild(img7Set1Main1)

let set2_main1 = document.createElement("section")
set2_main1.classList.add("backg2")
body_pag.appendChild(set2_main1)

let divset2_main1 = document.createElement("div")
divset2_main1.classList.add("d-flex","flex-column","padSet2")
set2_main1.appendChild(divset2_main1)

let divIntSet2_main1 = document.createElement("h3")
divIntSet2_main1.classList.add("texts")
divIntSet2_main1.innerHTML = "TENEMOS TU<br>CONTENIDO<br>FAVORITO"
divset2_main1.appendChild(divIntSet2_main1)

let divInt1Set2_main1 = document.createElement("div")
divInt1Set2_main1.classList.add("texts1")
divInt1Set2_main1.innerHTML = "Desde películas taquilleras y series reconocidas a tus programas<br>favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez.                            "
divset2_main1.appendChild(divInt1Set2_main1)

let set2Main1 = document.createElement("section")
set2Main1.classList.add("slider1","padSlider1")
set2_main1.appendChild(set2Main1)

let divSet2Main1 = document.createElement("div")
divSet2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(divSet2Main1)

let imgSet2Main1 = document.createElement("img")
imgSet2Main1.classList.add("w-100")
imgSet2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/1883_s1_poster_1400x2100_nb_030722.jpg"
divSet2Main1.appendChild(imgSet2Main1)

let div1Set2Main1 = document.createElement("div")
div1Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div1Set2Main1)

let img1Set2Main1 = document.createElement("img")
img1Set2Main1.classList.add("w-100")
img1Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/paw_patrol_s8a_poster_1400x2100_nb_100521_0.jpg"
div1Set2Main1.appendChild(img1Set2Main1)

let div2Set2Main1 = document.createElement("div")
div2Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div2Set2Main1)

let img2Set2Main1 = document.createElement("img")
img2Set2Main1.classList.add("w-100")
img2Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/resistire_s2_poster_1400x2100_032222.jpg"
div2Set2Main1.appendChild(img2Set2Main1)

let div3Set2Main1 = document.createElement("div")
div3Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div3Set2Main1)

let img3Set2Main1 = document.createElement("img")
img3Set2Main1.classList.add("w-100")
img3Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/patrick_star_s1_poster_1400x2100_120721.jpg"
div3Set2Main1.appendChild(img3Set2Main1)

let div4Set2Main1 = document.createElement("div")
div4Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div4Set2Main1)

let img4Set2Main1 = document.createElement("img")
img4Set2Main1.classList.add("w-100")
img4Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/madame_x_sa_poster_1400x2100_nb_093021_0.jpg"
div4Set2Main1.appendChild(img4Set2Main1)

let div5Set2Main1 = document.createElement("div")
div5Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div5Set2Main1)

let img5Set2Main1 = document.createElement("img")
img5Set2Main1.classList.add("w-100")
img5Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/arriba_chef_s1a_poster_1400x2100_nb_070221.jpg"
div5Set2Main1.appendChild(img5Set2Main1)

let div6Set2Main1 = document.createElement("div")
div6Set2Main1.classList.add("sizeImgSlider")
set2Main1.appendChild(div6Set2Main1)

let img6Set2Main1 = document.createElement("img")
img6Set2Main1.classList.add("w-100")
img6Set2Main1.src= "//wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/cecilia_s1_poster_1400x2100_nb_121721.jpg"
div6Set2Main1.appendChild(img6Set2Main1)

let set3_main1 = document.createElement("section")
set3_main1.classList.add("backg3")
body_pag.appendChild(set3_main1)

let divset3_main1 = document.createElement("div")
divset3_main1.classList.add("d-flex","flex-column","padSet3", "align-items-center")
set3_main1.appendChild(divset3_main1)

let divIntSet3_main1 = document.createElement("h3")
divIntSet3_main1.classList.add("texts")
divIntSet3_main1.innerHTML = "CUANDO QUIERAS, DONDE QUIERAS"
divset3_main1.appendChild(divIntSet3_main1)

let divInt1Set3_main1 = document.createElement("div")
divInt1Set3_main1.classList.add("texts1","text-center")
divInt1Set3_main1.innerHTML = "Suscríbete por $13,900.00 COP al Mes.<br>Cancela en cualquier momento."
divset3_main1.appendChild(divInt1Set3_main1)

let div1set3_main1 =  document.createElement("div")
div1set3_main1.classList.add("d-flex","flex-column","pb-5","mb-5")
divset3_main1.appendChild(div1set3_main1)

let btn1Set3 = document.createElement("a")
btn1Set3.innerText = "SUSCRÍBETE A PARAMOUNT+"
btn1Set3.classList.add("btn","btns2")
div1set3_main1.appendChild(btn1Set3)

let btn2Set3 = document.createElement("a")
btn2Set3.innerText = "YA TENGO PARAMOUNT+"
btn2Set3.classList.add("btn","btns3")
div1set3_main1.appendChild(btn2Set3)

let btn3Set3 = document.createElement("a")
btn3Set3.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
btn3Set3.classList.add("btn","btns3")
div1set3_main1.appendChild(btn3Set3)

let fooTer = document.createElement("footer")
fooTer.classList.add("backFooter")
body_pag.appendChild(fooTer)

let sectionFooTer = document.createElement("section")
sectionFooTer.classList.add("d-flex","padSet4","flex-column")
fooTer.appendChild(sectionFooTer)

let divSetFooter = document.createElement("div")
divSetFooter.classList.add("d-flex","flex-row")
sectionFooTer.appendChild(divSetFooter)

let img1_paramount = document.createElement("img")
img1_paramount.src = "/assets/img/paramount.svg"
img1_paramount.classList.add("box2")
divSetFooter.appendChild(img1_paramount)

let div1SetFooter = document.createElement("div")
div1SetFooter.classList.add("d-flex","flex-row")
sectionFooTer.appendChild(div1SetFooter)

let div1IntSetFooter = document.createElement("div")
div1IntSetFooter.classList.add("d-flex","flex-column","padDivSetFooter")
div1SetFooter.appendChild(div1IntSetFooter)

let h3DivSetFooter = document.createElement("h3")
div1IntSetFooter.appendChild(h3DivSetFooter)

let aDivSetFooter = document.createElement("a")
aDivSetFooter.innerText = "Navegación del sitio"
aDivSetFooter.classList.add("d-flex","text-decoration-none","fontText3",)
h3DivSetFooter.appendChild(aDivSetFooter)

let a1DivSetFooter = document.createElement("a")
a1DivSetFooter.innerText = "Paramount+ Colombia"
a1DivSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div1IntSetFooter.appendChild(a1DivSetFooter)

let a2DivSetFooter = document.createElement("a")
a2DivSetFooter.innerText = "Paramount+ Global"
a2DivSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div1IntSetFooter.appendChild(a2DivSetFooter)

let div2IntSetFooter = document.createElement("div")
div2IntSetFooter.classList.add("d-flex","flex-column","pad1DivSetFooter")
div1SetFooter.appendChild(div2IntSetFooter)

let h3Div2IntSetFooter = document.createElement("h3")
div2IntSetFooter.appendChild(h3Div2IntSetFooter)

let aH3Div2SetFooter = document.createElement("a")
aH3Div2SetFooter.innerText = "Privacidad y términos"
aH3Div2SetFooter.classList.add("d-flex","text-decoration-none","fontText3",)
h3Div2IntSetFooter.appendChild(aH3Div2SetFooter)

let a1Div2IntSetFooter = document.createElement("a")
a1Div2IntSetFooter.innerText = "Acuerdo de Suscripción"
a1Div2IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div2IntSetFooter.appendChild(a1Div2IntSetFooter)

let a2Div2IntSetFooter = document.createElement("a")
a2Div2IntSetFooter.innerText = "Términos de Uso"
a2Div2IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div2IntSetFooter.appendChild(a2Div2IntSetFooter)

let a3Div2IntSetFooter = document.createElement("a")
a3Div2IntSetFooter.innerText = "Política de privacidad y Política"
a3Div2IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div2IntSetFooter.appendChild(a3Div2IntSetFooter)

let a4Div2IntSetFooter = document.createElement("a")
a4Div2IntSetFooter.innerText = "Política de cookies"
a4Div2IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div2IntSetFooter.appendChild(a4Div2IntSetFooter)

let div3IntSetFooter = document.createElement("div")
div3IntSetFooter.classList.add("d-flex","flex-column")
div1SetFooter.appendChild(div3IntSetFooter)

let h3div3IntSetFooter = document.createElement("h3")
div3IntSetFooter.appendChild(h3div3IntSetFooter)

let aH3Div3SetFooter = document.createElement("a")
aH3Div3SetFooter.innerText = "Soporte"
aH3Div3SetFooter.classList.add("d-flex","text-decoration-none","fontText3",)
h3div3IntSetFooter.appendChild(aH3Div3SetFooter)

let a1div3IntSetFooter = document.createElement("a")
a1div3IntSetFooter.innerText = "Ayuda / Contáctanos"
a1div3IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div3IntSetFooter.appendChild(a1div3IntSetFooter)

let a2div3IntSetFooter = document.createElement("a")
a2div3IntSetFooter.innerText = "Guia de clasificaciones"
a2div3IntSetFooter.classList.add("d-flex","text-decoration-none","fontText4")
div3IntSetFooter.appendChild(a2div3IntSetFooter)

let div4IntSetFooter = document.createElement("div")
div4IntSetFooter.innerText = "© 2022 Paramount. Todos los derechos reservados."
div4IntSetFooter.classList.add("d-flex","flex-column","fontText5")
sectionFooTer.appendChild(div4IntSetFooter)

$(document).ready(function () {
    $('.slider1').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrow: true,

    });
});

const myArray =[
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…_attribute/1883_s1_poster_1400x2100_nb_030722.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…e/paw_patrol_s8a_poster_1400x2100_nb_100521_0.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…ttribute/resistire_s2_poster_1400x2100_032222.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…ibute/patrick_star_s1_poster_1400x2100_120721.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…bute/madame_x_sa_poster_1400x2100_nb_093021_0.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…te/arriba_chef_s1a_poster_1400x2100_nb_070221.jpg',
    'https://wwwimage-intl.pplusstatic.com/thumbnails/p…tribute/cecilia_s1_poster_1400x2100_nb_121721.jpg'
]

myArray.forEach(item => {
    
})