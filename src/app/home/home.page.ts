import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    auth: any;
    num1 = 10;
    num2 = 20;
    constructor(
        private session: SessionService
    ) {
        this.auth = this.session.auth;


        this.Init();

    }
    async Init() {
        // let staff_name = await this.session.GetStorage("staff_name");
        // alert(staff_name);
    }
    GoToMenu() {
        this.session.LinkTo("menu");
    }
    GoToHistory() {
        this.session.LinkTo("history");
    }
    GoToProfile() {
        this.session.LinkTo("profile");
    }
    GoToCheckbalance() {
        this.session.LinkTo("checkbalance");
    }
}
