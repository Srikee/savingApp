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
    async Logout() {

        let st = await this.session.ShowConfirm("คุณต้องการออกจากระบบใช่หรือไม่ ?")
        if (st == true) {
            this.session.RemoveStorage("auth");
            this.session.LinkTo("login");
        }
    }
    Test1() {
        //alert("ทดสอบนะจ่ะ");
        this.session.ShowAlert("ทดสอบนะจ่ะ");
    }
    async Test2() {
        let st = await this.session.ShowConfirm("Do you want to delete ?");
        if (st == true) {
            // ลบฐานข้อมูล

            this.session.ShowAlert("Delete success.");
        }
    }
    async Test3() {
        let data: any = await this.session.Ajax("http://localhost/savingAppApi/test.php", {
            num1: this.num1,
            num2: this.num2
        });
        // alert(data.kai);
        // alert(data.kuy);
        //alert(data.sum);
        this.session.ShowAlert("บันทึกเรียบร้อย");
    }
}
