import * as prismic from "@prismicio/client";
import { ArticleDocumentDataSlicesSlice, ImageSliceDefaultPrimary, Simplify } from "../../prismicio-types";

export function findFirstImage(slices:prismic.Slice[]) {
  const imageSlice  = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismic.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
}
