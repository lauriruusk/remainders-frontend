# Remainders Frontend

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

## Taustakuvan muunnos

Taustakuvan formaatti on muutettu webp-muotoon [Googlen konvertterilla](https://developers.google.com/speed/webp)suorituskyvyn parantamiseksi. Nykyinen kuva luotiin komennolla `cwebp -q 50 input_file -o output_file.webp`