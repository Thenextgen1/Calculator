window.addEventListener('DOMContentLoaded', init);
const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];//all keys
const spec = ['*', '/', '+', '-'];//special functions keys



function init() {
    document.title = 'JavaScipt Calculator'
    console.log('ready');
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);

    const output = doc.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('ouput');
    output.style.width = '100%';
    output.style.lineHeight = '50px'
}