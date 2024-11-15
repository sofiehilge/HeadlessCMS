import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Hero from '../components/Hero';
import Footer from '../templates/Footer';

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <Hero title="Privatlivspolitik" />
      <article className="mx-4 my-6 space-y-6 text-secondaryColor bg-backgroundColor bg-opacity-70 p-6 rounded-lg shadow-lg text-center animate-fadeIn">
        <h3 className="text-h3 font-semibold">Dataansvarlig</h3>
        <p>
          Vi er dataansvarlig for behandlingen af de personoplysninger, som vi
          behandler om vores kunder og samarbejdspartnere. Du finder vores
          kontaktoplysninger nedenfor. [virksomhedsnavn] [Adresse] CVR-nr.:
          [angiv cvr-nummer] Det er ikke et krav, at vores virksomhed har en
          <Link to="https://gdpr.dk/ekstern-dpo/">ekstern DPO</Link>, men hvis
          du har spørgsmål til behandlingen af dine personoplysninger, så kan du
          kontakte os via [mailadresse].
        </p>
        <h2 className="text-h2 font-semibold">Behandlingsaktiviteter</h2>
        <p>
          Som dataansvarlig jf. GDPR, så har vi følgende behandlingsaktiviteter.
        </p>
        <h3 className="text-h3 font-semibold">Besøg på hjemmeside</h3>
        <p>
          Når du besøger vores hjemmeside, så anvender vi cookies for at
          hjemmesiden kan fungere, hvilket du kan læse mere om i vores 
          <Link to={'/cookiespolicy'}>cookiespolitik</Link> .
        </p>
        <h3 className="text-h3 font-semibold">
          Kommunikation med potentielle kunder
        </h3>
        <p>
          Når du har spørgsmål til vores side, eller ønsker at høre mere om
          vores services, så kan du kontakte os via:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Kontaktformular</li>
          <li>Email</li>
        </ul>
        <p>
          Herigennem vil vi behandle dine{' '}
          <Link
            to={
              'https://gdpr.dk/persondataforordningen/hvad-er-personoplysninger/'
            }
          >
            personoplysninger
          </Link>
          , så vi kan indgå i en dialog med dig fx svare på spørgsmål om vores
          ydelser. Vi behandler kun den information, som du giver os i
          forbindelse med vores kommunikation. Vi vil typisk behandle følgende
          almindelige oplysninger: navn, email, telefonnummer. Vores hjemmel til
          at behandle disse personoplysninger er databeskyttelsesforordningens
          artikel 6, stk. 1 litra f. Vi sletter vores kommunikation med dig når
          det står klart om du ønsker vores ydelser eller ej. Skulle der i et
          særligt tilfælde opstå et behov for at opbevare dine personoplysninger
          i længere tid, så vil dette kunne være tilfældet.
        </p>
        <h3 className="text-h3 font-semibold">Kunder</h3>
        <p>
          Vi har behov for at kommunikere med vores kunder, så vi sikrer os, at
          ydelsen leveres korrekt. Herigennem kan vi behandle oplysninger om
          navn, adresse, ydelser, særlige aftaler, betalingsinformationer og
          lignende. Hjemlen til at behandle disse personoplysninger er
          databeskyttelsesforordningens artikel 6, stk. 1 litra b. Når ydelsen
          er leveret og eventuelle udestående er afsluttede, så vil vi
          umiddelbart herefter slette personoplysningerne.
        </p>
        <h3 className="text-h3 font-semibold">Nyhedsbrev</h3>
        <p>
          Vi har et nyhedsbrev, som det er frivilligt at tilmelde sig – og du
          kan altid framelde dig dette igen. Formålet med nyhedsbrevet er at
          sende de tilmeldte mails med ny information fra virksomheden, som kan
          omhandle nyt indhold på hjemmesiden, annoncering af vores ydelser. Vi
          vil kun sende dig mails, hvis du har givet dit aktive samtykke til
          dette. Det kræver i første omgang, at du angiver din mailadresse, som
          vi efterfølgende sender en mail til, således at du kan bekræfte
          tilmeldingen. På denne måde, så sikrer vi, at du rent faktisk selv har
          tilmeldt dig nyhedsbrevet dvs. afgivet aktivt samtykke. Vores hjemmel
          til at behandle dine personoplysninger (dvs. mailadressen) i
          forbindelse med nyhedsbrevet vil være databeskyttelsesforordningens
          artikel 6, stk. 1 litra a. Vi vil behandle dine personoplysninger, så
          længe at du stadig er tilmeldt nyhedsbrevet. Ved afmeldelse af
          nyhedsbrevet, så stopper vi også med at sende dette til dig. Har vi
          ikke sendt dig et nyhedsbrev i 1 år, så bortfalder dit samtykke som
          følge af vores passivitet. Ved framelding af nyhedsbrevet, så gemmer
          vi dit nu tidligere samtykke i 2 år efter, at det senest er anvendt
          pga. forældelseskrav jf. Forbrugerombudsmandens spamvejledning afsnit
          11.3.
        </p>
        <h3 className="text-h3 font-semibold">Bogføring</h3>
        <p>
          Vi skal gemme alle regnskabsbilag jf. bogføringsloven. Det betyder, at
          vi gemmer fakturaer og lignende bilag til brug for regnskabsføring.
          Heraf kan der fremgå almindelige personoplysninger som navn, adresse,
          ydelsesbeskrivelse. Vores hjemmel til at behandle personoplysninger
          til bogføringen er databeskyttelsesforordningens artikel 6, stk.1
          litra. Vi opbevarer disse oplysninger i minimum 5 år efter at
          indeværende regnskabsår er afsluttet.
        </p>
        <h3 className="text-h3 font-semibold">Databehandlere</h3>
        <p>
          Få kan klare alt selv, og det samme gælder os. Vi har derfor
          samarbejdspartnere, samt benytter os af leverandører, hvoraf nogle kan
          være databehandlere. Eksterne leverandører kan eksempelvis levere
          systemer til at organisere vores arbejde, services, rådgivning,
          IT-hosting eller markedsføring.Det er vores ansvar at sikre, at dine
          personoplysninger behandles ordentligt. Derfor stiller vi høje krav
          til vores samarbejdspartnere, og vores partnere skal garantere, at
          dine personoplysninger er beskyttet. Vi indgår derfor aftaler herom
          med virksomheder, der håndterer personoplysninger på vores vegne for
          at højne sikkerheden af dine personoplysninger.
        </p>
        <h3 className="text-h3 font-semibold">
          Videregivelse af personoplysninger
        </h3>
        <p>Vi videregiver ikke dine personoplysninger til tredjemand.</p>
        <h3 className="text-h3 font-semibold">
          Profilering og automatiserede afgørelser
        </h3>
        <p>Vi foretager ikke profilering eller automatiserede afgørelser.</p>
        <h3 className="text-h3 font-semibold">Tredjelandeoverførsler</h3>
        <p>
          Vi benytter som udgangspunkt databehandlere i EU/EØS, eller som
          opbevarer data i EU/EØS. I nogle tilfælde er dette ikke muligt, og her
          kan der benyttes databehandlere udenfor EU/EØS, hvis disse kan give
          dine personoplysninger en passende beskyttelse.
        </p>
        <h3 className="text-h3 font-semibold">Behandlingssikkerhed</h3>
        <p>
          Vi holder behandlingen af personoplysninger sikker ved at have indført
          passende tekniske og organisatoriske foranstaltninger. Vi har lavet
          risikovurderinger af vores behandling af personoplysninger, og har
          herefter indført passende tekniske og organisatoriske foranstaltninger
          for at øge behandlingssikkerheden. En af vores vigtigste
          foranstaltninger er at holde vores medarbejdere opdaterede om GDPR via
          løbende awareness træning, GDPR kursus, samt ved at gennemgå vores
          GDPR-procedurer med medarbejderne.
        </p>
        <h3 className="text-h3 font-semibold">De registreredes rettigheder</h3>
        <p>
          Du har efter databeskyttelsesforordningen en række rettigheder i
          forhold til vores behandling af oplysninger om dig. Hvis du vil gøre
          brug af dine rettigheder skal du kontakte os, så vi kan hjælpe dig med
          dette.
        </p>
        <h3 className="text-h3 font-semibold">
          Ret til at se oplysninger (indsigtsret)
        </h3>
        <p>
          Du har ret til at få indsigt i de oplysninger, som vi behandler om
          dig, samt en række yderligere oplysninger.
        </p>
        <h3 className="text-h3 font-semibold">
          Ret til berigtigelse (rettelse)
        </h3>
        <p>Du har ret til at få urigtige oplysninger om dig selv rettet.</p>
        <h3 className="text-h3 font-semibold">Ret til sletning</h3>
        <p>
          I særlige tilfælde har du ret til at få slettet oplysninger om dig,
          inden tidspunktet for vores almindelige generelle sletning indtræffer.
        </p>
        <h3>Ret til begrænsning af behandling</h3>
        <p>
          Du har i visse tilfælde ret til at få behandlingen af dine
          personoplysninger begrænset. Hvis du har ret til at få begrænset
          behandlingen, må vi fremover kun behandle oplysningerne – bortset fra
          opbevaring – med dit samtykke, eller med henblik på at retskrav kan
          fastlægges, gøres gældende eller forsvares, eller for at beskytte en
          person eller vigtige samfundsinteresser.
        </p>
        <h3 className="text-h3 font-semibold">Ret til indsigelse</h3>
        <p>
          Du har i visse tilfælde ret til at gøre indsigelse mod vores ellers
          lovlige behandling af dine personoplysninger. Du kan også gøre
          indsigelse mod behandling af dine oplysninger til direkte
          markedsføring.
        </p>
        <h3 className="text-h3 font-semibold">
          Ret til at transmittere oplysninger (dataportabilitet)
        </h3>
        <p>
          Du har i visse tilfælde ret til at modtage dine personoplysninger i et
          struktureret, almindeligt anvendt og maskinlæsbart format samt at få
          overført disse personoplysninger fra én dataansvarlig til en anden
          uden hindring. Du kan læse mere om dine rettigheder i Datatilsynets
          vejledning om de registreredes rettigheder, som du finder på
          www.datatilsynet.dk.
        </p>
        <h3 className="text-h3 font-semibold">Tilbagetrækning af samtykke</h3>
        <p>
          Når vores behandling af dine personoplysninger er baseret på dit
          samtykke, så har du ret til at trække dit samtykke tilbage.{' '}
        </p>
        <h3 className="text-h3 font-semibold">Klage til Datatilsynet</h3>
        <p>
          Du har ret til at indgive en klage til{' '}
          <Link to={'https://www.datatilsynet.dk/'}>Datatilsynet</Link>, hvis du
          er utilfreds med den måde, vi behandler dine personoplysninger på. Du
          finder Datatilsynets kontaktoplysninger på{' '}
          <Link to="https://www.datatilsynet.dk/">www.datatilsynet.dk</Link> .
          Vi vil generelt opfordre dig til at læse mere om GDPR, så du er
          opdateret på reglerne.
        </p>
      </article>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
