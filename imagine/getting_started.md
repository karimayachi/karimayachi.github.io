# Getting started


## Installation
You can install Imagine using npm or yarn. A standard install will install Imagine along with a fixed version of MobX.
```shell
npm install imagine
```
or
```shell
yarn add imagine
```

If you want to use Imagine alongside a version of MobX that is already a dependency of your project, see the Advanced guide.

## Initialize
Use `bind(viewmodel, element)` to bind a viewmodel to a DOM element and it's children. Binds to `<body>` if no element is given.

```javascript
import { bind } from 'imagine';
import { ViewModel } from '../viewmodels/someviewmodel';

bind(new ViewModel()); // bind to <body>
```
or
```javascript
import { bind } from 'imagine';
import { ViewModel } from '../viewmodels/someviewmodel';

bind(new ViewModel(), document.getElementById('bindthis'));
```
