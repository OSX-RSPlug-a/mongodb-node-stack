db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "nest"
            }
        ]
    }
);

db.routes.insertMany([
    {
        _id: '1',
        title: 'Primeiro',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.82594, lng: -47.92923 },
    },
    {
        _id: '2',
        title: 'Segundo',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.82594, lng: -47.92923 },
    },
    {
        _id: '3',
        title: 'Terceiro',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.82594, lng: -47.92923 },
    },
]);

collection == table