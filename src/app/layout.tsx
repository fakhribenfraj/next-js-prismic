import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased">
        {/* TODO: Remove the following element once you have read the documentation. */}
        {process.env.NODE_ENV === "development" && (
          <div
            style={{
              background: "#5163ba",
              padding: "1rem",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#fff",
            }}
          >
            <p>
              <strong>👋 Welcome to your new website!</strong> To customize the
              code and content of this site,{" "}
              <a
                href="https://github.com/prismicio-community/nextjs-starter-prismic-blog/tree/master/docs"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                see the documentation
              </a>
              . Remove this bar in <code>pages/_app.js</code>.
            </p>
          </div>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
