import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-monke-gallery',
  templateUrl: './secret-monke-gallery.component.html',
  styleUrls: ['./secret-monke-gallery.component.scss']
})
export class SecretMonkeGalleryComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  imageObject = [{
    image: './assets/images/monke.jpg',
    thumbImage: './assets/images/monke.jpg',
    title: 'monke'
}, {
    image: 'https://pbs.twimg.com/profile_images/1166039257875722240/M-YnMbnh_400x400.jpg',
    thumbImage: 'https://pbs.twimg.com/profile_images/1166039257875722240/M-YnMbnh_400x400.jpg'
}, {
    image: 'https://www.especes-menacees.fr/wp-content/uploads/2018/06/gibbon-mains-blanches.jpg',
    thumbImage: 'https://www.especes-menacees.fr/wp-content/uploads/2018/06/gibbon-mains-blanches.jpg',
    title: 'monke'
},{
    image: 'https://editorial01.shutterstock.com/wm-preview-1500/1269593a/eb728944/fat-orangutan-at-the-taman-safari-park-near-jakarta-indonesia-shutterstock-editorial-1269593a.jpg',
    thumbImage: 'https://editorial01.shutterstock.com/wm-preview-1500/1269593a/eb728944/fat-orangutan-at-the-taman-safari-park-near-jakarta-indonesia-shutterstock-editorial-1269593a.jpg',
    title: 'monke'
}, {
    image: 'https://i.guim.co.uk/img/media/6552342ff27a5972f27fec97e8ebc9c807f893f6/0_149_5000_3000/master/5000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5f5b6abeb78b2a2e68e961312afd5f7',
    thumbImage: 'https://i.guim.co.uk/img/media/6552342ff27a5972f27fec97e8ebc9c807f893f6/0_149_5000_3000/master/5000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5f5b6abeb78b2a2e68e961312afd5f7'
}, {
    image: 'https://metro.co.uk/wp-content/uploads/2017/04/pri_37915452-e1493370598325.jpg?quality=90&strip=all&zoom=1&resize=480%2C390',
    thumbImage: 'https://metro.co.uk/wp-content/uploads/2017/04/pri_37915452-e1493370598325.jpg?quality=90&strip=all&zoom=1&resize=480%2C390',
    title: 'Monke'
}];
}
