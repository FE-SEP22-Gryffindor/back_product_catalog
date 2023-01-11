/* eslint-disable max-len */
import { sequelize } from '../utils/db';
import { Phone } from '../models/Phone';

// const phones = [
//   {
//     slug: 'apple-iphone-xs-64gb-silver-imt9g2fs-a-1',
//     name: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '799',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '4 GB',
//       memory: '64 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-xs-64gb-silver-imt9g2fs-a/apple-iphone-xs-64gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-2',
//     name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
//     price: '1199',
//     discountPrice: '799',
//     color: 'gold',
//     year: '2022',
//     specs: {
//       screen: '6.5” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '64 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-main.png',
//     additionalImages: [
//       'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-add1.png',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-128gb-Purple-imt9g2fs-a-3',
//     name: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '799',
//     color: 'purple',
//     year: '2022',
//     specs: {
//       screen: '6.2” IPS',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '4 GB',
//       memory: '128 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-128gb-Purple-imt9g2fs-a/apple-iphone-11-128gb-Purple-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-x-256gb-silver-imt9g2fs-a-4',
//     name: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '859',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '256 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-x-256gb-silver-imt9g2fs-a/apple-iphone-x-256gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-xs-64gb-silver-imt9g2fs-a-5',
//     name: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '799',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '4 GB',
//       memory: '64 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-xs-64gb-silver-imt9g2fs-a/apple-iphone-xs-64gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-6',
//     name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
//     price: '1199',
//     discountPrice: '799',
//     color: 'gold',
//     year: '2022',
//     specs: {
//       screen: '6.5” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '64 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-main.png',
//     additionalImages: [
//       'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-add1.png',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-128gb-Purple-imt9g2fs-a-7',
//     name: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '799',
//     color: 'purple',
//     year: '2022',
//     specs: {
//       screen: '6.2” IPS',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '4 GB',
//       memory: '128 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-128gb-Purple-imt9g2fs-a/apple-iphone-11-128gb-Purple-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-x-256gb-silver-imt9g2fs-a-8',
//     name: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '859',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '256 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-x-256gb-silver-imt9g2fs-a/apple-iphone-x-256gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-x-256gb-silver-imt9g2fs-a-9',
//     name: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '859',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '256 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-x-256gb-silver-imt9g2fs-a/apple-iphone-x-256gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-10',
//     name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
//     price: '1199',
//     discountPrice: '799',
//     color: 'gold',
//     year: '2022',
//     specs: {
//       screen: '6.5” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '64 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-main.png',
//     additionalImages: [
//       'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a/apple-iphone-11-pro-max-64gb-gold-imt9g2fs-a-add1.png',
//     ],
//   },
//   {
//     slug: 'apple-iphone-11-128gb-Purple-imt9g2fs-a-11',
//     name: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '799',
//     color: 'purple',
//     year: '2022',
//     specs: {
//       screen: '6.2” IPS',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '4 GB',
//       memory: '128 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-11-128gb-Purple-imt9g2fs-a/apple-iphone-11-128gb-Purple-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
//   {
//     slug: 'apple-iphone-x-256gb-silver-imt9g2fs-a-12',
//     name: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
//     price: '899',
//     discountPrice: '859',
//     color: 'silver',
//     year: '2022',
//     specs: {
//       screen: '5.8” OLED',
//       resolution: '2688x1242',
//       processor: 'Apple A12 Bionic',
//       ram: '3 GB',
//       memory: '256 GB',
//       camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
//       zoom: 'Optical, 2x',
//       cell: 'GSM, LTE, UMTS',
//     },
//     about: [
//       {
//         header: 'And then there was Pro',
//         description: 'A transformative triple‑camera system that adds tons of capability without complexity. \n'
//           + '\n'
//           + 'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
//       },
//       {
//         header: 'Camera',
//         description: 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
//       },
//       {
//         header: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//         description: 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
//       },
//     ],
//     image: 'https://gryffindor.s3.eu-central-1.amazonaws.com/apple-iphone-x-256gb-silver-imt9g2fs-a/apple-iphone-x-256gb-silver-imt9g2fs-a-main.png',
//     additionalImages: [
//       'link1',
//       'link2',
//       'link3',
//       'link4',
//     ],
//   },
// ];

export const getPhonesCount = async() => {
  const amountPhones = await Phone.count();

  return amountPhones;
};

export const getAll = async(page: number, perPage: number) => {
  try {
    await sequelize.authenticate();
    // console.log('Connection has been established successfully.');

    const { count, rows } = await Phone.findAndCountAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const phoneRows = rows.map(phone => <Phone>phone);

    const startPageItem = perPage * page - perPage + 1;
    const finishPageItem = perPage * page < count ? perPage * page : count;

    const currentPageItems = rows.slice(startPageItem - 1, finishPageItem);

    return currentPageItems;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }

  // const totalItems = getPhonesCount();
  // const startPageItem = perPage * page - perPage + 1;
  // const finishPageItem = perPage * page < totalItems
  //   ? perPage * page
  //   : totalItems;
  //
  // const currentPageItems = phones
  //   .slice(startPageItem - 1, finishPageItem);
  //
  // return currentPageItems.map((phone) => ({
  //   slug: phone.slug,
  //   name: phone.name,
  //   price: phone.price,
  //   discountPrice: phone.discountPrice,
  //   year: phone.year,
  //   screen: phone.specs.screen,
  //   memory: phone.specs.memory,
  //   ram: phone.specs.ram,
  //   image: phone.image,
  // }));
};

export const getNew = async() => {
  try {
    await sequelize.authenticate();
    // console.log('Connection has been established successfully.');

    const newPhones = await Phone.findAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
      limit: 6,
      order: [
        ['year', 'DESC'],
      ],
    });

    return newPhones;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

export const getDiscount = async() => {
  try {
    await sequelize.authenticate();
    // console.log('Connection has been established successfully.');

    const discountPhones = await Phone.findAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
      limit: 4,
      order: [
        ['discountPrice', 'DESC'],
      ],
    });

    return discountPhones;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};
