export class User {
  constructor(
    public username: string,
    public password: string
  ) {}

  static emptySepp() {
    return new User('sepp@hintner.com', 'sepp');
  }
}
