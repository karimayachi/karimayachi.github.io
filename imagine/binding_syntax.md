# Binding syntax

There are a couple of techniques you can use when writing a binding.

## Namespaces, or Scopes
See the main chapter on namespaces

## this

## Ternary conditional
\<namespace.\>propertyName ? '<string>' : '<string>'

Example
```javascript
person.isRetired ? 'retired' : 'still working'
```
## Negation 
!\<namespace.\>propertyName

Example
```javascript
!person.isRetired, !showMenu
```
## Equality comparison
\<namespace\>.propertyName == 'some string' or \<namespace\>.propertyName == \<number\>

## String concatenation
\<namespace.\>propertyName + '<string>' + ...

Examples
```html
<a _href="'https://url.com/' + person.personalPage"></a>
<img _src="person.id + '.png'" />
```