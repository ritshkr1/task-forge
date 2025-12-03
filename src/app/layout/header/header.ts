import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  activeTabName = "Dashboard"
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
  }

  setModalOpen() {
    return 'open'
  }
}
