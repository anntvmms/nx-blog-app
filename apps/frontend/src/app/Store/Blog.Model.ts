import { Blog } from '../model/Blog';

export interface BlogModel {
  list: Blog[];
  errormessage: string;
  blgobj: Blog;
}
