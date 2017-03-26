import { Planet } from '../planets/planet';

export interface Epic {
  url: String,
  id: Number,
  name: String,
  description: String,
  requirements: Number,
  members: { min: Number, max: Number },
  rewards: { coins: Number, galaxy_map: Planet, cubes: Number },
  donations: { energy: Number, coins: Number, food: Number, resources: Number },
  rounds: [{
    name: String,
    subrounds: [{
      round_type: String,
      donation: [{
        name: String,
        quantity: [Number]
      }],
      choices: [String]
    }],
    choices: [{
      rounds: [{
        name: String,
        subrounds: [{
          round_type: String,
          donation: [{
            name: String,
            quantity: [Number]
          }]
        }]
      }]
    }]
  }]
}
