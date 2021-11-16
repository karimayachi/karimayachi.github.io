# Property bindings
The property bindings start with `:`. If the element exposes a property by the name of the binding, the property will be two-way bound with the property on the viewmodel. If a property by that name doesn't exist, an observable property will be to created to which the Viewmodel-property is bound.

_can't I just create a reference to the viewmodel property? hmm_
```html
<mwc-switch :checked="premiumUser"></mwc-switch>
```