import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeComponent } from './features/knowledge/knowledge.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { CollectionComponent } from './features/collection/collection.component';

const routes: Routes = [
  { path: '', redirectTo: '/knowledge', pathMatch: 'full' },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'collection', component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
