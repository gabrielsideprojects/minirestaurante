export interface Irestaurante {
  description: string;
  id: string;
  image: string;
  logo: string;
  name: string;
  opening_hours: string;
  payment_methods: string;
  price_range: string;
  telephone: string;
  website: string;
}

export interface IRestaurantData {
  data: [Irestaurante];
}
