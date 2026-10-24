import blossom from '../assets/examples/blossom.jpg'
import classic from '../assets/examples/classic.jpg'
import arch from '../assets/examples/arch.jpg'
import birthBlessing from '../assets/examples/birth-blessing.png'
import ray from '../assets/examples/ray.jpg'
import birthdayCover from '../assets/examples/birthday-cover.png'
import weddingCover from '../assets/examples/wedding-cover.png'

export const heirloomExamples = [
  {
    id: 'blossom',
    nameAr: 'سارة وسوار',
    nameEn: 'Sara & Suwar',
    nameSv: 'Sara & Suwar',
    descriptionAr: 'دعوة تفاعلية ناعمة.',
    descriptionEn: 'A soft interactive invitation.',
    descriptionSv: 'En mjuk interaktiv inbjudan.',
    image: blossom,
    href: 'https://wedding-invitation-luxury-seven.vercel.app/',
  },
  {
    id: 'classic',
    nameAr: 'أليس وأليكس',
    nameEn: 'Alice & Alex',
    nameSv: 'Alice & Alex',
    descriptionAr: 'دعوة كلاسيكية فاخرة.',
    descriptionEn: 'A classic luxury invitation.',
    descriptionSv: 'En klassisk lyxinbjudan.',
    image: classic,
    href: 'https://wedding-invitation-classic-ten.vercel.app/',
  },
  {
    id: 'arch',
    nameAr: 'آمال وأحمد',
    nameEn: 'Amal & Ahmad',
    nameSv: 'Amal & Ahmad',
    descriptionAr: 'دعوة بإطار مطرّز أنيق.',
    descriptionEn: 'An elegant embroidered invitation.',
    descriptionSv: 'En elegant broderad inbjudan.',
    image: arch,
    href: 'https://wedding-invitation-eight-delta-92.vercel.app/',
  },
  {
    id: 'birth-blessing',
    nameAr: 'مباركة الولادة',
    nameEn: 'Birth Blessing',
    nameSv: 'Birth Blessing',
    descriptionAr: 'دعوة تفاعلية لفرحة قدوم مولودة.',
    descriptionEn: 'An interactive invitation for a baby blessing.',
    descriptionSv: 'En interaktiv inbjudan till en babylvälsignelse.',
    image: birthBlessing,
    href: 'https://baby-shower-invitation-self.vercel.app/',
  },
]

export const momentExamples = [
  {
    id: 'ray',
    nameAr: 'راي',
    nameEn: 'Ray',
    nameSv: 'Ray',
    descriptionAr: 'دعوة متحركة قصيرة.',
    descriptionEn: 'A short animated invitation.',
    descriptionSv: 'En kort animerad inbjudan.',
    image: ray,
    video: '/examples/ray.mp4',
  },
  {
    id: 'moment',
    nameAr: 'عيد ميلاد',
    nameEn: 'Birthday Invitation',
    nameSv: 'Födelsedagsinbjudan',
    descriptionAr: 'دعوة عيد ميلاد متحركة أنيقة.',
    descriptionEn: 'An elegant animated birthday invitation.',
    descriptionSv: 'En elegant animerad födelsedagsinbjudan.',
    image: birthdayCover,
    video: '/examples/moment.mp4',
  },
  {
    id: 'wedding-moment',
    nameAr: 'دعوة زفاف',
    nameEn: 'Wedding Invitation',
    nameSv: 'Bröllopsinbjudan',
    descriptionAr: 'دعوة زفاف متحركة أنيقة.',
    descriptionEn: 'An elegant animated wedding invitation.',
    descriptionSv: 'En elegant animerad bröllopsinbjudan.',
    image: weddingCover,
    video: '/examples/wedding-moment.mp4',
  },
]

export function localizedText(item, language, field) {
  const key = `${field}${language === 'ar' ? 'Ar' : language === 'sv' ? 'Sv' : 'En'}`
  return item[key] ?? item[`${field}En`] ?? ''
}
