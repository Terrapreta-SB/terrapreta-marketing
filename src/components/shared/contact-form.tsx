import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { urlFor } from "@/sanity/lib/image";

const contactFormImage =
  "https://cdn.sanity.io/images/wj2okvbq/production/56c1a946530b461cc495221f15c4ae771e0b4297-1600x2397.webp";

export default function ContactForm() {
  return (
    <div className="container-site grid grid-cols-2 items-start justify-start gap-5">
      <AspectRatio className="relative w-full" ratio={1 / 1}>
        <Image
          alt="Contact Form"
          blurDataURL={urlFor(contactFormImage)
            .width(24)
            .height(24)
            .quality(5)
            .auto("format")
            .url()}
          className="h-full w-full object-cover object-center"
          fill
          placeholder="blur"
          quality={75}
          src={urlFor(contactFormImage).quality(75).auto("format").url()}
        />
      </AspectRatio>
      <form className="w-full" data-netlify="true" method="POST" name="contact">
        <FieldSet>
          <FieldLegend>Contact Us</FieldLegend>
          <FieldDescription>We are here to help you.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                autoComplete="off"
                id="name"
                placeholder="Your Name"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                autoComplete="off"
                id="email"
                placeholder="example@email.com"
                required
              />
              {/* <FieldError>Email is required.</FieldError> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
              <Input
                autoComplete="off"
                id="companyName"
                placeholder="Your Company Name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Input autoComplete="off" id="message" required />
              {/* <FieldError>Message is required.</FieldError> */}
            </Field>
            <Field orientation="horizontal">
              <Switch id="newsletter" />
              <FieldLabel htmlFor="newsletter">
                Subscribe to the newsletter
              </FieldLabel>
            </Field>
          </FieldGroup>
          <Button type="submit">Submit</Button>
        </FieldSet>
      </form>
    </div>
  );
}
