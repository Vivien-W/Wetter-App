# Wetter App – React + Open-Meteo API

Eine einfache und responsive Wetter-App, die aktuelle Wetterdaten (Temperatur, Windgeschwindigkeit, Luftfeuchtigkeit und dynamische Wetter-Icons) für Städte weltweit anzeigt.

Diese Wetter-App basiert auf einem YouTube-Tutorial von "GreatStack" (https://www.youtube.com/watch?v=zs1Nq2s_uy4&t=1748s&ab_channel=GreatStack). Sie unterscheidet sich jedoch durch ein eigenständiges, responsives Design, die Nutzung der Open-Meteo API (kostenlos und ohne Registrierung nutzbar) und angepassten JavaScript-Code.

---
      
## Features

* **Stadtsuche:** Suche nach Wetterdaten für Städte weltweit.
* **Aktuelle Wetterinformationen:** Anzeige von Temperatur (🌡️), Windgeschwindigkeit (💨) und Luftfeuchtigkeit (💧).
* **Dynamische Wetter-Icons:** Visuelle Darstellung der Wetterlage (🌤️ Sonne, Regen, Schnee, Gewitter usw.).
* **Modernes Design:** Responsives Layout mit einem "Frosted-Glass"-Effekt (`backdrop-filter`).

---

## Technologien

* **Frontend:** React mit Vite
* **Wetterdaten:** Open-Meteo API (Geocoding API für Koordinaten, Forecast API für Wetterdaten)

---

## APIs genutzt

Die App nutzt folgende APIs von Open-Meteo:

* **🌍 Geocoding API (Koordinaten zu Stadtnamen):**
    `https://geocoding-api.open-meteo.com/v1/search?name=Berlin`
* **🌤️ Wetter API (Wetterdaten für Koordinaten):**
    `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current_weather=true`

---## Installation

Befolge diese Schritte, um die App lokal einzurichten und zu starten:

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/Vivi-WB/wetter-app.git](https://github.com/Vivi-WB/wetter-app.git)
    ```
2.  **Ordner wechseln:**
    ```bash
    cd wetter-app
    ```
3.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
4.  **App starten:**
    ```bash
    npm run dev
    ```
    Die App ist dann unter `http://localhost:5173` oder einem ähnlichen Port erreichbar.

---

## Projektstruktur (Auszug)

Gerne, hier ist der überarbeitete Text im .md Format, den du direkt in deine README.md Datei kopieren kannst:
Markdown

# Wetter App – React + Open-Meteo API

Eine einfache und responsive Wetter-App, die aktuelle Wetterdaten (Temperatur, Windgeschwindigkeit, Luftfeuchtigkeit und dynamische Wetter-Icons) für Städte weltweit anzeigt.

Diese Wetter-App basiert auf einem YouTube-Tutorial von "GreatStack" (LINK ZUM TUTORIAL HIER). Sie unterscheidet sich jedoch durch ein eigenständiges, responsives Design, die Nutzung der Open-Meteo API (kostenlos und ohne Registrierung nutzbar) und angepassten JavaScript-Code.

---

## Features

* **Stadtsuche:** Suche nach Wetterdaten für Städte weltweit.
* **Aktuelle Wetterinformationen:** Anzeige von Temperatur (🌡️), Windgeschwindigkeit (💨) und Luftfeuchtigkeit (💧).
* **Dynamische Wetter-Icons:** Visuelle Darstellung der Wetterlage (🌤️ Sonne, Regen, Schnee, Gewitter usw.).
* **Modernes Design:** Responsives Layout mit einem "Frosted-Glass"-Effekt (`backdrop-filter`).

---

## Technologien

* **Frontend:** React mit Vite
* **Wetterdaten:** Open-Meteo API (Geocoding API für Koordinaten, Forecast API für Wetterdaten)

---

## APIs genutzt

Die App nutzt folgende APIs von Open-Meteo:

* **🌍 Geocoding API (Koordinaten zu Stadtnamen):**
    `https://geocoding-api.open-meteo.com/v1/search?name=Berlin`
* **🌤️ Wetter API (Wetterdaten für Koordinaten):**
    `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&current_weather=true`

---

## Installation

Befolge diese Schritte, um die App lokal einzurichten und zu starten:

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/dein-nutzername/wetter-app.git](https://github.com/dein-nutzername/wetter-app.git)
    ```
2.  **Ordner wechseln:**
    ```bash
    cd wetter-app
    ```
3.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
4.  **App starten:**
    ```bash
    npm run dev
    ```
    Die App ist dann unter `http://localhost:5173` (Standard-Vite-Port) oder einem ähnlichen Port erreichbar.

---

## Projektstruktur (Auszug)

/src
├── components/
│   ├── Weather.jsx           # Hauptkomponente mit Logik und UI
│   └── Weather.css           # Stil-Datei für die Wetter-Komponente
├── assets/images/            # Sammlung von SVG-Wetter-Icons
├── App.jsx                   # Root-Komponente der Anwendung
└── index.css                 # Globale CSS-Datei         

## Komponenten-Dokumentation

### `Weather.jsx`

Die zentrale React-Komponente der App, verantwortlich für die Wetteranzeige und -suche.

* **Hauptaufgaben:**
    * Verarbeitet die Benutzereingabe des Stadtnamens.
    * Führt API-Aufrufe an die Geocoding- und Wetter-API durch.
    * Zeigt die aktuelle Temperatur, Windgeschwindigkeit und Luftfeuchtigkeit an.
    * Wählt dynamisch das passende Wetter-Icon basierend auf dem `weathercode`.
* **Verwendete Hooks:**
    * `useState` für:
        * `city` (Benutzereingabe im Suchfeld)
        * `temperature`, `windSpeed`, `humidity` (abgerufene Wetterdaten)
        * `location` (Angezeigter Ort: Stadtname, Land)
        * `weatherIcon` (Pfad zum aktuellen Wetter-Icon)
* **Interaktionen:**
    * Die Suche kann durch einen Klick auf das 🔍 Icon oder durch Drücken der Enter-Taste im Eingabefeld ausgelöst werden.
    * Enthält grundlegende Fehlerbehandlung für ungültige Städtenamen oder Netzwerkprobleme.

### `Wetter.css`

Diese CSS-Datei definiert die visuellen Stile der `Weather`-Komponente.

* **Design-Highlights:**
    * Implementiert den modernen Glassmorphismus-Effekt mittels `backdrop-filter`.
    * Bietet ein responsives Layout, das sich an Desktop- und mobile Bildschirmgrößen anpasst.
    * Verwendet Farbcodierung und Icon-Platzierung für eine bessere Lesbarkeit der Wetterinformationen.


### `assets/images/`

Dieser Ordner enthält alle verwendeten SVG-Wetter-Icons. Die Icons werden dynamisch basierend auf dem `weathercode` der Open-Meteo API geladen.

* **Beispiele für Icons:**
    * `icon_sun.svg` → klarer Himmel
    * `icon_rain.svg` → Regen
    * `icon_lightning.svg` → Gewitter

---

## JavaScript-Funktionslogik (im Detail)

### 1. Geocoding-API-Aufruf

**Ziel:** Ermittlung der geografischen Koordinaten (Breitengrad & Längengrad) basierend auf dem vom Benutzer eingegebenen Stadtnamen.

```javascript
const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=de&format=json`;
const geoResponse = await fetch(geoUrl);
const geoData = await geoResponse.json();

Die Geocoding API durchsucht den Städtenamen und liefert eine Liste mit passenden Treffern. Aus dem ersten Treffer dieser Liste werden latitude (Breitengrad) und longitude (Längengrad) extrahiert. Diese Koordinaten sind essenziell für den nächsten Schritt: den Abruf der Wetterdaten.
 
### 2. Wetterdaten-API-Aufruf

**Ziel:** Abrufen der aktuellen Wetterinformationen für die zuvor ermittelten Koordinaten.

const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m&timezone=auto`;
const weatherResponse = await fetch(weatherUrl);
const weatherData = await weatherResponse.json();

Diese Anfrage liefert ein Objekt mit aktuellen Wetterdaten unter dem Schlüssel current_weather, zum Beispiel: 

{
  "temperature": 21.4,
  "windspeed": 13.0,
  "weathercode": 2
}

Die relevanten Werte, wie temperature (aktuelle Temperatur in °C), windspeed (Windgeschwindigkeit in km/h), und weathercode (eine Zahl, die das Wetter beschreibt, z.B. 2 für bewölkt), werden dann extrahiert. Zusätzlich wird die Luftfeuchtigkeit für die aktuelle Stunde aus dem hourly Datenbereich ermittelt.

**Ergebnis:**
Alle abgerufenen Daten – Temperatur, Windgeschwindigkeit, Luftfeuchtigkeit und das passende Wetter-Icon – werden dynamisch und reaktiv in der Benutzeroberfläche der App angezeigt, sobald die API-Anfragen erfolgreich abgeschlossen sind.


