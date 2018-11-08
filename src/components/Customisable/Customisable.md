This particular component accepts a static `CustomLabel` property.

If this is defined, Customisable will return its value, otherwise it will render the default prop.


Normal prop inheritance

```jsx
<Customisable label="Normal prop">
</Customisable>
```


Default fallback prop

```jsx
// Programmabilty file

Customisable.defaultProps = {};


// Flex ui

<Customisable />
```


Programmatically set fallback prop

```jsx
// Programmabilty file

Customisable.defaultProps = {
  label: 'Programmatically set defaultProp'
};


// Flex ui

<Customisable />
```
