# Imagine

## Composition vs. MVVM
Recent years have seen huge popularity in Composition frameworks. At the same time MVVM frameworks have been declining.

We think you need both.

Composition aims to aid reusability of code. MVVM aims to aid separation of concerns. Both practices are helpful in writing clean code, but they are not the same thing. Most Composition frameworks even advocate single file components, completely shifting away from "classical" separation of concerns (SoC) to a more "vertical" form of SoC, where the separation takes place in the realm of functionality: by reusing components and constructing your application from isolated building blocks.
This works very well for small, reusable elements (e.g. UI libraries). But as soon as more business logic is required and the complexity of the components increases you'll more often than not need a more "horizontal" SoC to keep things clean. A horizontal approach also helps with glueing together the context of your application. Composition frameworks often deal with the application context by state propagation or global state stores, at the expense of the declarative nature of the code or readability.

## Our goal
Our goal is to create an unoppinionated library that is 100% declarative and helps with reusability as well as separation of concerns. It is compatible with all third party Web Components. And we encourage you to roll your own with [Lit](https://lit.dev).

## In practice
We think that a full blown application, loaded with business logic, needs both Composition and a horizontal architecture as found in (for instance) MVVM. `Imagine` should be the glue that binds the Components together and houses the higher level business logic. It would accompany a Web Component framework such as [Lit](https://lit.dev) perfectly and work side by side with it.