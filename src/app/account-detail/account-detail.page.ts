import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.page.html',
    styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
    account_id: any = "";
    data: any = {};
    constructor(
        private route: ActivatedRoute,
        private session: SessionService
    ) { }

    ngOnInit() {
        this.account_id = this.route.snapshot.paramMap.get("account_id");
        this.LoadData();
    }

    async LoadData() {
        let res: any = await this.session.Ajax("http://localhost/savingAppApi/account-detail-get.php", {
            account_id: this.account_id
        });
        this.data = res.data;
    }
}
