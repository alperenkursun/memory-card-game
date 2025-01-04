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
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

// export const {} = cardsSlice.actions;

export const cardsSelector = (state) => state.cards.value;

export default cardsSlice.reducer;
