import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../../services/item.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

export class ListComponent implements OnInit {
  items = [];

  constructor(
    private itemService: ItemService,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.itemService.reads().subscribe(response => {
      this.items = response.data
    });
  }

  onDelete(id) {
    this.itemService.delete(id).subscribe(item => {
      // update the list|remove the item on the list
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          this.items.splice(i, 1);
        }
      }
      // display flash message
      this.flashMessages.show("Successfully removed item", {
        cssClass: "alert-success",
        timeout: 5000
      });
    });
  }
}
