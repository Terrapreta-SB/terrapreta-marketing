import { defineQuery } from "next-sanity";

export const JOURNAL_QUERY =
  defineQuery(`*[_type == "journal" && defined(slug.current)] | order(publishingDate desc){
  _id,
  name,
  slug,
  shortDescription,
  gridDimension{
    isBig
  },
  mainImage{
    _type,
    image{
      _type,
      asset->{
        _id,
        url
      }
    }
  },
  publishingDate,
  tag->{
    _id,
    name
  }
}`);

export const JOURNAL_ITEM_QUERY =
  defineQuery(`*[_type == "journal" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  mainImage{
    _type,
    image{
      _type,
      asset->{
        _id,
        url
      }
    }
  },
  publishingDate,
  tag->{
    _id,
    name
  }
}`);
