const startups = [
  {
    name: 'Dragon emperors',
    games: [
      {
        name: 'Cursed Mansion',
        steamUrl: 'https://store.steampowered.com/app/967120/Cursed_Mansion/',
        platform: ['PC'],
        banner: '/posters/01-cursed mansion-banner.jpeg',
        images: [
          '/posters/01-cursed mansion-img01.jpg',
          '/posters/01-cursed mansion-img02.jpg',
          '/posters/01-cursed mansion-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Lastboss',
    games: [
      { name: 'A New Sin', platform: ['PC'] },
      { name: 'Tower Dungeon', platform: ['Mobile'] },
    ],
    funded: false,
    active: false,
  },
  {
    name: 'AIOUS',
    games: [{ name: 'AIOUS', platform: ['PC'] }],
    funded: true,
    active: false,
  },
  {
    name: 'Eternal Dreams',
    games: [{ name: 'Menggapai Matahari', platform: ['PC'] }],
    funded: false,
    active: true,
  },
  {
    name: 'MiraiMimpi',
    games: [
      {
        name: 'Kocheng: Battle of Boings',
        platform: ['Mobile'],
        banner: '/posters/11-kocheng-banner.jpeg',
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Ginvo Studio',
    games: [
      {
        name: 'Nikahan Mantan (Ex Wedding)',
        platform: ['Mobile'],
        banner: '/posters/12-nikahan mantan-banner.gif',
      },
      { name: 'Knight of Dice', platform: ['Mobile'] },
    ],
    funded: true,
    active: false,
  },
  {
    name: 'Freemergency',
    games: [
      {
        name: 'Gun Hero',
        platform: ['Mobile'],
      },
    ],
    funded: false,
    active: false,
  },
  {
    name: 'MDL Junior',
    games: [
      {
        name: 'Little Lost One',
        platform: ['Mobile'],
      },
    ],
    funded: false,
    active: false,
  },
  {
    name: 'SLAB Games',
    games: [
      {
        name: 'Kucingku Mana',
        platform: ['Mobile'],
        playUrl:
          'https://play.google.com/store/apps/details?id=com.slabgames.kkm',
        banner: '/posters/13-kucingku mana-banner.jpeg',
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'UniTeam',
    games: [
      {
        name: 'Gear Ball',
        platform: ['Mobile'],
      },
    ],
    funded: false,
    active: false,
  },
  {
    name: 'Clay Game Studio',
    games: [
      {
        name: 'Faerie Afterlight',
        steamUrl:
          'https://store.steampowered.com/app/1415280/Faerie_Afterlight/',
        platform: ['PC'],
        banner: '/posters/02-faerie afterlight-banner.jpeg',
        images: [
          '/posters/02-faerie afterlight-img01.jpg',
          '/posters/02-faerie afterlight-img02.jpg',
          '/posters/02-faerie afterlight-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Teamless Studio',
    games: [
      {
        name: 'Make Peas Not War',
        platform: ['PC'],
      },
    ],
    funded: false,
    active: false,
  },
  {
    name: 'Pendopo Studio',
    games: [
      {
        name: 'Rendezvous',
        steamUrl: 'https://store.steampowered.com/app/1409300/Rendezvous/',
        platform: ['PC'],
        banner: '/posters/03-rendezvous-banner.jpeg',
        images: [
          '/posters/03-rendezvous-img01.jpg',
          '/posters/03-rendezvous-img02.jpeg',
          '/posters/03-rendezvous-img03.jpg',
        ],
      },
    ],
    funded: false,
    active: true,
  },
  {
    name: 'Grinsmile',
    games: [
      {
        name: 'Paw Rumble!',
        platform: ['Mobile'],
        playUrl:
          'https://play.google.com/store/apps/details?id=com.grinsmile.pawrumble&hl=en&gl=US',
        banner: '/posters/14-paw rumble-banner.webp',
        images: [
          '/posters/14-paw rumble-img01.webp',
          '/posters/14-paw rumble-img02.webp',
          '/posters/14-paw rumble-img03.webp',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: '4Happy Studio',
    games: [
      {
        name: 'Let Me Out',
        steamUrl: 'https://store.steampowered.com/app/1269520/Let_Me_Out/',
        platform: ['PC'],
        banner: '/posters/04-let me out-banner.jpeg',
        images: [
          '/posters/04-let me out-img01.jpg',
          '/posters/04-let me out-img02.jpg',
          '/posters/04-let me out-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Orange Games Production',
    games: [
      {
        name: 'Elementalist',
        platform: ['Mobile'],
        banner: '/posters/15-elementalist-banner.webp',
        images: [
          '/posters/15-elementalist-img01.webp',
          '/posters/15-elementalist-img02.webp',
          '/posters/15-elementalist-img03.webp',
        ],
      },
      {
        name: 'Moonlight Fracture',
        platform: ['PC'],
        itchUrl: 'https://orangegamesproduction.itch.io/moonlight-fracture',
      },
    ],
    funded: false,
    active: true,
  },
  {
    name: 'Redamantine',
    games: [
      {
        name: 'Witchnesia',
        platform: ['Mobile'],
        playUrl:
          'https://play.google.com/store/apps/details?id=com.SweetPotato.Witchnesia',
        banner: '/posters/16-witchnesia-banner.webp',
        images: [
          '/posters/16-witchnesia-img01.webp',
          '/posters/16-witchnesia-img02.webp',
          '/posters/16-witchnesia-img03.webp',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Alphac Studio',
    games: [{ name: 'Lab 2045', platform: ['Mobile'] }],
    funded: false,
    active: false,
  },
  {
    name: 'Dreams Studio',
    games: [
      { name: 'Milky Way - Idle Clicker', platform: ['Mobile'] },
      { name: 'Armaegis', platform: ['Mobile'] },
    ],
    funded: false,
    active: true,
  },

  {
    name: 'Devata Studio',
    games: [
      {
        name: 'Biwar Legend of Dragon Slayer',
        steamUrl:
          'https://store.steampowered.com/app/1680800/Biwar_Legend_of_Dragon_Slayer/',
        platform: ['PC'],
        banner: '/posters/05-biwar-banner.jpeg',
        images: [
          '/posters/05-biwar-img01.jpg',
          '/posters/05-biwar-img02.jpg',
          '/posters/05-biwar-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'MyHand Studio',
    games: [
      {
        name: 'Another Path',
        steamUrl: 'https://store.steampowered.com/app/1657620/Another_Path/',
        platform: ['PC'],
        banner: '/posters/06-another path-banner.jpeg',
        images: [
          '/posters/06-another path-img01.jpg',
          '/posters/06-another path-img02.jpg',
          '/posters/06-another path-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: false,
  },
  {
    name: 'Vantrails Game',
    games: [{ name: 'Soul Spira', platform: ['Mobile'] }],
    funded: false,
    active: false,
  },
  {
    name: 'Satriver',
    games: [
      {
        name: 'Crazy Delivery Rumble',
        platform: ['Mobile'],
        playUrl:
          'https://play.google.com/store/apps/details?id=com.SatriverStudio.CrazyDeliveryRumble',
        banner: '/posters/17-crazy delivery rumble-banner.jpeg',
        images: [
          '/posters/17-crazy delivery rumble-img01.webp',
          '/posters/17-crazy delivery rumble-img02.webp',
          '/posters/17-crazy delivery rumble-img03.webp',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Ozysoft',
    games: [
      {
        name: 'Buramato',
        steamUrl: 'https://store.steampowered.com/app/1726560/Buramato/',
        platform: ['PC'],
        banner: '/posters/07-buramato-banner.jpeg',
        images: [
          '/posters/07-buramato-img01.jpg',
          '/posters/07-buramato-img02.jpg',
          '/posters/07-buramato-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'KhaiLabs',
    games: [
      {
        name: 'Hybrid Clash',
        playUrl:
          'https://play.google.com/store/apps/details?id=com.KhaiLabs.HybridClash&hl=en&gl=US',
        platform: ['Mobile'],
        banner: '/posters/18-hybrid clash-banner.png',
        images: [
          '/posters/18-hybrid clash-img01.webp',
          '/posters/18-hybrid clash-img02.webp',
          '/posters/18-hybrid clash-img03.webp',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Anoa Interactive',
    games: [{ name: 'Spira Arena', platform: 'Mobile' }],
    funded: false,
    active: true,
  },
  {
    name: 'Unixcorp',
    games: [
      {
        name: 'Heisters',
        platform: ['Mobile'],
        playUrl:
          'https://play.google.com/store/apps/details?id=com.uniXcorp.Heisters',
        banner: '/posters/19-heisters-banner.jpeg',
        images: [
          '/posters/19-heisters-img01.webp',
          '/posters/19-heisters-img02.webp',
          '/posters/19-heisters-img03.webp',
        ],
      },
    ],
    funded: false,
    active: true,
  },
  {
    name: 'Seraph Games',
    games: [
      {
        name: 'Dice Monsters',
        platform: ['Mobile'],
        itchUrl: 'https://itch.io/jam/igsi-batch-5/rate/1797259',
        banner: '/posters/21-dice monster-banner.png',
        images: [
          '/posters/21-dice monster-img01.png',
          '/posters/21-dice monster-img02.png',
          '/posters/21-dice monster-img03.png',
        ],
      },
    ],
    funded: false,
    active: true,
  },
  {
    name: 'Strayflux',
    games: [
      {
        name: 'As I Began to Dream',
        steamUrl:
          'https://store.steampowered.com/app/2482180/As_I_Began_to_Dream/',
        platform: ['PC'],
        banner: '/posters/08-as i began to dream-banner.jpeg',
        images: [
          '/posters/08-as i began to dream-img01.jpg',
          '/posters/08-as i began to dream-img02.jpg',
          '/posters/08-as i began to dream-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Mushroomallow Studio',
    games: [
      {
        name: 'Wonder Wandelier',
        steamUrl:
          'https://store.steampowered.com/app/2376570/Wonder_Wandelier/',
        platform: ['PC'],
        banner: '/posters/09-wonder wandelier-banner.jpeg',
        images: [
          '/posters/09-wonder wandelier-img01.jpg',
          '/posters/09-wonder wandelier-img02.jpg',
          '/posters/09-wonder wandelier-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Berangin Creative',
    games: [
      {
        name: 'Kejora',
        steamUrl: 'https://store.steampowered.com/app/1410400/Kejora/',
        platform: ['PC'],
        banner: '/posters/10-kejora-banner.jpeg',
        images: [
          '/posters/10-kejora-img01.jpg',
          '/posters/10-kejora-img02.jpg',
          '/posters/10-kejora-img03.jpg',
        ],
      },
    ],
    funded: true,
    active: true,
  },
  {
    name: 'Motion Canvas',
    games: [
      {
        name: 'Darklord is Dead',
        platform: ['Mobile'],
        itchUrl: 'https://motioncanvas.itch.io/darklord-is-dead',
      },
    ],
    funded: false,
    active: true,
  },
];

export default startups;
