import { api } from "./apiClient";

export const signup = async(payload) => {
    const { data } = await api.post("/api/auth/signup", payload);
    return data;
};

export const login = async (payload) => {
    const { data } = await api.post("/api/auth/login", payload);
    return data;
};

export const postcreate = async (payload) => {
    const { data } = await api.post("/api/auth/postcreate", payload);
    return data;
}

export const postedit = async (payload) => {
    const { data } = await api.post("/api/auth/postedit", payload);
    return data;
}

