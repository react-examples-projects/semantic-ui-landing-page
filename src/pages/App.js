import {
  Button,
  ButtonGroup,
  Header,
  Container,
  Segment,
  Divider,
  Grid,
  Icon,
  Form,
  Input,
  Image,
  Label,
} from "semantic-ui-react";
import useToggler from "../Hooks/useToggler";
import useText from "../Hooks/useText";

function App() {
  const [isActive, toggle] = useToggler();
  const [isDisabled, toggleDisabled] = useToggler();
  const [isLoading, toggleLoading] = useToggler();
  const [arrowActive, setArrowActive] = useToggler();
  const [text, setText] = useText();

  return (
    <Container>
      <br />
      <br />
      <Label image>
        <Image src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
        Libardo
        <Label.Detail>
          Detalles
        </Label.Detail>
      </Label>
      <Container
        style={{ marginTop: "5rem", padding: "2rem" }}
        as={Segment}
        inverted
        fluid
      >
        <Header as="h1">
          <Icon name="book" color="white" /> Learning Semantic UI
        </Header>

        <Divider inverted />
        <p>{isActive ? "Active state" : "Inactive state"}</p>

        <Button onClick={toggle} primary inverted>
          Aceptar
        </Button>
      </Container>
      <Segment basic>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Header as="h3">
              Title here
              <Header.Subheader>Subtitle here</Header.Subheader>
            </Header>
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
      <Header size="small" as="h2">
        Botones agrupados
      </Header>
      <ButtonGroup as={Segment} inverted>
        <Button basic color="green">
          Boton basic green
        </Button>
        <Button.Or />
        <Button basic color="red">
          Boton basic red
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <Header size="small">Grupo de botones en vertical</Header>
      <ButtonGroup vertical>
        <Button>Panel</Button>
        <Button>Usuarios</Button>
        <Button>Vacunas</Button>
      </ButtonGroup>
      <Header size="small" as="h2">
        Botones
      </Header>
      <Button color="yellow" loading={isLoading} onClick={toggleLoading}>
        Cargando
      </Button>
      <Button color="violet" content="Boton con content violet" />
      <Button
        content="Estado activo"
        primary
        disabled={isDisabled}
        onClick={toggleDisabled}
      />
      <Button inverted color="olive" content="Boton inverted" />
      <br /> <br />
      <ButtonGroup>
        <Button primary compact>
          Boton compact
        </Button>
        <Button.Or />
        <Button secondary compact>
          Boton compact
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <Button fluid color="brown" basic>
        Boton fluid basic
      </Button>
      <br />
      <Button fluid color="red" inverted>
        Boton fluid inverted
      </Button>
      <br />
      <br />
      <br />
      <Form>
        <Button
          icon
          style={{ marginBottom: ".5rem" }}
          color="google plus"
          onClick={() => setArrowActive(!arrowActive)}
        >
          <Icon name={`${arrowActive ? "pause" : "play"}`} />
        </Button>

        <Form.Group block>
          <Form.Input
            loading={arrowActive}
            disabled={arrowActive}
            iconPosition="left"
            icon="user"
            label="Correo electrónico"
            placeholder="Correo"
            size="large"
          />
        </Form.Group>
        <Form.Button type="submit" content="Enviar" fluid />
      </Form>
      <Divider hidden />
      <p>{text}</p>
      <Input
        placeholder="Nombre"
        label="Nombres"
        size="small"
        onChange={setText}
        error={text === ""}
      />
      <br />
      <br />
      <br />
      <Image.Group>
        <Image src="https://picsum.photos/200" rounded />
        <Image src="https://picsum.photos/200" rounded />
        <Image src="https://picsum.photos/200" rounded />
        <Image src="https://picsum.photos/200" rounded />
      </Image.Group>
      <Image
        rounded
        src="https://picsum.photos/500"
        href="https://picsum.photos/500"
        target="_blank"
      />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default App;
