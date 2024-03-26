// // const Booking = require('../models/book')

// // const createBooking = async (req, res) => {
// //     const { name, email, campus, phoneNo, image } = req.body;
// //     console.log(req.body);
// //     try {
// //         const booking = new Booking({
// //             name: name,
// //             email: email,
// //             campus: campus,
// //             phoneNo: phoneNo,
// //             image: image
// //         })
// //         await booking.save();
// //         console.log('Booking created successfully');
// //         return res.json({ message: 'Booking created successfully' });
// //     }
// //     catch (err) {
// //         console.log(err)
// //         return res.json({ message: 'Booking creation failed' });
// //     }
// // };

// // module.exports = createBooking;




// const Booking = require('../models/book')

// const createBooking = async (req, res) => {
//     const { name, email, campus, phoneNo, image } = req.body;
//     console.log(req.body);
//     try {
//         const booking = new Booking({
//             name: name,
//             email: email,
//             campus: campus,
//             phoneNo: phoneNo,
//             image: image
//         })
//         await booking.save();
//         console.log('Booking created successfully');
//         return res.json({ message: 'Booking created successfully' });
//     }
//     catch (err) {
//         console.log(err)
//         return res.json({ message: 'Booking creation failed' });
//     }
// };

// module.exports = createBooking;











// const Booking = require('../models/book')

// const createBooking = async (req, res) => {
//     const { name, email, campus, phoneNo, image } = req.body;
//     console.log(req.body);
//     try {
//         const booking = new Booking({
//             name: name,
//             email: email,
//             campus: campus,
//             phoneNo: phoneNo,
//             image: image
//         })
//         await booking.save();
//         console.log('Booking created successfully');
//         return res.json({ message: 'Booking created successfully' });
//     }
//     catch (err) {
//         console.log(err)
//         return res.json({ message: 'Booking creation failed' });
//     }
// };

// module.exports = createBooking;









const Booking = require('../models/book')

const createBooking = async (req, res) => {
    const { name, email, campus, phoneNo, image } = req.body;
    console.log(req.body);
    try {
        const booking = new Booking({
            name: name,
            email: email,
            campus: campus,
            phoneNo: phoneNo,
            image: image
        })
        await booking.save();
        console.log('Booking created successfully');
        return res.json({ message: 'Booking created successfully' });
    }
    catch (err) {
        console.log(err)
        return res.json({ message: 'Booking creation failed' });
    }
};

module.exports = createBooking;