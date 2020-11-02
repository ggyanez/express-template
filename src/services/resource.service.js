// exports.getLocation = (...distances) => {
//     kenobiDistance = distances[0];
//     skywalkerDistance = distances[1];
//     satoDistance = distances[2];
//     const x = ((Math.pow(kenobiDistance, 2)) / 800) - (3 * (Math.pow(skywalkerDistance, 2)) / 1600) + ((Math.pow(satoDistance, 2)) / 1600) - (487.5);
//     const y = ((Math.pow(skywalkerDistance, 2)) / 160) - ((Math.pow(kenobiDistance, 2)) / 400) - (3 * (Math.pow(satoDistance, 2)) / 800) + (1575);
//     return {
//         x: x,
//         y: y
//     }
// }

// exports.validDistances = (x, y, ...distances) => {
//     const permissibleError = 0.2;
//     kenobiDistance = distances[0];
//     skywalkerDistance = distances[1];
//     satoDistance = distances[2];

//     if (kenobiDistance == 0 || skywalkerDistance == 0 || satoDistance == 0) {
//         return false;
//     } else if (Math.abs(((Math.sqrt((Math.pow(x, 2)) + (1000 * x) + (Math.pow(y, 2)) + (400 * y) + 290000)) / kenobiDistance) - 1) > permissibleError) {
//         return false;
//     } else if (Math.abs(((Math.sqrt((Math.pow(x, 2)) - (200 * x) + (Math.pow(y, 2)) + (200 * y) + 20000)) / skywalkerDistance) - 1) > permissibleError) {
//         return false;
//     } else if (Math.abs(((Math.sqrt((Math.pow(x, 2)) - (1000 * x) + (Math.pow(y, 2)) - (200 * y) + 260000)) / satoDistance)-1) > permissibleError) {
//         return false;
//     }
//     return true;
// }

// exports.getMessage = (m1,m2,m3) => {
//     higherLength = Math.max(m1.length,m2.length,m3.length);
//     jointMessages = [];

//     // Merge all arrays into one array
//     for (i = 0; i<higherLength; i++) {
//       if (m1[i] != "" && m1[i]) {
//           jointMessages.push(m1[i]);
//       }
//           if (m2[i] != "" && m2[i]) {
//               jointMessages.push(m2[i]);
//       }
//           if (m3[i] != "" && m3[i]) {
//               jointMessages.push(m3[i]);
//       }
//     }
  
//     // Remove duplicate elements
//     jointMessages = Array.from(new Set([...jointMessages]));
  
//     // Array to string and return
//     return jointMessages.join(' ');
//   }

//   const validateTopSecret = (body) => {
//     if (!body.satellites) {
//         return {
//             Error: `'satellites' field is required.`
//         };
//     }

//     if (body.satellites.length != 3) {
//         return {
//             Error: `3 satellites are required and ${body.satellites.length} were sent.`
//         };
//     }

//     for (let i = 0; i<3; i++) {
//         if (!('distance' in body.satellites[i]) || !('message' in body.satellites[i])) {
//             return {
//                 Error: `Every satellite must contain 'distance' and 'message' fields.`
//             };
//         }
//         if (body.satellites[i].name != 'kenobi' && body.satellites[i].name != 'skywalker' && body.satellites[i].name != 'sato') {
//             return {
//                 Error: `Invalid satellite name (${body.satellites[i].name})`
//             };
//         }
//     } 
//     return undefined;
// }

// const validateTopSecretSplit = (body,name) => {
//     if (!body.distance || !body.message) {
//         return {
//             Error: `'distance' and 'satellite' fields are required.`
//         };
//     }

//     if (name != 'kenobi' && name != 'skywalker' && name != 'sato') {
//         return {
//             Error: `Invalid satellite name (${name})`
//         };
//     }
//     return undefined;
// }

// exports.validateBody = (...params) => {
//     switch (params[1]) {
//         case 'topsecret':
//             return validateTopSecret(params[0]);
//         case 'topsecret_split':
//             return validateTopSecretSplit(params[0],params[2]);
//     }
// }