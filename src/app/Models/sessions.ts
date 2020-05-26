import { Conference } from './conference';
import { Salle } from './Salle';

export class Sessions {
  id: string;
  valie: boolean;
  speaker: string;
  sujet: string;
  dateDebut: Date;
  dateFin: Date;

  conference: Conference;
  salle: Salle;

}
