import {
  Building,
  FileStack,
  GraduationCap,
  Hammer,
  HeartHandshake,
  Link,
  Mailbox,
  Newspaper,
  Rocket,
  Route,
  Settings2,
  WholeWord,
} from "lucide-react";
import { structureTool } from "sanity/structure";
import { group, singleton } from "./lib/builders";

export const structure = structureTool({
  structure: (S) =>
    S.list()
      .title("Content")
      .items([
        singleton(S, "site", "Site Settings").icon(Settings2),
        S.divider(),

        S.documentTypeListItem("page").title("All Pages").icon(FileStack),
        S.divider(),
        S.documentTypeListItem("project").title("Projects").icon(Hammer),
        S.documentTypeListItem("service")
          .title("Services")
          .icon(HeartHandshake),
        S.divider(),

        group(S, "Company", [
          S.documentTypeListItem("about").title("About").icon(Rocket),
        ]),
        S.divider(),

        group(S, "Media", [
          S.documentTypeListItem("journal")
            .title("Journal posts")
            .icon(Newspaper),
          S.documentTypeListItem("press").title("Press").icon(Mailbox),
        ]),
        S.divider(),

        group(S, "Resources", [
          S.documentTypeListItem("glossary").title("Glossary").icon(WholeWord),
        ]),
        S.divider(),

        group(S, "Miscellaneous", [
          S.documentTypeListItem("capability")
            .title("Capabilities")
            .icon(GraduationCap),
          S.documentTypeListItem("process").title("Processes").icon(Route),
          S.documentTypeListItem("organization")
            .title("Organizations")
            .icon(Building),
        ]),
        S.divider(),

        S.documentTypeListItem("navigation").title("Navigations").icon(Link),
      ]),
});
