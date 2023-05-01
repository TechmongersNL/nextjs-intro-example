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
        <article className="max-w-3xl font-serif text-base leading-relaxed">
          <h1 className="font-extrabold text-5xl mb-5 font-sans">About Us</h1>

          <p className="font-sans text-xl leading-loose mb-4 tracking-wide">
            We are recordstore. We sell records you can probably just stream
            from some place. But is it not much more fun to own a hard copy
            yourself?
          </p>

          <div className="relative aspect-video">
            <Image
              alt="A man in white pants searching through a record collection that covers an entire wall."
              src={RecordCollectionImage}
              fill
              placeholder="blur" // <--- this makes the image show blurred while it's loading
            />
          </div>

          <p className="mb-2">
            Find and buy the records you like through our generic website.
          </p>

          <p className="mb-2">
            Go back to the{" "}
            <Link
              className="font-semibold pointer-events-auto hover:underline"
              href="/"
            >
              Homepage
            </Link>
            .
          </p>
        </article>
      </main>
    </div>
  );
}
