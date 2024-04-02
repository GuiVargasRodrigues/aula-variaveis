// Array com seis personagens de Naruto
const personagensNaruto = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Shikamaru Nara",
    "Hinata Hyuga",
    
  ];
  
  
  function personagemAleatorio() {
      
      const indiceAleatorio = Math.floor(Math.random() * personagensNaruto.length);
      
      return personagensNaruto[indiceAleatorio];
  }
  
  
  console.log("Meu personagem é:", personagemAleatorio());
  