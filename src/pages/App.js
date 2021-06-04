import {
  Button,
  Header,
  Container,
  Segment,
  Divider,
  Grid,
} from "semantic-ui-react";
import { useState } from "react";
function App() {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive(!isActive);

  return (
    <Container>
      <Container
        style={{ marginTop: "5rem", padding: "2rem" }}
        as={Segment}
        inverted
        fluid
      >
        <Header as="h1">Learning Semantic UI</Header>
        <Divider inverted/>
        <p>{isActive ? "Active state" : "Inactive state"}</p>
        <Button onClick={toggleActive} primary inverted>
          Aceptar
        </Button>
      </Container>

      <Segment style={{ marginTop: "2rem" }} basic>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Header as="h3">Title here</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              fuga sapiente blanditiis alias vitae molestias, reprehenderit
              earum expedita, harum quam delectus eveniet! Voluptas sequi hic
              cupiditate neque exercitationem eius magni.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3">Title here</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              fuga sapiente blanditiis alias vitae molestias, reprehenderit
              earum expedita, harum quam delectus eveniet! Voluptas sequi hic
              cupiditate neque exercitationem eius magni.
            </p>
          </Grid.Column>
        </Grid>
        <Divider vertical>AND</Divider>
      </Segment>
    </Container>
  );
}

export default App;
