import Phaser from "phaser";
import logoImg from "../assets/default.png";
import logoImg2 from "../assets/logo2.png";

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.image("logo", logoImg);
    this.load.image("logo2", logoImg2);
  }
  create() {

    let alertText = 'Hello mgamee!'
    let buttonText = 'Hello mgamee!'

    const logo = this.add.image(100, 100, "logo");
    const helloButton = this.add.text(300, 100, buttonText, { fill: '#0f0' });
    helloButton.setInteractive();
    helloButton.on('pointerover', () => {
      helloButton.setStyle({ fill: '#ff0'});
    });
    helloButton.on('pointerout', () => {
      helloButton.setStyle({ fill: '#0f0'});
    });
    helloButton.on('pointerup', () => {
      alert(alertText)
    })

    window.lg = 'logo';
    logo.setScale(0.2);
    window.test = function(){
      if(window.lg === 'logo'){
        window.lg = 'logo2'
        logo.setTexture("logo2");
      } else {
        window.lg = 'logo'
        logo.setTexture("logo");
      }
    }

    window.changeText = function(text){
      helloButton.setText(text)
    }

    window.changeAlert = function(text){
      alertText = text
    }

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}

export default playGame;
