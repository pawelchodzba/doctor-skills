import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private phpUrl = 'http://localhost/d-s/search-diagnosis.php';
  // private phpUrl = '../d-s/search-diagnosis.php';

  constructor(private http: Http) { }
  getData(valSring, selfComBrowser): void {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  const options = new RequestOptions({headers: headers});

    this.http.post(this.phpUrl, {email:  valSring}, options)
    .subscribe((data) => {
   // const d = JSON.parse(data['_body']);
      selfComBrowser.next(data.json()) ;
    });
  }
}
