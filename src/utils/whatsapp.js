export const WHATSAPP_BY_LANG = {
  ar: '963988028253',
  en: '963988028253',
  sv: '46762330849',
}

export function whatsappLink(message, language = 'ar') {
  const number = WHATSAPP_BY_LANG[language] ?? WHATSAPP_BY_LANG.ar
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
