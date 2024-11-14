import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";

registerCoreBlocks();
const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Welcome",
                description: "DevOps level assessment",
                attachment: {
                  type: "image",
                  url: "https://bc93803d9dfc.quillforms.app/wp-content/uploads/sites/4622/2024/11/1592170980843.jpeg",
                },
                attachmentMaxWidth: "600px",
              },
            },
            {
              name: "slider",
              id: "kd12edg",
              attributes: {
                required: true,
                label:
                  "Rate your team’s ability to translate business ideas into hypothesis statements that are clear and measurable.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "93pda11",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "wer3qdkdb",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to collaborate with business experts and technology experts to define Minimum Marketable Features (MMF) in support of the hypothesis.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "3nsdf934",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at architecting for continuous delivery.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "m35612edg",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to synthesize the results of Continuous Exploration activities into a well-crafted, prioritized ART Backlog.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "a213rsew",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at building and integrating continuously.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "iqfrqwr13r",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at testing continuously, end-to-end in production-like environments.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "gqr1294c",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to stage Features in full production-like (non-test) environments for final validation prior to production deployment.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "g91imf1023",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to continuously deploy Features to production as well as the ability to control their visibility using feature toggles and/or other means.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "rh81v3pgk",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to accurately determine deployment success or failure and ability to roll back or fix forward as appropriate to correct deployment issues.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "it55fy79x",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at monitoring the full solution stack and ability to analyze Feature value based on these events.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "pm44yeqxc",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at proactively detecting high severity production issues, identifying root causes using monitoring systems, and quickly resolving issues by building, testing, and deploying fixes through the pipeline (versus applying changes directly in production).",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "pe404oabe",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to release Features to users on demand using feature toggles, blue/green environments, canary releases, and so on.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "et03ek8pp",
              attributes: {
                required: true,
                label:
                  "Rate your team's effectiveness at maintaining stable Solutions that avoid unplanned down time and security breaches.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "rv466q9ow",
              attributes: {
                required: true,
                label:
                  "Rate your team's ability to collect objective information about the actual value realized by Features, so that it can inform strategic financial decisions.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
            {
              name: "slider",
              id: "is76ezyhu",
              attributes: {
                required: true,
                label:
                  "Please rate your team's ability to make strategic, pivot-or-persevere decisions based on empirical performance data and commitment to actively applying those insights to continuously improve the pipeline.",
                min: 0,
                max: 10,
                step: 1,
              },
            },
          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false,
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#9b51e0",
            logo: {
              src: "",
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc",
          },
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default App;
