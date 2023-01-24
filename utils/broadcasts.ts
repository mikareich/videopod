export interface Broadcast {
  title: string;
  slug: string;
  feedURL: string;
  default?: boolean;
}

const tagesschau: Broadcast = {
  title: "Tagesschau",
  slug: "tagesschau",
  feedURL:
    "https://www.tagesschau.de/export/video-podcast/webxl/tagesschau_https/",
  default: true,
};

const tagesschau100: Broadcast = {
  title: "Tagesschau 100 Sekunden",
  slug: "tagesschau100",
  feedURL:
    "https://www.tagesschau.de/export/video-podcast/webxl/tagesschau-in-100-sekunden_https/",
};

const zdfTivi: Broadcast = {
  title: "ZDFtivi Logo",
  slug: "zdftivi",
  feedURL: "https://www.zdf.de/rss/podcast/video/zdf/kinder/logo",
};

const arte: Broadcast = {
  title: "ARTE Heute Journal",
  slug: "arte",
  feedURL:
    "https://mediathekviewweb.de/feed?query=Aktuelles%20journal%20junior",
};

const broadcasts = [tagesschau, tagesschau100, zdfTivi, arte];

export default broadcasts;
