import { Header, Image } from "semantic-ui-react";

export default function Item(props) {
  return (
    <div className="item" data-aos="fade-up" {...props}>
      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/24219b113388407.60269afa33114.png"
        rounded
        fluid
      />
      <Header as="h3" textAlign="center">
        Probando 1
      </Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        consectetur.
      </p>
    </div>
  );
}
