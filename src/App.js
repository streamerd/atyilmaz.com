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
  Carousel,
  Tabs,
  Tab,
  ResponsiveContext,
  Paragraph,
} from "grommet";
import {
  Actions,
  BusinessService,
  Cursor,
  Github,
  Stakeholder,
  Twitter,
} from "grommet-icons";
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
            duration: 20000,
          }}
        >
          <Anchor href="https://www.linuxscrew.com/chmod-777" target={"_blank"}>
            <Text color={"#03A062"} size="large">
              $ chmod 777 governance -R
            </Text>
          </Anchor>
        </Box>

        <Box
          direction="column"
          background="#ffa700"
          weight="bold"
          align="start"
          animation={{
            type: "slideRight",
            delay: 10000,
            duration: 2000,
          }}
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
          <Box
            align="start"
            margin={"42px"}
            direction="column"
            pad={"small"}
            gap="large"
          >
            <RabbitHoledCard />
            <Links />
          </Box>
          <Box>
            <RootTabs />
          </Box>
        </Box>
      </Box>

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
                <Box background="yellow">
                  <Text textAlign="center" size="medium" color={"black"}>
                    {" "}
                    "you don't need eyes to see, you need vision".
                  </Text>
                </Box>
                <Box background={"black"}>
                  <Anchor href="https://www.youtube.com/embed/cyQ0s0J1fhY">
                    {"> "}listen {">"}
                  </Anchor>
                </Box>
              </>
            ) : (
              <>
                <Box background="yellow">
                  <Text textAlign="center" size="large" color={"black"}>
                    {" "}
                    "you don't need eyes to see, you need vision".
                  </Text>
                </Box>
                <Box background={"black"}>
                  <Anchor href="https://www.youtube.com/embed/cyQ0s0J1fhY">
                    {"> "}listen {">"}
                  </Anchor>
                </Box>
              </>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Grommet>
  );
}

const MoondogCarousel = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box>
            <Carousel>
              <Box pad="xlarge" background="black">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_1.jpeg"
                  height="120px"
                  width="120px"
                ></Image>
              </Box>
              <Box pad="xlarge" background="accent-2">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_2.jpeg"
                  height="120px"
                  width="120px"
                ></Image>
              </Box>
              <Box pad="xlarge" background="accent-3">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_3.jpeg"
                  height="120px"
                  width="120px"
                ></Image>{" "}
              </Box>

              <Box pad="xlarge" background="accent-3">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_4.jpeg"
                  height="120px"
                  width="120px"
                ></Image>{" "}
              </Box>
            </Carousel>
          </Box>
        ) : (
          <Box background={"black"}>
            <Carousel>
              <Box
                background="black"
                size="large"
                animation={{
                  type: "rotateRight",
                  delay: 1000,
                  duration: 24000,
                }}
              >
                {/* <Attraction size="xlarge" /> */}
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_1.jpeg"
                  height="360px"
                  width="360px"
                ></Image>
              </Box>
              <Box background="black">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_2.jpeg"
                  height="360px"
                  width="360px"
                ></Image>
              </Box>
              <Box background="black">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_3.jpeg"
                  height="360px"
                  width="360px"
                ></Image>{" "}
              </Box>

              <Box background="black">
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_4.jpeg"
                  height="360px"
                  width="360px"
                ></Image>{" "}
              </Box>
            </Carousel>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const VisualArtworkCards = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box direction="row" gap="xsmall" elevation="">
            <Card height="small" width="medium" background="light-1">
              <CardHeader pad="small">
                <Anchor
                  color="black"
                  href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"
                  target={"_blank"}
                >
                  <Text size="small"> a tribute to Moondog </Text>
                </Anchor>
                <CardBody>
                  <MoondogCarousel />
                </CardBody>
              </CardHeader>

              <CardBody pad="small" background={"black"}>
                <Image
                  src="./artProjects/moondog/a_tribute_to_moondog_angle_1.jpeg"
                  height="380px"
                  width="380px"
                ></Image>
              </CardBody>
            </Card>
            <Card height="medium" width="medium" background="#0aa3cf">
              <CardHeader pad="small">selbst-portrait mit Kater </CardHeader>

              <CardBody pad="small" background="black">
                <Image
                  src="./artProjects/selbstportrait/selbstportraet_mit_kater_side_1.jpeg"
                  height="360px"
                  width="360px"
                ></Image>
              </CardBody>
            </Card>
            <Card height="large" width="medium" background="red">
              <CardHeader pad="small">
                <Text color={"black"}>brother-bankless </Text>
              </CardHeader>

              <CardBody pad="medium" background="black">
                <Image
                  src="./artProjects/brother-bankless.png"
                  height="680px"
                  width="360px"
                ></Image>
              </CardBody>
            </Card>
          </Box>
        ) : (
          <Box direction="column">
            <Box direction="row" gap="medium" elevation="">
              <Box direction="column" gap="medium">
                <Card height="medium" width="medium" background="light-1">
                  <CardHeader pad="small">
                    <Anchor
                      color="black"
                      href="https://www.behance.net/gallery/108624099/A-Tribute-to-Moondog"
                      target={"_blank"}
                    >
                      <Text size="large">a tribute to Moondog</Text>
                    </Anchor>
                  </CardHeader>
                  <MoondogCarousel />
                </Card>

                <Box direction="row" gap="small">
                  <Card height="medium" width="medium">
                    <CardHeader>
                      <Box direction="row" gap="medium" size="large">
                        {/* <Anchor
                  href=""
                  target={"_blank"}
                  // icon={<Cursor color="white" />}
                 >devPunks</Anchor> */}

<Anchor  href="https://shy-meadow-1354.on.fleek.co/"
                          target={"_blank"}
                           >
<Text size="large" color={"pink"}>
                          dev
                          <Text size="large" color={"red"}>
                            Punks
                          </Text>
                        </Text>

</Anchor>

                        
                        <Anchor
                          href="https://github.com/BlockDevsUnited/dev-punks"
                          target={"_blank"}
                          icon={<Github color="white" />}
                        ></Anchor>

                        <Anchor
                          href="https://opensea.io/collection/devpunks-v2"
                          target={"_blank"}
                          icon={
                            <Image src="./opensea-logo.svg" width={"24px"} />
                          }
                        ></Anchor>
                      </Box>
                    </CardHeader>
                    <CardBody background="black">
                      <Anchor
                        href="https://shy-meadow-1354.on.fleek.co/"
                        target={"_blank"}
                        icon={
                          <Image
                            src="./artProjects/devpunks/devpunk-5.png"
                            height="320px"
                            width="320px"
                          />
                        }
                      ></Anchor>
                    </CardBody>
                    {/* <CardFooter background={"black"}>
                      
                    </CardFooter> */}
                  </Card>

                  <Card height="medium" width="medium" background="black">
                    <CardHeader pad="small">
                      <Box direction="row" gap="medium" size="large">
                        <Text size="large" color="yellow">
                          selbst-portrait
                          <Text size="large" color={"red"}>
                            {" "}
                            mit Kater
                          </Text>
                        </Text>

                        <Anchor
                          href="https://www.behance.net/gallery/108623373/Selbstportrait-und-Kater"
                          target={"_blank"}
                          icon={<Cursor color="white" />}
                        ></Anchor>
                      </Box>
                    </CardHeader>

                    <CardBody background="black">
                      <Anchor
                        href="https://www.behance.net/gallery/108623373/Selbstportrait-und-Kater"
                        target={"_blank"}
                        icon={
                          <Image
                            src="./artProjects/selbstportrait/selbstportraet_mit_kater_side_1.jpeg"
                            height="360px"
                            width="360px"
                          ></Image>
                        }
                      />
                    </CardBody>
                  </Card>
                </Box>
              </Box>
              <Card height="large" width="medium" background="red">
                <CardHeader pad="small">
                  <Text color={"black"}>brother-bankless </Text>
                </CardHeader>

                <CardBody pad="medium" background="black">
                  <Image
                    src="./artProjects/brother-bankless.png"
                    height="680px"
                    width="340px"
                  ></Image>
                </CardBody>
              </Card>
            </Box>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  );
};

const AudioWorkCards = () => {
  return (
    <>
      <Box direction="row" gap="small">
        {/* <AudioCarousel/> */}
        <MusicAsCode />
        <Card height="medium" width="medium" background="black">
          <CardHeader pad="small"> storm keeper </CardHeader>

          <CardBody>
            <Anchor
              href="https://www.ampled.com/artist/streamerd/post/2154"
              target={"_blank"}
            >
              <Image
                src="./artProjects/punk-troll.jpeg"
                height="320px"
                width="320px"
              ></Image>{" "}
            </Anchor>{" "}
            {/* Four seasons of a legend: the Viking of the 5th evenue{" "} */}
          </CardBody>
        </Card>

        <Card height="medium" width="medium" background="black">
          <CardHeader pad="small">rainy day pianos </CardHeader>

          <CardBody>
            <Anchor
              href="https://www.ampled.com/artist/streamerd/post/2051"
              target={"_blank"}
            >
              <Image
                src="./artProjects/rainy-day-pianos.jpeg"
                height="320px"
                width="320px"
              ></Image>{" "}
            </Anchor>{" "}
            {/* Four seasons of a legend: the Viking of the 5th evenue{" "} */}
          </CardBody>
        </Card>

        <Card height="medium" width="medium" background="black">
          <CardHeader pad="small">lunar discovery </CardHeader>

          <CardBody>
            <Anchor
              href="https://www.ampled.com/artist/streamerd/post/2014"
              target={"_blank"}
            >
              <Image
                src="./artProjects/lunar-discovery.jpeg"
                height="320px"
                width="320px"
              ></Image>
            </Anchor>{" "}
          </CardBody>
        </Card>
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
            <Card height="small" width="small" background="purple">
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
                <Anchor
                  href="https://github.com/stateful-art/"
                  target={"_blank"}
                  icon={
                    <Image
                      src="./discord-logo.png"
                      height={"24px"}
                      width={"24px"}
                    ></Image>
                  }
                ></Anchor>
              </CardFooter>
            </Card>

            <Card height="small" width="small" background="brown">
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
                ></Anchor>

                <Anchor
                  href="https://miro.com/app/board/uXjVOX1nmp0=/?invite_link_id=643006029904"
                  target={"_blank"}
                >
                  design
                </Anchor>
              </CardFooter>
            </Card>

            <Card height="small" width="small" background={"black"}>
              <CardHeader pad="small">future, made </CardHeader>

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
          <Box direction="column" gap="large">
            <Box direction="row" gap="medium">
              <Box direction="row" gap="medium">
                <Card height="medium" width="medium" background="purple">
                  <CardHeader pad="small">
                    <Anchor href="https://stateful.art" target={"_blank"}>
                      <Text textAlign="center" size="large" color={"white"}>
                        stateful.art
                      </Text>
                    </Anchor>
                  </CardHeader>

                  <CardBody background={"black"} pad="small">
                    <Box
                      align="center"
                      round="medium"
                      animation={{
                        type: "pulse",
                        delay: 0,
                        duration: 1000,
                      }}
                    >
                      {" "}
                      <Image
                        src="./impactProjects/start-no-logo-short.png"
                        height="160px"
                        width="160px"
                      ></Image>
                    </Box>
                    <Text textAlign="center" size="large">
                      connecting cities with <br></br>arts {"&"} rights
                    </Text>
                  </CardBody>

                  <CardFooter background="light-2">
                    <Box
                      direction="row"
                      gap="medium"
                      size="medium"
                      pad={"xsmall"}
                    >
                      <Anchor
                        href="https://stateful.art"
                        target={"_blank"}
                        icon={<Cursor color="black" />}
                      ></Anchor>

                      <Anchor
                        href="https://twitter.com/statefulArt"
                        target={"_blank"}
                        icon={<Twitter color="#1DA1F2" />}
                      ></Anchor>
                      <Anchor
                        href="https://github.com/stateful-art/"
                        target={"_blank"}
                        icon={<Github color="black" />}
                      ></Anchor>

                      <Anchor
                        href="https://discord.gg/QStRgcNJV7"
                        target={"_blank"}
                        icon={
                          <Image
                            src="./discord-logo.png"
                            height={"24px"}
                            width={"24px"}
                          ></Image>
                        }
                      ></Anchor>
                      <Anchor
                        href="https://miro.com/app/board/uXjVOXeggvw=/?invite_link_id=88536124274"
                        target={"_blank"}
                        icon={<Stakeholder color="black" />}
                      />
                    </Box>
                  </CardFooter>
                </Card>

                <Card height="medium" width="medium" background="black">
                  <CardHeader pad="small" background="yellow">
                    <Anchor
                      color={"black"}
                      href="https://twitter.com/EntsAreBack"
                      target={"_blank"}
                    >
                      EntDAO{" "}
                    </Anchor>
                  </CardHeader>
                  <Box
                    align="center"
                    round="medium"
                    pad={"small"}
                    animation={{
                      type: "jiggle",
                      delay: 0,
                      duration: 2000,
                    }}
                  >
                    <Image
                      src="./impactProjects/entDAO_dotMatrix.jpeg"
                      height="160px"
                      width="160px"
                    ></Image>
                  </Box>
                  <CardBody background={"black"} pad="small">
                    {" "}
                    <Text textAlign="center" size="large">
                      nature with stakes, in offset decision-making
                    </Text>
                  </CardBody>

                  <CardFooter background="light-2">
                    <Box
                      direction="row"
                      gap="medium"
                      size="large"
                      pad={"xsmall"}
                    >
                      <Anchor
                        href="https://twitter.com/entsAreback"
                        target={"_blank"}
                        icon={<Twitter color="#1DA1F2" />}
                      ></Anchor>
                      <Anchor
                        href="https://discord.gg/fWunhCDhuy"
                        target={"_blank"}
                        icon={
                          <Image
                            src="./discord-logo.png"
                            height={"24px"}
                            width={"24px"}
                          ></Image>
                        }
                      ></Anchor>
                      <Anchor
                        href="https://miro.com/app/board/uXjVOX1nmp0=/?invite_link_id=922627502511"
                        target={"_blank"}
                        icon={<Stakeholder color="black" />}
                      />
                    </Box>
                  </CardFooter>
                </Card>

                <Card height="medium" width="medium" background="white">
                  <CardHeader pad="small" background="black">
                    <Anchor
                      color={"white"}
                      href="https://futurema.de"
                      target={"_blank"}
                    >
                      <Text size="large">future, made</Text>
                    </Anchor>
                  </CardHeader>

                  <Box
                    align="center"
                    round="medium"
                    animation={{
                      type: "slideLeft",
                      delay: 0,
                      duration: 24000,
                    }}
                  >
                    <Image
                      src="./impactProjects/future_made_logo.svg"
                      height="160px"
                      width="160px"
                    ></Image>
                  </Box>
                  <CardBody background={"black"} pad="small">
                    <Text textAlign="center" size="large">
                      future art events, made co-imaginable
                    </Text>
                    <Box align="center">
                      <Anchor
                        href="https://vimeo.com/526183104"
                        target={"_blank"}
                      >
                        {" "}
                        ( demo )
                      </Anchor>
                    </Box>
                  </CardBody>
                  <CardFooter
                    pad={{ horizontal: "xsmall" }}
                    background="light-2"
                  >
                    <Box direction="row" gap="medium" pad={"xsmall"}>
                      <Anchor
                        href="https://futurema.de"
                        target={"_blank"}
                        icon={<Cursor color="#1DA1F2" />}
                      />
                      <Anchor
                        href="https://github.com/future-made"
                        target={"_blank"}
                        icon={<Github color="black" />}
                        hoverIndicator
                      />

                      <Anchor
                        href="https://miro.com/app/board/o9J_lcIxk6U=/"
                        target={"_blank"}
                        icon={<Stakeholder color="black" />}
                        hoverIndicator
                      />
                      <Anchor
                        href="https://miro.com/app/board/o9J_ldhZvuk=/"
                        target={"_blank"}
                        icon={<BusinessService color="black" />}
                      />
                    </Box>
                  </CardFooter>
                </Card>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Box direction="row" gap="medium">
                <Card height="medium" width="medium" background="white">
                  <CardBody background={"black"} pad="small">
                    <Box
                      align="center"
                      round="medium"
                      pad={"small"}
                      animation={{
                        type: "pulse",
                        delay: 0,
                        duration: 1000,
                      }}
                    >
                      <a
                        href="https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=132783006721"
                        target={"_blank"}
                        rel="noreferrer"
                        color="white"
                      >
                        <Image
                          src="./impactProjects/demoverse-logo-transparent.png"
                          height="160px"
                          width="240px"
                        ></Image>
                      </a>
                    </Box>
                    <Text textAlign="center" size="large">
                      world peace as a service, on blockchain.
                      {/* <br></br>0 to billions to acknowledge, <br></br>0 to hundreds to seal it. */}
                    </Text>
                  </CardBody>

                  <CardFooter background="light-2">
                    <Box direction="row" gap="medium" size="large">
                      <Anchor
                        href="https://twitter.com/demoversal"
                        target={"_blank"}
                        icon={<Twitter color="#1DA1F2" />}
                      ></Anchor>

                      <Anchor
                        href="https://discord.gg/bdtUakkkUg"
                        target={"_blank"}
                        referrerPolicy="noreferrer"

                        icon={
                          <Image
                            src="./discord-logo.png"
                            height={"24px"}
                            width={"24px"}
                          ></Image>
                        }
                      ></Anchor>

                      <Anchor
                        href="https://github.com/demo-verse"
                        target={"_blank"}
                        referrerPolicy="noreferrer"
                        icon={<Github color="black" />}
                      ></Anchor>

                      <Anchor
                        href="https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=132783006721"
                        target={"_blank"}
                        referrerPolicy="noreferrer"

                        icon={<Stakeholder />}
                      ></Anchor>
                    </Box>
                  </CardFooter>
                </Card>

                <Card height="medium" width="medium" background="black">
                  <CardHeader pad="small" background="black">
                    <Text size="large">LocalZines </Text>
                  </CardHeader>

                  <CardBody background={"black"} pad="small">
                    {" "}
                    <Box alignSelf="center">
                      <Text textAlign="center" size="large" margin="medium">
                        freestyle magazines with impact capacity
                      </Text>
                    </Box>
                  </CardBody>

                  <CardFooter background="light-2">
                    <Box direction="row" gap="medium">
                      <Anchor
                        href="https://github.com/stateful-art/local-zines/"
                        target={"_blank"}
                        icon={<Github color="black" />}
                      ></Anchor>
                      <Anchor
                        href="https://www.canva.com/design/DAEvRcUy_5U/EDV-Ugx9_tDU3ntjXo6O7w/watch?utm_content=DAEvRcUy_5U&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                        target={"_blank"}
                        icon={<Actions />}
                        hoverIndicator
                      >
                        design
                      </Anchor>
                    </Box>
                  </CardFooter>
                </Card>

                <Card height="medium" width="medium" background="black">
                  <CardBody background={"black"}>
                    <Box
                      align="center"
                      animation={{
                        type: "pulse",
                        delay: 0,
                        duration: 12000,
                      }}
                    >
                      <Image
                        src="./impactProjects/offsetmovement-logo-transparent.png"
                        height="160px"
                        width="220px"
                      ></Image>
                    </Box>
                    <Text textAlign="center" size="large">
                      cooking new paradigms
                    </Text>
                  </CardBody>
                  <CardFooter
                    pad={{ horizontal: "xsmall" }}
                    background="light-2"
                  >
                    <Box direction="row" gap="medium">
                      <Anchor
                        href="https://offsetmovement.org"
                        target={"_blank"}
                        icon={<Cursor color="black" />}
                      />
                      <Anchor
                        href="https://github.com/offset-movement"
                        target={"_blank"}
                        icon={<Github color="black" />}
                        hoverIndicator
                      />
                      <Anchor
                        href="https://discord.gg/CD4Zk7Rcms"
                        target={"_blank"}
                        icon={
                          <Image
                            src="./discord-logo.png"
                            height={"24px"}
                            width={"24px"}
                          ></Image>
                        }
                      ></Anchor>
                    </Box>
                  </CardFooter>
                </Card>
              </Box>
            </Box>
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
        <Box pad="medium" gap="large">
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
            {/* <Tab title="uncategorized">
              <Box pad="medium"></Box>
            </Tab> */}
          </Tabs>
        </Box>
      </Tab>
      {/* <Tab title="uncategorized">
        <Box pad="medium"></Box>
      </Tab> */}
    </Tabs>
  );
};

const MusicAsCode = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Card height="medium" width="small" background="light-1">
            <CardHeader pad="small" background={"black"}>
              {" "}
              music, as code{" "}
            </CardHeader>

            <CardBody back pad="small">
              <Paragraph>
                electronic music, made with{" "}
                <Anchor href="https://sonic-pi.net" target={"_blank"}>
                  sonic-pi
                </Anchor>{" "}
                synth.
              </Paragraph>
              <Paragraph>
                listen to their loop records @ <br></br>
                <Anchor
                  href="https://www.ampled.com/artist/streamerd"
                  target={"_blank"}
                >
                  <Image src="./artProjects/ampled_logo.svg"></Image>
                </Anchor>{" "}
              </Paragraph>
            </CardBody>
            <CardFooter background="light-2">
              <Anchor
                icon={
                  <Github
                    color="black"
                    href="https://github.com/streamerd/musicode"
                  />
                }
                hoverIndicator
              />
            </CardFooter>
          </Card>
        ) : (
          <Card height="medium" width="small" background="light-1">
            <CardHeader pad="small" background={"black"}>
              {" "}
              music, as code{" "}
            </CardHeader>

            <CardBody back pad="small">
              {" "}
              <Paragraph>
                electronic music, made with{" "}
                <Anchor href="https://sonic-pi.net" target={"_blank"}>
                  sonic-pi
                </Anchor>{" "}
                synthesizer{" "}
              </Paragraph>
              <Paragraph>
                listen to their loop records @ <br></br>
                <Anchor
                  href="https://www.ampled.com/artist/streamerd"
                  target={"_blank"}
                >
                  <Image src="./artProjects/ampled_logo.svg"></Image>
                </Anchor>{" "}
              </Paragraph>
            </CardBody>
            <CardFooter background="light-2">
              <Anchor
                icon={
                  <Github
                    color="black"
                    href="https://github.com/streamerd/musicode"
                  />
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
                  href="https://github.com/streamerd"
                  target="_blank"
                  color="white"
                  size="medium"
                >
                  github
                </Anchor>
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
                  href="https://www.linkedin.com/in/abbas-tolgay-yilmaz-0x0"
                  target="_blank"
                  color="white"
                  size="medium"
                >
                  linkedIn
                </Anchor>{" "}
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
            </Box>
          ) : (
            <Box direction="column">
              <Box
                tag="footer"
                direction="column"
                justify="center"
                pad="small"
                gap="medium"
                background="black"
              >
                <Anchor
                  href="https://github.com/streamerd"
                  target="_blank"
                  color="white"
                  size="large"
                >
                  github
                </Anchor>
                <Anchor
                  href="https://twitter.com/_streamerd"
                  target="_blank"
                  color="#33ccff"
                  size="large"
                >
                  twitter
                </Anchor>{" "}
                <Anchor
                  href="https://instagram.com/streamerd_"
                  target="_blank"
                  color="#C13584"
                  size="large"
                >
                  instagram
                </Anchor>{" "}
                <Anchor
                  href="https://www.linkedin.com/in/abbas-tolgay-yilmaz-0x0"
                  target="_blank"
                  color="#0072b1"
                  size="large"
                >
                  linkedIn
                </Anchor>
              </Box>
              <Box
                tag="footer"
                direction="row"
                pad="small"
                gap="small"
                //flex={true}
                background="black"
              >
                <Text size="large">tolgay@atyilmaz.com</Text>
              </Box>

              <Box size="medium">
                <Anchor href="https://github.com/streamerd" target={"_blank"}>
                  <Image
                    src="https://ghchart.rshah.org/streamerd"
                    width={"480px"}
                  ></Image>
                </Anchor>
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
          <Card height="small" width="small" background="#cc1616" round="large">
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
                  <Text size="small" color="black">
                    {" "}
                    Abbas Tolgay{" "}
                  </Text>{" "}
                  <br></br>
                  Yılmaz
                </Box>
              </Box>
            </CardBody>
          </Card>
        ) : (
          <Card
            height="medium"
            width="medium"
            background="#cc1616"
            round="xlarge"
          >
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
                  <Text size="large" color="black">
                    {" "}
                    Abbas Tolgay{" "}
                  </Text>{" "}
                  <br></br>
                  <Text size="large" color="black">
                    {" "}
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
