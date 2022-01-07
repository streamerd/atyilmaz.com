// import logo from './logo.svg';
// import './App.css';
import {
  Box,
  Grommet,
  Image,
  Anchor,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tabs,
  Tab,
  ResponsiveContext,
} from "grommet";
import { Cursor, Directions, Github, Twitter } from "grommet-icons";
import React from "react";

const theme = {
  global: {
    font: { family: "Inconsolata", size: "18px", height: "20px" },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box direction="column" background="black" height="100%">
        <Box
          direction="row"
          align="center"
          background="black"
          animation={{
            type: "slideLeft",
            delay: 0,
            duration: 42000,
          }}
        >
          <Text color={"#03A062"} size="large">
            $ chmod 777 governance -R
          </Text>
        </Box>

        <Box
          direction="column"
          background="#ffa700"
          weight="bold"
          align="start"
        >
          <Text color={"black"} size="large">
            $ reboot
          </Text>
        </Box>

        <Box
          direction="row"
          align="start"
          // height={"medium"}
          // width={"large"}
          // margin={"xlarge"}
          gap="medium"
        >
          <Box align="start" margin={"42px"}>
            <RabbitHoledCard />
          </Box>
          <Box align="center">
            <RootTabs />
          </Box>
        </Box>
      </Box>

      {/* <ResponsiveContext.Consumer>
              {(size) => (size === "small" ? <LogoSmall /> : <LogoBig />)}
            </ResponsiveContext.Consumer> */}

      <Links />
      <Box
        direction="column"
        align="end"
        background="yellow"
        gap="xlarge"
      ></Box>
      <Box>
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <>
              <Text textAlign="center">
                {" "}
                "you don't need eyes to see, you need vision".
              </Text>
              <Anchor href="https://www.youtube.com/embed/cyQ0s0J1fhY">
                {"> "}listen {">"}
              </Anchor>
            </>
            ) : (
              <>
                <Text textAlign="center">
                  {" "}
                  "you don't need eyes to see, you need vision".
                </Text>
                <Anchor href="https://www.youtube.com/embed/cyQ0s0J1fhY">
                  {"> "}listen {">"}
                </Anchor>
              </>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
      {/* links was here */}
      {/* <Links /> */}
    </Grommet>
  );
}

const VisualArtworkCards = () => {
  return (
    <Box direction="row" gap="small">
      <Card height="medium" width="medium" background="light-1">
        <CardHeader pad="small">a tribute to moondog </CardHeader>
        <Image
          src="./artProjects/moondog/a_tribute_to_moondog_angle_1.jpeg"
          height="360px"
          width="360px"
        ></Image>

        <CardBody back pad="small">
          Four seasons of a legend: the Viking of the 5th evenue{" "}
        </CardBody>
        <CardFooter background="light-2">
          <Anchor
            color="black"
            href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"

            // icon={
            //   <Github
            //     color="black"
            //     href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"
            //   />
          />
          <Anchor
            icon={
              <Twitter color="red" href="https://twitter.com/statefulArt" />
            }
            hoverIndicator
          />
        </CardFooter>
      </Card>
      <Card height="medium" width="medium" background="#0aa3cf">
        <CardHeader pad="small">EntDAO </CardHeader>
        <Image
          src="./impactProjects/entDAO_dotMatrix.jpeg"
          height="160px"
          width="160px"
        ></Image>
        <CardBody background={"#0aa3cf"} pad="small">
          {" "}
          giving nature voice {"&"} visibility in decision-making.
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Anchor
            icon={
              <Twitter color="red" href="https://twitter.com/entsAreback" />
            }
            hoverIndicator
          />
          {/* <Button icon={<Twitter color="plain" />} hoverIndicator /> */}
        </CardFooter>
      </Card>
      <Box direction="row"></Box>
    </Box>
  );
};

const AudioWorkCards = () => {
  return (
    <>
      <Box direction="row" gap="small">
        <MusicAsCode />
        <Card height="medium" width="medium" background="light-1">
          <CardHeader pad="small"> storm keeper </CardHeader>
          <Image
            src="./artProjects/moondog/a_tribute_to_moondog_angle_1.jpeg"
            height="360px"
            width="360px"
          ></Image>

          <CardBody back pad="small">
            {/* Four seasons of a legend: the Viking of the 5th evenue{" "} */}
          </CardBody>
          <CardFooter background="light-2">
            <Anchor
              color="black"
              href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"

              // icon={
              //   <Github
              //     color="black"
              //     href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"
              //   />
            />
            <Anchor
              icon={
                <Twitter color="red" href="https://twitter.com/statefulArt" />
              }
              hoverIndicator
            />
          </CardFooter>
        </Card>
        <Card height="medium" width="medium" background="#0aa3cf">
          <CardHeader pad="small">EntDAO </CardHeader>
          <Image
            src="./impactProjects/entDAO_dotMatrix.jpeg"
            height="160px"
            width="160px"
          ></Image>
          <CardBody background={"#0aa3cf"} pad="small">
            {" "}
            giving nature voice {"&"} visibility in decision-making.
          </CardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Anchor
              icon={
                <Twitter color="red" href="https://twitter.com/entsAreback" />
              }
              hoverIndicator
            />
            {/* <Button icon={<Twitter color="plain" />} hoverIndicator /> */}
          </CardFooter>
        </Card>
        <Box direction="row"></Box>
      </Box>
    </>
  );
};

const ImpactProjectCards = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box direction="column" margin={"large"} gap={"large"}>
            <Card
              height="small"
              width="small"
              background="purple"
            >
              <CardHeader pad="small" background={""}>
                stateful.art{" "}
              </CardHeader>

              <CardBody background={"black"} pad="medium">
                connecting cities with arts {"&"} rights.
              </CardBody>
              <CardFooter background="light-2">
                <Anchor
                  href="https://stateful.art"
                  target={"_blank"}
                  icon={<Cursor color="black" />}
                  hoverIndicator
                ></Anchor>
                <Anchor
                  href="https://github.com/stateful-art/"
                  target={"_blank"}
                  icon={<Github color="black" />}
                  hoverIndicator
                ></Anchor>

                <Anchor
                  href="https://twitter.com/statefulArt"
                  target={"_blank"}
                  icon={<Twitter color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>
              </CardFooter>
            </Card>

            <Card height="small" width="medium" background="brown">
              <CardHeader pad="small">
                
                <Text color={"white"}>EntDAO</Text>
              </CardHeader>

              <CardBody background={"green"} pad="large">
               
                nature, in action.
              </CardBody>
              <CardFooter background="light-2">
                <Anchor
                  href="https://twitter.com/entsAreback"
                  target={"_blank"}
                  icon={<Twitter color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>

                <Anchor
                  href="https://miro.com/app/board/uXjVOX1nmp0=/?invite_link_id=643006029904"
                  target={"_blank"}
                  hoverIndicator
                >
                  design
                </Anchor>
              </CardFooter>
            </Card>

            <Card height="small" width="medium" background={"black"}>
              <CardHeader pad="small">future, made </CardHeader>
              {/* <Image
                src="./impactProjects/future_made_logo.svg"
                height="60px"
                width="60px"
              ></Image> */}
              <CardBody background={"white"} pad="medium">
                {" "}
                future art events, co-imagined.
                <Anchor href="https://vimeo.com/526183104" target={"blank"}>
                  {">>"}demo
                </Anchor>
              </CardBody>
              <CardFooter background="light-2">
                <Anchor
                  href="https://futurema.de"
                  target={"_blank"}
                  icon={<Cursor color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>

                <Anchor
                  href="https://github.com/future-made"
                  target={"_blank"}
                  // icon={<Github color="black" />}
                  hoverIndicator
                >
                  {" "}
                  design
                </Anchor>

                <Anchor
                  href="https://github.com/future-made"
                  target={"_blank"}
                  icon={<Github color="black" />}
                  hoverIndicator
                ></Anchor>
              </CardFooter>
            </Card>
          </Box>
        ) : (
          <Box direction="row" gap="small">
            <Card
              height="medium"
              width="large"
              background="purple"
            >
              <CardHeader pad="small">
                <Anchor href="https://stateful.art" target={"_blank"}>
                  stateful.art{" "}
                </Anchor>
              </CardHeader>

              <CardBody back pad="small">
                <Box align="center">
                  <Text textAlign="center">
                    {'"'}connecting cities with arts and rights{'"'}
                  </Text>
                  <Image
                    src="./impactProjects/start-no-logo-short.png"
                    height="120px"
                    width="120px"
                  ></Image>
                </Box>
                <Text textAlign="center">
                  {" "}
                  post-structuralist art direction @ decentralised governance &
                  tokenomics.
                </Text>
              </CardBody>

              <CardFooter background="light-2">
                <Anchor
                  href="https://stateful.art"
                  target={"_blank"}
                  icon={<Cursor color="black" />}
                  hoverIndicator
                ></Anchor>
                <Anchor
                  href="https://github.com/stateful-art/"
                  target={"_blank"}
                  icon={<Github color="black" />}
                  hoverIndicator
                ></Anchor>

                <Anchor
                  href="https://twitter.com/statefulArt"
                  target={"_blank"}
                  icon={<Twitter color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>
                <Anchor
                  href="https://twitter.com/statefulArt"
                  target={"_blank"}
                  hoverIndicator
                >
                  design
                </Anchor>
              </CardFooter>
            </Card>

            <Card height="medium" width="large" background="#0aa3cf">
              <CardHeader pad="small">
                <Anchor
                  href="https://twitter.com/EntsAreBack"
                  target={"_blank"}
                >
                  EntDAO{" "}
                </Anchor>
              </CardHeader>
              <Image
                src="./impactProjects/entDAO_dotMatrix.jpeg"
                height="160px"
                width="160px"
              ></Image>
              <CardBody background={"#0aa3cf"} pad="small">
                {" "}
                giving nature voice {"&"} visibility in decision-making.
              </CardBody>
              <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <Anchor
                  href="https://twitter.com/entsAreback"
                  target={"_blank"}
                  icon={<Twitter color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>
              </CardFooter>
            </Card>

            <Card height="medium" width="large" background="white">
              {/* <CardHeader pad="small">future, made </CardHeader> */}
              <Image
                src="./impactProjects/future_made_logo.svg"
                height="240px"
                width="240px"
              ></Image>
              <CardBody background={"black"} pad="small">
                co-imagination of future art events, their planning and
                ticketing
                <Anchor href="https://vimeo.com/526183104" target={"_blank"}>
                  {" "}
                  demo recording @ vimeo
                </Anchor>
              </CardBody>
              <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <Anchor
                  href="https://futurema.de"
                  target={"_blank"}
                  icon={<Twitter color="#1DA1F2" />}
                  hoverIndicator
                ></Anchor>
                <Anchor
                  href="https://miro.com/app/board/o9J_ldhZvuk=/"
                  target={"_blank"}
                  hoverIndicator
                >
                  coop model
                </Anchor>
              </CardFooter>
            </Card>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const RootTabs = () => {
  return (
    <Tabs>
      <Tab title="projects4impact">
        <Box pad="medium" gap="small">
          <ImpactProjectCards />
        </Box>
      </Tab>

      <Tab title="artworks">
        <Box pad="">
          <Tabs>
            <Tab title="visual">
              <Box pad="small" gap="small">
                <VisualArtworkCards />
              </Box>
            </Tab>

            <Tab title="music">
              <Box pad="small">
                <AudioWorkCards />
              </Box>
            </Tab>
            <Tab title="uncategorized">
              <Box pad="medium"></Box>
            </Tab>
          </Tabs>
        </Box>
      </Tab>
      <Tab title="uncategorized">
        <Box pad="medium"></Box>
      </Tab>
    </Tabs>
  );

  // <Box
  //   tag="footer"
  //   direction="row"
  //   justify="center"
  //   pad="small"
  //   gap="small"
  //   //flex={true}
  //   background="black"
  // >
  //   <Anchor
  //     href="https://github.com/streamerd"
  //     target="_blank"
  //     color="white"
  //     size="large"
  //   >
  //     code
  //   </Anchor>{" "}
  //   |
  //   <Anchor
  //     href="https://behance.net/atyilmaz"
  //     target="_blank"
  //     color="white"
  //     size="large"
  //   >
  //     visual
  //   </Anchor>{" "}
  //   |
  //   <Anchor
  //     href="https://ampled.com/artist/streamerd"
  //     target="_blank"
  //     color="white"
  //     size="large"
  //   >
  //     music
  //   </Anchor>
  // </Box>;
};
// const ArtworkTabs = () => {
//   return (
//     <Tabs>
//       <Tab title="a">
//         <Box pad="small" gap="medium">
//           <Anchor
//             href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"
//             target="_blank"
//             color="white"
//             size="large"
//           ></Anchor>
//         </Box>
//       </Tab>

//       <Tab title="b">
//         <Box pad="medium">artworks</Box>
//       </Tab>
//       <Tab title="c">
//         <Box pad="medium">
//           synth music, coded and recorded <br></br>
//           with sonic-pi

//         </Box>
//       </Tab>
//     </Tabs>
//   );
// };

const MusicAsCode = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Card height="small" width="small" background="light-1">
            <CardHeader pad="small"> source code </CardHeader>

            <CardBody back pad="small">
              {" "}
              source code for electronic music, made with{" "}
              <Anchor href="https://sonic-pi.net" target={"_blank"}>
                sonic-pi
              </Anchor>{" "}
              synthesizer{" "}
            </CardBody>
            <CardFooter background="light-2">
              <Anchor
                icon={
                  <Github color="black" href="github.com/streamerd/musicode" />
                }
                hoverIndicator
              />
            </CardFooter>
          </Card>
        ) : (
          <Card height="medium" width="large" background="light-1">
            <CardHeader pad="small"> source code </CardHeader>

            <CardBody back pad="small">
              {" "}
              source code for electronic music, made with{" "}
              <Anchor href="https://sonic-pi.net" target={"_blank"}>
                sonic-pi
              </Anchor>{" "}
              synthesizer{" "}
            </CardBody>
            <CardFooter background="light-2">
              <Anchor
                icon={
                  <Github color="black" href="github.com/streamerd/musicode" />
                }
                hoverIndicator
              />
            </CardFooter>
          </Card>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const Links = () => {
  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box direction="column">
              <Box
                tag="footer"
                direction="column"
                justify="center"
                pad="small"
                gap="small"
                background="black"
              >
                <Anchor
                  href="https://twitter.com/_streamerd"
                  target="_blank"
                  color="white"
                  size="medium"
                >
                  twitter
                </Anchor>
                <Anchor
                  href="https://instagram.com/streamerd_"
                  target="_blank"
                  color="white"
                  size="medium"
                >
                  instagram
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/abbas-tolgay-yilmaz-0x0/"
                  target="_blank"
                  color="white"
                  size="medium"
                >
                  linkedIn
                </Anchor>{" "}
                |
              </Box>
              <Box
                tag="footer"
                direction="row"
                justify="center"
                pad="small"
                gap="small"
                //flex={true}
                background="black"
              >
                <Text size="medium">tolgay@atyilmaz.com</Text>
              </Box>
              <Box align="center" justify="center" background={"purple"}>
                <Directions color="black" />
                <Text size="medium" color={"white"}>
                  {" "}
                  a space for imagination{" "}
                </Text>
              </Box>
            </Box>
          ) : (
            <Box direction="column">
              <Box
                tag="footer"
                direction="column"
                justify="center"
                pad="small"
                gap="small"
                background="black"
              >
                <Anchor
                  href="https://twitter.com/_streamerd"
                  target="_blank"
                  color="white"
                  size="large"
                >
                  twitter
                </Anchor>{" "}
                |
                <Anchor
                  href="https://instagram.com/streamerd_"
                  target="_blank"
                  color="white"
                  size="large"
                >
                  instagram
                </Anchor>{" "}
                |
                <Anchor
                  href="https://www.linkedin.com/in/abbas-tolgay-yilmaz-0x0/"
                  target="_blank"
                  color="white"
                  size="large"
                >
                  linkedIn
                </Anchor>
              </Box>
              <Box
                tag="footer"
                direction="row"
                justify="center"
                pad="small"
                gap="small"
                //flex={true}
                background="black"
              >
                <Text size="large">tolgay@atyilmaz.com</Text>
              </Box>
              <Box align="center" justify="center" background={"purple"}>
                <Directions color="black" />
                <Text size="large" color={"white"}>
                  {" "}
                  a space for imagination{" "}
                </Text>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

const RabbitHoledCard = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Card height="small" width="small" background="#cc1616" round="xlarge">
            <CardBody>
              <Box direction="column">
                <Box align="center">
                  <Image
                    src="./rabbit-holed_01.jpeg"
                    width="112"
                    height="100px"
                  ></Image>
                </Box>
                <Box align="center" margin={"medium"}>
                  <Text size="large"> Abbas Tolgay </Text> <br></br>
                  <Text color="black" size="large">
                    Yılmaz
                  </Text>
                </Box>
              </Box>
            </CardBody>
          </Card>
        ) : (
          <Card height="medium" width="medium" background="#cc1616" round="xlarge">
            <CardBody>
              <Box direction="column">
                <Box align="center">
                  <Image
                    src="./rabbit-holed_01.jpeg"
                    width="262"
                    height="234px"
                  ></Image>
                </Box>
                <Box align="center" margin={"medium"}>
                  <Text size="large"> Abbas Tolgay </Text> <br></br>
                  <Text color="black" size="large">
                    Yılmaz
                  </Text>
                </Box>
              </Box>
            </CardBody>
          </Card>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

export default App;
