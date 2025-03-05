import type { IModalContent, IModalContentShop } from "$lib/types/modalContent.js"

export const MODAL_CONTENT: Record<string, IModalContent> = {
  trampolines: {
    title: `Батуты`,
    src: `/img/modal/trampolines.webp`,
    text: `Допрыгните до облаков на наших ярких и безопасных батутах! У нас вы можете насладиться прыжками в мягкую обстановку, почувствовать радость от свободы движения и просто отдохнуть с друзьями или семьёй. Батуты - это не только отличное развлечение, но и возможность поддерживать своё тело в тонусе!`,
  },
  pit: {
    title: `Поролоновая яма`,
    src: `/img/modal/яма.webp`,
    text: `Прыжки в мир веселья! Наша поролоновая яма - это безопасное и увлекательное место, где каждый может почувствовать себя настоящим супергероем! Прыгайте в мягкие поролоновые кубики, делайте интересные фигуры и наслаждайтесь своей свободой движения.`,
  },
  bungee: {
    title: `Тарзанка`,
    src: `/img/modal/тарзанка.webp`,
    text: `Отправляйтесь на нашу тарзанку и почувствуйте себя настоящим летающим героем! Никаких преград - только свободный полёт и ощущение невероятной свободы!`,
  },
  maze: {
    title: `Лабиринт`,
    src: `/img/modal/лабиринт.webp`,
    text: `Место, где каждый уголок полон веселья и приключений! Погрузитесь в мир игры и веселья, исследуя запутанные коридоры и поднимаясь на верхние этажи. Тут вы можете много лазать, прятаться и наслаждаться игрой. Отправляйтесь в увлекательное путешествие по лабиринту и создайте незабываемые воспоминания!`,
  },
  sandbox: {
    title: `Песочница`,
    src: `/img/modal/песочница.webp`,
    text: `Песочная планета, где каждый гость становится творцом! Наши голубые песчаные просторы приглашают вас окунуться в мир творчества и фантазии. Стройте замки, создавайте фигуры - дайте волю своему воображению! Голубой песок придаст вашим шедеврам особенный вид.`,
  },
  slide: {
    title: `Ледяная горка`,
    src: `/img/modal/горка.webp`,
    text: `Добро пожаловать на нашу волшебную горку скорости, где время останавливается, а чувства переполняют волшебством! Скатываясь на салазках с высоты, вы ощутите, как ветер ласкает лицо, создавая ощущение полёта. Пусть каждый спуск станет для вас настоящим поединком со скоростью!`,
  },
  hockey: {
    title: `Аэрохокей`,
    src: `/img/modal/хокей.webp`,
    text: `Особенный аттракцион нашего парка - аэрохоккей. Единственный в Беларуси он представляет собой не просто игру, а настоящее шоу света и цвета, которое порадует как взрослых, так и детей. Светящийся стол и прекрасная картинка - создают атмосферу настоящего праздника! Здесь вы окунетесь в мир настоящей конкуренции, который оставит яркие впечатления и незабываемые эмоции!`,
  },
}

export const MODAL_CONTENT_SHOP: IModalContentShop[] = [
  {
    typeName: 'Кофе',
    items: [
      {
        name: 'Эспрессо',
        img: null,
        price_text: '2.5 p',
        size_text: '30 мл',
        description: 'dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl '
      },
      {
        name: 'Американо',
        img: null,
        price_text: '3.5 p',
        size_text: '200 мл',
      },
      {
        name: 'Двойной американо',
        img: null,
        price_text: '7 p',
        size_text: '200 мл',
      },
      {
        name: 'Капучино',
        img: null,
        price_text: '5 p',
        size_text: '250 мл',
      },
      {
        name: 'Капучино',
        img: null,
        price_text: '5,5 p',
        size_text: '300 мл',
      }
    ]
  },
  {
    typeName: 'Мороженноое',
    items: [
      {
        name: 'Эспрессо',
        img: null,
        price_text: '2.5 p',
        size_text: '30 мл',
        description: 'dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl dfgfdgfdkf ln lenflsdknflsddknflsnf lnl nsdlfnnsldfknn lkn lsnflnsdfl nlsn fl nlsf nlsfn lnflnfln lnsl fnl nflnslfnl ln lnsfln sl '
      },
      {
        name: 'Американо',
        img: null,
        price_text: '3.5 p',
        size_text: '200 мл',
      },
      {
        name: 'Двойной американо',
        img: null,
        price_text: '7 p',
        size_text: '200 мл',
      }
    ]
  },
]
