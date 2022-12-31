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
            Lets change the world, with one love ~ peacemaking is
            <Anchor
              href="https://www.aworldpeace.org/#our-right"
              target="_blank"
            >
             {" "} our right
            </Anchor>{" "}
            too.
          </Paragraph>
          {/* <Paragraph textAlign="center">
           Progressive declaration of diplomacy 
           <br></br>
           towards
          </Paragraph> */}
          {/* <Paragraph justify="center" textAlign="center">
            "Everyone is free to be proactive, claim their equality, and use
            their free will to participate in a World Peace treaty, and be a
            legitimate co-signer of it, regardless of their entitlement, being
            official or not."
          </Paragraph>

          <Paragraph justify="center" textAlign="center">
            ^ This human right, as complementing the{" "}
            <Anchor
              weight={"bold"}
              target="_blank"
              href="https://www.ohchr.org/en/press-releases/2018/12/universal-declaration-human-rights-70-30-articles-30-articles-article-28"
            >
              Article 28
            </Anchor>{" "}
            of the Universal Declaration of Human Rights, shall be a canvas; on
            which our kind is making Art of Peace, together.
          </Paragraph> */}

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
            {/* <br></br> */}
            <Anchor
              href="https://circlesforimpact.org"
              target="_blank"
              color="#FE2EC8"
            >
              Circles for Impact
            </Anchor>
            <br></br>
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
