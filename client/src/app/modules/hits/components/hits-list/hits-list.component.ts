import { HitsService } from './../../../../core/http/hits/hits.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'hits-list',
  templateUrl: './hits-list.component.html',
  styleUrls: ['./hits-list.component.css']
})
export class HitsListComponent implements OnInit, OnDestroy {
  private _Subscription: Subscription;
  allHists: any[];

  constructor(
    private _hitsService: HitsService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this._Subscription.unsubscribe();
  }

  select(item: any) {
    if (item.story_url) {
      window.open(item.story_url, "_blank");
    } else if (item.url) {
      window.open(item.url, "_blank");
    }
  }

  delete(item: any) {
    if (confirm("Delete? " + item.story_title ?? item.title)) {
      this._Subscription = this._hitsService.deleteHit(item.story_id)
        .subscribe((response: any) => {
          console.log('RESPONSE',response);
            this.loadData();
        });
    }
  }

  loadData() {
    this.allHists = [];
    this._Subscription = this._hitsService.getAllHits()
      .subscribe((data: any[]) => {
        // console.log('DATA RESPONSE', data);
        this.allHists = data;
      }, (error: HttpErrorResponse) => {
        console.error('ERROR SERVICE', error);
      });
  }
}
