import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-template-demo',
    template: `
        <app-docsectiontext>
            <p>Calendar UI accepts custom content using <i>header</i> and <i>footer</i> templates.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-calendar [(ngModel)]="date">
                <ng-template #header>Header</ng-template>
                <ng-template #footer>Footer</ng-template>
            </p-calendar>
        </div>
        <app-code [code]="code" selector="calendar-template-demo"></app-code>
    `
})
export class TemplateDoc {
    date: Date[] | undefined;

    code: Code = {
        basic: `<p-calendar [(ngModel)]="date">
    <ng-template #header>Header</ng-template>
    <ng-template #footer>Footer</ng-template>
</p-calendar>`,

        html: `<div class="card flex justify-center">
    <p-calendar [(ngModel)]="date">
        <ng-template #header>Header</ng-template>
        <ng-template #footer>Footer</ng-template>
    </p-calendar>
</div>`,

        typescript: `import { Component } from '@angular/core';

@Component({
    selector: 'calendar-template-demo',
    templateUrl: './calendar-template-demo.html'
})
export class CalendarTemplateDemo {
    date: Date[] | undefined;
}`
    };
}
