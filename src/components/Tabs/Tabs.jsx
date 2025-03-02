import { Link } from '@nextui-org/react';
import { useState, useCallback } from 'react';

import { StyledTabCol, StyledTabContainer } from './Styled/StyledTabCol';
import { StyledTabRow } from './Styled/StyledTabRow';
import { StyledTabText } from './Styled/StyledTabText';

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props?.label);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);
  console.log(children);
  const tabNames = children?.map((child, index) => (
    <StyledTabCol
      maxWidth={children.length - 1 !== index ? 'maxWidthElement' : null}
      key={child.props.label}
    >
      <StyledTabText
        className="moja-klasa"
        border={
          child.props.label === activeTab && children.length > 2
            ? 'borderActive'
            : null
        }
        weight={child.props.label === activeTab ? 'bold' : 'normal'}
        padding={children.length - 1 === index ? 'lastElement' : null}
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab(child.props.label);
        }}
      >
        <Link
          color={'text'}
          css={{
            color:
              child.props.label === activeTab ? null : 'rgba(0, 0, 0, 0.5)',
          }}
          className={
            child.props.label === activeTab
              ? ['tabs__tab', 'tabs__tab-active'].join(' ')
              : 'tabs__tab'
          }
          key={child.props.label}
        >
          {child.props.tabName}
        </Link>
      </StyledTabText>
    </StyledTabCol>
  ));

  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );

  return (
    <div>
      <div className="tabs__box">
        <StyledTabContainer responsive={false}>
          <StyledTabRow
            borderBottom={children.length > 2 ? 'firstRowElement' : null}
          >
            {tabNames}
          </StyledTabRow>
        </StyledTabContainer>
      </div>

      <div>{tabContent}</div>
    </div>
  );
};

/**
 * [SR]
 * TabsSection komponentu koristimo prilikom ispisa jedne ponude
 *
 * [EN]
 * TabsSection component using when when display one offer
 */
export const TabsSection = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabNames = children.map((child, index) => (
    <StyledTabCol key={child.props.label}>
      <StyledTabText
        weight={child.props.label === activeTab ? 'bold' : 'normal'}
        onClick={(e) => {
          handleActiveTab(child.props.label);
        }}
        border={
          child.props.label === activeTab && children.length > 2
            ? 'borderActive'
            : null
        }
      >
        <Link
          href={`#${child.props.label}`}
          color={'text'}
          css={{
            color:
              child.props.label === activeTab ? null : 'rgba(0, 0, 0, 0.5)',
          }}
          className={
            child.props.label === activeTab
              ? ['tabs__tab', 'tabs__tab-active'].join(' ')
              : 'tabs__tab'
          }
          key={child.props.label}
        >
          {child.props.tabName}
        </Link>
      </StyledTabText>
    </StyledTabCol>
  ));

  const tabContent = children.map((child) => child);

  return (
    <div>
      <div className="tabs__box">
        <StyledTabContainer paddingLeft={'tabSection'}>
          <StyledTabRow
            borderBottom={children.length > 2 ? 'firstRowElement' : null}
          >
            {tabNames}
          </StyledTabRow>
        </StyledTabContainer>
      </div>

      <div>{tabContent}</div>
    </div>
  );
};
