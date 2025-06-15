import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterLinkActive, MaterialsModule],
  //providers: [BreakpointService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  fullMenu : boolean = false;
  constructor(private router: Router) {}

  get activeClass() {
    /*return 'btn btn-primary text-light mw-10';*/
    return 'mw-10';
  }

  get inactiveClass() {
    /*return 'btn btn-light text-primary mw-10';*/
    return 'mw-10';
  }

  goToLink(where : String) {
    this.router.navigate([where]);
  }
}
