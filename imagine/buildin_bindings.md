# Build in bindings
The build in bindings start with `data-` or `@` and should be used as attributes on a DOM element. They bind to the property on the viewmodel with the name provided. 

**Caution:** The `@`-variant is a convenience variant that can be used for increased readability, but be aware that this format does not adhere to the HTML-specification!

## text
Usage: `data-text="..."` or `@text="...`.

Use the text binding to bind the value of an (observable) property of your viewmodel to the content of a HTML element.

Example:
```javascript
class ViewModel {
    @observable title;
    @observable name;
    
    constructor() {
        this.title = 'Welcome to Image';
        this.name = 'John Doe';
    }
}
```
```html
<span @text="title"></span>
<span data-text="title"></span>
```

This binding has an alternative syntax: a syntax similar to the familiar template literal syntax. Use `${propertyName}` to bind a property on your viewmodel to have it's value formatted in the text. It's equivalent to `<span @text="propertyName"></span>`
```html
<div>Hi there ${name}, how are you today?</div>
```
is equivalent to
```html
<div>Hi there <span @text="name"></span>, how are you today?</div>
```

## value
The value binding binds a property on the viewmodel to the value of form-fields and responds to their changes.
```html
<input type="text" @value="title"></input>
```
With Web Components it would also be possible to bind directly to the value-property with `:value`, but `@value` is a bit more robust when it comes to responding to change events.

## foreach
Creates a template of the children of this element, binds an array of objects or primitives to this element and repeats the template for each item in the array. The child templates are bound to the item in the array.

```html
<ul @foreach="genres" :selectedItem="selectedGenre">
    <li>
        ${this}
        <a href="#" @onClick="genres.deleteGenre">delete</a>
    </li>
</ul>
```

**notes:**
- foreach automatically creates a Named Scope with the name of the array.
- foreach automatically creates an observable property `selectedItem` on the element that can be bound to.

## context
The context binding creates a template of it's childnodes and hides them if the bound property is falsey (undefined, null, false, 0). If the value is not falsey, but (preferable) an object (class instance, vanille JS object, etc), the childnode-template becomes visible and bound to the object.

```html
<div @context="selectedPerson">
    <input @value="firstname"></input>
    <input @value="lastname"></input>
    <input type="checkbox" _checked="retired"></input>
</div>
```

_todo: update should update the bindings, not just replace entire content_

## if

## scope

## html
The `html` binding parses a html string and binds it's nodes to the current viewmodel / context.
```javascript
class Page {
    @observable name;
    @observable myContent;

    constructor() {
        this.name = 'John Doe';
        this.myContent = '<div>Hello ${name}</div>';
    }
}
```

```html
<div @html="myContent"></div>
```

## visible

## content
The content binding is an easy way to create a (single file) component. It is comparable to the html-binding, as it, just like the html-binding, populates the element it is bound to with html content. The difference is that with the html-binding the new content is bound to the current viewmodel / context, whereas in the content-binding the new content is bound to the provided viewmodel.
The provided viewmodel needs to have a property `contentTemplate` that contains the HTML.

```javascript
class Page {
    @observable myContent;

    constructor() {
        this.myContent = new HelloWorldPage();
    }
}

class HelloWorldPage {
    @observable name;
    @observable contentTemplate;

    constructor() {
        this.contentTemplate = '<div>Hello ${name}</div>';
        this.name = 'John Doe';
    }
}
```

```html
<div @content="myContent"></div>
```

If you don't like single file components, you can fetch the HTML content or use bundlers such as WebPack or Rollup to load the HTML content.

The above example can also be achieved with a combination of `context` and `html` bindings:
```html
<div @context="myContent">
    <div @html="contentTemplate"></div>
</div>
```

The content-binding provides a quick and easy way to break up your application into components. However, for real life use cases we recommend creating Web Components, for instance with [Lit](https://lit.dev). You can use the `component` binding and the `property` bindings to communicate with Web Components.

## transform

## component
This binding is used to bind Web Components directly to your view. It can be handy in many use cases. One of which is moving conditional logic from your view to the viewmodel.

Consider this example:
```html
<div @foreach="options">
    <div @if="type == 'select'">
        <mwc-select></mwc-select>
    </div>

    <div @if="type == 'text'">
        <mwc-textfield></mwc-textfield>
    </div>

    <div @if="type == 'large'">
        <mwc-textarea></mwc-textarea>
    </div>
</div>
```
We can remove the conditional logic from the view and move it into the viewmodel by using the component-binding:
```html
<div @foreach="options">
    <div @component="uiComponent"></div>
</div>
```

```javascript
import { Select } from '@material/mwc-select'
import { TextField } from '@material/mwc-textfield';
import { TextArea } from '@material/mwc-textarea';

class ExampleViewmodel {
    @observable options: any;

    constructor() {
        this.widgetTypes = [];

        this.options = [
            { title: 'Option 1', uiComponent: new Select() },
            { title: 'Option 2', uiComponent: new TextField() },
            { title: 'Option 3', uiComponent: new TextArea() }
        ];
    }
}
```
Be aware that manipulating UI-elements in the viewmodel is considered an anti-pattern and can in fact in the end lead to less readable code than a declarative view-centric programming style.

However, in a composition-based application this can clean up the view a great deal.

Where this really shines is if you wrap your views in a component, as you would in a composition framework. Example:
```html
<div class="menu">
    <div class="menu-item" #click="goToHome">Home</div>
    <div class="menu-item" #click="goToProducts">Products</div>
    <div class="menu-item" #click="goToCheckout">Checkout</div>
</div>

<div class="content" @component="selectedView"></div>
```
```javascript
import { HomeView } from './views/home';
import { ProductsView } from './views/products';
import { CheckoutView } from './views/checkout';

class WidgetsViewmodel {
    @observable selectedView?: HTMLElement;

    constructor() {  
    }

    goToHome(): void {
        this.selectedView = new HomeView();
    }

    goToProducts(): void {
        this.selectedView = new ProductsView();
    }

    goToCheckout(): void {
        this.selectedView = new CheckoutView();
    }
}
```

Another valid use for this binding is triggering different pop-ups from code. In stead of having massive amounts of markup in your views for volatile things as popups, you could have one or few placeholders at the end of your HTML:
```html
<div @component="popup"></div>
```
And use code in your Viewmodel to populate it on demand with a popup (wrapped in a Web Component):
```javascript
import { observable } from 'imagine';
import { Snackbar } from './components/someSnackbarPopup';
import { Dialog } from './components/someDialogPopup';

class PostsViewmodel {
    @observable popup?: HTMLElement;

    confirmDeletePost = (): void => {
        const popup = new Dialog();
        popup.onOK = this.deletePost;
        popup.text = 'Are you sure?';

        this.popup = popup;
    }

    deletePost = (): void => {
        this.popup = new Popup('Post deleted');
    }
}
```
If the Web Components are simple and don't require a lot of markup and configuration, it is probably cleaner to have the popup creation in code and not clutter up your View. Use wisely.
<!-- 
### onClick
_Maybe there should be generic event-binding type and click is just one of infinite possibilities. For now it is a build in._
Binds a method on the viewmodel to be triggers by the click-event occurring.
```html
<a href="#" @onClick="createNew">new</a>
``` -->