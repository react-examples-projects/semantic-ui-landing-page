import { Image } from "semantic-ui-react";
export default function Wireframe(props) {
  return (
    <div className="wireframe" data-aos="fade-up" {...props}>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        fluid
      />
    </div>
  );
}
