# Remainder Frontend

## General

Remainders is frontend for browsing and searching notifications for Riveria staff.

## Use

The program requires valid username and password, which are available from system administrator. By default program shows 25 latest notifications

### Search

Search works by typing sender's email address, either wholly or partially, to the search field and pressing "Hae"

## Structure

![Program's structural chart](rakenne.png)

All components are in folder *components*, main ones being *Actions*, *DataGrid*, *Header* and *Footer*. Most of the HTML structure is done with React Bootstrap.

### Actions

This component contains subcomponents *AlertForm* and *LoginForm*. LoginForm handles logging in, visual feedback from the result is shown in AlertForm: light green on success, light red on failure.

### DataGrid

This component prints notifications as determined by *DCard*-component. The component can show up to 3 notifications per row.

### Header

This component handles search via *SearchForm*. Additionally the component informs who is logged in at the moment, and has the logout button on right side, to whic the logout-function ofund on *App.js* is linked.

### Footer

This component mainly contains the link to the author of the background image.

### Functions

In addition to the components, theprogram has a few separate function components, found on folders *controllers* and *services*:

- remainders.js handles searching for the notifications. If there is no search criteria, program fetches 25 lates notifications. Additionally this component sets token for the session.

- login.js logs the user in

- errorctrl handles most of the errors that may occur during use of the program.

- config.js includes url for the backend.

## Testing

Program is tested with Cypress. The library functions in browser while program is in development mode. The following features are tested:

- page loading properly
- successful login
- fetching notifications
- successful search
- 2 consequent searches
- two consequent searches, which second is "empty"
- token remains when refreshing page
- logout when token expires, either when searching or when refreshing page.

Tests also include basic tests for general access to database and general performance.

## Background image conversion

There has been mild modifications to image format on background: it has been converted into webp using [Google's converter](https://deverlopers.google.com/speed/webp) in order to increase performance. Current image was generated with the command `cwebp -q 50 input_file -o output_file.webp`

