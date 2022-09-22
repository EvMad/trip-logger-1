const API = {

    async getPreviousTrips() {
        let res;
        try {
            res = await fetch("api/trips");
        } catch (err) {
            console.log(err);
        }

        const json = await res.json();

        // return json[json.length];

        return json;

    }, addTrip(data) {
        const id = location.search.split("=")[1];

        const res = await fetch("api/trips/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const json = await res.json();

        return json;

    },

};

module.exports = API;
