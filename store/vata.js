export const state = () => ({
  all: [
  // OVOCIE

    //AVOID
    {name:'jablko(raw)',icon:'apple',type:'fruit',favorable:false},
    {name:'klukva',icon:'cranberries',type:'fruit',favorable:false},
    {name:'datle(sušené)',icon:'dates',type:'fruit',favorable:false},
    {name:'figy(sušené)',icon:'figs',type:'fruit',favorable:false},
    {name:'hruška',icon:'pear',type:'fruit',favorable:false},
    {name:'hurmikaki',icon:'persimmon',type:'fruit',favorable:false},
    {name:'granatove jablko',icon:'pomegranate',type:'fruit',favorable:false},
    {name:'sušene hrozienka',icon:'raisins',type:'fruit',favorable:false},
    {name:'sušene slivky',icon:'prune',type:'fruit',favorable:false},
    {name:'vodnymelon',icon:'watermelon',type:'fruit',favorable:false},

    //FAVORABLE
    {name:'jablko(varené)',icon:'apple',type:'fruit',favorable:true},
    {name:'jablkove pyre',icon:'applesauce',type:'fruit',favorable:true},
    {name:'marhula',icon:'apricot',type:'fruit',favorable:true},
    {name:'avokado',icon:'avocado',type:'fruit',favorable:true},
    {name:'banany',icon:'bananas',type:'fruit',favorable:true},
    {name:'lesneovocie',icon:'berries',type:'fruit',favorable:true},
    {name:'čerešne',icon:'cherries',type:'fruit',favorable:true},
    {name:'kokos',icon:'coconut',type:'fruit',favorable:true},
    {name:'datle(čerstvé)',icon:'dates',type:'fruit',favorable:true},
    {name:'figy(čerstvé)',icon:'figs',type:'fruit',favorable:true},
    {name:'grapefruit',icon:'grapefruit',type:'fruit',favorable:true},
    {name:'hrozno',icon:'grapes',type:'fruit',favorable:true},
    {name:'kivi',icon:'kiwi',type:'fruit',favorable:true},
    {name:'citrony',icon:'lemons',type:'fruit',favorable:true},
    {name:'limetky',icon:'limes',type:'fruit',favorable:true},
    {name:'mango',icon:'mangoes',type:'fruit',favorable:true},
    {name:'melony',icon:'melons',type:'fruit',favorable:true},
    {name:'pomaranč',icon:'oranges',type:'fruit',favorable:true},
    {name:'papaja',icon:'papaya',type:'fruit',favorable:true},
    {name:'broskyna',icon:'peach',type:'fruit',favorable:true},
    {name:'ananas',icon:'pineapple',type:'fruit',favorable:true},
    {name:'slivky',icon:'plums',type:'fruit',favorable:true},
    {name:'namačane slivky',icon:'prune',type:'fruit',favorable:true},
    {name:'namačane hrozienka',icon:'raisins',type:'fruit',favorable:true},
    {name:'rebarbora',icon:'rhubarb',type:'fruit',favorable:true},
    {name:'jahody',icon:'strawberies',type:'fruit',favorable:true},
    {name:'tamarind',icon:'tamarind',type:'fruit',favorable:true},





  //VEGETABLES

    //AVOID
    {name:'artičoka',icon:'artichoke',type:'vegetable',favorable:false},
    {name:'repne listy',icon:'beet',type:'vegetable',favorable:false},
    {name:'trpky melon',icon:'melon',type:'vegetable',favorable:false},
    {name:'brokolica',icon:'brocoli',type:'vegetable',favorable:false},
    {name:'ružičkovy kel',icon:'brussels',type:'vegetable',favorable:false},
    {name:'koren lopucha',icon:'burdock',type:'vegetable',favorable:false},
    {name:'kapusta(raw)',icon:'cabbage',type:'vegetable',favorable:false},
    {name:'karfiol(raw)',icon:'cauliflower',type:'vegetable',favorable:false},
    {name:'celer',icon:'celery',type:'vegetable',favorable:false},
    {name:'kukurica(čerstva)',icon:'corn',type:'vegetable',favorable:false},
    {name:'listy pupavy',icon:'dandelion',type:'vegetable',favorable:false},
    {name:'baklažan',icon:'eggplant',type:'vegetable',favorable:false},
    {name:'chren',icon:'horseradish',type:'vegetable',favorable:false},
    {name:'kel',icon:'kale',type:'vegetable',favorable:false},
    {name:'kalerad',icon:'kohlrabi',type:'vegetable',favorable:false},
    {name:'hriby',icon:'mushrooms',type:'vegetable',favorable:false},
    {name:'olivy zelene',icon:'olivesgreen',type:'vegetable',favorable:false},
    {name:'hrach(raw)',icon:'peas',type:'vegetable',favorable:false},
    {name:'paprika',icon:'peppers',type:'vegetable',favorable:false},
    {name:'pečene zemiaky',icon:'potato',type:'vegetable',favorable:false},
    {name:'sladke zemiaky',icon:'sweetpotato',type:'vegetable',favorable:false},
    {name:'opuncia(plod a kvety)',icon:'pricklypear',type:'vegetable',favorable:false},
    {name:'redkovka(raw)',icon:'radish',type:'vegetable',favorable:false},
    {name:'zimna tekvica',icon:'squash',type:'vegetable',favorable:false},
    {name:'rajčiny(surove)',icon:'',type:'vegetable',favorable:false},
    {name:'okruhlica',icon:'turnip',type:'vegetable',favorable:false},
    {name:'pšenična trava',icon:'wheatgrass',type:'vegetable',favorable:false},


    //FAVORABLE
    {name:'asparagus',icon:'asparagus',type:'vegetable',favorable:true},
    {name:'cvikla',icon:'beets',type:'vegetable',favorable:true},
    {name:'kapusta(varena)',icon:'cabbage',type:'vegetable',favorable:true},
    {name:'mrkva',icon:'carrots',type:'vegetable',favorable:true},
    {name:'karfiol',icon:'cauliflower',type:'vegetable',favorable:true},
    {name:'koriander',icon:'',type:'vegetable',favorable:true},
    {name:'uharka',icon:'cucumber',type:'vegetable',favorable:true},
    {name:'biela redkovka',icon:'daikon',type:'vegetable',favorable:true},
    {name:'fenikel',icon:'fennel',type:'vegetable',favorable:true},
    {name:'listova zelenina',icon:'leafygreens',type:'vegetable',favorable:true},
    {name:'listovy šalat',icon:'lettuce',type:'vegetable',favorable:true},
    {name:'kapusta sitinova',icon:'mustardgreens',type:'vegetable',favorable:true},
    {name:'čierne olivy',icon:'blackolives',type:'vegetable',favorable:true},
    {name:'petržlen',icon:'parsley',type:'vegetable',favorable:true},
    {name:'paštrnak',icon:'parsnip',type:'vegetable',favorable:true},
    {name:'hrach(varený)',icon:'peas',type:'vegetable',favorable:true},
    {name:'zemiaky',icon:'potatoes',type:'vegetable',favorable:true},
    {name:'sladka tekvica',icon:'sweetpumpkin',type:'vegetable',favorable:true},
    {name:'redkovka(varena)',icon:'radish',type:'vegetable',favorable:true},
    {name:'kvaka',icon:'rutabaga',type:'vegetable',favorable:true},
    {name:'špagetova tekvica',icon:'spaghettisquash',type:'vegetable',favorable:true},
    {name:'špenat(varený)',icon:'spinach',type:'vegetable',favorable:true},
    {name:'špenat(surový)',icon:'spinach',type:'vegetable',favorable:true},
    {name:'kličky',icon:'sprouts',type:'vegetable',favorable:true},
    {name:'letna tekvica',icon:'summersquash',type:'vegetable',favorable:true},
    {name:'listy okruhlice',icon:'turnip',type:'vegetable',favorable:true},
    {name:'potočnica lekarska',icon:'watercress',type:'vegetable',favorable:true},
    {name:'cuketa',icon:'zucchini',type:'vegetable',favorable:true},
  ],

  descriptions: {
    fruits: {
      avoid: 'vačšina sušeného ovocia',
      favorable: 'vačšina sladkeho ovocia',
    },
    vegetables: {
      avoid: 'mrazena, sušena, surova zelenina',
      favorable: 'varena zelenina',
    },
  }

})
