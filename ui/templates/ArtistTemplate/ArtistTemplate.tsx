import { MainLayout } from "../../organisms";

// @types
import { DefaultTemplateProps } from "../AlbumTemplate/AlbumTemplate";

export type ArtistTemplateProps = DefaultTemplateProps;

const ArtistTemplate: React.FC<ArtistTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Artist Template Page
    </MainLayout>
  );
};

export default ArtistTemplate;
