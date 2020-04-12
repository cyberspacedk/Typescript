// Enum

// вспомагательная сущность для однотипных записей

enum Membership {
  Simple,
  Standart,
  Premium
}

// значения enumа как елементы массива, индексированы с 0
 
// тут в переменной будет 1, т.к Standart под первым индексом
const membership = Membership.Standart;
 
// чтобы получить строковое значение, нужно обратиться по индексу
const membership2 = Membership[2];

// Чтобы в enum вместо индексов записать осмысленные значения, то нужно
enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
};

// получим 'INSTAGRAM' 
const socials = SocialMedia.INSTAGRAM;