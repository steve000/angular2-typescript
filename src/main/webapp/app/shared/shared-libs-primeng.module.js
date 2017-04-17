"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var primeng_1 = require('primeng/primeng');
var primeNgModules = [
    primeng_1.SharedModule,
    // Input
    primeng_1.AutoCompleteModule,
    primeng_1.CalendarModule,
    primeng_1.CheckboxModule,
    primeng_1.ChipsModule,
    primeng_1.DropdownModule,
    primeng_1.EditorModule,
    primeng_1.InputSwitchModule,
    primeng_1.InputTextModule,
    primeng_1.InputTextareaModule,
    primeng_1.ListboxModule,
    primeng_1.InputMaskModule,
    primeng_1.MultiSelectModule,
    primeng_1.PasswordModule,
    primeng_1.RadioButtonModule,
    primeng_1.RatingModule,
    primeng_1.SliderModule,
    primeng_1.SpinnerModule,
    primeng_1.SelectButtonModule,
    primeng_1.ToggleButtonModule,
    primeng_1.TriStateCheckboxModule,
    // Button
    primeng_1.ButtonModule,
    primeng_1.SplitButtonModule,
    // Data
    primeng_1.CarouselModule,
    primeng_1.DataGridModule,
    primeng_1.DataListModule,
    primeng_1.DataScrollerModule,
    primeng_1.DataTableModule,
    primeng_1.OrderListModule,
    primeng_1.GMapModule,
    primeng_1.PaginatorModule,
    primeng_1.PickListModule,
    primeng_1.ScheduleModule,
    primeng_1.TreeModule,
    // TreeNode,
    primeng_1.TreeTableModule,
    // Panel
    primeng_1.AccordionModule,
    primeng_1.FieldsetModule,
    primeng_1.PanelModule,
    primeng_1.TabViewModule,
    primeng_1.ToolbarModule,
    // Overlay
    primeng_1.ConfirmDialogModule,
    // ConfirmationService,
    primeng_1.DialogModule,
    primeng_1.LightboxModule,
    primeng_1.OverlayPanelModule,
    primeng_1.TooltipModule,
    primeng_1.FileUploadModule,
    // Menu
    primeng_1.MenuModule,
    // MenuItem,
    primeng_1.BreadcrumbModule,
    primeng_1.ContextMenuModule,
    primeng_1.MegaMenuModule,
    primeng_1.MenubarModule,
    primeng_1.PanelMenuModule,
    primeng_1.SlideMenuModule,
    primeng_1.StepsModule,
    primeng_1.TabMenuModule,
    primeng_1.TieredMenuModule,
    // Charts
    primeng_1.ChartModule,
    // Messages
    primeng_1.MessagesModule,
    primeng_1.GrowlModule,
    // Multimedia
    primeng_1.GalleriaModule,
    // Drag&Drop
    primeng_1.DragDropModule,
    primeng_1.BlockUIModule,
    primeng_1.CaptchaModule,
    primeng_1.InplaceModule,
    primeng_1.ProgressBarModule,
    primeng_1.CodeHighlighterModule,
    primeng_1.TerminalModule
];
var SchintacloudSharedLibsPrimeNgModule = (function () {
    function SchintacloudSharedLibsPrimeNgModule() {
    }
    SchintacloudSharedLibsPrimeNgModule = __decorate([
        core_1.NgModule({
            imports: primeNgModules,
            exports: primeNgModules,
            providers: [primeng_1.ConfirmationService]
        })
    ], SchintacloudSharedLibsPrimeNgModule);
    return SchintacloudSharedLibsPrimeNgModule;
}());
exports.SchintacloudSharedLibsPrimeNgModule = SchintacloudSharedLibsPrimeNgModule;
//# sourceMappingURL=shared-libs-primeng.module.js.map