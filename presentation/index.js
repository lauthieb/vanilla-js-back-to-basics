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
  Image
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
  axa: require("../assets/axa.png"),
  wtf: require("../assets/wtf.gif"),
  wow: require("../assets/wow.gif"),
  nice: require("../assets/nice.gif"),
  vanillaJS: require("../assets/vanilla-js.png"),
  vanillaJSGif: require("../assets/vanilla-js.gif"),
  wordCloudJS: require("../assets/word-cloud-js.png"),
  fun: require("../assets/fun.gif")
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
            #backToBasics / @lauthieb
          </Text>
          <Image
            src={images.axa.replace("/", "")}
            width="80"
            margin="24px auto"
          />
        </Slide>

        <Slide
          bgImage={images.wordCloudJS.replace("/", "")}
          transition={["fade"]}
        />

        <Slide
          bgImage={images.vanillaJSGif.replace("/", "")}
          transition={["fade"]}
        />

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
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            {"ES6: let & const <3"}
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Hoisting
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Closures
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Prototypes
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            The THIS keyword
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            ES6: Classes === Syntactic sugar
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Promise, async & await
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Have fun !
          </Heading>
        </Slide>

        <Slide bgImage={images.fun.replace("/", "")} transition={["fade"]} />

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thanks !
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={3} bold>
            🍦 Vanilla JS #backToBasics / @lauthieb
          </Text>
        </Slide>
      </Deck>
    );
  }
}
