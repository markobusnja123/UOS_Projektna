# Moj IT status portal

## Opis

Moj IT status portal je enostaven spletni projekt, pripravljen za projektno vajo deploya na platformo Vercel.
Namen projekta je prikazati osnovni postopek priprave spletne strani, uporabe GitHub repozitorija, samodejnega deploya prek Vercela in osnovne konfiguracije projekta.

## Uporabljene tehnologije

- HTML
- CSS
- JavaScript
- Vite
- Git
- GitHub
- Vercel

## Deploy

Production URL: uos-projektna.vercel.app

## CI/CD
CI/CD pomeni avtomatiziran proces priprave, preverjanja in objave aplikacije.
V mojem projektu je GitHub repozitorij povezan z Vercelom. Ko naredim spremembo v kodi in jo pošljem na GitHub z ukazom `git push`, Vercel samodejno zazna spremembo in izvede nov deploy aplikacije na glavni veji. Če je to iz druge veje, se naredi production deploy (kjer lahko vidimo spremembe pred deployom).

git add .
git commit -m "Opis spremembe"
git push
git set upstream ... (To prekopiramo)

Po izvedbi ukaza git push se nova verzija aplikacije samodejno objavi na Vercelu.
Production deploy nastane iz veje ¨main, Preview deploy pa lahko nastane iz druge veje ali Pull Requesta.

## Dodatna konfiguracija

V projektu sem uporabil Vercel Environment Variable. Dodana environment variable je:
VITE_SITE_NAME=Moj IT status portal - Vercel Production
Ta vrednost se uporablja v datoteki "script.js"

const siteName = import.meta.env.VITE_SITE_NAME || "Moj IT status portal";
document.getElementById("site-title").innerText = siteName;

S tem se naslov strani ne nastavi samo direktno v HTML datoteki, ampak se prebere iz konfiguracije okolja. Ker projekt uporablja Vite, mora imeti environment variable za uporabo v frontend kodi predpono VITE_.

## Težave
Pri izdelavi projekta sem naletel na težavo z uporabo ukaza NPM v PowerShellu. PowerShell je blokiral izvajanje skript, zato ukaz npm init -y ni deloval.
Težavo sem rešil tako, da sem namesto ukaza npm uporabil npm.cmd.
Dodatno sem moral paziti, da se mapa node_modules in datoteka .env ne pošljeta na GitHub. Zato sem ustvaril datoteko .gitignore, v katero sem dodal:
node_modules, dist in .env
Mapa node_modules se ne pošilja na GitHub, ker se lahko ponovno ustvari z ukazom npm install. Datoteka .env se ne pošilja, ker lahko vsebuje konfiguracijske vrednosti ali občutljive podatke.