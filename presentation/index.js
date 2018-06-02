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
      <Deck transition={["none"]} transitionDuration={0} theme={theme} controls={false}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
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
          ranges={[
            { loc: [0, 11] },
            { loc: [2, 3] },
            { loc: [2, 3], note: "A success can also not be a success!" },
            { loc: [6, 7], note: "This is fine" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
