export interface Core {
  url: String,
  level: Number, // Level?
  dfr_limits: Number,
  food_storage: Number,
  stars: Number,
  upgrade: {
    resource: String,
    quantity: Number
  }
}

export interface Level {
  url: String,
  level: Number,
  production_rate: Number,
  description: String
}
