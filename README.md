# moment2
1. Automatiseringsprocessens syfte är att förenkla arbetet genom att automatiskt slå ihop css- eller JavaScript-filer, minimera bilder och mycket mer, samt överföra dem till en ny mapp. De färdiga filerna i mappen är sedan optimerade prestandamässigt och kan publiceras.
2. De paket som används i uppgiften är:
- **gulp** - Automatiserar processen
- **browser-sync** - Automatiserar synkroniseringen till webbläsaren
- **cssnano** - Minifierar css
- **gulp-concat** - Sammanslår filer
- **gulp-imagemin** - Minifierar bilder
- **gulp-postcss** - Bearbetar csskod 
- **gulp-uglify-es** - Minifierar JavaScript
- **autoprefixer** - Lägger till prefix för olika webbläsare
- **del** - Tar bort filer i pub-mappen
3. Processen jag skapat består av ett antal variabler och tasks. Variablerna består dels av de installerade paketen och sökvägar som samtliga filer hamnar i.
Processen består av: 
- **Task: clean** - En funktion som raderar innehåll från pub-katalogen.
- **Task: HTML** - En funktion som skickar alla html-filer till pub-katalogen
- **Task: js** - En funktion som sammanslår och minifierar JavaScript-filer samt skickar dessa till main.js i pub-katalogen.
- **Task: css** - En funktion som sammanslår och minifierar css-filer samt skickar dessa till main.css i pub-katalogen. 
- **Task: images** - En funktion som minifierar bildfiler och skickar dessa till images-mappen i pub-katalogen.
- **serve** - En funktion som synkroniserar pub-katalogen med webbläsaren.
- **watch** - Letar automatiskt efter ändringar i filerna samt skickar dessa vidare till en task om en ändring blivit utförd.
- **export** - Samtliga funktioner exporteras.

