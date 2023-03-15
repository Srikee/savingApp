import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    Ajax(url: any, data: any) {
        return this.http.post(url, JSON.stringify(data), { responseType: 'text' });
    }
    LinkTo(page: any) {
        this.router.navigateByUrl(page);
    }
}
