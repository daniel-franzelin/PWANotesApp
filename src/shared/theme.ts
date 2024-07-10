import { v4 as uuidv4 } from 'uuid';

export class Theme {
  constructor(
    public id: string,
    public description: string
  ) {}

  static empty(): Theme {
    return new Theme(uuidv4(), '');
  }
}
