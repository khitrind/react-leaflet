# React Leaflet

## Tasks

The task is to create a simple react-leaflet application that contains
the components of Menu, that contains the list of available objects,
and the Map, where the objects from the menu are displayed.

The application enables the user to:

- See some list of objects on the map (for the sake of simplicity it
  may be just objects of LineString type). Each object should have a
  name and be displayed under this name in the Menu. When
  there’s no items in the list, the ‘No items to display’ message will
  be displayed in the Menu.
- Draw a line on the Map point by point – each click adds a point
  to the line, double click concludes the drawing. The line should
  have at least two points. When the drawing is complete, the
  object will appear in the list of objects in the Menu.
- Select the object – by click on the item in Menu the clicked item
  gets highlighted and the line itself in the map changes its color.
  Vice versa, when you click on the line in the Map, the
  corresponding Menu item will get highlighted, and the line will
  change its color.
- Delete the object from the list by clicking ‘Delete’ icon in the
  Menu item. On ‘Delete’ icon click the item will disappear from
  the list and Map as well.
  The actual design and any UI library is up to your choice. Some
  sketches for better understanding are presented along with
  these requirements, but not compulsory to be followed as long
  as the features are implemented.

### How to run app?

1. Make sure you have installed `node` and `nvm`
2. Run `nvm use` to sync node version
3. Run command `npm install`
4. Run command `npm run dev`

### Tests

Used for the client [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

`npm test`

### Linting

`npm lint`

### Formatting prettier

`npm format`

### Production build

`npm run build`

## Hooks

The project uses [lefthook](https://github.com/evilmartians/lefthook)
If you really, really need to skip checks, use `--no-verify` (but don't overuse it :)

## Oops, nothing works :(

Open an issue, I'll be there :)
