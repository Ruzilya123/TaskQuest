import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Character } from './types';

const XP_PER_LEVEL = 100;
const XP_PER_TASK = 20;

const savedCharacter = localStorage.getItem("character");
const initialState: Character = savedCharacter ? JSON.parse(savedCharacter) : {
    name: 'Герой',
    avatar: "🧙",
    xp: 0,
    level: 1,
};

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        addXp: (state, action: PayloadAction<number>) => {
            state.xp += action.payload;
            while (state.xp >= XP_PER_LEVEL) {
                state.xp -= XP_PER_LEVEL;
                state.level += 1;
            }
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
        resetCharacter: () => initialState,
    },
});

export const { addXp, setName, setAvatar, resetCharacter } = characterSlice.actions;
export { XP_PER_TASK }
export default characterSlice.reducer;
