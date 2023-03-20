import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    staff_name = "";
    staff_lname = "";
    username = "";
    password = "";
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    async Register() {
        let rs: any = await this.session.Ajax(this.session.api + "/staff-add.php", {
            staff_name: this.staff_name,
            staff_lname: this.staff_lname,
            username: this.username,
            password: this.password
        });
        if (rs.status == "ok") {
            await this.session.ShowAlert("ลงทะเบียนสำเร็จ");
            this.session.LinkTo("login");
        } else {
            await this.session.ShowAlert("ลงทะเบียนไม่สำเร็จ");
        }
    }
}
