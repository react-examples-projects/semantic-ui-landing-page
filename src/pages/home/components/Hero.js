import {
  Container,
  Button,
  Header,
  Segment,
  Grid,
  Image,
} from "semantic-ui-react";

export default function Hero(props) {
  return (
    <Container
      as={Segment}
      className="hero container-section"
      data-aos="fade-up"
      basic
      {...props}
    >
      <Grid columns={2}>
        <Grid.Column className="column-hero">
          <Header content="Un buen título debería ir aca" as="h1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            consequuntur ipsam et magni quia, animi debitis. Possimus debitis
            facilis hic!
          </p>

          <Button
          className="animate__animated animate__pulse animate__slow animate__infinite"
            content="Inscribirme ahora"
            color="pink"
            style={{ marginBottom: "1rem" }}
          />
          <Button content="Requerimientos" />
        </Grid.Column>
        <Grid.Column data-aos-delay="100" data-aos="fade-up">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e7f472113388407.60269afa339ed.png"
            className="hero-coverpage"
            fluid
            rounded
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
