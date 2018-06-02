// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  CodePane
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import createTheme from "spectacle/lib/themes/default";

window.Prism = require("prismjs");

const loadLanguages = require("prismjs/components/index");

loadLanguages(["php", "haskell"]);

require("normalize.css");
require("prismjs/themes/prism.css");
require("./index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["none"]} transitionDuration={0} theme={theme} controls={false} progress="none">

        <Slide>
          <Heading size={4} fit caps lineHeight={1}>
            Unstructured code
          </Heading>
        </Slide>
        <Slide bgColor={"#000"}>
          <Heading size={4} fit caps lineHeight={1} style={"color: red"}>
            WARNING
          </Heading>
          <Text textColor="white">The following content may contain elements that are not suitable for some audiences.</Text>
          <Text textColor="white">Accordingly, viewer discretion is advised </Text>
        </Slide>
        <CodeSlide
          lang="php"
          code={require("raw-loader!./code-examples/primitive/register-globals.php")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 8] },
            { loc: [6, 8], note: "Obviously." }
          ]}
        />
        <CodeSlide
          lang="php"
          code={require("raw-loader!./code-examples/primitive/purchase.php")}
          showLineNumbers={false}
          ranges={[
            { loc: [2, 22] },
            { loc: [1, 3], note: "Security" },
            { loc: [3, 7], note: "SQL skillz" },
            { loc: [3, 7], note: "Forgot `or die(mysql_error());`!" },
            { loc: [7, 9], note: "Input validation" },
            { loc: [9, 10] },
            { loc: [9, 10], note: "Imagine `$success = false;`!" },
            { loc: [10, 14] },
            { loc: [14, 19] }
          ]}
        />
        <CodeSlide
          lang="php"
          code={require("raw-loader!./code-examples/primitive/purchase-output.php")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 18] },
            { loc: [4, 5] },
            { loc: [4, 5], note: "A success can also not exist!" },
            { loc: [9, 10], note: "This is fine" }
          ]}
        />
        <CodeSlide
          lang="php"
          code={require("raw-loader!./code-examples/primitive/purchase-output.php")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 18] },
            { loc: [4, 5] },
            { loc: [4, 5], note: "A success can also not exist!" },
            { loc: [9, 10], note: "This is fine" }
          ]}
        />
        <Slide>
          <Heading size={4} fit caps lineHeight={1}>
            Projects used to be "easy"
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} fit caps lineHeight={1}>
            Relaxed requirements
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} fit caps lineHeight={1}>
            Security? What security?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} fit caps lineHeight={1}>
            Gets the job done
          </Heading>
        </Slide>
        <CodeSlide
          lang="php"
          code={require("raw-loader!./code-examples/primitive/register-globals.php")}
          showLineNumbers={false}
          ranges={[
            { loc: [1, 3], note: "The birth of helpers" }
          ]}
        />
      </Deck>
    );
  }
}
