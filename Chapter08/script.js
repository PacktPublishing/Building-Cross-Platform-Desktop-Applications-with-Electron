window.onload = function () {
    var webview = document.querySelector('webview');
    // Go to previous page on back button press   
    document.querySelector('#btnBack').onclick = function () {
        webview.goBack();
    };   //Go forward on button press   
    document.querySelector('#btnForward').onclick = function () {
        webview.goForward();
    };

    // navigate to home   
    document.querySelector('#btnHome').onclick = function () {
        webview.src = 'http://www.google.com';
    };   //reload the page  

    document.querySelector('#btnReload').onclick = function () {
        webview.reload();
    };

    document.querySelector('#frmLocation').onsubmit = function (e) {
        e.preventDefault();
        webview.src = document.querySelector('#location').value;
    };

    webview.addEventListener('did-start-loading', () => {
        document.body.classList.add('loading');
        isLoading = true;
        document.querySelector('#location').value = event.url;
    });
    webview.addEventListener('did-stop-loading', () => {
        isLoading = false;
    });
    webview.addEventListener('did-fail-load', () => {
        console.log('Request failed');
    });
    webview.addEventListener('did-finish-load', () => {
        document.body.classList.remove('loading');
    });
}
