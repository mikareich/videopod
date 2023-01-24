export interface Broadcast {
  title: string;
  slug: string;
  feedURL: string;
  default?: boolean;
}

export const tagesschau: Broadcast = {
  title: "Tagesschau",
  slug: "tagesschau",
  feedURL:
    "https://www.tagesschau.de/export/video-podcast/webxl/tagesschau_https/",
  default: true,
};

export const zdf: Broadcast = {
  title: "ZDF Logo",
  slug: "zdf",
  feedURL: "https://www.zdf.de/rss/podcast/video/zdf/kinder/logo",
};

export const arte: Broadcast = {
  title: "ARTE Heute Journal",
  slug: "arte",
  feedURL:
    "https://mediathekviewweb.de/feed?query=Aktuelles%20journal%20junior",
};

const broadcasts = [tagesschau, zdf, arte];

export default broadcasts;
