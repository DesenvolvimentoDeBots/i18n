# Inline Query

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
[{
	{{#fields}}
	{{field}} = {{type}},
	{{/fields}}
}]
```

{{/list}}
