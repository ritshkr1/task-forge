import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  activeTabName = "Dashboard";

  constructor(private route: Router) { }
  activeDashBoardTab() {
    return this.activeTabName === 'Dashboard' ? 'tab-button-active' : 'tab-button'
  }
  activeBoardTab() {
    return this.activeTabName === 'Board' ? 'tab-button-active' : 'tab-button'
  }
  activeTableTab() {
    return this.activeTabName === 'Table' ? 'tab-button-active' : 'tab-button'
  }
  setTabName(tabName: string) {
    this.activeTabName = tabName;
    let navigateTo = '/'
    if(tabName === 'Table'){
      navigateTo = '/tasks'
    }else if(tabName === 'Board'){
      navigateTo = '/kanban'
    }else{
      navigateTo = '/'
    }
    this.route.navigate([navigateTo])
  }

  setModalOpen() {
    return 'open'
  }
}
