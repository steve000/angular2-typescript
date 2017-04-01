import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'jhi-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [
        'sidebar.css'
    ]
})
export class SidebarComponent implements OnInit {
    value: string;
    constructor() {}

    ngOnInit() {
    }
}
