import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface responseData {
    data: any
}

@Injectable({
  providedIn: "root"
})
export class ItemService {
  url = "http://lara-crud.com/api/item";

  constructor(private http: HttpClient) {}

  // CRUD Items

  // Create
  create(item) {
    return this.http.post(this.url + "/create", item);
  }

  // Read
  reads() {
    return this.http.get<responseData>(this.url + "/list");
    // return this.http.get(this.url + "/list");
  }

  // Read (single)
  read(id) {
    return this.http.get(this.url + "/" + id);
  }

  // Update
  update(item) {
    return this.http.put(this.url + "/update/" + item.id, item);
  }

  // Delete
  delete(id) {
    return this.http.delete(this.url + "/delete/" + id);
  }
}
