import { Box, Grommet, Image, Anchor, Paragraph } from "grommet";

import React from "react";

import { FooterSection } from "./components/Footer";
const theme = {
  global: {
    font: { family: "Inconsolata", size: "18px", height: "20px" },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box justify="evenly" align="between" background="black" fill>
        <Box direction="column" align="center" background="black" fill>
          {/* <Image
            src="./demoVerseLogoHorizontal.png"
            width="200px"
            height="60px"
            margin="40px"
          ></Image> */}

          <Image
            src="./peace_logo.png"
            width="62px"
            height="62px"
            margin="10px"
          ></Image>
          <Paragraph
            justify="center"
            size="medium"
            textAlign="center"
            margin={"20px"}
          >
            Let's change the world, as one love <br></br> ~ peacemaking is
            <Anchor
              href="https://www.aworldpeace.org/#our-right"
              target="_blank"
            >
              {" "}
              our right
            </Anchor>{" "}
            too.
          </Paragraph>

          <Paragraph textAlign="center">
            <Anchor
              href="https://aworldpeace.org"
              target="_blank"
              // color="white"
            >
              a World Peace
            </Anchor>{" "}
            <br></br>
            {"▲"}
            <br></br>
            <Anchor
              href="https://www.canva.com/design/DAFbOfDwqmM/KPBwqaP60_E_2yr4qesHyQ/edit?utm_content=DAFbOfDwqmM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              color="white"
            >
              Motivation Deck
            </Anchor>{" "}
            <br></br>
            <Box direction="row">
              <Anchor
                href="https://expressionsofpeace.org"
                target="_blank"
                color="#81BEF7"
              >
                Expressions of Peace
              </Anchor>
              {" ▼▲▼ "}
              <Anchor
                href="https://expressionsofdemand.org"
                target="_blank"
                color="#DA81F5"
              >
                Expressions of Demand
              </Anchor>
            </Box>
            <br></br>
            <Anchor
              href="https://docs.google.com/document/d/1SxvZ5bGT0kCCuJJSDB9OrpPJ7hPvSFcBf0GahPlKjK8"
              target="_blank"
              color="yellow"
            >
              Proof of Peacemaking
            </Anchor>{" "}
          </Paragraph>
        </Box>
        <FooterSection />
      </Box>
    </Grommet>
  );
}

export default App;
