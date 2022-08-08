import { MainLayout } from "../../organisms";

// @types
import { DefaultTemplateProps } from "../AlbumTemplate/AlbumTemplate";

export type SearchTemplateProps = DefaultTemplateProps;

const SearchTemplate: React.FC<SearchTemplateProps> = (props) => {
  const { title, description, headerNav, footerNav } = props;

  return (
    <MainLayout
      title={title}
      description={description}
      headerNav={headerNav}
      footerNav={footerNav}
    >
      Search Template Page
    </MainLayout>
  );
};

export default SearchTemplate;
