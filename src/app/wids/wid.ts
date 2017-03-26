import { Mission } from '../missions/mission';
import { Discovery } from '../planets/planet';

export interface Wid {
  url: String,
  wid: String,
  name: String,
  title: String,
  level: Number,
  planets: [Discovery],
  dfrs: [Wid],
  missions: [Mission]
}
