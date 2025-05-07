
//import './App.css';
//import Header from './components/Header';
//import MainContent from './components/MainContent';
//import Footer from './components/Footer';
//import Card from './components/Card';

//function App() {
  //return (
    //<div>
      //<Header />
      //<MainContent />
      //<Card title="Kortelė be vaiko" />
      //<Card title="Pirmas kortelės pavadinimas">
        //<p>Ši kortelė skirta pirmam turiniui</p>
        //<button>PAUSPAUSK</button>
      //</Card>
      //<Footer />
    //</div>
  //);
//}

//export default App;


import './App.css';
import UserProfile from './components/UserProfile';


function App() {
  const vartotojai = [
    {
      vardas: 'Jonas',
      amzius: 28,
      spalva: 'skyblue',
      nuotrauka: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      vardas: 'Aistė',
      amzius: 25,
      spalva: 'salmon',
      nuotrauka: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      vardas: 'Tomas',
      amzius: 32,
      spalva: 'lightgreen',
      nuotrauka: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      vardas: 'Gabija',
      amzius: 22,
      spalva: 'plum',
      nuotrauka: 'https://randomuser.me/api/portraits/women/36.jpg',
    },
  ];

  return (
    <div className="profileGrid">
      {vartotojai.map((user, index) => (
        <UserProfile
          key={index}
          vardas={user.vardas}
          amzius={user.amzius}
          spalva={user.spalva}
          nuotrauka={user.nuotrauka}
        />
      ))}
    </div>
  );
}

export default App;