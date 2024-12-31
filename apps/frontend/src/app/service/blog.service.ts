import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = 'http://localhost:3000/api/blogs';

  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  Get(blgId: number) {
    return this.http.get<Blog>(this.apiUrl + '/' + blgId);
  }

  Create(data: Blog) {
    return this.http.post(this.apiUrl, data);
  }

  Update(data: Blog) {
    return this.http.put(this.apiUrl + '/' + data.id, data);
  }

  Delete(blgId: number) {
    return this.http.delete(this.apiUrl + '/' + blgId);
  }
}
