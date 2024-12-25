import { initPopup } from '@/widgets/popups';
import { saveUTM } from '@/shared/helpers/saveUTM';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { setAllAnimations } from '@/shared/lib/animations';

// Рут для попапов
const popups = document.getElementById('popups');
if (popups) {
  initPopup(popups)
}

// Записывает utm-метки в сессию
try {
  if (!sessionStorage.getItem('utm')) {
    saveUTM();
  }
} catch (e) {
  console.error(e);
}

const header = document.querySelector<HTMLElement>('.header');
if (header) {
  new Header(header);
}

const footer = document.querySelector<HTMLElement>('.footer');
if (footer) {
  new Footer(footer);
}

window.onload = () => {
  setAllAnimations();
}
