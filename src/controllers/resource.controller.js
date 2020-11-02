const resourceService = require('../services/resource.service');

exports.function = (req, res) => {
    // return res.status(404).send(response);
    response = {
        message: 'OK'
    };
    res.send(response);
}

// exports.sendToAllSatellites = (req, res) => {
//     if (resourceService.validateBody(req.body, 'topsecret')) {
//         return res.status(404).send(resourceService.validateBody(req.body));
//     } else {
//         const satellitesArray = req.body['satellites'];

//         for (let i = 0; i < satellitesArray.length; i++) {
//             satellitesObj = satellitesArray[i];
//             if (satellitesObj['name'] == 'kenobi') {
//                 satellitesData.kenobiDistance = satellitesObj['distance'];
//                 satellitesData.kenobiMessage = satellitesObj['message'];
//             } else if (satellitesObj['name'] == 'skywalker') {
//                 satellitesData.skywalkerDistance = satellitesObj['distance'];
//                 satellitesData.skywalkerMessage = satellitesObj['message'];
//             } else {
//                 satellitesData.satoDistance = satellitesObj['distance'];
//                 satellitesData.satoMessage = satellitesObj['message'];
//             }
//         }

//         message = resourceService.getMessage(satellitesData.kenobiMessage, satellitesData.skywalkerMessage, satellitesData.satoMessage)
//         position = resourceService.getLocation(satellitesData.kenobiDistance, satellitesData.skywalkerDistance, satellitesData.satoDistance);

//         if (resourceService.validDistances(position.x, position.y, satellitesData.kenobiDistance, satellitesData.skywalkerDistance, satellitesData.satoDistance)) {
//             position.x = +(position.x.toFixed(1));
//             position.y = +(position.y.toFixed(1));
//             response = {
//                 position: position,
//                 message: message
//             };
//             return res.send(response);
//         } else {
//             response = {
//                 Error: 'Invalid satellites distances.'
//             }
//             return res.status(404).send(response);
//         }
//     }
// }

// exports.sendToSingleSatellite = (req, res) => {
//     if (resourceService.validateBody(req.body, 'topsecret_split', req.params.name)) {
//         res.status(404).send(RequestService.validateBody(req.body));
//     } else {
//         switch (req.params.name) {
//             case 'kenobi':
//                 satellitesData.kenobiDistance = req.body.distance;
//                 satellitesData.kenobiMessage = req.body.message;
//                 break;
//             case 'skywalker':
//                 satellitesData.skywalkerDistance = req.body.distance;
//                 satellitesData.skywalkerMessage = req.body.message;
//                 break;
//             case 'sato':
//                 satellitesData.satoDistance = req.body.distance;
//                 satellitesData.satoMessage = req.body.message;
//                 break;
//         }
//         response = {
//             message: `Message successfully received on satellite ${req.params.name}.`
//         }
//         res.send(response);
//     }
// }

// exports.getShipInformation = (req, res) => {
//     if (satellitesData.kenobiDistance &&
//         satellitesData.skywalkerDistance &&
//         satellitesData.satoDistance &&
//         satellitesData.kenobiMessage &&
//         satellitesData.skywalkerMessage &&
//         satellitesData.satoMessage) {
//         message = resourceService.getMessage(satellitesData.kenobiMessage, satellitesData.skywalkerMessage, satellitesData.satoMessage)
//         position = resourceService.getLocation(satellitesData.kenobiDistance, satellitesData.skywalkerDistance, satellitesData.satoDistance);
//         if (resourceService.validDistances(position.x, position.y, satellitesData.kenobiDistance, satellitesData.skywalkerDistance, satellitesData.satoDistance)) {
//             position.x = +(position.x.toFixed(1));
//             position.y = +(position.y.toFixed(1));
//             response = {
//                 position: position,
//                 message: message
//             };
//             return res.send(response);
//         } else {
//             response = {
//                 Error: 'Invalid satellites distances.'
//             }
//             return res.status(404).send(response);
//         }
//     } else {
//         response = {
//             Error: `There's not enough information to retrieve the ship's location and message.`
//         }
//         res.status(404).send(response);
//     }
// }

// exports.flushShipData = (req, res) => {
//     satellitesData.kenobiDistance = undefined;
//     satellitesData.skywalkerDistance = undefined;
//     satellitesData.satoDistance = undefined;
//     satellitesData.kenobiMessage = undefined;
//     satellitesData.skywalkerMessage = undefined;
//     satellitesData.satoMessage = undefined;
//     response = {
//         message: 'Satellites information cleared!'
//     }
//     res.send(response);
// }