export interface precipitationItem {
	color: string;
	text: string;
}

export interface zoneItem {
	color: string;
	text: string;
}

export interface temperatureItem {
	color: string;
	text: string;
}

export interface positionItem {
	characteristicRegions: string;
	position: string;
}

export interface climateItem {
	precipitation: precipitationItem;
	temperature: temperatureItem;
	climate: string;
	termicAmplitude: termicAmplitudeItem;
	wind: string;
}

export interface termicAmplitudeItem {
	color: string;
	text: string;
}

export interface photosItem {
	src: string;
	title?: string;
}

export interface vegetationItem {
	text: string;
	photos: Array<photosItem>;
}

export interface faunaItem {
	text: string;
	photos: Array<photosItem>;
}

export interface soilItem {
	text: string;
	photos: Array<photosItem>;
}

export interface Region {
	zone: zoneItem;
	fauna: faunaItem;
	vegetation: vegetationItem;
	soil: soilItem;
	position: positionItem;
	climate: climateItem;
	title: string;
}

