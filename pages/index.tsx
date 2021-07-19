import Layout from "../components/Layout";
import FAQs from "../components/FAQs";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [website, setWebsite] = useState("");

  return (
    <Layout>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Auto SEO Ranker</h1>
            <p className="lead mb-5">
              Tired of SEO agencies that cannot guarantee you rank you first on
              Google? With our tool, you can{" "}
              <b>
                <u>Instantly rank</u>
              </b>{" "}
              your website on Google for <b>free</b>!
            </p>
            <form
              className="d-grid gap-2 d-md-flex justify-content-md-start my-5"
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/process?website=${website}`);
              }}
            >
              <div className="form-floating flex-grow-1">
                <input
                  required
                  type="url"
                  className="form-control"
                  placeholder="name@example.com"
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <label>Your website</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Rank Now
              </button>
            </form>
            <div>
              <div
                className="fb-like"
                data-href="https://www.facebook.com/Auto-SEO-Ranker-107294308307540"
                data-width=""
                data-layout="standard"
                data-action="like"
                data-size="small"
                data-share="true"
              ></div>
              <a
                href="https://twitter.com/AutoSEORanker?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-size="small"
                data-show-count="true"
              >
                Follow @TwitterDev
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-lg-end">
            <img
              style={{ mixBlendMode: "luminosity" }}
              src="https://images.unsplash.com/photo-1593438002985-ce805be04da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              className="d-block img-fluid rounded"
              alt="Bootstrap Themes"
              width={450}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <FAQs />
    </Layout>
  );
}
