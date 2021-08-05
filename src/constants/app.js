import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

export const APP = {
  NAME: "Mediator",
  TITLE: "Mediator Hüquq",
  DESCRIPTION:
    "Mediator Hüquq Bakıda yerləşən və bütün növ hüquqi xidmətlər göstərən Azərbaycan hüquq və konsaltinq şirkətidir.",
  DOMAIN: "https://mediator-huquq.az",
  CONTACT: {
    PHONE: [
      {
        title: "+994 12 511 32 85",
        icon: PhoneIcon,
        url: "tel:+994125113285",
      },
    ],
    EMAIL: [
      {
        title: "info@mediator-huquq.az",
        icon: MailIcon,
        url: "mail:info@mediator-huquq.az",
      },
    ],
    LOCATION: [
      {
        title: "Nərimanov Həsənoğlu 2",
        icon: LocationMarkerIcon,
        url: "#",
      },
    ],
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
  DEVELOPER: {
    TITLE: "Devob Creative",
    URL: "https://devob.az",
  },
};
