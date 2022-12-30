import { Box, Anchor, Text } from "grommet";

export const FooterSection = () => (
    <>
      <Box direction="column" size="large">
        <Box
          tag="footer"
          direction="row"
          justify="center"
          pad="small"
          gap="small"
          // flex={true}
          background="black"
        >
          <Anchor
            href="https://discord.gg/sqjdyCWNAR"
            target="_blank"
            // color="white"
            size="medium"
          >
            join us
          </Anchor>{" "}
          |
          <Anchor
            href="https://github.com/demo-verse"
            target="_blank"
            color="white"
            size="medium"
          >
            source code
          </Anchor>{" "}
          |

          <Anchor
            href="https://twitter.com/demoversal"
            target="_blank"
            color="#1DA1F2"
            size="medium"
          >
            twitter
          </Anchor>{" "}
       
        </Box>
        <Box justify="center" direction="row">
          <Text size="medium"> someone@demover.se </Text>
        </Box>
  
      </Box>
    </>
  );