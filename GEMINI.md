# Gemini Coding Standards for Angular

This document outlines the key coding standards I will follow for this Angular project, based on the provided documentation. My primary goal is to write modern, efficient, and maintainable Angular code.

## 1. Core Principles

- **Standalone First**: All components, directives, and pipes will be created as `standalone: true`. I will not use NgModules.
- **Signal-driven**: I will use Angular Signals as the primary reactive primitive for state management.
- **New Template Control Flow**: I will exclusively use the new `@if`, `@for`, and `@switch` control flow syntax.
- **Declarative Data Loading**: I will use a router-first architecture, loading data in resolvers and binding it to component inputs.

## 2. Component Architecture

- **`standalone: true`**: Every component will be standalone.
- **`ChangeDetectionStrategy.OnPush`**: I will always set this for optimal performance.
- **Signal Inputs**: I will use `input()` and `input.required()` for all component inputs. The `@Input()` decorator will not be used.
- **Signal-based State**: Component-level state will be managed with `signal()` and `computed()`.
- **`inject()` for Dependencies**: I will use the `inject()` function for dependency injection, not constructor parameters.
- **Separate Files**: Templates and styles will be in separate files (`.html`, `.css`) unless they are trivial (<= 3 lines).

## 3. Template Syntax

- **`@if/@for/@switch`**: I will only use the new built-in control flow syntax.
- **`track` in `@for`**: I will always provide a `track` function for all `@for` blocks to ensure optimal performance.
- **No `*ngIf`/`*ngFor`**: The old structural directives are forbidden.
- **Event Handlers**: Event handlers will be named for what they do (e.g., `saveUser()`) not the event itself (e.g., `handleClick()`).

## 4. State Management

- **Component State**: `signal()` is the default for local component state.
- **Derived State**: `computed()` will be used for memoized values derived from other signals.
- **Shared State**: For state shared across multiple components, I will use `@ngrx/signals` `signalStore`.
- **Side Effects**: `effect()` will be used for side effects, such as logging or synchronizing with browser APIs, but not for state mutation. `allowSignalWrites` will be used sparingly and only for specific synchronization tasks.

## 5. Asynchronous Operations

- **`async/await` for One-Time Operations**: I will use `async/await` for promises and one-time asynchronous operations, such as initial data fetching from a service.
- **RxJS for Streams**: I will use RxJS and Observables only for handling continuous event streams (e.g., WebSocket messages, real-time updates, form value changes).
- **`toSignal`**: I will use the `toSignal` interop function to convert RxJS streams to signals when they need to be integrated into the component's reactive model.

## 6. Routing

- **`withComponentInputBinding()`**: This will be enabled in `provideRouter` to automatically bind route data to component inputs.
- **Functional Resolvers**: I will use `ResolveFn` to fetch data before a route is activated.
- **Lazy Loading**: I will use `loadComponent` and `loadChildren` to lazy-load standalone components and routes.

## 7. File Organization

- **Feature Folders**: Code will be organized into feature-based directories.
- **Co-location**: Services, models, guards, and resolvers will be located within the feature folder they belong to, not in a global `core` or `shared` folder unless absolutely necessary (used by 3+ features).
- **Component Folders**: Each component will reside in its own dedicated folder.

By adhering to these standards, I will ensure the code I produce is modern, consistent, and aligns with the best practices for Angular development.
