class Singleton {
  static instance: Singleton | null = null;

  constructor(public name: string) {}

  logName() {
    console.log(this.name);
  }

  static getInstance(name: string) {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton(name);
    }
    return Singleton.instance;
  }
}

const a = Singleton.getInstance('dave');
a.logName(); // dave

const b = Singleton.getInstance('kiki');
b.logName(); // dave

console.log(a === b); // true
