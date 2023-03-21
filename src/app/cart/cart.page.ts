import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    items: any = [];
    image_part = "";
    constructor(
        private session: SessionService
    ) {
        this.image_part = this.session.image_part;
    }
    async RefreashItem() {
        this.items = [];
        let items: any = await this.session.GetStorage("items");
        for (const [key, item] of Object.entries(items)) {
            this.items.push(item);
        }
    }
    async ngOnInit() {
        this.RefreashItem();
    }
    async Del(item: any) {
        let items: any = await this.session.GetStorage("items");
        if (items[item.pro_id].orderQty == 1) {
            delete items[item.pro_id];
        } else {
            items[item.pro_id].orderQty--;
        }
        await this.session.SetStorage("items", items);
        this.RefreashItem();
    }
    async Add(item: any) {
        let items: any = await this.session.GetStorage("items");
        items[item.pro_id].orderQty++;
        await this.session.SetStorage("items", items);
        this.RefreashItem();
    }
}
