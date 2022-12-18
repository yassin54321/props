

import './App.css';
import FullName from './Profile/Component/FullName';
import Profession from './Profile/Component/Profession';
import Bio from './Profile/Component/Bio';
import Image from './Profile/Component/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
function App() {
  const [show] = useState(true);
  const Cristiano = {
    FullName: "Cristiano Ronaldo",
    Bio: "D’immenses qualités techniques, des coups de génie nombreux (en 2011, il a marqué une moyenne de 0,98 but par match), une vitesse de pointe exceptionnelle… Cristiano Ronaldo est considéré comme le meilleur joueur du monde avec Lionel Messi. L’attaquant star du Real Madrid est né dans une famille pauvre de Funchal. Il commence le football à l’âge de 8 ans au FC Andorinha, club dans lequel son père est intendant. Après un bref passage d’une saison au Clube Desportivo Nacional, il rejoint le Sporting Clube de Portugal. Il intègre l’effectif professionnel. C’est lors d’un match du SC Portugal contre Manchester United qu’il se fait repérer par le club anglais, qui le recrute en 2003. En 2006–2007, le jeune joueur se révèle au public, avec 23 buts marqués toutes compétitions confondues. La saison suivante est celle de la confirmation. L’équipe remporte le championnat anglais et la Ligue des Champions. Couronné Ballon d’or 2008 et élu meilleur footballeur de l’année FIFA 2008 en 2009, Cristiano Ronaldo est le joueur le plus cher de l’histoire du football. Le montant de son transfert de Manchester United au Real Madrid s’élève à 94 millions d’euros. Un succès sans tache ? Pas vraiment : son arrogance, voire ses attitudes antisportives, en énerve plus d'un.En janvier 2015 le porte-parole d'Irina Shayk confirme sa rupture avec Cristiano Ronaldo après 5 ans d'amour. En juin 2010, il devient le père de Cristiano Jr. Le 8 juin 2017, grâce à une mère porteuse, il devient le père de Mateo et Eva. En juillet 2017, il annonce la grossesse de Georgina Rodriguez, sa compagne. Le 12 novembre 2017, le couple accueille leur fille : Alana Martina. Le 28 octobre 2021, le couple annonce sur les réseaux sociaux que Georgina attend des jumeaux, un garçon et une fille. Le 18 avril 2022, le footballeur annonce la mort de son fils à la naissance, sa fille se porte bien. Leur fille se prénomme Bella Esmeralda.",
    Profession: "footballeur international portugais qui évolue au poste d'attaquant",
  };
  if (show) {
    return (
      <div className="App">
        <br />
        <FullName name={Cristiano} />
        <br />
        <Profession profession={Cristiano} />
        <br />
        <Bio Bio={Cristiano} />
        <br />
        <button style={{
          backgroundColor: "#1D9CBD",
        }}
          onClick={() => alert(Cristiano.FullName)}>
          {"Profile"}
        </button>
        <br />
        <br />
        <Image>
          <img
            src="https://static.javatpoint.com/biography/images/ronaldo.png"
            alt="cristiano" />
        </Image>
        <br />
      </div>
    );
  }
}
export default App;