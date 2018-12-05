import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appNoDoubleClick]'
})
export class NoDoubleClickDirective {

    constructor() { }

    @HostListener('click', ['$event'])
    clickEvent(event) {
        event.srcElement.setAttribute('disabled', true);
        setTimeout(function () {
            event.srcElement.removeAttribute('disabled');
        }, 2000);
    }
}
