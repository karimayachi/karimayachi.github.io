import '@material/mwc-textfield';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-icon-button';
import 'wired-elements';
import 'weightless';

import * as ko from './library/knockout-latest-patched'; // Contains patch for https://github.com/knockout/knockout/issues/2500 and https://github.com/knockout/knockout/issues/2523
import MainViewModel from './viewmodels/main.viewmodel';

/* register events for specific UI frameworks to Knockout WebComponents
 * Haven't exported the typings yet, so cast to any
 */
(<any>ko.bindingHandlers.properties).addEvent('value', 'change');
(<any>ko.bindingHandlers.properties).addEvent('value', 'ionChange');
(<any>ko.bindingHandlers.properties).addEvent('checked', 'ionChange');

let vm: MainViewModel = new MainViewModel();
ko.applyBindings(vm);