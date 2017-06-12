import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appMainDropdown]'
})
export class MainDropdownDirective {

    @HostBinding('class.opened') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('clickOutside') outside() {
        console.log('aaa');
        this.isOpen = false;
    }
}
