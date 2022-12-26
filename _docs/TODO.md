# wip components uit de export
fix storybook zonder theme

Storybook TODO
- Login details
vue3:
- - link button is no link ? (optional with external link icon?)
- - buttonset not correct
 - -check chip options
- - draggable
- 
- 
- input text with clickable icon?
- input text with pre-icon
- phone number



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

## COMPONENTS TO CREATE
- Table
- 

# TODO
### Checkbox
* Color cannot be changed
* Old for checkmark and colors

# Draggable ?
Waar is dit component gebleven

### Password
Cannot make 100% - bugreport

### Dropdown button
cannot change dropdown icon from chevron to something else - bugreport
when this is fixed, create more alternative dropdown buttons


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
