import * as ko from '../library/knockout-latest-patched'; // Contains patch for https://github.com/knockout/knockout/issues/2500 and https://github.com/knockout/knockout/issues/2523
import { Observable } from '../library/knockout-latest-patched';
import '../library/knockout-webcomponents'; // the two-way binding library for Knockout and WebComponents
import PeopleViewModel from './people.viewmodel';

export default class MainViewModel {
    vm: Observable<PeopleViewModel | undefined>;

    constructor() {
        this.vm = ko.observable(new PeopleViewModel());
    }

    openView = (v: number): void => {
        fetch(`./src/views/demo${v}.html`).then((response: Response): void => {
            response.text().then((text: string): void => {
                this.vm()?.html(text);
                this.vm.valueHasMutated(); // not how I would usually update views :-)
            });
        });
    };

    closeView = (): void => {
        this.vm(undefined);
    };
}