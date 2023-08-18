import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
    selector: 'ng-http-basic',
    templateUrl: './http-basic.component.html',
    styleUrls: ['./http-basic.component.scss'],
})
export class HttpBasicComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        const api = 'https://tianqiapi.com/free/day';

        // 设置请求参数
        const opt = {
            appid: '23035354',
            appsecret: '8YvlPNrz',
            cityid: '0',
            city: 'beijing',
            ip: '112.232.36.102',
        };
        let reqParams = new HttpParams({
            fromObject: opt,
            // fromString: 'appid=23035354&appsecret=8YvlPNrz&cityid=0&city=%E8%A5%BF%E5%AE%89&ip=112.232.36.102&callback=0',
        });
        reqParams = reqParams.set('callback', '0');

        // 设置请求头
        const reqHeaders = new HttpHeaders({
            test: 'abc',
        });
        this.http
            .get(api, {
                params: reqParams,
                // headers: reqHeaders,
                // observe设置响应内容（observe: 'body'获取服务器返回的数据 / observe: 'response'获取完整响应体）
                observe: 'response',
            })
            .subscribe((res) => {
                const resDate = res.headers.get('Content-Type');
                console.log(resDate);
            });
    }
}
