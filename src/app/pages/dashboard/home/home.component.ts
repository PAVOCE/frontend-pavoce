import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'amount'];
  dataSource = ELEMENT_DATA;
  displayedColumns2 = ['method', 'address', 'customer', 'duration', 'start', 'end', 'status', 'payment', 'amount1']
  dataSource2 = ELEMENT_DATA2;
}
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  amount: string;
}
export interface recentActivities{
  method: string;
  address: string;
  customer: string;
  duration: string;
  start: string;
  end: string;
  status: string;
  payment: string;
  amount1: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
{position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '98 BNB'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight:'3 weeks', symbol: '16 Jul 2023', amount: '$250'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '$300'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '100 BNB'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
  {position:'0xhfgjdfdfe...hjs' , name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
  {position: '0xhfgjdfdfe...hjs', name: 'Kudirat Ijeoma', weight: '3 weeks', symbol: '16 Jul 2023', amount: '£100'},
];

const ELEMENT_DATA2: recentActivities[]= [
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23BNB', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
  {method:'Create', address:'0xhfgjdfdfe...hjs', amount1:'23ETH', customer: 'Kudirat ijoema', end: 'i6 July 2023', duration:'5days', payment:'crypto', start: '16 July 2023', status:'Approved'},
]
