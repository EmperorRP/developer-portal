import { LinksFunction, MetaFunction } from "@remix-run/node"
import { RedocStandalone } from "redoc"
import { Theme, useTheme } from "~/cms/utils/theme.provider"
import { ClientOnly } from "remix-utils"
import { getCanonicalLinkDescriptor } from "../utils/seo.server"

export const meta: MetaFunction = () => {
  return {
    description: "Open API documentation for the Flow Access Node HTTP API.",
    "twitter:handle": "flow_blockchain",
    "twitter:url": "https://twitter.com/flow_blockchain",
  }
}

export const links: LinksFunction = () => [
  getCanonicalLinkDescriptor("/http-api"),
]

export default function Page() {
  const [theme] = useTheme()
  const isDark = theme === Theme.DARK

  return (
    <ClientOnly>
      {() => (
        <RedocStandalone
          options={{
            theme: {
              colors: { text: { primary: isDark ? "white" : "black" } },
              rightPanel: { backgroundColor: "black" },
              sidebar: {
                backgroundColor: isDark ? "black" : "white",
                textColor: isDark ? "white" : "black",
              },
            },
            nativeScrollbars: true,
          }}
          specUrl="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"
        />
      )}
    </ClientOnly>
  )
}
