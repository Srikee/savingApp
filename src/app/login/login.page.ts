import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username = "";
    password = "";
    constructor(
        private session: SessionService
    ) { }

    ngOnInit() {
    }
    Login() {

        // this.http.post("http://localhost/savingAppApi/login.php", JSON.stringify({}), { responseType: 'text' }).subscribe(res => {
        //     alert(res);
        // });
        this.session.Ajax("http://localhost/savingAppApi/login.php", {}).subscribe(res => {
            alert(res)
        });

        if (this.username == "admin" && this.password == "12345") {
            this.session.LinkTo("home")
        } else {
            alert("ไม่ผ่าน");
        }
    }

}
