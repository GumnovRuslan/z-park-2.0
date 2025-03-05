import { markerIcon, telefonIcon, clockIcon, epvilopmentIcon, starIcon, instagramIcon, vkIcon, youtubeIcon } from "$lib/icons.svelte.js"
import type { IContact} from "$lib/types/contactsType.js"

export const CONTACTS: IContact[] = [
  {
    icon: markerIcon,
    title: 'Наш адрес',
    text: 'проспект Фрунзе, 81к33, Витебск',
  },
  {
    icon: telefonIcon,
    title: 'Наш Телефон',
    text: '+375 XX XXX XX XX',
  },
  {
    icon: clockIcon,
    title: 'Время работы',
    text: '11:00 - 20:00 каждый день',
  },
  {
    icon: epvilopmentIcon,
    title: 'Наша почта',
    text: 'z_park_vitebsk',
  },
  {
    icon: starIcon,
    title: 'Мы в соц. сетях',
    links: [
      {
        icon: vkIcon,
        text: 'Вконтакте',
        link: 'https://vk.com/z_park_vitebsk',
      },
      {
        icon: youtubeIcon,
        text: 'Youtube',
        link: 'https://www.youtube.com/channel/UCRRIZbUwBzzHOlL6ezvpHrg',
      },
      {
        icon: instagramIcon,
        text: 'Instagram',
        link: 'https://www.instagram.com/zpark_vitebsk/',
      },
    ]
  },
]