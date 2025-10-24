import { type SchemaTypeDefinition } from "sanity";

/* Documents */
import { journalDoc } from "./documents/journalDoc";
import { projectDoc } from "./documents/projectDoc";
import { researchDoc } from "./documents/researchDoc";
import { serviceDoc } from "./documents/serviceDoc";
import { tagDoc } from "./documents/tagDoc";

/* Objects */
import { titleSlugObject } from "./objects/titleSlugObject";
import { imageObject } from "./objects/imageObject";
import { contentObject } from "./objects/contentObject";
import { referenceToObject } from "./objects/referenceToObject";
import { gridDimensionObject } from "./objects/gridDimensionObject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    journalDoc,
    projectDoc,
    researchDoc,
    serviceDoc,
    tagDoc,
    titleSlugObject,
    imageObject,
    contentObject,
    referenceToObject,
    gridDimensionObject,
  ],
};
