"use strict";
// Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат
const markers = [
    [49.8, 24, 'Львів'],
    [49.2, 30.5, 'Київ'],
    [50, 36.2, 'Харків'],
    [46.5, 30.7, 'Одеса'],
];
const getMarkersList = () => {
    const data = prompt('Введіть координати і назву через пробіл (напр. 49.8 25.0 Локація)').split(' ');
    return [[Number(data[0]), Number(data[1]), data[2]]];
};
const getClosestPlace = () => {
    const [fieldMarker] = getMarkersList();
    const [lat, lon] = fieldMarker;
    let closestCity = "";
    let minDistance = Infinity;
    for (const marker of markers) {
        const distance = Math.sqrt((lat - marker[0]) ** 2 + (lon - marker[1]) ** 2);
        if (distance < minDistance) {
            minDistance = distance;
            closestCity = marker[2];
        }
    }
    document.write(`<p>Ваші координати: <span> (${lat}, ${lon}) </span></p> 
    <p>Найближче місто: <span>${closestCity}</span></p>`);
};
getClosestPlace();
