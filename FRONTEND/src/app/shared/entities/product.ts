export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  summary: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    image: string,
    summary: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.summary = summary;
  }
}
