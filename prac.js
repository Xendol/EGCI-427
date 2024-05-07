
class Jedi {
    constructor(name) {
      this.forceIsDark = false;
    }

    say() {
      console.log("Hello, OB1");
      if (yoda.forceIsdark == true) {
        console.log("");
      }
    }

    force() {
      return "Fear is the path to the dark side";
    }
  }



  class Sith extends Jedi {
    constructor(name, name1) {
      super(name);
      this.name1 = name1;
    }
    say() {
      this.forceIsDark = true;
      console.log("Yes, Master");
    }
    force() {
      return "Join the dark side";
    }
  }

  let yoda = new Jedi();
  let darth = new Sith();

  yoda.say();
  darth.say();
  console.log(yoda.forceIsDark);
  console.log(darth.forceIsDark);
  console.log(yoda.force());
  console.log(darth.force());



