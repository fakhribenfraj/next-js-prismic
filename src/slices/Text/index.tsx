import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type TextProps = SliceComponentProps<Content.TextSlice>;

const Text = ({ slice }: TextProps) => {
  return (
    <Bounded as="section">
      {prismic.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
