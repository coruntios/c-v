import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CubeComponent } from './cube/cube.component';
import { SliderComponent } from './slider/slider.component';
import { LevelCirclesComponent } from './level-circles/level-circles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PortafolioExample1Component } from './portafolio-example1/portafolio-example1.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TooltipComponent } from './tooltip/tooltip.component';
import { IconTooltipComponent } from './icon-tooltip/icon-tooltip.component';





@NgModule({
  declarations: [TodoComponent, TodoListComponent, CubeComponent, SliderComponent, LevelCirclesComponent, ProfileCardComponent, ServicesComponent, PortafolioComponent, PortafolioExample1Component, FormComponent, TooltipComponent, IconTooltipComponent],
  exports: [TodoComponent, TodoListComponent, CubeComponent, SliderComponent, LevelCirclesComponent, ProfileCardComponent, ServicesComponent, PortafolioComponent, PortafolioExample1Component, FormComponent, TooltipComponent, IconTooltipComponent],
  imports: [
    CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule
  ]
})
export class ComponentsModule { }
