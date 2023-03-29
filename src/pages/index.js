import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [link, setLink] = useState("");
  const [linkSSE, setLinkSSE] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { origin } = location;
    setLink(`${origin}/proxy`);
    setLinkSSE(`${origin}/proxy-sse`);
    const clipboard = new ClipboardJS("#copy");
    clipboard.on("success", notify);
    return () => clipboard.destroy();
  }, []);

  const notify = () => {
    toast("🦄️ Copied !", { autoClose: 1600 });
    setCopied(true);
  };

  return (
    <>
      <Head>
        <title>MOSS-API</title>
        <meta name="description" content="MOSS-API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>ChatGPT Proxy</h1>
            <h1
              className={styles.titleMask}
              style={copied ? { height: 0 } : {}}
            >
              ChatGPT Proxy
            </h1>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
