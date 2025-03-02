import React from 'react';
import { Modal } from '@nextui-org/react';

import { SidebarModalBtn } from './StyledSidebar';
import SidebarBody from './SidebarBody';

import { FilterMob } from '@/assets/SvgSprite';

const FilterModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <SidebarModalBtn style="filterBtn" onClick={handler}>
        <FilterMob fontSize={25} />
      </SidebarModalBtn>
      <Modal
        closeButton
        fullScreen
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{
          borderRadius: '0',
          '.nextui-modal-close-icon': { display: 'none' },
        }}
      >
        <Modal.Body>
          <SidebarBody closeHandler={closeHandler} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterModal;
