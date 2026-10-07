import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "../styles/globals.css"

export const dynamic = 'force-dynamic'
export const revalidate = 0

//export const metadata: Metadata = {
  //metadataBase: new URL(getBaseURL()).toString(),,
//}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
