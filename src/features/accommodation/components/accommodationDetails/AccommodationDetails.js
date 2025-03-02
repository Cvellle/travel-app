import { StyledIconWrapper } from '@/features/accommodation/components/accommodationCardContent/StyledIconWrapper';
import * as SvgSprite from '@/assets/SvgSprite';

const AccommodationDetails = ({ accommodationDetails }) => {
  return (
    <StyledIconWrapper>
      {accommodationDetails?.wifi && <SvgSprite.Wifi />}
      {accommodationDetails?.parking && <SvgSprite.Parking />}
      {accommodationDetails?.balcony && <SvgSprite.Terace />}
      {accommodationDetails?.pool && <SvgSprite.Pool />}
      {accommodationDetails?.spa && <SvgSprite.Spa />}
      {accommodationDetails?.kitchen && <SvgSprite.Kitchen />}
      {accommodationDetails?.room_service && <SvgSprite.Room />}
      {accommodationDetails?.mini_bar && <SvgSprite.Minibar />}
      {accommodationDetails?.tv && <SvgSprite.Tv />}
      {accommodationDetails?.exchange_office && <SvgSprite.MoneyExc />}
      {accommodationDetails?.safe && <SvgSprite.Safe />}
      {accommodationDetails?.air_conditioning && <SvgSprite.AirCond />}
      {accommodationDetails?.convenience_store && <SvgSprite.Shop />}
      {accommodationDetails?.pet_friendly && <SvgSprite.Pets />}
      {accommodationDetails?.child_care_facilities && <SvgSprite.Baby />}
      {accommodationDetails?.accessibility_friendly && <SvgSprite.Wheelchair />}
    </StyledIconWrapper>
  );
};

export default AccommodationDetails;
