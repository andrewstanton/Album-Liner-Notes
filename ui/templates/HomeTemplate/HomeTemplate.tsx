import { MainLayout } from "../../organisms";

// @types
import { DefaultTemplateProps } from "../AlbumTemplate/AlbumTemplate";

export type HomeTemplateProps = DefaultTemplateProps;

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Home Template Page
    </MainLayout>
  );
};

export default HomeTemplate;
