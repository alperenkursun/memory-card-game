import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
      isOpen: false,
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/012.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/017.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/024.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/032.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/037.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/039.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/046.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/050.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/054.png",
    },
    {
      id: nanoid(),
      url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/077.png",
    },
  ],
  compareItems: [],
  compareOpenItems: [],
  compareResult: false,
  clickCount: 0,
  isLocked: false,
  point: 0,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    compare(state, action) {
      const cardId = action.payload;
      if (state.compareItems.length < 2) {
        state.compareItems.push(cardId);
        if (state.compareItems.length === 2) {
          state.isLocked = true;
          if (state.compareItems[0] === state.compareItems[1]) {
            state.compareResult = true;
            state.point += 50;
            state.compareOpenItems.push(...state.compareItems);
          } else {
            state.compareResult = false;
            state.point -= 10;
          }
        }
      }
    },
    unlock(state) {
      state.isLocked = false;
      state.compareItems = [];
    },
  },
});

export const { compare, unlock } = cardsSlice.actions;

export const cardsSelector = (state) => state.cards.value;
export const compareItemsSelector = (state) => state.cards.compareItems;
export const compareOpenItemsSelector = (state) => state.cards.compareOpenItems;
export const compareResultSelector = (state) => state.cards.compareResult;
export const clickCount = (state) => state.cards.clickCount;
export const isLockedSelector = (state) => state.cards.isLocked;
export const pointSelector = (state) => state.cards.point;

export default cardsSlice.reducer;
