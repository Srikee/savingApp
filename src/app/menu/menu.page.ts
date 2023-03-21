import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    data: any = [];
    image_part = "";
    constructor(
        private session: SessionService
    ) {
        this.image_part = this.session.image_part;
    }

    async ngOnInit() {
        let res: any = await this.session.Ajax(this.session.api + "/product-get.php", {});
        this.data = res.data;
    }
    async Add(item: any) {
        let items: any = await this.session.GetStorage("items");
        if (items == null) {
            items = {};
            item.orderQty = 1;
            items[item.pro_id] = item;
        } else {
            if (items[item.pro_id] == null) {
                item.orderQty = 1;
                items[item.pro_id] = item;
            } else {
                items[item.pro_id].orderQty++;
            }
        }
        await this.session.SetStorage("items", items);
        this.session.ShowAlert("เพิ่มในตะกร้าแล้ว");
    }
}
