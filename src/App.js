import React, { Component } from 'react'
import ahmed from './ahmed.jpg'

export default class App extends Component {
  //person : {fullName:'ahmed chaouach', bio:'junior full stack developer', imgSrc:'ahmed.jpg', profession:'full stack developer'}
  personalInformations = [{fullName :'Ahmed Chaouach'}, {bio :'junior full stack developer'}, {imgSrc:'{ahmed}'}, {profession :'full stack developer'}];
    constructor(){
      super();
        this.state = {
          show : false,
          intervall : null,
          timer : 0,
          
        };
    }
    componentDidMount(){
      this.setState({intervall :setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)})
    }

    showPersonnalProfil = () => {
      this.setState({show: !this.state.show});
    };
  render() {
  
    return (
      <div>
        <button onClick = {this.showPersonnalProfil}>{this.state.show ?'Hide Profil' : 'show Profil'}</button>
        {this.state.show && <div>
            {this.personalInformations.map((el,i)=>(<h1>{el.fullName}</h1>))}
            {this.personalInformations.map((el,i)=>(<p>{el.bio}</p>))}
            {this.personalInformations.map((el,i)=>(<img src={ahmed} alt="ahmed"></img>))}
            {this.personalInformations.map((el,i)=>(<h2>{el.profession}</h2>))}
        </div>}
        <h1>{this.state.timer}</h1>
      </div>
    )
  }
}
//Implémenter un état pour cette classe contenant un Person = {fullName, bio, imgSrc, profession} et un show booléen
//Ajoutez un bouton qui bascule l'état de l'émission et lorsque l'état de l'émission est vrai, le profil de la personne apparaît
//Créez un champ qui affiche le temps écoulé depuis le montage du composant en utilisant le cycle de vie du composant






