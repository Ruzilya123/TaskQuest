import { createSlice } from "@reduxjs/toolkit"

interface StatsState {
    completedPerDay: Record<string, number> // ключ = YYYY-MM-DD
}

const initialState: StatsState = {
    completedPerDay: {}
}

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        addCompletion: (state) => {
            const today = new Date().toISOString().split("T")[0]
            if (!state.completedPerDay[today]) state.completedPerDay[today] = 0
            state.completedPerDay[today] += 1
        }
    }
})

export const { addCompletion } = statsSlice.actions
export default statsSlice.reducer
