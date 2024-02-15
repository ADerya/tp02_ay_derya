import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../class/client';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.css'
})
export class RecapitulatifComponent implements OnInit {

    constructor() { }
    @Input() client !: Client;

    @Output() change: EventEmitter<String> = new EventEmitter<String>();

    ngOnInit(): void {
    }
}
