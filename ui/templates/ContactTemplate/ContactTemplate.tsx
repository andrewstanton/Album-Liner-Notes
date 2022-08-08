import { MainLayout } from "../../organisms";

// @types
import { DefaultTemplateProps } from "../AlbumTemplate/AlbumTemplate";

export type ContactTemplateProps = DefaultTemplateProps;

const ContactTemplate: React.FC<ContactTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Contact Template Page
    </MainLayout>
  );
};

export default ContactTemplate;
