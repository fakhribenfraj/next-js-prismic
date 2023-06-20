import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import NextFunctionComponent from "next"
import { Heading } from "./Heading";
import { ComponentPropsWithoutRef } from "react";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-7 last:mb-0">{children}</p>
  ),
  oList: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }: { children: React.ReactNode; node: any }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};
interface PrismicRichTextProps extends ComponentPropsWithoutRef<"BasePrismicRichText"> {

}
export function PrismicRichText({ components, ...props }:PrismicRichTextProps) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
