import { AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export default function Disclaimer() {
  return (
    // THE FIX: Removed the 'max-w-4xl' class to prevent overflow
    <div className="mt-16 w-full rounded-lg border-2 border-amber-500/30 bg-amber-500/10 p-6 text-left shadow-lg">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <AlertTriangle className="h-8 w-8 text-amber-500" />
        </div>

        {/* Text content and button */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-foreground">
            Itangazo / Disclaimer
          </h3>
          <div className="mt-2 space-y-2 text-sm text-muted-foreground">
            <p>
              <strong>[Kinyarwanda]</strong> UMUYOBORO ni igikoresho kigenga cyo
              kwifashisha witoza, ntabwo gihuriye na Polisi y'u Rwanda. Nubwo
              dushyiramo imbaraga ngo imitozo ibe iriyo, uru rubuga ni urwo
              kwigiraho gusa kandi rushobora kugira amakosa.
            </p>
            <p className="text-xs italic">
              <strong>[English]</strong> UMUYOBORO is an independent practice
              tool and is not affiliated with the Rwanda National Police. This
              platform is for educational purposes and may contain errors.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mt-4 whitespace-normal break-words"
          >
            <a
              href="https://police.gov.rw/services/traffic-and-road-safety/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              Sura Urubuga rwa Polisi / Visit Official RNP Site
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
