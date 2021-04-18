import {CommentModel} from "./comment.model";

export class Item {

  id: number;
  title:string;
  manufacturer:string;
  price:number;
  category:string;
  description:string;
  image:string;
  amount: number;
  rating: number;
  ratingsAmount: number;
  comments: CommentModel[];
}
