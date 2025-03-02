/* Layout for the client-side app */

import {
  StyledSidebarWrapper,
  StyledMainContentWrapper,
} from './MainLayout.styled';

import { StyledGridContainer } from '@/components/Layout/StyledGridContainer';
import { StyledContainer } from '@/components/Layout//StyledContainer';
import { Hero } from '@/components/Hero';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Footer } from '@/components/Footer';

export const MainLayout = ({
  children,
  sidebar = false,
  heroFilters = true,
}) => {
  return (
    <StyledGridContainer variant="container">
      {children.props.heroBgImage && (
        <Hero
          heroFilters={heroFilters}
          heroBgImage={children.props.heroBgImage}
        />
      )}
      <StyledGridContainer variant="content" wrap="nowrap">
        {sidebar && (
          <StyledSidebarWrapper>
            <div className="helper-element"></div>
            <StyledContainer variant="sidebar" css={{ padding: 0, margin: 0 }}>
              <Sidebar />
            </StyledContainer>
          </StyledSidebarWrapper>
        )}
        <StyledContainer variant="children" css={{ padding: 0 }}>
          <StyledMainContentWrapper>{children}</StyledMainContentWrapper>
        </StyledContainer>
      </StyledGridContainer>
      <Footer />
    </StyledGridContainer>
  );
};
