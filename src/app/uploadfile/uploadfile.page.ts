import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-uploadfile',
    templateUrl: './uploadfile.page.html',
    styleUrls: ['./uploadfile.page.scss'],
})
export class UploadfilePage implements OnInit {
    name: any = "";
    file: any = "";
    constructor(
        private session: SessionService,
        private http: HttpClient,
    ) { }

    ngOnInit() {
    }
    Add() {
        console.log(this.name);
        console.log(this.file);

        let file: any = document.querySelector("#file input");
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("file", file.files[0]);
        this.http.post(this.session.api + "/upload.php", formData, { responseType: 'json' })
            .subscribe((response: any) => {

            }, error => {

            });
    }
}
