class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetials(){
    console.log(this.age);
  }

}


let div=new Person("Divyanshu",21);

div.getDetials();