class User {
  private name: string;
  private email: string;
  private age: number;
  public id: string;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    this.id = Date.now().toString();
    console.log(this.id);
  }
}

export default User;
