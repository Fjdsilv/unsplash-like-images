import axios from "axios";

const customFetch = axios.create({
    baseURL: "https://api.unsplash.com/search/photos?client_id=l40sXE71QPUENEDEwBAV9bf8I3R3wduaDGgsulrxo4c&query=cat"
});

export default customFetch;