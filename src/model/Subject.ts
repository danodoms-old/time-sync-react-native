// model/Post.js

import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export default class Subject extends Model {
  static table = "subjects";

  //@ts-ignore
  @text("name") name: string;
}
