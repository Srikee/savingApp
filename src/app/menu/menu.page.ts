import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    data: any = [];
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let res: any = await this.session.Ajax(this.session.api + "/product-get.php", {});
        this.data = res.data;
    }

}
