require('../sass/index.scss');

let htmlWidth =
  document.documentElement.clientWidth || document.body.clientWidth;

let htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', e => {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth <= 1000) {
    if(htmlWidth<=375) {
      htmlDom.style.fontSize = 375 / 10 + 'px';
    } else{
      htmlDom.style.fontSize = 1000 / 10 + 'px';
    }
  } else {
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
  }

  var scale = 1 / window.devicePixelRatio;
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
      'content',
      'initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    );
});
