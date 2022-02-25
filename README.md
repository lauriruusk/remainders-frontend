# Remainder Frontend
#### English versions after Finnish

## Yleistä

Remainders on Riverian muistutusten selaukseen tarkoitettu sovellus. 

## Käyttö

Ohjelma vaatii hyväksytyn käyttäjänimen ja salasanan. Nämä ovat saatavissa järjestelmänvalvojalta. 
Oletuksena ohjelma näyttää 25 viimeisintä muistutusta.

### Haku

Haku tapahtuu kirjoittamalla kenttään kriteeri ja painamalla "Hae". Ohjelma hakee osumia muistutusten lähettäjän sähköpostiosoitteen perusteella.

## Rakenne

![Ohjelman rakennekaavio](rakenne.png)

Ohjelman komponentit ovat kansiossa *components*. Pääkomponentteina ovat *Actions*, *DataGrid*, *Header* ja *Footer*.

### Actions

Tämä komponentti sisältää alikomponentit *AlertForm* ja *LoginForm*. Loginformilla käsitellään kirjautuminen, toiminnan tuloksesta visuaalinen palaute Alertformiin: onnistuminen vihreällä taustalla, epäonnistuminen punaisella.

### DataGrid

Tähän komponenttiin tulostetaan muistutukset *DCard*-komponentin mukaisesti. Komponentissa näkyy vierekkäin selainikkunan leveydestä riippuen 1, 2 tai 3 muistutusta.

### Header

Tämä komponentti huolehtii hausta *SearchForm*-komponentilla. Lisäksi komponenttiin on liitetty *logout()*-funktio, jonka avulla kirjaudutaan ulos. Komponentissa myöskin ilmoitetaan, kuka on kirjautuneena.

### Footer

Tämä komponentti sisältää lähteen taustakuvalle.

### Funktiot

Komponenttien lisäksi ohjelmalla on muutama erillinen funktiokomponentti:

- remainders.js huolehtii muistutusten hausta. Mikäli erillistä hakukriteeriä ei ole, ohjelma hakee 25 viimeisintä muistutusta. Lisäksi komponentti asettaa tokenin istunnolle.

- login.js kirjaa käyttäjän sisään ohjelmaan.

- errorctrl käsittelee muutamia ohjelmaan liittyviä virheilmoituksia.

- config.js sisältää backendin osoitteen.

## Testaus

Ohjelman toimintaa testataan cypress-kirjastolla. kirjasto toimii selaimessa ohjelman ollesa kehitysvaiheessa. Ohjelmaa testataan seuraavilta osin:

- sivun latautuminen
- kirjautumisen onnistuminen
- muistutuskorttien tulostuminen
- hakutoiminnan onnistuminen
- kaksi perättäistä hakua
- kaksi perättäistä hakua, joista toinen on ns. "tyhjä"
- token pysyy sivun päivittyessä
- uloskirjautuminen tokenin vanhentuessa (toimii haun tai sivun päivittämisen yhteydessä)

Testeissä on mukana myös pienimuotoiset testit yleiselle tietokantayhteydelle ja suorituskyvylle

## In English

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

Tämä komponentti sisältää alikomponentit *AlertForm* ja . Loginformilla käsitellään kirjautuminen, toiminnan tuloksesta visuaalinen palaute Alertformiin: onnistuminen vihreällä taustalla, epäonnistuminen punaisella.

This component contains subcomponents *AlertForm* and *LoginForm*. LoginForm handles logging in, visual feedback from the result is shown in AlertForm: light green on success, light red on failure.

### DataGrid

Tähän komponenttiin tulostetaan muistutukset *DCard*-komponentin mukaisesti. Komponentissa näkyy vierekkäin selainikkunan leveydestä riippuen 1, 2 tai 3 muistutusta.

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