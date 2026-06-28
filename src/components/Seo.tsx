import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageProvider";

const SITE_URL = "https://mvc-ux.dev";
const DEFAULT_IMAGE = `${SITE_URL}/img/mvc.webp`;

interface SeoProps {
  title: string;
  description: string;
  /** Image path ("/img/..") or absolute URL. Defaults to the profile image. */
  image?: string;
  type?: "website" | "article";
}

const absolute = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);

/** Per-page SEO: title, meta, Open Graph, Twitter, canonical and ES/EN hreflang alternates. */
const Seo = ({ title, description, image, type = "website" }: SeoProps) => {
  const { lang } = useLang();
  const { pathname } = useLocation();

  const isEn = lang === "en";
  const esPath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = isEn ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;
  const esUrl = `${SITE_URL}${esPath}`;
  const enUrl = `${SITE_URL}${enPath}`;
  const canonical = isEn ? enUrl : esUrl;
  const ogImage = absolute(image ?? DEFAULT_IMAGE);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={isEn ? "en_US" : "es_ES"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={esUrl} />
    </Helmet>
  );
};

export default Seo;
