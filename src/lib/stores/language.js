export let currentLanguage = 'en';

export function changeCurrentLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
}
