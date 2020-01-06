import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

import 'web-component-essentials'

import { AppComponent } from './app.component'
import { TodoComponent } from './todo/todo.component'

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} }

const routes: Routes = [
  { path: ':stts', component: TodoComponent },
  { path: '**', redirectTo: '/todas' }
]

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
