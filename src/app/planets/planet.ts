export interface Planet {
  url: String,
  code: Number,
  name: String,
  image_url: String,
  description: String,
  type: String,
  gravity: String,
  creature: String,
  creature_description: String,
  creature_image_url: String,
  resource: String,
  resource_image_url: String
}

export interface Satellite {
  url: String,
  id: Number,
  name: String,
  boost: String,
  level_1: String,
  level_2: String,
  planet: Planet
}

export interface Discovery {
  url: String;
  wid: { name: String, url: String };
  planet: { name: String, url: String };
  level: Number;
  discovery_date: Date;
  distance: Number;
  base_price: { name: String, quantity: Number };
  next_upgrade_price: { name: String, quantity: Number };
  requirements: { name: String, quantity: Number }; // Food to start new harvest round
  resource_value: { name: String, quantity: Number }; // Total resources
  completion_time: Number; // seconds
}
