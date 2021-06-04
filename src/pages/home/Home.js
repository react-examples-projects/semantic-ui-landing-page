import { Container, Header, Grid, Image } from "semantic-ui-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "../../styles/styles.scss";
import Item from "./components/Item";
import Wireframe from "./components/Wireframe";

export default function Home() {
  return (
    <Container className="main" as="main" fluid>
      <Navbar />
      <Hero />

      <Container className="container-section">
        <Header as="h1" textAlign="center">
          Como Funciona
          <Header.Subheader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.
          </Header.Subheader>
        </Header>

        <Grid columns={3} style={{ marginTop: "3rem" }} className="how-todo">
          <Grid.Column>
            <Item data-aos-delay="0"/>
          </Grid.Column>

          <Grid.Column>
            <Item data-aos-delay="500"/>
          </Grid.Column>

          <Grid.Column>
            <Item data-aos-delay="1000"/>
          </Grid.Column>
        </Grid>
      </Container>

      <Container className="container-section" data-aos="fade-up">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e221f118001211.60807574e8352.jpg"
                style={{ maxHeight: "320px", objectFit: "cover" }}
                rounded
                fluid
              />
            </Grid.Column>

            <Grid.Column>
              <Header as="h1" textAlign="center">
                Nosotros como afiliados
              </Header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto necessitatibus repudiandae eum ullam expedita
                tempora, voluptatum esse eius ab repellendus.
              </p>
              <Grid columns={3} style={{ marginTop: "1rem" }}>
                <Grid.Column>
                  <Wireframe data-aos-delay="0"/>
                </Grid.Column>

                <Grid.Column>
                  <Wireframe data-aos-delay="500"/>
                </Grid.Column>

                <Grid.Column>
                  <Wireframe data-aos-delay="1000"/>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Hero />
    </Container>
  );
}
