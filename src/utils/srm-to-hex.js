const map = [
    { hex: '#FFE699', srm: '1' },
    { hex: '#FFD878', srm: '2' },
    { hex: '#FFCA5A', srm: '3' },
    { hex: '#FFBF42', srm: '4' },
    { hex: '#FBB123', srm: '5' },
    { hex: '#F8A600', srm: '6' },
    { hex: '#F39C00', srm: '7' },
    { hex: '#EA8F00', srm: '8' },
    { hex: '#E58500', srm: '9' },
    { hex: '#DE7C00', srm: '10' },
    { hex: '#D77200', srm: '11' },
    { hex: '#CF6900', srm: '12' },
    { hex: '#CB6200', srm: '13' },
    { hex: '#C35900', srm: '14' },
    { hex: '#BB5100', srm: '15' },
    { hex: '#B54C00', srm: '16' },
    { hex: '#B04500', srm: '17' },
    { hex: '#A63E00', srm: '18' },
    { hex: '#A13700', srm: '19' },
    { hex: '#9B3200', srm: '20' },
    { hex: '#952D00', srm: '21' },
    { hex: '#8E2900', srm: '22' },
    { hex: '#882300', srm: '23' },
    { hex: '#821E00', srm: '24' },
    { hex: '#7B1A00', srm: '25' },
    { hex: '#771900', srm: '26' },
    { hex: '#701400', srm: '27' },
    { hex: '#6A0E00', srm: '28' },
    { hex: '#660D00', srm: '29' },
    { hex: '#5E0B00', srm: '30' },
    { hex: '#5A0A02', srm: '31' },
    { hex: '#600903', srm: '32' },
    { hex: '#520907', srm: '33' },
    { hex: '#4C0505', srm: '34' },
    { hex: '#470606', srm: '35' },
    { hex: '#440607', srm: '36' },
    { hex: '#3F0708', srm: '37' },
    { hex: '#3B0607', srm: '38' },
    { hex: '#3A070B', srm: '39' },
    { hex: '#36080A', srm: '40' },
];

export const convertSrmToRGB = (srm) => {
    const srmToCompare = String(Math.round(Number(srm)));
    const valueOfMap = map.find((item) => String(item.srm) === String(srmToCompare));
    if (valueOfMap) {
        return valueOfMap.hex;
    }
    else {
        return "#fff"
    }
}
