import {Component} from '@angular/core';

@Component({
    selector: 'cio-app',
    template: `<div>
<md-input placeholder="amount"></md-input>
    <button md-raised-button color="primary">PRIMARY</button>
<button md-raised-button color="accent">ACCENT</button>
<button md-raised-button color="warn">WARN</button>
</div>`
})
export class AppComponent {
}
