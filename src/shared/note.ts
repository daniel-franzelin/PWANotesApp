import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Theme } from './theme';
import { User } from './user';

export class Note {
  constructor(
    public id: string,
    public title: string,
    public text: string,
    public creationDate: number,
    public modificationDate: number,
    public theme: Theme | null,
    public user: User | null,
    public read: boolean = false
  ) {}

  static empty() {
    return new Note(uuidv4(), '', '', moment().valueOf(), 0, null, null, false);
  }
}
