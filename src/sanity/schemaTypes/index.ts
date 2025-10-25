import type { SchemaTypeDefinition } from "sanity";
import { aboutDoc } from "./documents/aboutDoc";
import { capabilityDoc } from "./documents/capabilityDoc";
/* Documents */
import { glossaryDoc } from "./documents/glossaryDoc";
import { journalDoc } from "./documents/journalDoc";
import { pageDoc } from "./documents/pageDoc";
import { pressDoc } from "./documents/pressDoc";
import { processDoc } from "./documents/processDoc";
import { projectDoc } from "./documents/projectDoc";
import { researchDoc } from "./documents/researchDoc";
import { serviceDoc } from "./documents/serviceDoc";
import { siteDoc } from "./documents/siteDoc";
import { tagDoc } from "./documents/tagDoc";
/* Fragments */
import modules from "./fragments/modules";
/* Modules */
import { heroSplitModule } from "./modules/hero-split";
/* Objects */
import { contentObject } from "./objects/contentObject";
import { gridDimensionObject } from "./objects/gridDimensionObject";
import { imageObject } from "./objects/imageObject";
import { titleSlugObject } from "./objects/titleSlugObject";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    /* Documents */
    journalDoc,
    projectDoc,
    researchDoc,
    serviceDoc,
    tagDoc,
    glossaryDoc,
    pageDoc,
    siteDoc,
    pressDoc,
    aboutDoc,
    capabilityDoc,
    processDoc,

    /* Objects */
    titleSlugObject,
    imageObject,
    contentObject,
    gridDimensionObject,

    /* Fragments */
    modules,

    /* Modules */
    heroSplitModule,
  ],
};
