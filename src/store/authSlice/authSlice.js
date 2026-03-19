import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user : {
            name:"manoclock",
            status:"Connected",
            role:"admin"
        }
    }
});