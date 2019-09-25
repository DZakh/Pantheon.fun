"use strict";

/* Swich img map and intaractive map */
let jmediaquery = window.matchMedia( "(min-width: 768px)" );
window.addEventListener('resize', function() {
  if (jmediaquery.matches) {
    loadMap();
    map.style.zIndex = "2";
  } else {
    map.style.zIndex = "0";
  }
});



/* Widget map */
const map = document.getElementById("widget-map");
let mapStateIsLoaded = 0;
let mapStateIsObserved = 0;

const mapScript = document.createElement("script");
mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true`;

function loadMap() {
  if (!(mapStateIsLoaded) && (mapStateIsObserved)) {
    map.appendChild(mapScript);
    mapStateIsLoaded = 1;
  }
}



/* Widget bookform */
const bookform = document.getElementById("bookform");

const bookScriptInit = document.createElement("script");
bookScriptInit.innerHTML = `(function (w,d,s,o,f,js,fjs){w['BookformObject']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);}(window,document,'script','Bookform','https://widget.bookform.ru/3458/js'));`;
const bookScriptForm = document.createElement("script");
bookScriptForm.innerHTML = `Bookform('embedded',{id:3458});`;



/* Observer */
const options = {
  rootMargin: "0px 0px 75% 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === map) {
        mapStateIsObserved = 1;
        if (jmediaquery.matches) {
          loadMap();
          map.style.zIndex = "2";
        }
      }
      if (entry.target === bookform) {
        bookform.appendChild(bookScriptInit);
        bookform.appendChild(bookScriptForm);
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(map);
observer.observe(bookform);

// SOMENAME.forEach(SOMENAME => {
//   observer.observe(section);
// });