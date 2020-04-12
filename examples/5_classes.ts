// Class

class SomeClass{
  version: string
  constructor(version:string) {
    this.version = version
  }

  info(name:string){
    return `${name}: version is ${this.version}`
  }
}

class Car {
  readonly model:string
  readonly wheels:number = 4

  constructor(theModel:string){
    this.model = theModel
  }
}

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go(){
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice:string):void{
    this.voice = voice
  }
}

const cat = new Cat();

// Абстрактные классы и методы

abstract class Component {
  abstract render():void
  abstract info():string
}

class AppComponent extends Component{
  render():void{
    console.log('Render')
  }
  info(){
    return 'Info'
  }
}