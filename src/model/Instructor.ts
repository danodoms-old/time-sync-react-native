// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export default class Instructor extends Model {
  static table = "instructors";

  //@ts-ignore
  @text("name") name: string;
}
