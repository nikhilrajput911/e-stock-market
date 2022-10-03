import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
    { path: 'welcome', component: CompanyDetailsComponent },
    { path: 'company/add', component: AddCompanyComponent },
    { path: 'stock/add', component: AddStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
