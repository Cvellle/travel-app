import { useEffect } from 'react';
import { Table, Text, Tooltip } from '@nextui-org/react';
import {
  MdDeleteOutline,
  MdRemoveCircleOutline,
  MdOutlineVisibility,
} from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { StyledSingleWishlist } from '../styles/WishlistPage.styled';

import {
  useWishlistData,
  useDeleteWishlist,
  useDeleteOfferFromWishlist,
} from '@/features/wishlist';

export const SingleWishlist = ({ wishlist, setCounter }) => {
  const { data, status } = useWishlistData({ wishlistId: wishlist.id });

  const deleteWishlist = useDeleteWishlist();

  const deleteOfferFromWishlist = useDeleteOfferFromWishlist();

  const router = useRouter();

  useEffect(() => {
    if (status === 'success') {
      setCounter((prevState) => prevState + 1);
    }
  }, [status]);

  console.log({ data });

  const handleDeleteWishlist = async ({ wishlistId }) => {
    try {
      await deleteWishlist.mutate({ wishlistId });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDeleteOfferFromWishlist = ({ favoriteId, wishlistId }) => {
    try {
      deleteOfferFromWishlist.mutate({ favoriteId, wishlistId });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleNavigateToOffer = ({ offerId, offerDurationsId }) => {
    return router.push(`/details/${offerId}/${offerDurationsId}`);
  };

  return (
    data && (
      <StyledSingleWishlist>
        <div className="single__wishlist">
          <Text h5 css={{ marginBottom: 0 }}>
            {wishlist.name}
          </Text>
          <Tooltip content={`Delete the list ${wishlist.name}`} color="invert">
            <span
              role="button"
              tabIndex="0"
              onKeyDown={() => console.log('')}
              onClick={() => handleDeleteWishlist({ wishlistId: wishlist.id })}
            >
              <MdDeleteOutline color="rgb(255, 108, 98)" />
            </span>
          </Tooltip>
        </div>
        <div className="single__wishlist__offers">
          <Table
            aria-label="Example table with dynamic content"
            css={{
              height: 'auto',
              minWidth: '100%',
            }}
          >
            <Table.Header>
              <Table.Column>NAME</Table.Column>
              <Table.Column>DESTINATION</Table.Column>
              <Table.Column>SPECIAL INFO</Table.Column>
              <Table.Column>PRICE</Table.Column>
              <Table.Column>AGENCY</Table.Column>
              <Table.Column>ACTIONS</Table.Column>
            </Table.Header>
            <Table.Body items={data}>
              {(item) => (
                <Table.Row
                  key={item.favorite_id}
                  css={{ padding: '15px 0', border: '1px solid red' }}
                >
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.city_to_name}</Table.Cell>
                  <Table.Cell>
                    {item.is_recommended}&nbsp;{item.is_last_minute}
                  </Table.Cell>
                  <Table.Cell>{item.price}&euro;</Table.Cell>
                  <Table.Cell>
                    <div className="wishlist__image__wrapper">
                      <Image
                        src={item.travel_agency_logo_url}
                        alt={item.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="wishlist__actions">
                      {console.log({ item })}
                      <button
                        type="button"
                        onClick={() =>
                          handleNavigateToOffer({
                            offerId: item.offer_id,
                            offerDurationsId: item.offer_duration_id,
                          })
                        }
                      >
                        <Tooltip
                          content={`Pogledajte aranžman ${item.name}`}
                          color="invert"
                        >
                          <MdOutlineVisibility />
                        </Tooltip>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleDeleteOfferFromWishlist({
                            favoriteId: item.favorite_id,
                            wishlistId: wishlist.id,
                          });
                        }}
                      >
                        <Tooltip
                          content={`Obrišite aranžman ${item.name} iz liste ${wishlist.name}`}
                          color="invert"
                        >
                          <MdRemoveCircleOutline color="red" />
                        </Tooltip>
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </StyledSingleWishlist>
    )
  );
};
