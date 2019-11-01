export default class {
  constructor() {
    this.contents = {
      body: {
        element: 'div',
        attribute: {
          img: 'https://www.tribeck.jp/newsrelease/20191002_01.png',
          class: 'xd-popup-bunner',
          position: {
            bottom: 0,
            right: 0
          },
          width: 300,
          height: 200
        }
      },
      btn: {}
    };
  }
  // バナーコンテンツを生成する
  cleateBannerContent() {
    const content = document.createElement(`${this.contents.body.element}`);
    content.classList.add('xd-popup-bunner');
    content.innerHTML = '<a href=""><img src="" alt="" /></a>';
    document.body.appendChild(content);
  }
}
