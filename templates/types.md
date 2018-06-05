# Types

{{#list}}
- [{{name}}](#{{#lowerCase}}{{name}}{{/lowerCase}})
{{/list}}

{{#list}}
## {{name}}
{{desc}}

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
{{#fields}}
{{field}} | {{type}} | {{required}} | {{desc}} |
{{/fields}}


{{/list}}
