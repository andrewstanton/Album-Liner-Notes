import { MainLayout } from "../../organisms";

// @types
import { INavLink } from "../../molecules/Nav/Nav";

export interface DefaultTemplateProps {
  title?: string;
  description?: string;
  headerNav: INavLink[];
  footerNav: INavLink[];
}

export type AlbumTemplateProps = DefaultTemplateProps;

const AlbumTemplate: React.FC<AlbumTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Album Template Page
    </MainLayout>
  );
};

export default AlbumTemplate;
