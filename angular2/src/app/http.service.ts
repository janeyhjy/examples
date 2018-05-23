import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../environments/environment';

const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // 'Content-Type': 'application/json'
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get (url: string = '', params: object = {}, commonErrorHandle: boolean = true): Observable<any> {
    const queryString: string = this.queryString(params);
    if (!!queryString.length) url = environment.baseUrl +  url + '?' + queryString;
    else url = environment.baseUrl + url;
    return this.httpClient.get(url).pipe(
      // retry(2), //在一次失败后重试次数
      tap(res => {
        return res;
      }),
      catchError(this.handleError(commonErrorHandle))
    );
  }

  post (url: string = '', params: object = {}, commonErrorHandle: boolean = false): Observable<any> {
    //以application/x-www-form-urlencoded格式传参，需奖参数拼接成 `a=b&c=d` 格式, 默认为aplication/json格式
    const queryString = this.queryString(params);
    return this.httpClient.post(environment.baseUrl + url, queryString, {
      headers: headers
    }).pipe(
      tap(res => {
        return res;
      }),
      catchError(this.handleError(commonErrorHandle))
    );
  }

  // get1 (url: String = '', params: Object = {}, successCallback: Function = null, errorCallback: Function = null): void {
  //   const aaa = 'https://api.github.com/users/seeschweiler?test=1';
  //   this.httpClient.get(aaa).subscribe(
  //     response => {
  //       console.log('get response type...........', typeof response);
  //       if (typeof successCallback == 'function') {
  //         successCallback(response);
  //         return;
  //       }
  //     },
  //     error => {
  //       if (typeof errorCallback == 'function') {
  //         errorCallback(error);
  //         return;
  //       }
  //       this.handleError(error);
  //     });
  // }

  // post1 (url: String = '', params: String = '{}') :void {
  //   this.httpClient.post(environment.baseUrl + url, params).subscribe(
  //     response => {
  //       console.log('post response type...........', typeof response);
  //       console.log('post success', response);
  //     },
  //     error => {
  //       console.log('post error', error);
  //     }
  //   )
  // }

  private handleError(commonErrorHandle: boolean) : any {
    return (error: any): Observable<any> => {
      if (commonErrorHandle) {
        //common error handle
      }
      return throwError(error);
    }
  }

  private queryString(params: object): string {
    if (!params) return '';
    const newQueryArray: Array<string> = [];
    
    const queryArray: Array<string> = Object.keys(params).map(key => {
      if (params[key] === undefined || params[key] === '') return '';
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    });

    for (let i = 0; i < queryArray.length; i++) {
      if (queryArray[i]) {
        newQueryArray.push(queryArray[i]);
      }
    }

    return newQueryArray.join('&');
  }
}
