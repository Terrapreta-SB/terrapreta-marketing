import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)] {
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
  tag->{
    _id,
    name
  }
}`);

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
  location,
  publishingDate,
  shortDescription,
  contentObject,
  tag->{
    _id,
    name
  }
}`);

export const TAGS_QUERY = defineQuery(`*[_type == "tag"] | order(name asc){
  _id,
  name,
  slug
}`);

export const SERVICES_QUERY =
  defineQuery(`*[_type == "service" && defined(slug.current)] | order(name asc){
  _id,
  name,
  slug,
  shortDescription,
  mainImage{
    _type,
    image{
      _type,
      asset->{
        _id,
        url
      }
    }
  }
}`);

export const SERVICE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  shortDescription,
  content,
  capabilities[]->{
    _id,
    name
  },
  clients[]->{
    _id,
    name,
    logoDark{
      asset->{
        url
      }
    }
  },
  mainImage{
    image{
      asset->{
        url
      }
    }
  }
}`);

export const UN_GOALS_QUERY =
  defineQuery(`*[_type == "unGoal"] | order(name asc){
  _id,
  name,
  logoNegative{
    _type,
    asset->{
      _id,
      url
    }
  },
  logoPositive{
    _type,
    asset->{
      _id,
      url
    }
  }
}`);
