import { render } from "@react-email/render";
import { Html, Img, Text } from "@react-email/components";
import { Document } from "payload/types";

type Props = {
  contents: Document;
};

const Template: React.FC<Props> = ({ contents }) => {
  return (
    <Html>
      {contents}
    </Html>
  );
};

export function newsletter(data: Props) {
  return render(<Template {...data} />);
}
