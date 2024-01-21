import { bcryptAdapter } from '../../config/bcrypt.adapter';

export const seedData = {
  users: [
    { name: 'flow 1', email: 'flow1@google.com', password: bcryptAdapter.hash('123456') },
    { name: 'flow 2', email: 'flow2@google.com', password: bcryptAdapter.hash('123456') },
    { name: 'flow 3', email: 'flow3@google.com', password: bcryptAdapter.hash('123456') },
    { name: 'flow 4', email: 'flow4@google.com', password: bcryptAdapter.hash('123456') },
    { name: 'flow 5', email: 'flow5@google.com', password: bcryptAdapter.hash('123456') },
    { name: 'flow 6', email: 'flow6@google.com', password: bcryptAdapter.hash('123456') }
  ],

  categories: [{ name: 'Pendiente' }, { name: 'Procesada' }, { name: 'Terminada' }],

  task: [
    {
      title: 'Than',
      available: true,
      descripcion:
        'daughter me move thumb claws lose supper strip animal teach additional definition why pitch help thus boy like every mud month are account dozen'
    },
    {
      title: 'Wagon',
      available: true,
      descripcion:
        'actual difficult nature yellow smile captain nervous to cause wolf strong neck fifteen wrote consider visit likely happened rear red review wash flag parent'
    },
    {
      title: 'Tone',
      available: true,
      descripcion:
        'met certain specific detail deeply red forth tiny whatever what image parts deer difficulty pair mixture trouble forgotten fort dry listen strength got seldom'
    },
    {
      title: 'Song',
      available: true,
      descripcion:
        'look board flat river solve spite universe history use pool frequently twenty basic lying this came poetry particular function previous suit west shore tomorrow'
    },
    {
      title: 'Plenty',
      available: true,
      descripcion:
        'dinner welcome screen expression structure plastic doubt missing thank garage property particular park syllable slide cup alphabet swimming stood fought fog shut spite ever'
    },
    {
      title: 'Season',
      available: false,
      descripcion:
        'canal promised split headed studying had declared vessels hello matter lovely congress birthday fed word street happened ought cold heavy cage shoulder sight applied'
    },
    {
      title: 'Voyage',
      available: true,
      descripcion:
        'reach myself owner building anyway tool dance particles branch shadow clear home of grass rabbit wind bit barn slipped husband recent tongue important zero'
    },
    {
      title: 'Medicine',
      available: true,
      descripcion:
        'mountain five art moving foot roll harder lucky pitch mile nails married finally spend adult left storm easy cry increase cook drew announced glad'
    },
    {
      title: 'How',
      available: true,
      descripcion:
        'heat student highway very word health them feel off cover trail cage went mission ice safety disease observe copy flat speech experiment now finest'
    }
  ]
};
