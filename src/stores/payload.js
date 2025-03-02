import create from 'zustand';

export const usePayload = create((set) => ({
  transportTypeArr: [],
  setTransportTypeArr: (transportTypeArr) =>
    set((state) => ({
      ...state,
      transportTypeArr,
    })),
  propertyTypeArr: [],
  setPropertyTypeArr: (propertyTypeArr) =>
    set((state) => ({
      ...state,
      propertyTypeArr,
    })),
  ratingCatArr: [],
  setRatingCatArr: (ratingCatArr) =>
    set((state) => ({
      ...state,
      ratingCatArr,
    })),
  serviceTypeArr: [],
  setServiceTypeArr: (serviceTypeArr) =>
    set((state) => ({
      ...state,
      serviceTypeArr,
    })),
  allAgenciesArr: [],
  setAllAgenciesArr: (allAgenciesArr) =>
    set((state) => ({
      ...state,
      allAgenciesArr,
    })),
  guestReviewsArr: [],
  setGuestReviewsArr: (guestReviewsArr) =>
    set((state) => ({
      ...state,
      guestReviewsArr,
    })),
  selectedPrice: [1, 10000],
  setSelectedPrice: (selectedPrice) =>
    set((state) => ({
      ...state,
      selectedPrice,
    })),
  limit: 10,
}));
