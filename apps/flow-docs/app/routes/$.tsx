import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMdxPage, useMdxComponent } from "~/cms/utils/mdx";

function getContentPathForSlug(slug: string | undefined): [string, string] {
  if (!slug) return ["", ""];
  const repo = slug.split("/")[0];
  const fileOrDirPath = slug.split("/").slice(1).join("/");
  return [repo, fileOrDirPath];
}

// Provide meta tags for this page.
// - https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return { title: "" };
};

// Provide stylesheet for this page.
// - https://remix.run/api/conventions#links
// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

// Use this function to provide data for the route.
// - https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async ({ params, request }) => {
  const [repo, fileOrDirPath] = getContentPathForSlug(params["*"]);
  const page = await getMdxPage(
    {
      repo,
      fileOrDirPath,
    },
    { request, forceFresh: process.env.FORCE_REFRESH === "true" }
  );

  return {
    page,
  };
};

export default function () {
  const data = useLoaderData();
  const { code, frontmatter } = data.page;
  const Component = useMdxComponent(code);
  return (
    <div className="container mx-auto px-4">
      {JSON.stringify(frontmatter)}
      <Component />
    </div>
  );
}
