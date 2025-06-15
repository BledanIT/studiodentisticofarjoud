export interface LocationInfo {
    ID: number,
    center: google.maps.LatLngLiteral,
    markers: google.maps.LatLngLiteral[],
    streetView: string,
    title: string,
    address: string,
    civicNumber: number,
    CAP: number,
    city: string,
    province: string,
    description: string,
}

export const locations : LocationInfo[] = [
  {
    ID: 0,
    center: { lat: 45.07215247567931, lng: 7.69305637331224 },
    markers: [{ lat: 45.07215247567931, lng: 7.69305637331224 }],
    streetView: "https://www.google.com/maps/embed?pb=!4v1742748152142!6m8!1m7!1sHnkzyJYROsF-MmrA4yEGLg!2m2!1d45.07167376540061!2d7.692937889865739!3f28.696787!4f0!5f0.7820865974627469",
    title: "Corso San Maurizio 25, 10100, Torino (TO)",
    address: "Corso San Maurizio",
    civicNumber: 25,
    CAP: 10100,
    city: "Torino",
    province: "(TO)",
    description: "Sto cazzo di studio è il primo di una lunga serie, sede storica in centro molto figa e chic aperta da 30 anni. Mica noccioline, stronzi!"
  },
  {
    ID: 1,
    center: { lat: 45.039581693141564, lng: 7.640257279105691 },
    markers: [{ lat: 45.039581693141564, lng: 7.640257279105691 }],
    streetView: "https://www.google.com/maps/embed?pb=!4v1742921149157!6m8!1m7!1sR8bjw1SOepAPvpYCSlGHew!2m2!1d45.03947545501082!2d7.640192516124556!3f19.167465!4f0!5f0.7820865974627469",
    title: "Via San Marino 88, 10137, Torino (TO)",
    address: "Via San Marino",
    civicNumber: 88,
    CAP: 10137,
    city: "Torino",
    province: "(TO)",
    description: "Topo Gigio"
  },
  {
    ID: 2,
    center: { lat: 45.04387787839143, lng: 7.676589641895979 },
    markers: [{ lat: 45.04387787839143, lng: 7.676589641895979 }],
    streetView: "https://www.google.com/maps/embed?pb=!4v1743941474561!6m8!1m7!1s2apVgV23RVETffG80V1xtA!2m2!1d45.04392517116948!2d7.676626978023983!3f226.82193140148985!4f-7.55215820161844!5f0.7820865974627469",
    title: "Via Canova 40, 10126, Torino (TO)",
    address: "Via Canova",
    civicNumber: 40,
    CAP: 10126,
    city: "Torino",
    province: "(TO)",
    description: "Topo Gigione"
  },
  {
    ID: 3,
    center: { lat: 45.19234032290142, lng: 8.105008649265477 },
    markers: [{ lat: 45.19234032290142, lng: 8.105008649265477 }],
    streetView: "https://www.google.com/maps/embed?pb=!4v1743941661852!6m8!1m7!1sr40gP44Lkd5WaSH9EuaUsg!2m2!1d45.19235913652894!2d8.105033193522953!3f218.5899319353395!4f-1.6546013314793413!5f1.0415116395284811",
    title: "Via Tino Dappiano 24, 13044, Crescentino (VC)",
    address: "Via Tino Dappiano",
    civicNumber: 24,
    CAP: 13044,
    city: "Crescentino",
    province: "(VC)",
    description: "Topo Gigietto"
  },
]

