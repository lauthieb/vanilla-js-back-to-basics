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
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#fced64",
    secondary: "#1F2022",
    tertiary: "#454545",
    quaternary: "#888"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  wtf: require("../assets/wtf.gif"),
  wow: require("../assets/wow.gif"),
  nice: require("../assets/nice.gif"),
  vanillaJS: require("../assets/vanilla-js.png")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            🍦 Vanilla JS
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={3} bold>
            #backToBasics
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Plain JavaScript ?!
          </Heading>
        </Slide>

        <Slide bgImage={images.wow.replace("/", "")} transition={["fade"]} />

        <Slide bgImage={images.wtf.replace("/", "")} transition={["fade"]} />

        <Slide bgImage={images.nice.replace("/", "")} transition={["fade"]} />

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Variable Scope
            {/* https://jsfiddle.net/lauthieb/69zkdLoj/ */}
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
