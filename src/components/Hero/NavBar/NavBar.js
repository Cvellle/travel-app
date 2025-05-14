import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Grid, Image, Dropdown, Avatar, Text } from '@nextui-org/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAuth } from '@/providers/authProvider';
import { Logo } from '@/components/Logo';
import { StyledNavDropdown } from '@/components/Hero/NavBar/StyledNavDropdown';
import { StyledNavGridContainer } from '@/components/Hero/NavBar/StyledNavGridContainer';
import { StyledGrid } from '@/components/Hero/StyledGrid';
import { StyledLink } from '@/components/Hero/NavBar/StyledLink';
import { StyledMobNavContainer } from '@/components/Hero/NavBar/StyledMobNavContainer';
import { StyledIconHolder } from '@/components/Hero/NavBar/StyledIconHolder';
import { StyledMobContentContainer } from '@/components/Hero/NavBar/StyledContainers';
import * as SvgSprite from '@/assets/SvgSprite';

const NavBar = () => {
  const [selected, setSelected] = useState(new Set(['sr']));
  const [showMobileNavigation, setMobileNavigation] = useState(false);

  const t = useTranslations();
  const isMd = useMediaQuery(960);

  const { locale, locales, route } = useRouter();

  const { user, logout } = useAuth();

  const otherLocale = locales?.find((cur) => cur !== locale);

  const overlayClass = showMobileNavigation
    ? 'mobile-navigation-overlay open'
    : 'mobile-navigation-overlay';

  return (
    <StyledNavGridContainer style="css">
      <Grid>
        <NextLink href="/">
          {/* <Image
            src="/images/logo-test.jpg"
            objectFit="cover"
            alt="Logo"
            width={100}
            height={60}
          /> */}
          <Logo />
        </NextLink>
      </Grid>
      {isMd ? (
        <StyledGrid style="navMob">
          {user && (
            <Dropdown>
              <Dropdown.Trigger>
                <Avatar src="/images/user_placeholder.png" zoomed size="xs" />
              </Dropdown.Trigger>
              <Dropdown.Menu
                aria-label="Avatar Actions"
                onSelectionChange={(value) => console.log({ value })}
                onAction={(value) => {
                  if (value === 'logout') {
                    logout();
                  }
                }}
              >
                <Dropdown.Item key="profile" css={{ height: '$18' }}>
                  Edit Account
                </Dropdown.Item>
                <Dropdown.Item key="logout" css={{ height: '$18' }}>
                  {t('Auth.logout')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <StyledIconHolder
            onClick={() => {
              setMobileNavigation(true);
            }}
            style="hamburger"
          >
            <SvgSprite.IconHamburger />
          </StyledIconHolder>
        </StyledGrid>
      ) : (
        <StyledGrid style="navCss">
          {!user && (
            <>
              <NextLink href="/auth/login">
                <StyledLink block style="navColor">
                  {t('Hero.nav:login')}
                </StyledLink>
              </NextLink>
              <NextLink href="/auth/register">
                <StyledLink block style="navColor">
                  {t('Hero.nav:signin')}
                </StyledLink>
              </NextLink>
            </>
          )}
          {user && (
            <NextLink href="/my-trips">
              <StyledLink block style="navColor">
                {t('Hero.nav:myTrips')}
              </StyledLink>
            </NextLink>
          )}
          <Dropdown>
            <StyledNavDropdown color="cv">{selected}</StyledNavDropdown>
            <Dropdown.Menu
              aria-label="User Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={(r)=>{
                alert(otherLocale)
                alert(route)
                setSelected(r)}}
            >
              <Dropdown.Item key="sr" textValue="serbian">
                <NextLink href={route} locale={'sr'}>
                  {t('Hero.nav:languageSerbian', { locale: otherLocale })}
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key="en" textValue="english">
                <NextLink href={route} locale={'en'}>
                  {t('Hero.nav:languageEnglish', { locale: otherLocale })}
                </NextLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {user && (
            <Dropdown>
              <Dropdown.Trigger>
                <Avatar src="/images/user_placeholder.png" zoomed />
              </Dropdown.Trigger>
              <Dropdown.Menu
                aria-label="Avatar Actions"
                onSelectionChange={(value) => console.log({ value })}
                onAction={(value) => {
                  if (value === 'logout') {
                    logout();
                  }
                }}
              >
                <Dropdown.Item key="profile" css={{ height: '$18' }}>
                  Edit Account
                </Dropdown.Item>
                <Dropdown.Item key="logout" css={{ height: '$18' }}>
                  {t('Auth.logout')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </StyledGrid>
      )}

      <StyledMobNavContainer className={overlayClass}>
        <StyledMobContentContainer style="mobContainer">
          <StyledMobContentContainer style="iconHolder">
            <StyledIconHolder
              onClick={() => {
                setMobileNavigation(false);
              }}
            >
              <SvgSprite.IconCloseNav />
            </StyledIconHolder>
          </StyledMobContentContainer>
          <StyledMobContentContainer style="navigationContent">
            {!user && (
              <StyledMobContentContainer style="registrationHolder">
                <NextLink href="/auth/login">
                  <StyledLink block style="navColor">
                    {t('Hero.nav:login')}
                  </StyledLink>
                </NextLink>

                <NextLink href="/auth/register">
                  <StyledLink block style="navColor">
                    {t('Hero.nav:signin')}
                  </StyledLink>
                </NextLink>
              </StyledMobContentContainer>
            )}
            <NextLink href="/my-trips">
              <StyledLink block style="navColor">
                {t('Hero.nav:myTrips')}
              </StyledLink>
            </NextLink>
            <StyledMobContentContainer style="line"></StyledMobContentContainer>
            <Dropdown>
              <StyledNavDropdown
                color="mob"
                css={{
                  padding: '0px 0px 0px 8px',
                }}
              >
                {selected}
              </StyledNavDropdown>
              <Dropdown.Menu
                aria-label="User Actions"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="SR" textValue="serbian">
                  <NextLink href={route} locale={otherLocale}>
                    {t('Hero.nav:languageSerbian', { locale: otherLocale })}
                  </NextLink>
                </Dropdown.Item>
                <Dropdown.Item key="EN" textValue="english">
                  <NextLink href={route} locale={otherLocale}>
                    {t('Hero.nav:languageEnglish', { locale: otherLocale })}
                  </NextLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </StyledMobContentContainer>
        </StyledMobContentContainer>
      </StyledMobNavContainer>
    </StyledNavGridContainer>
  );
};

export default NavBar;
