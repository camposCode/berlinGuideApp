import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonumentsService {

  private monuments: Monument[] = [
    {
      name: 'Fernsehturm',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img:'assets/img/tvTower.jpg',
    },
    {
      name: 'Brandenburg Gate',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img: 'assets/img/brandenburgGate.jpg',
    },
    {
      name: 'Potsdamer Platz',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img: 'assets/img/potsdamerPlatz.jpg',
    },
    {
      name: 'Siegessäule',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img: 'assets/img/siegesaele.jpg',
    },
    {
      name: 'Dom',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img: 'assets/img/dom.jpg',
    },
    {
      name: 'San Souci',
      history:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc. Quis lectus nulla at volutpat. Consequat ac felis donec et odio pellentesque diam. Augue lacus viverra vitae congue. Cursus turpis massa tincidunt dui ut ornare lectus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Viverra justo nec ultrices dui. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit. Amet purus gravida quis blandit turpis. Molestie at elementum eu facilisis.',
      img: 'assets/img/sansouci.jpg',
    },
  ];

  constructor() {
    console.log('Service ready to be used');
  }

  getMonuments() {
    return this.monuments;
  }

  getMonument(pI: string){
    return this.monuments[pI];
  }


}


export interface Monument{
  name: string;
  history: string;
  img: string;
};
