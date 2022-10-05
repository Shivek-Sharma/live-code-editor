const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

//get data from local storage
html_code.value = localStorage.html_code ? localStorage.html_code : '';
css_code.value = localStorage.css_code ? localStorage.css_code : '';
js_code.value = localStorage.js_code ? localStorage.js_code : '';

function run() {
    //storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    result.contentDocument.body.innerHTML = `<style>${css_code.value}</style>` + `${html_code.value}`;
    result.contentWindow.eval(js_code.value);
}


//Event Listeners
html_code.addEventListener('keyup', run);
css_code.addEventListener('keyup', run);
js_code.addEventListener('keyup', run);

run();