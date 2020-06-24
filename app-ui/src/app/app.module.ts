import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { HttpClientModule } from "@angular/common/http";
import { ThingsComponent } from "./things/things.component";
import { LightComponent } from "./componets/light/light.component";
import { SwitchComponent } from "./componets/switch/switch.component";
import { DimmerComponent } from "./componets/dimmer/dimmer.component";
import { DimmableComponent } from "./componets/dimmable/dimmable.component";
import { ColoredLightComponent } from "./componets/colored-light/colored-light.component";

//ng-material
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";

//ng--color picker
import { ColorPickerModule } from "ngx-color-picker";
import { MotionSensorComponent } from "./componets/motion-sensor/motion-sensor.component";
import { ClimateSensorComponent } from './componets/climate-sensor/climate-sensor.component';
import { LockComponent } from './componets/lock/lock.component';
import { LightSensorComponent } from './componets/light-sensor/light-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ThingsComponent,
    LightComponent,
    SwitchComponent,
    DimmerComponent,
    DimmableComponent,
    ColoredLightComponent,
    MotionSensorComponent,
    ClimateSensorComponent,
    LockComponent,
    LightSensorComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    MatSliderModule,
    ColorPickerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
