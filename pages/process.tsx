import Layout from "../components/Layout";
import FAQs from "../components/FAQs";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Process() {
  const router = useRouter();
  const website = router.query.website as string;
  const [progressValue, setProgressValue] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");

  useEffect(() => {
    const subscribeProgress = setInterval(() => {
      setProgressValue((prev) => prev + 10);
    }, 1000);

    return () => {
      clearInterval(subscribeProgress);
    };
  }, []);

  useEffect(() => {
    const messages = [
      { value: 10, message: "Contacting Google" },
      { value: 40, message: "Registering Request" },
      { value: 50, message: "Request under review" },
      { value: 80, message: "Pichai Approves" },
      { value: 90, message: "Rankings updating" },
      { value: 100, message: "Done!" },
    ];

    const message = messages.find((m) => m.value === progressValue)?.message;

    if (message) setProgressMessage(message);

    if (progressValue === 120) {
      router.push(`/done?website=${website}`);
    }
  }, [progressValue, website, router]);

  return (
    <Layout>
      <div className="container" onClick={() => setProgressValue(100)}>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Processing ...</h1>
            <p className="col-md-8 fs-4 lead">
              Your website{" "}
              <a href={website} target="new">
                {website}
              </a>{" "}
              is currently being processed. In the meantime please check out our{" "}
              <Link href="#faqs">FAQs</Link> below
            </p>
          </div>
          <div className="progress">
            <div
              className={`progress-bar progress-bar-striped progress-bar-animated ${
                progressValue >= 100 ? " bg-success" : ""
              }`}
              role="progressbar"
              style={{ width: `${progressValue}%` }}
            >
              {progressMessage}
            </div>
          </div>
        </div>
      </div>
      <FAQs />
    </Layout>
  );
}
