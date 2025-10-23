# 🤖 JavaScript i praktiken - Introduktion till localStorage

## 💾 Vad är localStorage?

`localStorage` är ett kraftfullt JavaScript-verktyg som låter dig spara data direkt i användarens webbläsare. Till skillnad från vanliga variabler som försvinner när sidan laddas om, finns `localStorage` kvar även efter att användaren stängt webbläsaren och kommer tillbaka senare.

### Hur fungerar det?

1. **Spara data**: Du kan lagra information som användarens preferenser, inställningar eller tillfällig data
2. **Hämta data**: När sidan laddas kan du hämta tillbaka den sparade informationen
3. **Persistent lagring**: Data finns kvar tills användaren manuellt rensar webbläsarens data

### Varför är det användbart?

- **Användarupplevelse**: Kom ihåg användarens val och preferenser mellan sessioner
- **Personalisering**: Skapa anpassade upplevelser baserat på tidigare interaktioner
- **Offline-funktionalitet**: Spara data lokalt även när internetanslutningen är instabil

## 🎨 Uppgiften

Du har fått ett färdigt UI med en rubrik och en toggle-knapp. Applikationen har två olika färgteman, men togglen funkar inte utgångsläget. **Din uppgift är att göra så att användarens val av färgtema sparas och återställs automatiskt.** Analysera CSS-filen och se hur färgtemana är strukturerade för idéer. Använd sedan de inbyggda metoderna för att spara och hämta värden ur `localStorage`

## 🎯 Förväntat resultat

- ✅ Färgerna och textinnehållet ändras för varje knapptryck
- ✅ Det nya "färgtemat" sparas i `localStorage`
- ✅ Färgtemat hämtas från `localStorage` och visas i UI:t varje gång sidan laddas

## 👨‍💻 Steg för att lösa uppgiften

1. **Analysera nuvarande kod**: Förstå hur toggle-funktionen fungerar idag
2. **Implementera sparning**: Lägg till funktionalitet för att spara användarens val
3. **Implementera hämtning**: Se till att det sparade temat laddas när sidan öppnas
4. **Testa funktionaliteten**: Verifiera att temat återställs korrekt efter siduppladdning

## 💡 Tips

- Kom ihåg att hantera fallet när ingen data finns sparad ännu (första besöket)
- Testa att ladda om sidan flera gånger för att säkerställa att funktionaliteten fungerar korrekt
- Använd webbläsarens utvecklarverktyg för att inspektera vad som sparas i `localStorage`

## 🎁 Bonusuppgifter

- Hur skulle du hantera fler än två färgteman?
- Kan du tänka dig andra användningsområden för `localStorage` i denna applikation?
