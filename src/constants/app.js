import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ChatIcon,
} from "@heroicons/react/outline";

export const APP = {
  NAME: "Mediator",
  TITLE: "Mediator Hüquq",
  DESCRIPTION:
    "Mediator Hüquq Bakıda yerləşən və bütün növ hüquqi xidmətlər göstərən Azərbaycan hüquq və konsaltinq şirkətidir.",
  DOMAIN: "https://mediator-huquq.az",
  CONTACT: {
    PHONE: {
      title: "Telefon",
      icon: PhoneIcon,
      data: [
        {
          value: "(012) 511 32 85",
          url: "tel:+994125113285",
        },
      ],
    },
    WHATSAPP: {
      title: "WhatsApp",
      icon: ChatIcon,
      data: [
        {
          value: "+994 50 836 01 01",
          url: "https://wa.me/994508360101",
        },
      ],
    },
    EMAIL: {
      title: "Email",
      icon: MailIcon,
      data: [
        {
          value: "info@mediator-huquq.az",
          url: "mailto:info@mediator-huquq.az",
        },
      ],
    },
    LOCATION: {
      title: "Ünvan",
      icon: LocationMarkerIcon,
      data: [
        {
          value: "Nərimanov Həsənoğlu 2",
          url: "https://www.google.com/maps/place/4a+Hasanoghlu,+Baku,+Azerbaijan/@40.3967393,49.8705186,19.67z/data=!4m5!3m4!1s0x40307d476296de8d:0x72b47ecb68a695f6!8m2!3d40.3967619!4d49.870446?hl=en",
        },
      ],
    },
  },
  SOCIAL: [
    {
      title: "facebook",
      url: "https://www.facebook.com/mediator.huquq",
      icon: "fab fa-facebook-f",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/mediator__huquq.az/",
      icon: "fab fa-instagram",
    },
  ],
  MAP_LOCATION: {
    CENTER: [40.396933, 49.870225],
    MARKER: [40.39696, 49.87043],
  },
  DEVELOPER: {
    TITLE: "Devob Creative",
    URL: "https://devob.az",
  },
};
