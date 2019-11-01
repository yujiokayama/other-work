import XdPopupBanner from './modules/xd_popup_banner';
const XD_POPUP_BANNER = new XdPopupBanner();

window.onload = () => {
  XD_POPUP_BANNER.cleateBannerContent();
};

window.onload = () => {
  console.log('window.onload');
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});
