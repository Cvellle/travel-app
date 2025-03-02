import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Container, Text } from '@nextui-org/react';
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { StyledTermsContainer } from './StyledComponents/StyledTermsContainer';
import { InnerTermsContainer } from './StyledComponents/InnerTermsContainer';
import { TermsNavigationLink } from './StyledComponents/TermsNavigationLink';
import { PrintButton } from './StyledComponents/PrintButton';

export default function Terms() {
  // states
  const [termsList, setTermsList] = useState();

  // hooks
  const t = useTranslations('Terms');
  const { locale } = useRouter();
  const pageRefs = useRef({});

  useEffect(() => {
    import('../data/' + locale + '.json').then((res) => {
      setTermsList(Array.from(res));
    });
  }, []);

  // functions
  function scrollFunction(id) {
    pageRefs.current[id].scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledTermsContainer>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerTermsContainer
        css={{
          justifyContent: 'space-between',
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Container
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>{t('terms:heading')}</h2>
          <PrintButton
            css={{
              '@media print': {
                d: 'none',
              },
            }}
            onClick={() => {
              window.print();
            }}
          />
        </Container>
        <Container css={{ mt: '3rem' }}>
          <h3>{t('terms:content:heading')}</h3>
          {termsList?.map((term, i) => (
            <TermsNavigationLink
              key={term.id}
              onClick={() => scrollFunction(term.id)}
            >
              {term.title}
            </TermsNavigationLink>
          ))}
        </Container>
        <Container css={{ m: '3rem 0' }}>
          {termsList?.map((term, i) => (
            <>
              <Container
                css={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 0,
                }}
              >
                <h4
                  ref={(el) =>
                    (pageRefs.current = { ...pageRefs.current, [term.id]: el })
                  }
                >
                  {term.title}
                </h4>
                <TermsNavigationLink
                  css={{
                    '@media print': {
                      d: 'none',
                    },
                  }}
                  onClick={() => {
                    window.window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  {t('terms:content:scroll_top')}
                </TermsNavigationLink>
              </Container>

              <Text key={term}>{term.content}</Text>
            </>
          ))}
        </Container>
      </InnerTermsContainer>
    </StyledTermsContainer>
  );
}
