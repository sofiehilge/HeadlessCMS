import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Hero from '../components/Hero';
import Footer from '../templates/Footer';

function CookiesPolicy() {
  return (
    <div>
      <Header />
      <Hero title="Cookies Politik" />
      <article className="mx-4 my-6 space-y-6 text-secondaryColor bg-backgroundColor bg-opacity-70 p-6 rounded-lg shadow-lg text-center animate-fadeIn">
        <p>
          Vi bruger cookies på vores hjemmeside for at sikre en bedre og mere
          personlig oplevelse for dig. Ved at acceptere vores cookiepolitik
          giver du samtykke til brugen af cookies som beskrevet nedenfor.
        </p>
        <h3 className="text-h3 font-semibold">Hvad er Cookies?</h3>
        <p>
          Cookies er små tekstfiler, der gemmes på din computer, tablet eller
          mobiltelefon, når du besøger en hjemmeside. Cookies hjælper os med at
          genkende din enhed og gøre din brugeroplevelse bedre og mere effektiv.
        </p>
        <h2 className="text-h2 font-semibold">Hvordan bruger vi cookies?</h2>
        <p>Vi bruger cookies til følgende formål:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <h4 className="inline font-semibold">Funktionalitet:</h4>
            <p>
              For at sikre, at vores hjemmeside fungerer korrekt og husker dine
              præferencer (f.eks. sprogvalg).
            </p>
          </li>
          <li>
            <h4 className="inline font-semibold">Analyse:</h4>
            <p>
              For at indsamle anonymiserede data, som hjælper os med at forstå,
              hvordan vores hjemmeside bruges, så vi kan forbedre den.
            </p>
          </li>
          <li>
            <h4 className="inline font-semibold">Markedsføring:</h4>
            <p>
              For at vise relevante annoncer og tilpasse indhold baseret på dine
              interesser.
            </p>
          </li>
        </ul>

        <h3 className="text-h3 font-semibold">
          Hvilke typer cookies bruger vi?
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <h4 className="inline font-semibold">Nødvendige cookies:</h4>
            <p>
              Disse cookies er essentielle for at hjemmesiden fungerer korrekt.
              De kan ikke slås fra.
            </p>
          </li>
          <li>
            <h4 className="inline font-semibold">Præferencecookies:</h4>
            <p>
              Disse hjælper med at gemme dine indstillinger, såsom sprog eller
              region.
            </p>
          </li>
          <li>
            <h4 className="inline font-semibold">Statistikcookies:</h4>
            <p>
              Disse hjælper os med at analysere, hvordan besøgende interagerer
              med vores hjemmeside.
            </p>
          </li>
          <li>
            <h4 className="inline font-semibold">Markedsføringscookies:</h4>
            <p>
              Bruges til at spore besøgende på tværs af hjemmesider og vise
              annoncer, der er relevante for brugeren.
            </p>
          </li>
        </ul>
        <h3 className="text-h3 font-semibold">Samtykke</h3>
        <p>
          Ved at klikke på "Accepter" i vores cookie-popup giver du os
          tilladelse til at bruge cookies i henhold til denne politik. Du kan
          til enhver tid ændre dine cookieindstillinger via din browsers
          præferencer.
        </p>
        <h3 className="text-h3 font-semibold">
          Framelding og sletning af cookies
        </h3>
        <p>
          Du kan til enhver tid slette eller blokere cookies i din browser. Vær
          opmærksom på, at dette kan påvirke funktionaliteten på vores
          hjemmeside.
          <br></br>
          Læs mere om, hvordan du administrerer cookies, her:
        </p>
        <ul>
          <li>
            <Link to="https://support.google.com/chrome/answer/95647?hl=da&co=GENIE.Platform%3DDesktop">
              Google Chrome
            </Link>
          </li>
          <li>
            <Link to="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">
              Firefox
            </Link>
          </li>
          <li>
            <Link to="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html">
              Safari
            </Link>
          </li>
        </ul>
        <h3 className="text-h3 font-semibold">Kontakt</h3>
        <p>
          Hvis du har spørgsmål vedrørende vores brug af cookies, er du
          velkommen til at kontakte os via info@ursoster.dk.
        </p>
      </article>
      <Footer />
    </div>
  );
}

export default CookiesPolicy;
