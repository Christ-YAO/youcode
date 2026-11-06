import {
  LegalPage,
  LegalSection,
  LegalValue,
} from "@/components/features/legal/LegalPage";
import { LegalConfig } from "@/lib/legal-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | YouCode",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <LegalSection title="Responsable du traitement">
        <p>
          YouCode est édité par{" "}
          <LegalValue value={LegalConfig.publisher} label="nom de l’éditeur" />,{" "}
          <LegalValue value={LegalConfig.address} label="adresse" />. Contact :{" "}
          <LegalValue value={LegalConfig.contactEmail} label="e-mail de contact" />
          .
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>La connexion se fait avec un compte GitHub. Nous enregistrons :</p>
        <ul>
          <li>votre nom, votre adresse e-mail et votre photo de profil GitHub ;</li>
          <li>
            l’identifiant de votre compte GitHub et le jeton d’accès fourni lors
            de la connexion ;
          </li>
          <li>votre session de connexion ;</li>
          <li>
            les cours que vous créez, les cours auxquels vous êtes inscrit et
            votre progression dans les leçons.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Utilisation des données">
        <p>
          Ces données servent uniquement à vous connecter, à afficher votre
          compte et à faire fonctionner les cours. Les créateurs d’un cours
          peuvent voir l’adresse e-mail et la photo de ses utilisateurs.
        </p>
      </LegalSection>

      <LegalSection title="Cookies et stockage local">
        <p>
          Le site utilise uniquement des cookies nécessaires à la connexion
          (session, protection CSRF, redirection). Votre choix de thème est
          enregistré dans votre navigateur. Le site n’utilise ni publicité ni
          outil de mesure d’audience.
        </p>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          Vos données ne sont pas vendues. Elles sont traitées par GitHub pour
          la connexion et par notre hébergeur :{" "}
          <LegalValue value={LegalConfig.host} label="nom de l’hébergeur" />.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          <LegalValue value={LegalConfig.retention} label="durée de conservation" />
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez demander l’accès, la rectification ou la suppression de
          vos données en écrivant à{" "}
          <LegalValue value={LegalConfig.contactEmail} label="e-mail de contact" />
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
