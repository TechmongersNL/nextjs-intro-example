import {
  Article,
  Caption,
  Heading1,
  ImageWrapper,
  Intro,
  Paragraph,
  StyledLink,
} from "@/components/typography";

import Image from "next/image";
import Link from "next/link";
import RecordCollectionImage from "/public/images/record-collection.jpeg";

export const metadata = {
  title: "About Us",
  description: "We are recordstore",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <main>
        <Article>
          <Heading1>About Us</Heading1>

          <Intro>
            We are recordstore. We sell records you can probably just stream
            from some place. But is it not much more fun to own a hard copy
            yourself?
          </Intro>

          <ImageWrapper>
            <Image
              alt="A man in white pants searching through a record collection that covers an entire wall."
              src={RecordCollectionImage}
              fill
              placeholder="blur" // <--- this makes the image show blurred while it's loading
            />
            <Caption>
              A man in white pants searching through a record collection that
              covers an entire wall.
            </Caption>
          </ImageWrapper>

          <Paragraph>
            Find and buy the records you like through our generic website.
          </Paragraph>

          <Paragraph>
            Go back to the{" "}
            <StyledLink $as={Link} href="/">
              Homepage
            </StyledLink>
            .
          </Paragraph>
        </Article>
      </main>
    </div>
  );
}
