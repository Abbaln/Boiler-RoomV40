Documentation
Boiler Room - Team 3 Malmö - Vecka 40
Repo: https://github.com/Abbaln/Boiler-RoomV40
Trello: https://trello.com/b/77nffjUa/boiler-roomv40

# Boiler-RoomV40

Agile Notes:

First Stand-up (03/10/2024)

- Möte i ca 1 timme
- Kort retro om förra projektet: bra samarbete, vi börjar hitta vårt arbetssätt, vi vill använda Trellon bättre, jobba mer likriktat med styling i CSS, let’s bestämma dessa tidigt och utgå från det på de egna sidorna. Vi vill ha en scrum-master som styr upp lite mer. Vi är nöjda med hur vi arbetar med Git och branching.
  – Vi utsedde Abbas till SCRUM master (vi ska rotera varje vecka och SCRUM-master är också fika master och tar med fika till boiler room 🍩)
  – Bestämde applikation, en streamingtjänst och vilka undersidor den skulle ha
  – Vi satte upp vår Trello tillsammans, med kort och byggde vår backlog
  –Promptade med hjälp av Cursor och Chat-GPT fram ett universal stylesheet i två steg, först: “ta fram stilar för en streamingsajt som netflix” sen: “gör den typ likadan men den ska följa WCAG-standard AA-nivå”.
  –Vi bestämde tid för stand up och satte igång att arbeta med vår backlog.

Second Stand-up (03/10/2024)

- discussed what was still in the product backlog what needed to be worked on (t.ex header styles) and who would work on it
- what was still in progress and how long would it take to be completed
- everyone must add their work process into the ReadMe file as well as the notes form our Stand-ups
- make sure to run accessibility tests on all pages and fixed whatever needs to be adjusted
- schedule next stand-up

Third Stand-up (04/10/2024)

Fourth Stand-up (04/10/2024)

- Statusrapport
- Se vad som behöver göras klart
- Samarbeta med att felsöka små buggar

Indivdual Process:

Rhiannon
I used cursor as my AI

- I asked it to build a simple login form
- it was very basic with no styles
- then I asked it to use the styles from the nav-bar as a template for the form styles, and center the form on the page
- I then ran a WAVE test and found that the form was missing visibel labels, so I asked it to add those
- I then ran a lighthouse test and everything came back 100%
- I then checked its responsiveness, which required some media queries, so I asked it to make the page responsive down to the smallest screen width 320px
- I added a background image and asked the AI to make sure the background image stays centered on smaller screens (SO helpful!!)

All in all it was a very useful tool which saved me a lot of time, I think if I did not have accessibility tools such as WAVE and lighthouse then the page would be less functional. But I will definitely use this tool in the future for the basic layout of my pages.

Anton
Jag använde också Cursor, smidigt verktyg.

- Dundrade in prompts och bad den göra en sida likt netflix där en kan scrolla mellan olika titlar
- Blev sådär, men det gav mig en tydligare bild av vad jag ville ändra och förbättra, hellre än att hitta på något eget helt själv.
- Pusslade med prompts från smådetaljer till hela layouten. Fastnade i scrollfunktionen ganska länge, och kom inte överens med Cursor hur jag skulle kommunicera med den. I det läget gick det mycket snabbare att bara kolla på koden och ändra manuellt, än att försöka prompta fram svaren.

Dennis

- Använde Cursor för att få en grundstruktur på färgtema i utils.css
- Använde Cursor för att får grundstruktur på movie.html och movie.css, sen promptat majoriteten av stylen och layouten har skrivit väldigt lite av koden själv bara fixad smådetaljer.
- Bad Cursor göra sidan mer accesible genom att sätta aria labels på alla element som saknade det och göra den mer responsiv.
- Kört lighthouse test och fick 100% på allt.
- Min reflektion över att använda enbart ai är det går väldigt snabbt i början sen blir det många konstiga fel för ai inte skapat ett bra skal i html med grid eller flex utan kört lite vilda västern. Kommer använda AI för att få fram en bas struktur och sedan jobba vidare själv om något i framtiden.

Boiler-RoomV40
