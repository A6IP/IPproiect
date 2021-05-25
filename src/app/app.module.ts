import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ForumComponent } from './modules/home/components/forum/forum.component';
import { NavbarComponent } from './shared/navbar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { PostComponent } from './modules/home/components/post/post.component';
import { ArticlesListComponent } from './modules/home/components/articles-list/articles-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { TopicModule } from './modules/topic/topic.module';
import { MatCardModule } from '@angular/material/card';
import { EditorPageComponent } from './modules/editor/components/editor-page/editor-page.component';
import { EditorComponent } from './modules/editor/components/editor/editor.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddQuestionModule } from './modules/add-question/add-question.module';
import { PostResolverService } from './service/post-resolver.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    PostComponent,
    ArticlesListComponent,
    EditorComponent,
    EditorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    TopicModule,
    MatCardModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    AddQuestionModule,
    HttpClientModule
  ],
  providers: [
    PostResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
