import { MainLayout } from "../../organisms";

// @types
import { DefaultTemplateProps } from "../AlbumTemplate/AlbumTemplate";

export type BandTemplateProps = DefaultTemplateProps;

const BandTemplate: React.FC<BandTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Band Template Page
    </MainLayout>
  );
};

export default BandTemplate;
