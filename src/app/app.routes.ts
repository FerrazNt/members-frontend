import { Routes } from '@angular/router';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { NewMemberComponent } from './new-member/new-member.component';

export const routes: Routes = [
    {path: 'member-detail/:id',component: MembersDetailComponent},
    {path: 'new-member',component: NewMemberComponent}
];