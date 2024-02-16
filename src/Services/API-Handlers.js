import { axiosHandler } from "./axios";

export const FetchPeoplesAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/people?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};

export const FetchPlanetsAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/planets?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};
export const FetchFilmsAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/films?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};
export const FetchSpeciesAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/species?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};
export const FetchVehicalsAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/vehicles?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};
export const FetchStartshipsAPI = async (pageNumber) => {
    try {
        if(pageNumber>0){
            const response = await axiosHandler.get(`/starships?page=${pageNumber}`);
            return response.data;
        }
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};

export const FetchEntityAPI = async (url) => {
    try {
        const response = await axiosHandler.get(url);
        return response.data;
        
        throw new Error("invalid page number")
    } catch (error) {
      throw error;
    }
};