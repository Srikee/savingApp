import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-checkbalance',
    templateUrl: './checkbalance.page.html',
    styleUrls: ['./checkbalance.page.scss'],
})
export class CheckbalancePage implements OnInit {
    acccounts: any = [];
    account_id = "";
    datas: any = [];
    balance = 0;
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
        this.LoadAccount();
    }

    async LoadAccount() {
        let rs: any = await this.session.Ajax(this.session.api + "/account-get.php", {});
        this.acccounts = rs.data;
    }
    async SelectAccount() {
        // alert(this.account_id);
        let rs: any = await this.session.Ajax(this.session.api + "/account-checkbalance.php", {
            account_id: this.account_id
        });
        this.datas = rs.data;
        this.balance = rs.balance;
    }
}
