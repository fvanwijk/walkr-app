export interface Mission {
  url: String,
  id: String,
  name: String,
  resources: [{
    resource: String,
    quantity: Number
  }]
}
