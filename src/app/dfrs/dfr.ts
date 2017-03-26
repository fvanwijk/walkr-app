export interface Dfr {
  url: String,
  code: String,
  name: String
}

export interface DfrDiscovery {
  id: Number,
  url: String,
  wid: { name: String, url: String },
  dfr: { name: String, url: String },
  level: Number,
  distance: Number,
  base_price: { name: String, quantity: Number },
  next_upgrade_price: { name: String, quantity: Number },
  resource_value: { name: String, quantity: Number }, // Total food
  completion_time: Number // minutes
}
