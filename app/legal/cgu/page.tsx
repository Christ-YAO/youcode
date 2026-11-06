import {
  LegalPage,
  LegalSection,
  LegalValue,
} from "@/components/features/legal/LegalPage";
import { LegalConfig } from "@/lib/legal-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation | YouCode",
};

export default function CguPage() {
  return (
    <LegalPage title="Conditions générales d’utilisation">
      <LegalSection title="Éditeur">
        <p>
          YouCode est édité par{" "}
          <LegalValue value={LegalConfig.publisher} label="nom de l’éditeur" />,{" "}
          <LegalValue value={LegalConfig.address} label="adresse" />. Contact :{" "}
          <LegalValue value={LegalConfig.contactEmail} label="e-mail de contact" />
          . Hébergeur :{" "}
          <LegalValue value={LegalConfig.host} label="nom de l’hébergeur" />.
        </p>
      </LegalSection>

      <LegalSection title="Objet">
        <p>
          YouCode permet de créer des cours, d’y organiser des leçons et de
          suivre les utilisateurs inscrits. Utiliser le site implique
          d’accepter ces conditions.
        </p>
      </LegalSection>

      <LegalSection title="Compte">
        <p>
          La connexion nécessite un compte GitHub. Vous êtes responsable de
          l’activité réalisée depuis votre compte.
        </p>
      </LegalSection>

      <LegalSection title="Contenus">
        <p>
          Vous êtes responsable des cours et des contenus que vous publiez, et
          vous devez disposer des droits nécessaires pour les diffuser. Les
          contenus illicites peuvent être retirés et le compte concerné
          suspendu.
        </p>
      </LegalSection>

      <LegalSection title="Disponibilité">
        <p>
          Le site peut être interrompu pour maintenance ou évoluer à tout
          moment, sans garantie de disponibilité continue.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Le traitement de vos données est décrit dans la{" "}
          <Link className="underline hover:text-foreground" href="/legal/privacy">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          <LegalValue
            value={LegalConfig.governingLaw}
            label="droit applicable et tribunal compétent"
          />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
