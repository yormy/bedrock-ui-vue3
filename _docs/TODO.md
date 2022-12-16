Build signup
- links
- password reveal disappeared


### Translation function
Translation function template needs 
```
{{ i18ntc.t('validation.required') }} 
const i18ntc: any = inject('i18ntc');
```
can it be reduced to just t()


fix failed tests:
- inputPassword
- modalHelp


# TODO
### Checkbox
* has fixed prime icon, cannot be changed
* Color cannot be changed
* Old for checkmark and colors


docs:build failed

# Buttons
- with font-awesome predefined icon + pos + abstraction
- dropdown
- selectable change color (fill color)


# Naming convention
components
 - Button <singular / camelcase>




# GULP to compile styles
"build:package" ??
&& gulp build-styles
for precompilers SCSS

# Build META 
to do additional stuff
This can be copying js or creating some files



# JEST
https://github.com/kouts/vue3-ts-vite-starter-template
