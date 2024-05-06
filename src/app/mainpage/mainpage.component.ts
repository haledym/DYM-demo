import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { GeneralInfoComponent } from './component/general-info/general-info.component';
import { MissionComponent } from './component/mission/mission.component';
import { StaffInfoComponent } from './component/staff-info/staff-info.component';
import { BenefitComponent } from './component/benefit/benefit.component';
import { ExtraInfoAndImageComponent } from './component/extra-info-and-image/extra-info-and-image.component';
import { EventComponent } from './component/event/event.component';

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.css',
    imports: [
        HeaderComponent,
        FooterComponent,
        GeneralInfoComponent,
        MissionComponent,
        StaffInfoComponent,
        BenefitComponent,
        StaffInfoComponent,
        EventComponent,
        ExtraInfoAndImageComponent
    ]
})
export class MainpageComponent {

}
