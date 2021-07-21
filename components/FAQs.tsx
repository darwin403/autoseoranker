import { Accordion } from "react-bootstrap";

export default function FAQs() {
  return (
    <div
      className="container px-4 py-5"
      id="faqs"
      style={{ maxWidth: "720px" }}
    >
      <h2 className="pb-2 text-center mb-5">FAQs</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Is getting first on Google for my keyword really that easy?
          </Accordion.Header>
          <Accordion.Body>
            <b>That shouldn&apos;t even be a question!</b> Google spends{" "}
            <b>billions</b> of dollars on its search and a million other
            businesses depend on it to get seen on the web. Therefore, it is not
            a surprise that a simple and fairly legal method always existed and
            has been waiting to be utilized while all other Fortune 500
            companies have missed out. Don&apos;t be like them!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are SEO agencies unreliable?</Accordion.Header>
          <Accordion.Body>
            <b>Ranking on google is easy-peasy ranky-squeezy</b>. If anyone says
            otherwise they are probably full of fibs. Fibs that cost you money.
            With this wreckingball of a tool, you will get the first hand
            experience on how easy it is to get ranked on Google! Instantly.
            Free.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Surely there must be some catch to using this tool?
          </Accordion.Header>
          <Accordion.Body>
            No. No catch. But for those wishing to experience the full package,
            for a donation of $19.95, we will expand the tool to get you ranked
            on Yahoo!, Ask Jeeves, and AltaVista, giving you a 400% advantage
            over your competition.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
