import { NgModule } from '@angular/core';

import { MaventestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MaventestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MaventestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MaventestSharedCommonModule {}
