import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllHits(): Observable<any[]> {
    const endpoint: string = environment.api_url + 'hits/all';
    return this._httpClient.get<any[]>(endpoint);
  }

  deleteHit(id: number) {
    const endpoint: string = environment.api_url + 'hits/delete/' + id;
    return this._httpClient.delete<any[]>(endpoint);
  }
}