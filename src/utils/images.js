import cappuccinoAsset from '../assets/cappuccino.png'
import latteAsset from '../assets/Latte image.png'
import mochaAsset from '../assets/mocha.png'
import americanoAsset from '../assets/Americano.png'
import flatWhiteAsset from '../assets/Flat White.png'
import greenTeaAsset from '../assets/Green Tea.png'
import earlGreyAsset from '../assets/Earl Grey.png'
import icedCoffeeAsset from '../assets/Iced Coffee.png'
import icedLatteAsset from '../assets/Iced Latte.png'
import chocolateCroissantAsset from '../assets/Chocolate Croissant.png'
import cheesecakeAsset from '../assets/Cheesecake.png'

/** Build optimized Unsplash URLs for card vs hero/detail views */
export function buildImageUrl(photoId, { width = 600, height = 600, quality = 90 } = {}) {
  return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&q=${quality}&auto=format`
}

/** Curated HD photos — each key maps to one specific drink/dessert */
export const PRODUCT_PHOTOS = {
  cappuccino: 'photo-1497636577773-f1231844b336',
  espresso: 'photo-1510591509098-f4fdc6d0ff04',
  latte: 'photo-1461023058943-7f3b1638d786',
  mocha: 'photo-1577887237397-315330f5f234',
  americano: 'photo-1509042239860-f550ce710b93',
  flatWhite: 'photo-1611141753340-64413562f914',
  greenTea: 'photo-1556881286-fc691fca9721',
  chaiLatte: 'photo-1571934811356-5cc061b6821f',
  earlGrey: 'photo-1563820890193-38479170f92e',
  icedCoffee: 'photo-1517487881594-2f784cee470e',
  icedLatte: 'photo-1626114520610-4ec295b4d1d2',
  frappe: 'photo-1572490122747-3968b75cc699',
  chocolateCroissant: 'photo-1555507036-ab1f40388f5d',
  cheesecake: 'photo-1524354219885-b648b49c0a2b',
  tiramisu: 'photo-1571877227200-a0d98ea607e9',
}

export function getProductImages(photoKey) {
  if (photoKey === 'cappuccino') {
    return {
      image: cappuccinoAsset,
      imageHd: cappuccinoAsset,
      imageHero: cappuccinoAsset,
    }
  }

  if (photoKey === 'latte') {
    return {
      image: latteAsset,
      imageHd: latteAsset,
      imageHero: latteAsset,
    }
  }

  if (photoKey === 'mocha') {
    return {
      image: mochaAsset,
      imageHd: mochaAsset,
      imageHero: mochaAsset,
    }
  }

  if (photoKey === 'americano') {
    return {
      image: americanoAsset,
      imageHd: americanoAsset,
      imageHero: americanoAsset,
    }
  }

  if (photoKey === 'flatWhite') {
    return {
      image: flatWhiteAsset,
      imageHd: flatWhiteAsset,
      imageHero: flatWhiteAsset,
    }
  }

  if (photoKey === 'greenTea') {
    return {
      image: greenTeaAsset,
      imageHd: greenTeaAsset,
      imageHero: greenTeaAsset,
    }
  }

  if (photoKey === 'earlGrey') {
    return {
      image: earlGreyAsset,
      imageHd: earlGreyAsset,
      imageHero: earlGreyAsset,
    }
  }

  if (photoKey === 'icedCoffee') {
    return {
      image: icedCoffeeAsset,
      imageHd: icedCoffeeAsset,
      imageHero: icedCoffeeAsset,
    }
  }

  if (photoKey === 'icedLatte') {
    return {
      image: icedLatteAsset,
      imageHd: icedLatteAsset,
      imageHero: icedLatteAsset,
    }
  }

  if (photoKey === 'chocolateCroissant') {
    return {
      image: chocolateCroissantAsset,
      imageHd: chocolateCroissantAsset,
      imageHero: chocolateCroissantAsset,
    }
  }

  if (photoKey === 'cheesecake') {
    return {
      image: cheesecakeAsset,
      imageHd: cheesecakeAsset,
      imageHero: cheesecakeAsset,
    }
  }

  const id = PRODUCT_PHOTOS[photoKey]
  if (!id) {
    const fallback = PRODUCT_PHOTOS.cappuccino
    return {
      image: buildImageUrl(fallback, { width: 600, height: 600, quality: 88 }),
      imageHd: buildImageUrl(fallback, { width: 1200, height: 1200, quality: 95 }),
      imageHero: buildImageUrl(fallback, { width: 1400, height: 1000, quality: 95 }),
    }
  }
  return {
    image: buildImageUrl(id, { width: 600, height: 600, quality: 88 }),
    imageHd: buildImageUrl(id, { width: 1200, height: 1200, quality: 95 }),
    imageHero: buildImageUrl(id, { width: 1400, height: 1000, quality: 95 }),
  }
}
