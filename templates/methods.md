# Methods

{{#list}}
- [{{name}}](#{{name}})
{{/list}}

{{#list}}
## {{name}}
{{desc}}

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
{{#fields}}
{{field}} | {{type}} | {{required}} | {{desc}} |
{{/fields}}

Example:
```javascript
{{name}}({
	{{#fields}}
	{{field}} = {{type}},
	{{/fields}}
})
```

{{/list}}
