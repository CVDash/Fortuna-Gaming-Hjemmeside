DK

OBS: Denne kode er skrevet i Visual Studio Code. Hvis du bruger andre applikationer til at kode du må ændre reglerne efter din programmeringsapplication.

Før du prøve at ændre koden du skal geninstallere Node.js til Visual Studio Code her https://nodejs.org/en/download/prebuilt-installer

Efter den skal du gå ind i VSCs terminal og geninstallere SASS med command " npm install -g sass " og køre " npm install " også.

Nu, hver gang du vil gerne ændre noget i CSS skal du skrive command " sass scss:css --watch " eller find den ned til venstre ind i NPM Scripts.

Brug KUN de scss filer i folder " scss " til at ændre CSS på siden, alt du skriver in i dem skrives automatisk i main.css.

Hvis du vil gerne lave en ny scss fil skal navn skrives som " _navn.scss ", derefter skal du linkes den til det hele ved at gå ind i " main.scss " og skrive " @import "navn" ";

For at åbne hjemmesiden, skal du hent en extension (Ctrl/Command + Shift + X) dette hedder Live Server, skabet af Ritwick Dey og tryk på Live Server knap ned i bunden til højre.

Du må også hent extensionen dette hedder Prettier til at gøre koden lidt mere klart til at se og arbejde med.



EN

ATTENTION: This code is written in Visual Studio Code. If you are using other applications to code you can change the rules after the application you use.

Before you try to edit the code you will need to install Node.js for Visual Studio Code here https://nodejs.org/en/download/prebuilt-installer

After that you should go into VSC's terminal and install SASS with the command " npm install -g sass " and run " npm install " as well.

Now, every time you would want to edit anything in CSS you will need to enter the command " sass scss:css --watch " or find it down to the left in NPM Scripts.

Use ONLY the scss files in the folder " scss " to edit the CSS on the site, everything you write in them will be written automatically in main.css.

If you want to make a new scss file, the name should be written as " _name.scss " and, after that, you will need to link it to the rest by going in " main.scss " and writing 
" @import "name"; "

To open the website, you will need to get the extension (Ctrl/Command + Shift + X) called Live Server, made by Ritwick Dey and press on the Liver Server button down to the right.

You may also get the extension called Prettier, made by Prettier, to make the code easier to see and work with.