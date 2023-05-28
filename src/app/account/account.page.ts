import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    datas: any = [];
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
        this.LoadAccount();
    }


    async LoadAccount() {
        let res: any = await this.session.Ajax("http://localhost/savingAppApi/account-get.php", {});
        this.datas = res.data;
        console.log(this.datas);
    }

    GoToAccountDetail(data: any) {
        let account_id = data.account_id;
        this.session.LinkTo("account-detail/" + account_id);
    }
}
