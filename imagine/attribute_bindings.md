# Attribute bindings
Attribute bindings start with `_` and are very similar to property bindings, but are used to update attributes on the element. In many Web Components these are reflected to properties, but they also work with regular html elements.

```html
<div _id="uniqueID" _class="theme"></div>
```

_todo: use Mutation Observers to create two way binding_