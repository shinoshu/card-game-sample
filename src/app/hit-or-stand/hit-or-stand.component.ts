import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as lodash from 'lodash';

@Component({
  selector: 'app-hit-or-stand',
  templateUrl: './hit-or-stand.component.html',
  styleUrls: ['./hit-or-stand.component.scss']
})
export class HitOrStandComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<HitOrStandComponent>
  ) { }

  ngOnInit() {
  }

  action(event: string) {
    this.dialogRef.close(event);
  }
}
