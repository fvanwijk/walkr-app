import { Core } from './core';
import { Discovery } from '../planets/planet';
import { Mission } from '../missions/mission';

export interface Wid {
  url: String,
  wid: String,
  name: String,
  title: String,
  level: Number,
  core: Core,
  planets: [Discovery],
  dfrs: [Wid],
  missions: [Mission]
}
