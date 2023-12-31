import {Component, inject, Input, OnInit, TemplateRef} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() template: TemplateRef<any> | any;
  private breakpointObserver = inject(BreakpointObserver);
  navItems: any[] = [
    {
      name: 'Dashboard',
      link: '',
      active: true,
      icon: 'grid_view'
    },
    {
      name: 'Invoice',
      link: 'invoice',
      active: false,
      icon: 'description'
    }
  ];

  ngOnInit() {}

  constructor() {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
