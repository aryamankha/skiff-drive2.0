import Head from "next/head";
import Image from "next/image";
import { SidebarTab } from "../src/components/SidebarTab";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            backgroundColor: "rgb(25,25,25)",
            padding: "10px 0px",
            width: "300px",
          }}
        >
          <SidebarTab
            status="Selected"
            label="Home"
            icon={
              <Image
                src="/inbox.png"
                alt="Vercel Logo"
                width={16}
                height={16}
              />
            }
          />
          <SidebarTab
            status="Inactive"
            label="Home"
            icon={
              <Image
                src="/inbox.png"
                alt="Vercel Logo"
                width={16}
                height={16}
              />
            }
          />
          <SidebarTab
            status="Highlighted"
            label="Home"
            icon={
              <Image
                src="/inbox.png"
                alt="Vercel Logo"
                width={16}
                height={16}
              />
            }
          />
        </div>
      </main>
    </div>
  );
}