export type userPattern = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
  export class User {
    constructor(
      public id: string,
      private name: string,
      private email: string,
      public password: string
    ) {}
  
    public getId(): string {
      return this.id;
    }
    public getName() {
      return this.name;
    }
    public getEmail() {
      return this.email;
    }
    public getPassword = (): string => {
      return this.password;
    }
  
    static toUserModel(data: userPattern): User {
      return new User(data.id, data.name, data.email, data.password);
    }
  }
  