import client from "./client";

const search = (key) => client.get("/locations?key=" + key);

export default { search };
