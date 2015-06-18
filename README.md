# miajm Yammer App


Purpose
-----------
Het helpen van mensen die geirriteerd of gefrustreerd zijn, 
waarbij Yammer een manier biedt om de irritatie kwijt te kunnen aan een onbekende persoon, wat uiteindelijk voor opluchting zorgt.
Tevens zorgt onze app er voor dat met in contact komt met onbekende personen op basis van irritaties.

De irritatie kan ingevoerd worden in de vorm van een "Yam", deze bestaat uit:
* tekst
* audio
* afbeelding
* beweging

De gebruiker is niet verplicht om ieder onderdeel in te vullen maar kan kiezen wat voor hem of haar op dat moment voldoet.

This version
-----------
In deze versie van de app zijn nog niet alle invoermogelijkheden uitgewerkt.
Wij hebben de essentie uitgewerkt van de app door middel van alleen de invoermoglijkheid qua tekst te maken.
De gebruiker van de app kan door middel van tekst zijn frustratie delen met een andere onbekende.
Tevens kan de gebruiker Yam's van andere gebruikers ontvangen en lezen.


Framework
-----------
Ionic 1.0.0.
Eerder gebruik gemaakt van supersonic, maar dit sloot niet aan bij onze verwachtingen. 
Ionic 1.0.0. werd aanbevolen door meerdere mensen om ons heen, om verschillende redenen:
* Neemt veel werk uit handen mbt Splashs screens etc
* Een grote basis aan CSS
* Makkelijke navigatie door pagina's
* controllers voor pagina's

UI
-----------
Er is geen gebruik gemaakt van een bestaand UI framwork. 
De designs zijn echter wel gebaseerd op een combinatie van flat design en material design.

Plugins
-----------
Cordova Camera Plugin
Cordova Console Plugin
Cordova Device Plugin
Phonegap Capture Plugin
Cordova Splashscreen Plugin
Cordova Whitelist Plugin
Cordova Device-Motion Plugin

External Services
-----------
Firebase data server

Back-end
-----------
Er is gebruik gemaakt van een firebase server. De link naar de server is: https://yammer3.firebaseio.com/
Deze server wordt aan gesproken via javascript. Via javascript worden er yam's op de server geschreven.
Wanneer men de app opent controleert deze of er nieuwe yam's zijn en laat de laatste geuploade yam zien aan de gebruiker.

