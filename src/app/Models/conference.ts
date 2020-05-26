import { Profile } from './Profile';

export class Conference {
  description: string;
  theme: string ;
  id: number;
  valide: boolean;
  dateJoin: Date;
  typePayement: string;
  urlRapport: string;
  localisation: string;
  capacite: number;
  price: number;
  urlImg: string ;
  typeConference: string ;
  publ: boolean;
  organizer: string;
  dateDebut: Date;
  dateFin: Date;
  profile: Profile;

}
