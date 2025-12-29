import { e as createAstro, f as createComponent, l as defineStyleVars, h as addAttribute, k as renderHead, n as renderComponent, r as renderTemplate } from '../chunks/astro/server_A5IbpFaS.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useRef, useState, useEffect, createContext, useMemo, useContext } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ShoppingBag, X, Minus, Plus, Check, User, Phone, MapPin, MessageCircle, ArrowRight, ChevronLeft, ChevronRight, Star, ShoppingCart, ShieldCheck, Truck, Filter, ChevronDown, Info, Mail, ArrowUpRight, Search, Facebook, Send, Linkedin, Twitter, Instagram, AtSign, Share2, Award, Quote, Box, PlayCircle, CheckCircle2, Globe, Shield, BarChart3, Layout, Zap, Menu, Heart, TrendingUp, LifeBuoy, Server, Users, Youtube } from 'lucide-react';
import { createPortal } from 'react-dom';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const BUILDER_API_URL = "http://localhost:4321/api";
const PROJECT_ID = "default";
const CONCEPT_ID = "default";
async function fetchSiteData(conceptIdOverride) {
  const conceptId = conceptIdOverride || CONCEPT_ID;
  const response = await fetch(`${BUILDER_API_URL}/projects/${PROJECT_ID}/concept/${conceptId}/site`);
  if (!response.ok) {
    throw new Error(`Failed to fetch site data: ${response.statusText}`);
  }
  return await response.json();
}
async function fetchPage(slug) {
  let siteData = await fetchSiteData();
  let targetSlug = slug.startsWith("/") ? slug : `/${slug}`;
  if (siteData.mountableConcepts && siteData.mountableConcepts.length > 0) {
    const cleanSlug = targetSlug.replace(/^\//, "");
    const firstSegment = cleanSlug.split("/")[0];
    const matchingConcept = siteData.mountableConcepts.find((c) => c.slug === firstSegment);
    if (matchingConcept) {
      matchingConcept.slug;
      try {
        siteData = await fetchSiteData(`slug:${matchingConcept.slug}`);
      } catch (e) {
        console.error("Failed to fetch concept data, falling back to default", e);
      }
      targetSlug = targetSlug.replace(`/${firstSegment}`, "") || "/";
    }
  }
  const page = siteData.pages.find((p) => {
    const pSlug = p.slug.startsWith("/") ? p.slug : `/${p.slug}`;
    return pSlug === targetSlug || targetSlug === "/" && (p.slug === "home" || p.slug === "");
  });
  return { page, site: siteData };
}

// src/types.ts
var SectionType = /* @__PURE__ */ ((SectionType2) => {
  SectionType2["Navbar1"] = "navbar_1";
  SectionType2["Navbar2"] = "navbar_2";
  SectionType2["Navbar3"] = "navbar_3";
  SectionType2["Navbar4"] = "navbar_4";
  SectionType2["Navbar5"] = "navbar_5";
  SectionType2["Navbar6"] = "navbar_6";
  SectionType2["Navbar7"] = "navbar_7";
  SectionType2["Navbar8"] = "navbar_8";
  SectionType2["Navbar9"] = "navbar_9";
  SectionType2["Header1"] = "header_1";
  SectionType2["Header2"] = "header_2";
  SectionType2["Header9"] = "header_9";
  SectionType2["Header18"] = "header_18";
  SectionType2["Header30"] = "header_30";
  SectionType2["Header46"] = "header_46";
  SectionType2["Feature1"] = "feature_1";
  SectionType2["Feature2"] = "feature_2";
  SectionType2["Feature3"] = "feature_3";
  SectionType2["Feature4"] = "feature_4";
  SectionType2["Feature5"] = "feature_5";
  SectionType2["Feature6"] = "feature_6";
  SectionType2["Feature16"] = "feature_16";
  SectionType2["Feature24"] = "feature_24";
  SectionType2["Testimonial1"] = "testimonial_1";
  SectionType2["Testimonial2"] = "testimonial_2";
  SectionType2["Testimonial3"] = "testimonial_3";
  SectionType2["Testimonial4"] = "testimonial_4";
  SectionType2["Testimonial5"] = "testimonial_5";
  SectionType2["Testimonial6"] = "testimonial_6";
  SectionType2["Testimonial7"] = "testimonial_7";
  SectionType2["CTA1"] = "cta_1";
  SectionType2["CTA2"] = "cta_2";
  SectionType2["CTA3"] = "cta_3";
  SectionType2["CTA4"] = "cta_4";
  SectionType2["Logos1"] = "logos_1";
  SectionType2["Logos2"] = "logos_2";
  SectionType2["FAQ1"] = "faq_1";
  SectionType2["FAQ2"] = "faq_2";
  SectionType2["FAQ3"] = "faq_3";
  SectionType2["FAQ4"] = "faq_4";
  SectionType2["FAQ5"] = "faq_5";
  SectionType2["FAQ6"] = "faq_6";
  SectionType2["FAQ7"] = "faq_7";
  SectionType2["FAQ8"] = "faq_8";
  SectionType2["FAQ9"] = "faq_9";
  SectionType2["FAQ10"] = "faq_10";
  SectionType2["FAQ11"] = "faq_11";
  SectionType2["Pricing1"] = "pricing_1";
  SectionType2["Pricing2"] = "pricing_2";
  SectionType2["Pricing3"] = "pricing_3";
  SectionType2["Pricing4"] = "pricing_4";
  SectionType2["Pricing5"] = "pricing_5";
  SectionType2["Pricing6"] = "pricing_6";
  SectionType2["Contact1"] = "contact_1";
  SectionType2["SocialContact1"] = "social_contact_1";
  SectionType2["SocialContact2"] = "social_contact_2";
  SectionType2["SocialContact3"] = "social_contact_3";
  SectionType2["SocialContact4"] = "social_contact_4";
  SectionType2["SocialContact5"] = "social_contact_5";
  SectionType2["SocialContact6"] = "social_contact_6";
  SectionType2["Stats1"] = "stats_1";
  SectionType2["Stats2"] = "stats_2";
  SectionType2["Stats3"] = "stats_3";
  SectionType2["Stats4"] = "stats_4";
  SectionType2["Stats5"] = "stats_5";
  SectionType2["Stats6"] = "stats_6";
  SectionType2["SocialProof2"] = "social_proof_2";
  SectionType2["SocialProof3"] = "social_proof_3";
  SectionType2["SocialProof4"] = "social_proof_4";
  SectionType2["SocialProof5"] = "social_proof_5";
  SectionType2["SocialProof6"] = "social_proof_6";
  SectionType2["Blog1"] = "blog_1";
  SectionType2["Blog2"] = "blog_2";
  SectionType2["Blog3"] = "blog_3";
  SectionType2["Blog4"] = "blog_4";
  SectionType2["Blog5"] = "blog_5";
  SectionType2["Blog6"] = "blog_6";
  SectionType2["Blog7"] = "blog_7";
  SectionType2["Blog8"] = "blog_8";
  SectionType2["Blog9"] = "blog_9";
  SectionType2["Blog10"] = "blog_10";
  SectionType2["Blog11"] = "blog_11";
  SectionType2["Gallery1"] = "gallery_1";
  SectionType2["Gallery2"] = "gallery_2";
  SectionType2["Gallery3"] = "gallery_3";
  SectionType2["Gallery4"] = "gallery_4";
  SectionType2["Gallery5"] = "gallery_5";
  SectionType2["Gallery6"] = "gallery_6";
  SectionType2["Gallery7"] = "gallery_7";
  SectionType2["Gallery8"] = "gallery_8";
  SectionType2["Gallery9"] = "gallery_9";
  SectionType2["Gallery10"] = "gallery_10";
  SectionType2["Gallery11"] = "gallery_11";
  SectionType2["Gallery12"] = "gallery_12";
  SectionType2["Gallery15"] = "gallery_15";
  SectionType2["Gallery18"] = "gallery_18";
  SectionType2["Portfolio1"] = "portfolio_1";
  SectionType2["Portfolio2"] = "portfolio_2";
  SectionType2["Portfolio3"] = "portfolio_3";
  SectionType2["Portfolio4"] = "portfolio_4";
  SectionType2["Portfolio5"] = "portfolio_5";
  SectionType2["Footer1"] = "footer_1";
  SectionType2["Footer2"] = "footer_2";
  SectionType2["Footer3"] = "footer_3";
  SectionType2["Footer4"] = "footer_4";
  SectionType2["ProductGrid1"] = "product_grid_1";
  SectionType2["ProductGrid2"] = "product_grid_2";
  SectionType2["ProductList1"] = "product_list_1";
  SectionType2["CategoryGrid1"] = "category_grid_1";
  SectionType2["ProductHero1"] = "product_hero_1";
  SectionType2["ProductHero2"] = "product_hero_2";
  SectionType2["ProductFeature1"] = "product_feature_1";
  SectionType2["ProductCarousel1"] = "product_carousel_1";
  SectionType2["CategoryShowcase1"] = "category_showcase_1";
  SectionType2["CategoryHero1"] = "category_hero_1";
  SectionType2["CategoryHero2"] = "category_hero_2";
  SectionType2["ProductBundle1"] = "product_bundle_1";
  SectionType2["Checkout1"] = "checkout_1";
  SectionType2["LayoutContent"] = "layout_content";
  SectionType2["Alert1"] = "alert_1";
  SectionType2["Alert2"] = "alert_2";
  SectionType2["Alert3"] = "alert_3";
  SectionType2["Alert4"] = "alert_4";
  SectionType2["Alert5"] = "alert_5";
  SectionType2["NoticeBar1"] = "notice_bar_1";
  SectionType2["NoticeBar2"] = "notice_bar_2";
  SectionType2["NoticeBar3"] = "notice_bar_3";
  return SectionType2;
})(SectionType || {});

// src/index.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var iconMap = {
  "shopping-cart": ShoppingCart,
  "user": User,
  "search": Search,
  "heart": Heart,
  "cart": ShoppingCart
  // Alias
};
var Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  badgeText,
  icon,
  ...props
}) => {
  const baseStyles = "";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
    "link-chevron": "btn-link hover:underline h-auto border-none gap-2",
    "link-badge": "btn-link hover:underline h-auto border-none gap-2",
    "icon-badge": "relative p-2 hover:bg-secondary/50 rounded-full border border-border/50 text-foreground"
  };
  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
    icon: "h-10 w-10"
  };
  const isLink = variant === "link" || variant === "link-chevron" || variant === "link-badge";
  const isIcon = variant === "icon-badge";
  const sizeClasses = isLink ? "" : isIcon ? "h-10 w-10" : sizes[size];
  const combinedClasses = cn(baseStyles, "btn", variants[variant], sizeClasses, className);
  const IconComponent = icon ? iconMap[icon] : null;
  const content = isIcon ? /* @__PURE__ */ jsxs(Fragment, { children: [
    IconComponent ? /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }),
    " ",
    badgeText && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground border border-background", children: badgeText }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    badgeText && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20", children: badgeText }),
    variant === "link-chevron" && /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx("a", { href, className: combinedClasses, "aria-label": isIcon ? children : void 0, children: content });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: combinedClasses,
      "aria-label": isIcon ? children : void 0,
      ...props,
      children: content
    }
  );
};

// ../../node_modules/@material/material-color-utilities/utils/math_utils.js
function signum(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return 1;
  }
}
function lerp(start, stop, amount) {
  return (1 - amount) * start + amount * stop;
}
function clampInt(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function clampDouble(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  }
  return input;
}
function sanitizeDegreesDouble(degrees) {
  degrees = degrees % 360;
  if (degrees < 0) {
    degrees = degrees + 360;
  }
  return degrees;
}
function rotationDirection(from, to) {
  const increasingDifference = sanitizeDegreesDouble(to - from);
  return increasingDifference <= 180 ? 1 : -1;
}
function differenceDegrees(a, b) {
  return 180 - Math.abs(Math.abs(a - b) - 180);
}
function matrixMultiply(row, matrix) {
  const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
  const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
  const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
  return [a, b, c];
}

// ../../node_modules/@material/material-color-utilities/utils/color_utils.js
var SRGB_TO_XYZ = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
];
var XYZ_TO_SRGB = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
];
var WHITE_POINT_D65 = [95.047, 100, 108.883];
function argbFromRgb(red, green, blue) {
  return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
}
function argbFromLinrgb(linrgb) {
  const r = delinearized(linrgb[0]);
  const g = delinearized(linrgb[1]);
  const b = delinearized(linrgb[2]);
  return argbFromRgb(r, g, b);
}
function redFromArgb(argb) {
  return argb >> 16 & 255;
}
function greenFromArgb(argb) {
  return argb >> 8 & 255;
}
function blueFromArgb(argb) {
  return argb & 255;
}
function argbFromXyz(x, y, z) {
  const matrix = XYZ_TO_SRGB;
  const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
  const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
  const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
  const r = delinearized(linearR);
  const g = delinearized(linearG);
  const b = delinearized(linearB);
  return argbFromRgb(r, g, b);
}
function xyzFromArgb(argb) {
  const r = linearized(redFromArgb(argb));
  const g = linearized(greenFromArgb(argb));
  const b = linearized(blueFromArgb(argb));
  return matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
function argbFromLstar(lstar) {
  const y = yFromLstar(lstar);
  const component = delinearized(y);
  return argbFromRgb(component, component, component);
}
function lstarFromArgb(argb) {
  const y = xyzFromArgb(argb)[1];
  return 116 * labF(y / 100) - 16;
}
function yFromLstar(lstar) {
  return 100 * labInvf((lstar + 16) / 116);
}
function lstarFromY(y) {
  return labF(y / 100) * 116 - 16;
}
function linearized(rgbComponent) {
  const normalized = rgbComponent / 255;
  if (normalized <= 0.040449936) {
    return normalized / 12.92 * 100;
  } else {
    return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100;
  }
}
function delinearized(rgbComponent) {
  const normalized = rgbComponent / 100;
  let delinearized2 = 0;
  if (normalized <= 31308e-7) {
    delinearized2 = normalized * 12.92;
  } else {
    delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
  }
  return clampInt(0, 255, Math.round(delinearized2 * 255));
}
function whitePointD65() {
  return WHITE_POINT_D65;
}
function labF(t) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  if (t > e) {
    return Math.pow(t, 1 / 3);
  } else {
    return (kappa * t + 16) / 116;
  }
}
function labInvf(ft) {
  const e = 216 / 24389;
  const kappa = 24389 / 27;
  const ft3 = ft * ft * ft;
  if (ft3 > e) {
    return ft3;
  } else {
    return (116 * ft - 16) / kappa;
  }
}

// ../../node_modules/@material/material-color-utilities/hct/viewing_conditions.js
var ViewingConditions = class _ViewingConditions {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
    const xyz = whitePoint;
    const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
    const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
    const bW = xyz[0] * -2079e-6 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
    const f = 0.8 + surround / 10;
    const c = f >= 0.9 ? lerp(0.59, 0.69, (f - 0.9) * 10) : lerp(0.525, 0.59, (f - 0.8) * 10);
    let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d = d > 1 ? 1 : d < 0 ? 0 : d;
    const nc = f;
    const rgbD = [
      d * (100 / rW) + 1 - d,
      d * (100 / gW) + 1 - d,
      d * (100 / bW) + 1 - d
    ];
    const k = 1 / (5 * adaptingLuminance + 1);
    const k4 = k * k * k * k;
    const k4F = 1 - k4;
    const fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
    const n = yFromLstar(backgroundLstar) / whitePoint[1];
    const z = 1.48 + Math.sqrt(n);
    const nbb = 0.725 / Math.pow(n, 0.2);
    const ncb = nbb;
    const rgbAFactors = [
      Math.pow(fl * rgbD[0] * rW / 100, 0.42),
      Math.pow(fl * rgbD[1] * gW / 100, 0.42),
      Math.pow(fl * rgbD[2] * bW / 100, 0.42)
    ];
    const rgbA = [
      400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
      400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
      400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
    ];
    const aw = (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
    return new _ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
    this.n = n;
    this.aw = aw;
    this.nbb = nbb;
    this.ncb = ncb;
    this.c = c;
    this.nc = nc;
    this.rgbD = rgbD;
    this.fl = fl;
    this.fLRoot = fLRoot;
    this.z = z;
  }
};
ViewingConditions.DEFAULT = ViewingConditions.make();

// ../../node_modules/@material/material-color-utilities/hct/cam16.js
var Cam16 = class _Cam16 {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
    this.hue = hue;
    this.chroma = chroma;
    this.j = j;
    this.q = q;
    this.m = m;
    this.s = s;
    this.jstar = jstar;
    this.astar = astar;
    this.bstar = bstar;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(other) {
    const dJ = this.jstar - other.jstar;
    const dA = this.astar - other.astar;
    const dB = this.bstar - other.bstar;
    const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
    const dE = 1.41 * Math.pow(dEPrime, 0.63);
    return dE;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(argb) {
    return _Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(argb, viewingConditions) {
    const red = (argb & 16711680) >> 16;
    const green = (argb & 65280) >> 8;
    const blue = argb & 255;
    const redL = linearized(red);
    const greenL = linearized(green);
    const blueL = linearized(blue);
    const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
    const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
    const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
    const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    const u = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p2 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b, a);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p2 * viewingConditions.nbb;
    const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 0.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
    const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const c = alpha * Math.sqrt(j / 100);
    const m = c * viewingConditions.fLRoot;
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(j, c, h) {
    return _Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(j, c, h, viewingConditions) {
    const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const m = c * viewingConditions.fLRoot;
    const alpha = c / Math.sqrt(j / 100);
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const hueRadians = h * Math.PI / 180;
    const jstar = (1 + 100 * 7e-3) * j / (1 + 7e-3 * j);
    const mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * m);
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(h, c, j, q, m, s, jstar, astar, bstar);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(jstar, astar, bstar) {
    return _Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
    const a = astar;
    const b = bstar;
    const m = Math.sqrt(a * a + b * b);
    const M = (Math.exp(m * 0.0228) - 1) / 0.0228;
    const c = M / viewingConditions.fLRoot;
    let h = Math.atan2(b, a) * (180 / Math.PI);
    if (h < 0) {
      h += 360;
    }
    const j = jstar / (1 - (jstar - 100) * 7e-3);
    return _Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(ViewingConditions.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p2 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
    const a = gamma * hCos;
    const b = gamma * hSin;
    const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
    const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
    const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    const argb = argbFromXyz(x, y, z);
    return argb;
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(x, y, z, viewingConditions) {
    const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
    const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
    const bC = -2079e-6 * x + 0.048952 * y + 0.953127 * z;
    const rD = viewingConditions.rgbD[0] * rC;
    const gD = viewingConditions.rgbD[1] * gC;
    const bD = viewingConditions.rgbD[2] * bC;
    const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, 0.42);
    const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, 0.42);
    const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, 0.42);
    const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
    const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
    const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    const u = (20 * rA + 20 * gA + 21 * bA) / 20;
    const p2 = (40 * rA + 20 * gA + bA) / 20;
    const atan2 = Math.atan2(b, a);
    const atanDegrees = atan2 * 180 / Math.PI;
    const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
    const hueRadians = hue * Math.PI / 180;
    const ac = p2 * viewingConditions.nbb;
    const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
    const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
    const huePrime = hue < 20.14 ? hue + 360 : hue;
    const eHue = 1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8);
    const p1 = 5e4 / 13 * eHue * viewingConditions.nc * viewingConditions.ncb;
    const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
    const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const C = alpha * Math.sqrt(J / 100);
    const M = C * viewingConditions.fLRoot;
    const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
    const jstar = (1 + 100 * 7e-3) * J / (1 + 7e-3 * J);
    const mstar = Math.log(1 + 0.0228 * M) / 0.0228;
    const astar = mstar * Math.cos(hueRadians);
    const bstar = mstar * Math.sin(hueRadians);
    return new _Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(viewingConditions) {
    const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
    const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1 / 0.9);
    const hRad = this.hue * Math.PI / 180;
    const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
    const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const p2 = ac / viewingConditions.nbb;
    const hSin = Math.sin(hRad);
    const hCos = Math.cos(hRad);
    const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
    const a = gamma * hCos;
    const b = gamma * hSin;
    const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
    const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
    const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
    const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
    const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / 0.42);
    const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
    const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / 0.42);
    const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
    const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / 0.42);
    const rF = rC / viewingConditions.rgbD[0];
    const gF = gC / viewingConditions.rgbD[1];
    const bF = bC / viewingConditions.rgbD[2];
    const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
    const y = 0.38752654 * rF + 0.62144744 * gF - 897398e-8 * bF;
    const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
    return [x, y, z];
  }
};

// ../../node_modules/@material/material-color-utilities/hct/hct_solver.js
var HctSolver = class _HctSolver {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(angle) {
    return (angle + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(rgbComponent) {
    const normalized = rgbComponent / 100;
    let delinearized2 = 0;
    if (normalized <= 31308e-7) {
      delinearized2 = normalized * 12.92;
    } else {
      delinearized2 = 1.055 * Math.pow(normalized, 1 / 2.4) - 0.055;
    }
    return delinearized2 * 255;
  }
  static chromaticAdaptation(component) {
    const af = Math.pow(Math.abs(component), 0.42);
    return signum(component) * 400 * af / (af + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(linrgb) {
    const scaledDiscount = matrixMultiply(linrgb, _HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
    const rA = _HctSolver.chromaticAdaptation(scaledDiscount[0]);
    const gA = _HctSolver.chromaticAdaptation(scaledDiscount[1]);
    const bA = _HctSolver.chromaticAdaptation(scaledDiscount[2]);
    const a = (11 * rA + -12 * gA + bA) / 11;
    const b = (rA + gA - 2 * bA) / 9;
    return Math.atan2(b, a);
  }
  static areInCyclicOrder(a, b, c) {
    const deltaAB = _HctSolver.sanitizeRadians(b - a);
    const deltaAC = _HctSolver.sanitizeRadians(c - a);
    return deltaAB < deltaAC;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(source, mid, target) {
    return (mid - source) / (target - source);
  }
  static lerpPoint(source, t, target) {
    return [
      source[0] + (target[0] - source[0]) * t,
      source[1] + (target[1] - source[1]) * t,
      source[2] + (target[2] - source[2]) * t
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(source, coordinate, target, axis) {
    const t = _HctSolver.intercept(source[axis], coordinate, target[axis]);
    return _HctSolver.lerpPoint(source, t, target);
  }
  static isBounded(x) {
    return 0 <= x && x <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(y, n) {
    const kR = _HctSolver.Y_FROM_LINRGB[0];
    const kG = _HctSolver.Y_FROM_LINRGB[1];
    const kB = _HctSolver.Y_FROM_LINRGB[2];
    const coordA = n % 4 <= 1 ? 0 : 100;
    const coordB = n % 2 === 0 ? 0 : 100;
    if (n < 4) {
      const g = coordA;
      const b = coordB;
      const r = (y - g * kG - b * kB) / kR;
      if (_HctSolver.isBounded(r)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    } else if (n < 8) {
      const b = coordA;
      const r = coordB;
      const g = (y - r * kR - b * kB) / kG;
      if (_HctSolver.isBounded(g)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    } else {
      const r = coordA;
      const g = coordB;
      const b = (y - r * kR - g * kG) / kB;
      if (_HctSolver.isBounded(b)) {
        return [r, g, b];
      } else {
        return [-1, -1, -1];
      }
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(y, targetHue) {
    let left = [-1, -1, -1];
    let right = left;
    let leftHue = 0;
    let rightHue = 0;
    let initialized = false;
    let uncut = true;
    for (let n = 0; n < 12; n++) {
      const mid = _HctSolver.nthVertex(y, n);
      if (mid[0] < 0) {
        continue;
      }
      const midHue = _HctSolver.hueOf(mid);
      if (!initialized) {
        left = mid;
        right = mid;
        leftHue = midHue;
        rightHue = midHue;
        initialized = true;
        continue;
      }
      if (uncut || _HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
        uncut = false;
        if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
          right = mid;
          rightHue = midHue;
        } else {
          left = mid;
          leftHue = midHue;
        }
      }
    }
    return [left, right];
  }
  static midpoint(a, b) {
    return [
      (a[0] + b[0]) / 2,
      (a[1] + b[1]) / 2,
      (a[2] + b[2]) / 2
    ];
  }
  static criticalPlaneBelow(x) {
    return Math.floor(x - 0.5);
  }
  static criticalPlaneAbove(x) {
    return Math.ceil(x - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(y, targetHue) {
    const segment = _HctSolver.bisectToSegment(y, targetHue);
    let left = segment[0];
    let leftHue = _HctSolver.hueOf(left);
    let right = segment[1];
    for (let axis = 0; axis < 3; axis++) {
      if (left[axis] !== right[axis]) {
        let lPlane = -1;
        let rPlane = 255;
        if (left[axis] < right[axis]) {
          lPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(right[axis]));
        } else {
          lPlane = _HctSolver.criticalPlaneAbove(_HctSolver.trueDelinearized(left[axis]));
          rPlane = _HctSolver.criticalPlaneBelow(_HctSolver.trueDelinearized(right[axis]));
        }
        for (let i = 0; i < 8; i++) {
          if (Math.abs(rPlane - lPlane) <= 1) {
            break;
          } else {
            const mPlane = Math.floor((lPlane + rPlane) / 2);
            const midPlaneCoordinate = _HctSolver.CRITICAL_PLANES[mPlane];
            const mid = _HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
            const midHue = _HctSolver.hueOf(mid);
            if (_HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
              right = mid;
              rPlane = mPlane;
            } else {
              left = mid;
              leftHue = midHue;
              lPlane = mPlane;
            }
          }
        }
      }
    }
    return _HctSolver.midpoint(left, right);
  }
  static inverseChromaticAdaptation(adapted) {
    const adaptedAbs = Math.abs(adapted);
    const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
    return signum(adapted) * Math.pow(base, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(hueRadians, chroma, y) {
    let j = Math.sqrt(y) * 11;
    const viewingConditions = ViewingConditions.DEFAULT;
    const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
    const eHue = 0.25 * (Math.cos(hueRadians + 2) + 3.8);
    const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
    const hSin = Math.sin(hueRadians);
    const hCos = Math.cos(hueRadians);
    for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
      const jNormalized = j / 100;
      const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
      const t = Math.pow(alpha * tInnerCoeff, 1 / 0.9);
      const ac = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z);
      const p2 = ac / viewingConditions.nbb;
      const gamma = 23 * (p2 + 0.305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
      const a = gamma * hCos;
      const b = gamma * hSin;
      const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
      const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
      const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
      const rCScaled = _HctSolver.inverseChromaticAdaptation(rA);
      const gCScaled = _HctSolver.inverseChromaticAdaptation(gA);
      const bCScaled = _HctSolver.inverseChromaticAdaptation(bA);
      const linrgb = matrixMultiply([rCScaled, gCScaled, bCScaled], _HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
      if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
        return 0;
      }
      const kR = _HctSolver.Y_FROM_LINRGB[0];
      const kG = _HctSolver.Y_FROM_LINRGB[1];
      const kB = _HctSolver.Y_FROM_LINRGB[2];
      const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
      if (fnj <= 0) {
        return 0;
      }
      if (iterationRound === 4 || Math.abs(fnj - y) < 2e-3) {
        if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
          return 0;
        }
        return argbFromLinrgb(linrgb);
      }
      j = j - (fnj - y) * j / (2 * fnj);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(hueDegrees, chroma, lstar) {
    if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) {
      return argbFromLstar(lstar);
    }
    hueDegrees = sanitizeDegreesDouble(hueDegrees);
    const hueRadians = hueDegrees / 180 * Math.PI;
    const y = yFromLstar(lstar);
    const exactAnswer = _HctSolver.findResultByJ(hueRadians, chroma, y);
    if (exactAnswer !== 0) {
      return exactAnswer;
    }
    const linrgb = _HctSolver.bisectToLimit(y, hueRadians);
    return argbFromLinrgb(linrgb);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(hueDegrees, chroma, lstar) {
    return Cam16.fromInt(_HctSolver.solveToInt(hueDegrees, chroma, lstar));
  }
};
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];

// ../../node_modules/@material/material-color-utilities/hct/hct.js
var Hct = class _Hct {
  static from(hue, chroma, tone) {
    return new _Hct(HctSolver.solveToInt(hue, chroma, tone));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(argb) {
    return new _Hct(argb);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(newHue) {
    this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(newChroma) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(newTone) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
  }
  constructor(argb) {
    this.argb = argb;
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb);
    this.argb = argb;
  }
  setInternalState(argb) {
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = lstarFromArgb(argb);
    this.argb = argb;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(vc) {
    const cam = Cam16.fromInt(this.toInt());
    const viewedInVc = cam.xyzInViewingConditions(vc);
    const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
    const recastHct = _Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
    return recastHct;
  }
};

// ../../node_modules/@material/material-color-utilities/blend/blend.js
var Blend = class _Blend {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(designColor, sourceColor) {
    const fromHct = Hct.fromInt(designColor);
    const toHct = Hct.fromInt(sourceColor);
    const differenceDegrees2 = differenceDegrees(fromHct.hue, toHct.hue);
    const rotationDegrees = Math.min(differenceDegrees2 * 0.5, 15);
    const outputHue = sanitizeDegreesDouble(fromHct.hue + rotationDegrees * rotationDirection(fromHct.hue, toHct.hue));
    return Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt();
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(from, to, amount) {
    const ucs = _Blend.cam16Ucs(from, to, amount);
    const ucsCam = Cam16.fromInt(ucs);
    const fromCam = Cam16.fromInt(from);
    const blended = Hct.from(ucsCam.hue, fromCam.chroma, lstarFromArgb(from));
    return blended.toInt();
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(from, to, amount) {
    const fromCam = Cam16.fromInt(from);
    const toCam = Cam16.fromInt(to);
    const fromJ = fromCam.jstar;
    const fromA = fromCam.astar;
    const fromB = fromCam.bstar;
    const toJ = toCam.jstar;
    const toA = toCam.astar;
    const toB = toCam.bstar;
    const jstar = fromJ + (toJ - fromJ) * amount;
    const astar = fromA + (toA - fromA) * amount;
    const bstar = fromB + (toB - fromB) * amount;
    return Cam16.fromUcs(jstar, astar, bstar).toInt();
  }
};

// ../../node_modules/@material/material-color-utilities/contrast/contrast.js
var Contrast = class _Contrast {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(toneA, toneB) {
    toneA = clampDouble(0, 100, toneA);
    toneB = clampDouble(0, 100, toneB);
    return _Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
  }
  static ratioOfYs(y1, y2) {
    const lighter = y1 > y2 ? y1 : y2;
    const darker = lighter === y2 ? y1 : y2;
    return (lighter + 5) / (darker + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const darkY = yFromLstar(tone);
    const lightY = ratio * (darkY + 5) - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(lightY) + 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(tone, ratio) {
    if (tone < 0 || tone > 100) {
      return -1;
    }
    const lightY = yFromLstar(tone);
    const darkY = (lightY + 5) / ratio - 5;
    const realContrast = _Contrast.ratioOfYs(lightY, darkY);
    const delta = Math.abs(realContrast - ratio);
    if (realContrast < ratio && delta > 0.04) {
      return -1;
    }
    const returnValue = lstarFromY(darkY) - 0.4;
    if (returnValue < 0 || returnValue > 100) {
      return -1;
    }
    return returnValue;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(tone, ratio) {
    const lighterSafe = _Contrast.lighter(tone, ratio);
    return lighterSafe < 0 ? 100 : lighterSafe;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(tone, ratio) {
    const darkerSafe = _Contrast.darker(tone, ratio);
    return darkerSafe < 0 ? 0 : darkerSafe;
  }
};

// ../../node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
var DislikeAnalyzer = class _DislikeAnalyzer {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(hct) {
    const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
    const chromaPasses = Math.round(hct.chroma) > 16;
    const tonePasses = Math.round(hct.tone) < 65;
    return huePasses && chromaPasses && tonePasses;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(hct) {
    if (_DislikeAnalyzer.isDisliked(hct)) {
      return Hct.from(hct.hue, hct.chroma, 70);
    }
    return hct;
  }
};

// ../../node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
var DynamicColor = class _DynamicColor {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(args) {
    return new _DynamicColor(args.name ?? "", args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
    this.name = name;
    this.palette = palette;
    this.tone = tone;
    this.isBackground = isBackground;
    this.background = background;
    this.secondBackground = secondBackground;
    this.contrastCurve = contrastCurve;
    this.toneDeltaPair = toneDeltaPair;
    this.hctCache = /* @__PURE__ */ new Map();
    if (!background && secondBackground) {
      throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
    }
    if (!background && contrastCurve) {
      throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
    }
    if (background && !contrastCurve) {
      throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
    }
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(scheme) {
    return this.getHct(scheme).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(scheme) {
    const cachedAnswer = this.hctCache.get(scheme);
    if (cachedAnswer != null) {
      return cachedAnswer;
    }
    const tone = this.getTone(scheme);
    const answer = this.palette(scheme).getHct(tone);
    if (this.hctCache.size > 4) {
      this.hctCache.clear();
    }
    this.hctCache.set(scheme, answer);
    return answer;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(scheme) {
    const decreasingContrast = scheme.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const toneDeltaPair = this.toneDeltaPair(scheme);
      const roleA = toneDeltaPair.roleA;
      const roleB = toneDeltaPair.roleB;
      const delta = toneDeltaPair.delta;
      const polarity = toneDeltaPair.polarity;
      const stayTogether = toneDeltaPair.stayTogether;
      const bg = this.background(scheme);
      const bgTone = bg.getTone(scheme);
      const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
      const nearer = aIsNearer ? roleA : roleB;
      const farther = aIsNearer ? roleB : roleA;
      const amNearer = this.name === nearer.name;
      const expansionDir = scheme.isDark ? 1 : -1;
      const nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel);
      const fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel);
      const nInitialTone = nearer.tone(scheme);
      let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : _DynamicColor.foregroundTone(bgTone, nContrast);
      const fInitialTone = farther.tone(scheme);
      let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : _DynamicColor.foregroundTone(bgTone, fContrast);
      if (decreasingContrast) {
        nTone = _DynamicColor.foregroundTone(bgTone, nContrast);
        fTone = _DynamicColor.foregroundTone(bgTone, fContrast);
      }
      if ((fTone - nTone) * expansionDir >= delta) ; else {
        fTone = clampDouble(0, 100, nTone + delta * expansionDir);
        if ((fTone - nTone) * expansionDir >= delta) ; else {
          nTone = clampDouble(0, 100, fTone - delta * expansionDir);
        }
      }
      if (50 <= nTone && nTone < 60) {
        if (expansionDir > 0) {
          nTone = 60;
          fTone = Math.max(fTone, nTone + delta * expansionDir);
        } else {
          nTone = 49;
          fTone = Math.min(fTone, nTone + delta * expansionDir);
        }
      } else if (50 <= fTone && fTone < 60) {
        if (stayTogether) {
          if (expansionDir > 0) {
            nTone = 60;
            fTone = Math.max(fTone, nTone + delta * expansionDir);
          } else {
            nTone = 49;
            fTone = Math.min(fTone, nTone + delta * expansionDir);
          }
        } else {
          if (expansionDir > 0) {
            fTone = 60;
          } else {
            fTone = 49;
          }
        }
      }
      return amNearer ? nTone : fTone;
    } else {
      let answer = this.tone(scheme);
      if (this.background == null) {
        return answer;
      }
      const bgTone = this.background(scheme).getTone(scheme);
      const desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel);
      if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) ; else {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (decreasingContrast) {
        answer = _DynamicColor.foregroundTone(bgTone, desiredRatio);
      }
      if (this.isBackground && 50 <= answer && answer < 60) {
        if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
          answer = 49;
        } else {
          answer = 60;
        }
      }
      if (this.secondBackground) {
        const [bg1, bg2] = [this.background, this.secondBackground];
        const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
        const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
        if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
          return answer;
        }
        const lightOption = Contrast.lighter(upper, desiredRatio);
        const darkOption = Contrast.darker(lower, desiredRatio);
        const availables = [];
        if (lightOption !== -1)
          availables.push(lightOption);
        if (darkOption !== -1)
          availables.push(darkOption);
        const prefersLight = _DynamicColor.tonePrefersLightForeground(bgTone1) || _DynamicColor.tonePrefersLightForeground(bgTone2);
        if (prefersLight) {
          return lightOption < 0 ? 100 : lightOption;
        }
        if (availables.length === 1) {
          return availables[0];
        }
        return darkOption < 0 ? 0 : darkOption;
      }
      return answer;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(bgTone, ratio) {
    const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
    const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
    const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
    const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
    const preferLighter = _DynamicColor.tonePrefersLightForeground(bgTone);
    if (preferLighter) {
      const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 && lighterRatio < ratio && darkerRatio < ratio;
      return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
    } else {
      return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
    }
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(tone) {
    return Math.round(tone) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(tone) {
    return Math.round(tone) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(tone) {
    if (_DynamicColor.tonePrefersLightForeground(tone) && !_DynamicColor.toneAllowsLightForeground(tone)) {
      return 49;
    }
    return tone;
  }
};

// ../../node_modules/@material/material-color-utilities/scheme/variant.js
var Variant;
(function(Variant2) {
  Variant2[Variant2["MONOCHROME"] = 0] = "MONOCHROME";
  Variant2[Variant2["NEUTRAL"] = 1] = "NEUTRAL";
  Variant2[Variant2["TONAL_SPOT"] = 2] = "TONAL_SPOT";
  Variant2[Variant2["VIBRANT"] = 3] = "VIBRANT";
  Variant2[Variant2["EXPRESSIVE"] = 4] = "EXPRESSIVE";
  Variant2[Variant2["FIDELITY"] = 5] = "FIDELITY";
  Variant2[Variant2["CONTENT"] = 6] = "CONTENT";
  Variant2[Variant2["RAINBOW"] = 7] = "RAINBOW";
  Variant2[Variant2["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));

// ../../node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
var ContrastCurve = class {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(low, normal, medium, high) {
    this.low = low;
    this.normal = normal;
    this.medium = medium;
    this.high = high;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(contrastLevel) {
    if (contrastLevel <= -1) {
      return this.low;
    } else if (contrastLevel < 0) {
      return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
    } else if (contrastLevel < 0.5) {
      return lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
    } else if (contrastLevel < 1) {
      return lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
    } else {
      return this.high;
    }
  }
};

// ../../node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
var ToneDeltaPair = class {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(roleA, roleB, delta, polarity, stayTogether) {
    this.roleA = roleA;
    this.roleB = roleB;
    this.delta = delta;
    this.polarity = polarity;
    this.stayTogether = stayTogether;
  }
};

// ../../node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
function isFidelity(scheme) {
  return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
}
function isMonochrome(scheme) {
  return scheme.variant === Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  let answer = tone;
  let closestToChroma = Hct.from(hue, chroma, tone);
  if (closestToChroma.chroma < chroma) {
    let chromaPeak = closestToChroma.chroma;
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1 : 1;
      const potentialSolution = Hct.from(hue, chroma, answer);
      if (chromaPeak > potentialSolution.chroma) {
        break;
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break;
      }
      const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
      const currentDelta = Math.abs(closestToChroma.chroma - chroma);
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution;
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
    }
  }
  return answer;
}
function viewingConditionsForAlbers(scheme) {
  return ViewingConditions.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    scheme.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function performAlbers(prealbers, scheme) {
  const albersd = prealbers.inViewingConditions(viewingConditionsForAlbers(scheme));
  if (DynamicColor.tonePrefersLightForeground(prealbers.tone) && !DynamicColor.toneAllowsLightForeground(albersd.tone)) {
    return DynamicColor.enableLightForeground(prealbers.tone);
  } else {
    return DynamicColor.enableLightForeground(albersd.tone);
  }
}
var MaterialDynamicColors = class _MaterialDynamicColors {
  static highestSurface(s) {
    return s.isDark ? _MaterialDynamicColors.surfaceBright : _MaterialDynamicColors.surfaceDim;
  }
};
MaterialDynamicColors.contentAccentToneDelta = 15;
MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "primary_palette_key_color",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.primaryPalette.keyColor.tone
});
MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "secondary_palette_key_color",
  palette: (s) => s.secondaryPalette,
  tone: (s) => s.secondaryPalette.keyColor.tone
});
MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => s.tertiaryPalette.keyColor.tone
});
MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_palette_key_color",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.neutralPalette.keyColor.tone
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.neutralVariantPalette.keyColor.tone
});
MaterialDynamicColors.background = DynamicColor.fromPalette({
  name: "background",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
  name: "on_background",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 10,
  background: (s) => MaterialDynamicColors.background,
  contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
});
MaterialDynamicColors.surface = DynamicColor.fromPalette({
  name: "surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
  name: "surface_dim",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 6 : 87,
  isBackground: true
});
MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
  name: "surface_bright",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 24 : 98,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
  name: "surface_container_lowest",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 4 : 100,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
  name: "surface_container_low",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 10 : 96,
  isBackground: true
});
MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
  name: "surface_container",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 12 : 94,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
  name: "surface_container_high",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 17 : 92,
  isBackground: true
});
MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
  name: "surface_container_highest",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 22 : 90,
  isBackground: true
});
MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
  name: "on_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 10,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
  name: "surface_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 30 : 90,
  isBackground: true
});
MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
  name: "on_surface_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 80 : 30,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
  name: "inverse_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 90 : 20
});
MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
  name: "inverse_on_surface",
  palette: (s) => s.neutralPalette,
  tone: (s) => s.isDark ? 20 : 95,
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.outline = DynamicColor.fromPalette({
  name: "outline",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 60 : 50,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
});
MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
  name: "outline_variant",
  palette: (s) => s.neutralVariantPalette,
  tone: (s) => s.isDark ? 30 : 80,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7)
});
MaterialDynamicColors.shadow = DynamicColor.fromPalette({
  name: "shadow",
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
});
MaterialDynamicColors.scrim = DynamicColor.fromPalette({
  name: "scrim",
  palette: (s) => s.neutralPalette,
  tone: (s) => 0
});
MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
  name: "surface_tint",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true
});
MaterialDynamicColors.primary = DynamicColor.fromPalette({
  name: "primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 100 : 0;
    }
    return s.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
});
MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
  name: "on_primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90;
    }
    return s.isDark ? 20 : 100;
  },
  background: (s) => MaterialDynamicColors.primary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
  name: "primary_container",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return performAlbers(s.sourceColorHct, s);
    }
    if (isMonochrome(s)) {
      return s.isDark ? 85 : 25;
    }
    return s.isDark ? 30 : 90;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, "nearer", false)
});
MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
  name: "on_primary_container",
  palette: (s) => s.primaryPalette,
  tone: (s) => {
    if (isFidelity(s)) {
      return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
    }
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100;
    }
    return s.isDark ? 90 : 10;
  },
  background: (s) => MaterialDynamicColors.primaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
  name: "inverse_primary",
  palette: (s) => s.primaryPalette,
  tone: (s) => s.isDark ? 40 : 80,
  background: (s) => MaterialDynamicColors.inverseSurface,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.secondary = DynamicColor.fromPalette({
  name: "secondary",
  palette: (s) => s.secondaryPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
});
MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
  name: "on_secondary",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 100;
    } else {
      return s.isDark ? 20 : 100;
    }
  },
  background: (s) => MaterialDynamicColors.secondary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
  name: "secondary_container",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    const initialTone = s.isDark ? 30 : 90;
    if (isMonochrome(s)) {
      return s.isDark ? 30 : 85;
    }
    if (!isFidelity(s)) {
      return initialTone;
    }
    let answer = findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
    answer = performAlbers(s.secondaryPalette.getHct(answer), s);
    return answer;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, "nearer", false)
});
MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
  name: "on_secondary_container",
  palette: (s) => s.secondaryPalette,
  tone: (s) => {
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 10;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
  },
  background: (s) => MaterialDynamicColors.secondaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
  name: "tertiary",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 90 : 25;
    }
    return s.isDark ? 80 : 40;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
});
MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
  name: "on_tertiary",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 10 : 90;
    }
    return s.isDark ? 20 : 100;
  },
  background: (s) => MaterialDynamicColors.tertiary,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
  name: "tertiary_container",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 60 : 49;
    }
    if (!isFidelity(s)) {
      return s.isDark ? 30 : 90;
    }
    const albersTone = performAlbers(s.tertiaryPalette.getHct(s.sourceColorHct.tone), s);
    const proposedHct = s.tertiaryPalette.getHct(albersTone);
    return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
  },
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, "nearer", false)
});
MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
  name: "on_tertiary_container",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => {
    if (isMonochrome(s)) {
      return s.isDark ? 0 : 100;
    }
    if (!isFidelity(s)) {
      return s.isDark ? 90 : 10;
    }
    return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
  },
  background: (s) => MaterialDynamicColors.tertiaryContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.error = DynamicColor.fromPalette({
  name: "error",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 80 : 40,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
});
MaterialDynamicColors.onError = DynamicColor.fromPalette({
  name: "on_error",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 20 : 100,
  background: (s) => MaterialDynamicColors.error,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
  name: "error_container",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 30 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, "nearer", false)
});
MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
  name: "on_error_container",
  palette: (s) => s.errorPalette,
  tone: (s) => s.isDark ? 90 : 10,
  background: (s) => MaterialDynamicColors.errorContainer,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
  name: "primary_fixed",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 40 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
  name: "primary_fixed_dim",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 30 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
  name: "on_primary_fixed",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 100 : 10,
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (s) => s.primaryPalette,
  tone: (s) => isMonochrome(s) ? 90 : 30,
  background: (s) => MaterialDynamicColors.primaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.primaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
  name: "secondary_fixed",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 80 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
  name: "secondary_fixed_dim",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 70 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
  name: "on_secondary_fixed",
  palette: (s) => s.secondaryPalette,
  tone: (s) => 10,
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (s) => s.secondaryPalette,
  tone: (s) => isMonochrome(s) ? 25 : 30,
  background: (s) => MaterialDynamicColors.secondaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});
MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
  name: "tertiary_fixed",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 40 : 90,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 30 : 80,
  isBackground: true,
  background: (s) => MaterialDynamicColors.highestSurface(s),
  contrastCurve: new ContrastCurve(1, 1, 3, 7),
  toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
});
MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
  name: "on_tertiary_fixed",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 100 : 10,
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
});
MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (s) => s.tertiaryPalette,
  tone: (s) => isMonochrome(s) ? 90 : 30,
  background: (s) => MaterialDynamicColors.tertiaryFixedDim,
  secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
  contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
});

// ../../node_modules/@material/material-color-utilities/palettes/tonal_palette.js
var TonalPalette = class _TonalPalette {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(argb) {
    const hct = Hct.fromInt(argb);
    return _TonalPalette.fromHct(hct);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(hct) {
    return new _TonalPalette(hct.hue, hct.chroma, hct);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(hue, chroma) {
    return new _TonalPalette(hue, chroma, _TonalPalette.createKeyColor(hue, chroma));
  }
  constructor(hue, chroma, keyColor) {
    this.hue = hue;
    this.chroma = chroma;
    this.keyColor = keyColor;
    this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(hue, chroma) {
    const startTone = 50;
    let smallestDeltaHct = Hct.from(hue, chroma, startTone);
    let smallestDelta = Math.abs(smallestDeltaHct.chroma - chroma);
    for (let delta = 1; delta < 50; delta += 1) {
      if (Math.round(chroma) === Math.round(smallestDeltaHct.chroma)) {
        return smallestDeltaHct;
      }
      const hctAdd = Hct.from(hue, chroma, startTone + delta);
      const hctAddDelta = Math.abs(hctAdd.chroma - chroma);
      if (hctAddDelta < smallestDelta) {
        smallestDelta = hctAddDelta;
        smallestDeltaHct = hctAdd;
      }
      const hctSubtract = Hct.from(hue, chroma, startTone - delta);
      const hctSubtractDelta = Math.abs(hctSubtract.chroma - chroma);
      if (hctSubtractDelta < smallestDelta) {
        smallestDelta = hctSubtractDelta;
        smallestDeltaHct = hctSubtract;
      }
    }
    return smallestDeltaHct;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(tone) {
    let argb = this.cache.get(tone);
    if (argb === void 0) {
      argb = Hct.from(this.hue, this.chroma, tone).toInt();
      this.cache.set(tone, argb);
    }
    return argb;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(tone) {
    return Hct.fromInt(this.tone(tone));
  }
};

// ../../node_modules/@material/material-color-utilities/palettes/core_palette.js
var CorePalette = class _CorePalette {
  /**
   * @param argb ARGB representation of a color
   */
  static of(argb) {
    return new _CorePalette(argb, false);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(argb) {
    return new _CorePalette(argb, true);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(colors) {
    return _CorePalette.createPaletteFromColors(false, colors);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(colors) {
    return _CorePalette.createPaletteFromColors(true, colors);
  }
  static createPaletteFromColors(content, colors) {
    const palette = new _CorePalette(colors.primary, content);
    if (colors.secondary) {
      const p = new _CorePalette(colors.secondary, content);
      palette.a2 = p.a1;
    }
    if (colors.tertiary) {
      const p = new _CorePalette(colors.tertiary, content);
      palette.a3 = p.a1;
    }
    if (colors.error) {
      const p = new _CorePalette(colors.error, content);
      palette.error = p.a1;
    }
    if (colors.neutral) {
      const p = new _CorePalette(colors.neutral, content);
      palette.n1 = p.n1;
    }
    if (colors.neutralVariant) {
      const p = new _CorePalette(colors.neutralVariant, content);
      palette.n2 = p.n2;
    }
    return palette;
  }
  constructor(argb, isContent) {
    const hct = Hct.fromInt(argb);
    const hue = hct.hue;
    const chroma = hct.chroma;
    if (isContent) {
      this.a1 = TonalPalette.fromHueAndChroma(hue, chroma);
      this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3);
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
      this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
      this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
    } else {
      this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
      this.a2 = TonalPalette.fromHueAndChroma(hue, 16);
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24);
      this.n1 = TonalPalette.fromHueAndChroma(hue, 4);
      this.n2 = TonalPalette.fromHueAndChroma(hue, 8);
    }
    this.error = TonalPalette.fromHueAndChroma(25, 84);
  }
};

// ../../node_modules/@material/material-color-utilities/scheme/scheme.js
var Scheme = class _Scheme {
  get primary() {
    return this.props.primary;
  }
  get onPrimary() {
    return this.props.onPrimary;
  }
  get primaryContainer() {
    return this.props.primaryContainer;
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer;
  }
  get secondary() {
    return this.props.secondary;
  }
  get onSecondary() {
    return this.props.onSecondary;
  }
  get secondaryContainer() {
    return this.props.secondaryContainer;
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer;
  }
  get tertiary() {
    return this.props.tertiary;
  }
  get onTertiary() {
    return this.props.onTertiary;
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer;
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer;
  }
  get error() {
    return this.props.error;
  }
  get onError() {
    return this.props.onError;
  }
  get errorContainer() {
    return this.props.errorContainer;
  }
  get onErrorContainer() {
    return this.props.onErrorContainer;
  }
  get background() {
    return this.props.background;
  }
  get onBackground() {
    return this.props.onBackground;
  }
  get surface() {
    return this.props.surface;
  }
  get onSurface() {
    return this.props.onSurface;
  }
  get surfaceVariant() {
    return this.props.surfaceVariant;
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant;
  }
  get outline() {
    return this.props.outline;
  }
  get outlineVariant() {
    return this.props.outlineVariant;
  }
  get shadow() {
    return this.props.shadow;
  }
  get scrim() {
    return this.props.scrim;
  }
  get inverseSurface() {
    return this.props.inverseSurface;
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface;
  }
  get inversePrimary() {
    return this.props.inversePrimary;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material color scheme, based on the color's hue.
   */
  static light(argb) {
    return _Scheme.lightFromCorePalette(CorePalette.of(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(argb) {
    return _Scheme.darkFromCorePalette(CorePalette.of(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(argb) {
    return _Scheme.lightFromCorePalette(CorePalette.contentOf(argb));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(argb) {
    return _Scheme.darkFromCorePalette(CorePalette.contentOf(argb));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(core) {
    return new _Scheme({
      primary: core.a1.tone(40),
      onPrimary: core.a1.tone(100),
      primaryContainer: core.a1.tone(90),
      onPrimaryContainer: core.a1.tone(10),
      secondary: core.a2.tone(40),
      onSecondary: core.a2.tone(100),
      secondaryContainer: core.a2.tone(90),
      onSecondaryContainer: core.a2.tone(10),
      tertiary: core.a3.tone(40),
      onTertiary: core.a3.tone(100),
      tertiaryContainer: core.a3.tone(90),
      onTertiaryContainer: core.a3.tone(10),
      error: core.error.tone(40),
      onError: core.error.tone(100),
      errorContainer: core.error.tone(90),
      onErrorContainer: core.error.tone(10),
      background: core.n1.tone(99),
      onBackground: core.n1.tone(10),
      surface: core.n1.tone(99),
      onSurface: core.n1.tone(10),
      surfaceVariant: core.n2.tone(90),
      onSurfaceVariant: core.n2.tone(30),
      outline: core.n2.tone(50),
      outlineVariant: core.n2.tone(80),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(20),
      inverseOnSurface: core.n1.tone(95),
      inversePrimary: core.a1.tone(80)
    });
  }
  /**
   * Dark scheme from core palette
   */
  static darkFromCorePalette(core) {
    return new _Scheme({
      primary: core.a1.tone(80),
      onPrimary: core.a1.tone(20),
      primaryContainer: core.a1.tone(30),
      onPrimaryContainer: core.a1.tone(90),
      secondary: core.a2.tone(80),
      onSecondary: core.a2.tone(20),
      secondaryContainer: core.a2.tone(30),
      onSecondaryContainer: core.a2.tone(90),
      tertiary: core.a3.tone(80),
      onTertiary: core.a3.tone(20),
      tertiaryContainer: core.a3.tone(30),
      onTertiaryContainer: core.a3.tone(90),
      error: core.error.tone(80),
      onError: core.error.tone(20),
      errorContainer: core.error.tone(30),
      onErrorContainer: core.error.tone(80),
      background: core.n1.tone(10),
      onBackground: core.n1.tone(90),
      surface: core.n1.tone(10),
      onSurface: core.n1.tone(90),
      surfaceVariant: core.n2.tone(30),
      onSurfaceVariant: core.n2.tone(80),
      outline: core.n2.tone(60),
      outlineVariant: core.n2.tone(30),
      shadow: core.n1.tone(0),
      scrim: core.n1.tone(0),
      inverseSurface: core.n1.tone(90),
      inverseOnSurface: core.n1.tone(20),
      inversePrimary: core.a1.tone(40)
    });
  }
  constructor(props) {
    this.props = props;
  }
  toJSON() {
    return {
      ...this.props
    };
  }
};

// ../../node_modules/@material/material-color-utilities/utils/string_utils.js
function hexFromArgb(argb) {
  const r = redFromArgb(argb);
  const g = greenFromArgb(argb);
  const b = blueFromArgb(argb);
  const outParts = [r.toString(16), g.toString(16), b.toString(16)];
  for (const [i, part] of outParts.entries()) {
    if (part.length === 1) {
      outParts[i] = "0" + part;
    }
  }
  return "#" + outParts.join("");
}
function argbFromHex(hex) {
  hex = hex.replace("#", "");
  const isThree = hex.length === 3;
  const isSix = hex.length === 6;
  const isEight = hex.length === 8;
  if (!isThree && !isSix && !isEight) {
    throw new Error("unexpected hex " + hex);
  }
  let r = 0;
  let g = 0;
  let b = 0;
  if (isThree) {
    r = parseIntHex(hex.slice(0, 1).repeat(2));
    g = parseIntHex(hex.slice(1, 2).repeat(2));
    b = parseIntHex(hex.slice(2, 3).repeat(2));
  } else if (isSix) {
    r = parseIntHex(hex.slice(0, 2));
    g = parseIntHex(hex.slice(2, 4));
    b = parseIntHex(hex.slice(4, 6));
  } else if (isEight) {
    r = parseIntHex(hex.slice(2, 4));
    g = parseIntHex(hex.slice(4, 6));
    b = parseIntHex(hex.slice(6, 8));
  }
  return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
}
function parseIntHex(value) {
  return parseInt(value, 16);
}

// ../../node_modules/@material/material-color-utilities/utils/theme_utils.js
function themeFromSourceColor(source, customColors = []) {
  const palette = CorePalette.of(source);
  return {
    source,
    schemes: {
      light: Scheme.light(source),
      dark: Scheme.dark(source)
    },
    palettes: {
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error
    },
    customColors: customColors.map((c) => customColor(source, c))
  };
}
function customColor(source, color) {
  let value = color.value;
  const from = value;
  const to = source;
  if (color.blend) {
    value = Blend.harmonize(from, to);
  }
  const palette = CorePalette.of(value);
  const tones = palette.a1;
  return {
    color,
    value,
    light: {
      color: tones.tone(40),
      onColor: tones.tone(100),
      colorContainer: tones.tone(90),
      onColorContainer: tones.tone(10)
    },
    dark: {
      color: tones.tone(80),
      onColor: tones.tone(20),
      colorContainer: tones.tone(30),
      onColorContainer: tones.tone(90)
    }
  };
}

// src/utils/styleUtils.ts
var toHex = (argb) => {
  const hex = hexFromArgb(argb);
  if (hex.length === 9 && hex.toLowerCase().startsWith("#ff")) {
    return "#" + hex.substring(3);
  }
  if (hex.length === 9) {
    const alpha = hex.substring(1, 3);
    const red = hex.substring(3, 5);
    const green = hex.substring(5, 7);
    const blue = hex.substring(7, 9);
    return `#${red}${green}${blue}${alpha}`;
  }
  return hex;
};
var generateMaterialTheme = (sourceHex, isDark, overrides) => {
  let sourceArgb;
  try {
    sourceArgb = argbFromHex(sourceHex);
  } catch (e) {
    sourceArgb = argbFromHex("#000000");
  }
  const theme = themeFromSourceColor(sourceArgb);
  const scheme = isDark ? theme.schemes.dark : theme.schemes.light;
  const result = {};
  const roles = [
    "primary",
    "onPrimary",
    "primaryContainer",
    "onPrimaryContainer",
    "secondary",
    "onSecondary",
    "secondaryContainer",
    "onSecondaryContainer",
    "tertiary",
    "onTertiary",
    "tertiaryContainer",
    "onTertiaryContainer",
    "error",
    "onError",
    "errorContainer",
    "onErrorContainer",
    "background",
    "onBackground",
    "surface",
    "onSurface",
    "surfaceVariant",
    "onSurfaceVariant",
    "surfaceContainerLow",
    "surfaceContainer",
    "surfaceContainerHigh",
    "surfaceContainerHighest",
    "surfaceBright",
    "surfaceDim",
    "outline",
    "outlineVariant",
    "shadow",
    "scrim",
    "inverseSurface",
    "inverseOnSurface",
    "inversePrimary"
  ];
  roles.forEach((role) => {
    if (typeof scheme[role] !== "undefined") {
      result[role] = toHex(scheme[role]);
    }
  });
  const applyOverride = (role) => {
    if (overrides?.[role]) {
      try {
        const overrideArgb = argbFromHex(overrides[role]);
        const overrideTheme = themeFromSourceColor(overrideArgb);
        const overrideScheme = isDark ? overrideTheme.schemes.dark : overrideTheme.schemes.light;
        if (role === "surface") {
          const s = overrideScheme;
          result.surface = toHex(s.surface);
          result.onSurface = toHex(s.onSurface);
          result.surfaceVariant = toHex(s.surfaceVariant);
          result.onSurfaceVariant = toHex(s.onSurfaceVariant);
          result.surfaceContainerLow = toHex(s.surfaceContainerLow);
          result.surfaceContainer = toHex(s.surfaceContainer);
          result.surfaceContainerHigh = toHex(s.surfaceContainerHigh);
          result.surfaceContainerHighest = toHex(s.surfaceContainerHighest);
          result.surfaceBright = toHex(s.surfaceBright);
          result.surfaceDim = toHex(s.surfaceDim);
        } else if (role === "background") {
          result.background = toHex(overrideScheme.background);
          result.onBackground = toHex(overrideScheme.onBackground);
        } else if (role === "foreground") {
          result.onBackground = toHex(overrideScheme.onBackground);
        } else {
          result[role] = toHex(overrideScheme.primary);
          result[`on${role.charAt(0).toUpperCase() + role.slice(1)}`] = toHex(overrideScheme.onPrimary);
          result[`${role}Container`] = toHex(overrideScheme.primaryContainer);
          result[`on${role.charAt(0).toUpperCase() + role.slice(1)}Container`] = toHex(overrideScheme.onPrimaryContainer);
        }
      } catch (e) {
      }
    }
  };
  applyOverride("secondary");
  applyOverride("tertiary");
  applyOverride("surface");
  applyOverride("background");
  applyOverride("foreground");
  result.neutralPalette = theme.palettes.neutral;
  result.neutralVariantPalette = theme.palettes.neutralVariant;
  return result;
};
var generateTailwindConfig = (styleGuide, themeMode = "light") => {
  const isDark = themeMode === "dark";
  const m3 = generateMaterialTheme(
    styleGuide.colors.primary,
    isDark,
    {
      secondary: styleGuide.colors.secondary,
      tertiary: styleGuide.colors.tertiary,
      surface: styleGuide.colors.surface,
      background: styleGuide.colors.background,
      // Pass custom background
      foreground: styleGuide.colors.foreground
      // Pass custom foreground
    }
  );
  const n = m3.neutralPalette;
  const neutrals = {
    50: toHex(n.tone(98)),
    100: toHex(n.tone(95)),
    200: toHex(n.tone(90)),
    300: toHex(n.tone(80)),
    400: toHex(n.tone(70)),
    500: toHex(n.tone(50)),
    600: toHex(n.tone(40)),
    700: toHex(n.tone(30)),
    800: toHex(n.tone(20)),
    900: toHex(n.tone(10)),
    950: toHex(n.tone(5))
  };
  return {
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: [styleGuide.typography.bodyFont, "sans-serif"],
          heading: [styleGuide.typography.headingFont, "sans-serif", "serif"]
        },
        borderRadius: {
          DEFAULT: styleGuide.borderRadius,
          "md": styleGuide.borderRadius,
          "lg": `calc(${styleGuide.borderRadius} + 2px)`,
          "xl": `calc(${styleGuide.borderRadius} + 4px)`,
          "full": "9999px"
        },
        container: {
          center: true,
          padding: "5%",
          screens: { sm: "100%", md: "100%", lg: "100%", xl: "1280px", "2xl": "1440px" }
        },
        colors: {
          background: { DEFAULT: styleGuide.colors.background || m3.background },
          // Use custom if provided
          foreground: { DEFAULT: styleGuide.colors.foreground || m3.onBackground },
          // Use custom if provided
          primary: {
            DEFAULT: m3.primary,
            foreground: m3.onPrimary,
            container: m3.primaryContainer,
            "container-foreground": m3.onPrimaryContainer
          },
          secondary: {
            DEFAULT: m3.secondary,
            foreground: m3.onSecondary,
            container: m3.secondaryContainer,
            "container-foreground": m3.onSecondaryContainer
          },
          tertiary: {
            DEFAULT: m3.tertiary,
            foreground: m3.onTertiary,
            container: m3.tertiaryContainer,
            "container-foreground": m3.onTertiaryContainer
          },
          surface: {
            DEFAULT: m3.surface,
            foreground: m3.onSurface,
            variant: m3.surfaceVariant,
            "variant-foreground": m3.onSurfaceVariant,
            "container-low": m3.surfaceContainerLow,
            container: m3.surfaceContainer,
            "container-high": m3.surfaceContainerHigh,
            "container-highest": m3.surfaceContainerHighest,
            bright: m3.surfaceBright,
            dim: m3.surfaceDim
          },
          "inverse-surface": m3.inverseSurface,
          "inverse-on-surface": m3.inverseOnSurface,
          "inverse-primary": m3.inversePrimary,
          outline: {
            DEFAULT: m3.outline,
            variant: m3.outlineVariant
          },
          border: {
            DEFAULT: m3.outlineVariant
          },
          neutral: neutrals
        }
      }
    }
  };
};
var shadowMap = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  "none": "none"
};
var generateElementCss = (styleGuide) => {
  let css = "";
  const { buttons, cards, buttonsCustom, cardsCustom } = styleGuide.elementStyles;
  const { typography } = styleGuide;
  css += `
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent; 
        }
        ::-webkit-scrollbar-thumb {
            background: #e2e2e2; 
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #cdcdcd; 
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #4d4d4d; /* neutral-800 */
        }
        .dark ::-webkit-scrollbar-thumb:hover {
            background: #666666; /* neutral-700 */
        }
    `;
  let hWeight = "700";
  if (typography.headingWeight) {
    const map = { "normal": "400", "medium": "500", "semibold": "600", "bold": "700", "extrabold": "800" };
    hWeight = map[typography.headingWeight] || "700";
  }
  let hTransform = "none";
  if (typography.headingTransform) hTransform = typography.headingTransform;
  else if (typography.fontStyle === "uppercase") hTransform = "uppercase";
  let hSpacing = "0em";
  if (typography.headingLetterSpacing) {
    const map = { "tighter": "-0.05em", "tight": "-0.025em", "normal": "0em", "wide": "0.025em", "wider": "0.05em" };
    hSpacing = map[typography.headingLetterSpacing] || "0em";
  } else if (typography.fontStyle === "spacious") hSpacing = "0.05em";
  else if (typography.fontStyle === "uppercase") hSpacing = "0.05em";
  css += `
        h1, h2, h3, h4, h5, h6, .heading {
            font-weight: ${hWeight} !important;
            text-transform: ${hTransform} !important;
            letter-spacing: ${hSpacing} !important;
        }
    `;
  let bWeight = "400";
  if (typography.bodyWeight) {
    const map = { "light": "300", "normal": "400", "medium": "500", "semibold": "600" };
    bWeight = map[typography.bodyWeight] || "400";
  } else {
    bWeight = typography.fontWeight === "bold" ? "700" : typography.fontWeight === "medium" ? "500" : "400";
  }
  let bLineHeight = "1.5";
  if (typography.bodyLineHeight) {
    const map = { "tight": "1.2", "normal": "1.5", "relaxed": "1.625", "loose": "2.0" };
    bLineHeight = map[typography.bodyLineHeight] || "1.5";
  } else if (typography.fontStyle === "spacious") {
    bLineHeight = "1.6";
  }
  css += `
        body {
            font-weight: ${bWeight};
            line-height: ${bLineHeight};
        }
    `;
  const buttonInputSelector = 'button, .button, input:not([type="color"]):not([type="range"]), select, textarea';
  css += `
        ${buttonInputSelector} {
            border-radius: ${styleGuide.borderRadius}; /* Default fallback */
        }
        .rounded-md, .rounded { border-radius: ${styleGuide.borderRadius}; }
    `;
  if (buttons === "bubble") {
    css += `
            ${buttonInputSelector} {
                border-radius: 9999px !important;
            }
            .rounded-md, .rounded { border-radius: 9999px !important; }
        `;
  } else if (buttons === "brick") {
    css += `
            ${buttonInputSelector} {
                border-radius: 0 !important;
                border-width: 2px;
                border-style: solid;
                border-color: var(--foreground) !important;
                box-shadow: 4px 4px 0 0 var(--foreground) !important;
                transition: transform 0.1s, box-shadow 0.1s;
            }
            ${buttonInputSelector}:active {
                transform: translate(2px, 2px);
                box-shadow: 2px 2px 0 0 var(--foreground) !important;
            }
            .dark ${buttonInputSelector} {
                border-color: var(--foreground) !important;
                box-shadow: 4px 4px 0 0 var(--foreground) !important;
            }
            .dark ${buttonInputSelector}:active {
                box-shadow: 2px 2px 0 0 var(--foreground) !important;
            }
        `;
  } else if (buttons === "outlined") {
    css += `
            ${buttonInputSelector} {
                 background-color: transparent;
                 border: 1px solid currentColor;
            }
        `;
  } else if (buttons === "gradient") {
    const gradient = `linear-gradient(135deg, var(--primary), ${styleGuide.colors.secondary || "var(--primary)"})`;
    css += `
            ${buttonInputSelector} {
                background: ${gradient} !important;
                color: #ffffff !important;
                border: none;
                transition: opacity 0.2s;
            }
            ${buttonInputSelector}:hover {
                opacity: 0.9;
            }
        `;
  }
  if (buttonsCustom) {
    if (buttonsCustom.borderRadius) {
      css += `
                ${buttonInputSelector}, .rounded-md, .rounded {
                    border-radius: ${buttonsCustom.borderRadius} !important;
                }
            `;
    }
    if (buttonsCustom.shadow) {
      const shadowValue = shadowMap[buttonsCustom.shadow] || "none";
      if (buttons !== "brick" || buttonsCustom.shadow !== "none") {
        css += `
                    ${buttonInputSelector} {
                        box-shadow: ${shadowValue} !important;
                    }
                `;
      }
    }
    if (buttonsCustom.textTransform && buttonsCustom.textTransform !== "none") {
      css += `
                ${buttonInputSelector} {
                    text-transform: ${buttonsCustom.textTransform};
                }
            `;
    }
    let btnBorderStyle = buttonsCustom.borderStyle;
    if (buttonsCustom.borderWidth && Number(buttonsCustom.borderWidth) > 0 && !btnBorderStyle) {
      btnBorderStyle = "solid";
    }
    if (buttonsCustom.borderWidth) {
      css += `
                ${buttonInputSelector} {
                    border-width: ${buttonsCustom.borderWidth}px !important;
                }
            `;
    }
    if (btnBorderStyle) {
      css += `
                ${buttonInputSelector} {
                    border-style: ${btnBorderStyle} !important;
                }
            `;
    }
  }
  const cardSelector = "section .bg-background.border, section .bg-neutral-50, article, .card";
  css += `
         ${cardSelector} {
             border-radius: ${styleGuide.borderRadius};
         }
    `;
  if (cards === "outlined") {
    css += `
            ${cardSelector} {
                background-color: transparent !important;
                border: 1px solid var(--foreground) !important;
                box-shadow: none !important;
            }
            .dark ${cardSelector} {
                border-color: #ffffff !important;
            }
        `;
  } else if (cards === "flat") {
    css += `
            ${cardSelector} {
                background-color: #f5f5f5 !important;
                border: none !important; 
                box-shadow: none !important;
            }
            .dark ${cardSelector} {
                background-color: #262626 !important;
            }
        `;
  } else if (cards === "edgy") {
    css += `
            ${cardSelector} {
                border-radius: 0 !important;
                border: 2px solid var(--foreground) !important;
                box-shadow: 6px 6px 0 0 var(--foreground) !important;
                background-color: var(--background);
            }
            .dark ${cardSelector} {
                border-color: #ffffff !important;
                box-shadow: 6px 6px 0 0 #ffffff !important;
            }
            ${cardSelector} img {
                border-radius: 0 !important;
            }
        `;
  } else if (cards === "m3-elevated") {
    css += `
            ${cardSelector} {
                border-radius: 12px;
                border: none !important;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
                background-color: var(--surface-container-low, #F7F2FA) !important; 
                transition: box-shadow 0.2s;
            }
            ${cardSelector}:hover {
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
            }
            .dark ${cardSelector} {
                background-color: var(--surface-container-low, #1D1B20) !important;
                box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3); 
            }
        `;
  } else if (cards === "m3-filled") {
    css += `
             ${cardSelector} {
                border-radius: 12px;
                border: none !important;
                background-color: var(--surface-variant, #E7E0EC) !important;
                color: var(--on-surface-variant) !important;
                box-shadow: none !important;
            }
            .dark ${cardSelector} {
                 background-color: var(--surface-variant, #49454F) !important;
            }
        `;
  } else if (cards === "m3-outlined") {
    css += `
             ${cardSelector} {
                border-radius: 12px;
                border: 1px solid var(--outline, #79747E) !important;
                background-color: transparent !important;
                box-shadow: none !important;
            }
        `;
  } else if (cards === "gradient") {
    css += `
            ${cardSelector} {
                position: relative;
                background: linear-gradient(var(--card), var(--card)) padding-box,
                            linear-gradient(135deg, var(--primary), ${styleGuide.colors.secondary || "var(--primary)"}) border-box !important;
                border: 2px solid transparent !important;
            }
        `;
  }
  if (cardsCustom) {
    if (cardsCustom.borderRadius) {
      css += `
                ${cardSelector} {
                    border-radius: ${cardsCustom.borderRadius} !important;
                }
            `;
    }
    if (cardsCustom.shadow) {
      const shadowValue = shadowMap[cardsCustom.shadow] || "none";
      css += `
                ${cardSelector} {
                    box-shadow: ${shadowValue} !important;
                }
            `;
    }
    let cardBorderStyle = cardsCustom.borderStyle;
    if (cardsCustom.borderWidth && Number(cardsCustom.borderWidth) > 0 && !cardBorderStyle) {
      cardBorderStyle = "solid";
    }
    if (cardsCustom.borderWidth) {
      css += `
                ${cardSelector} {
                     border-width: ${cardsCustom.borderWidth}px !important;
                }
            `;
    }
    if (cardBorderStyle) {
      css += `
                ${cardSelector} {
                    border-style: ${cardBorderStyle} !important;
                }
            `;
    }
  }
  if (styleGuide.colors.backgroundStyle === "gradient" && styleGuide.colors.backgroundGradient) {
    css += `
            body, .min-h-screen {
                background: ${styleGuide.colors.backgroundGradient} !important;
                background-attachment: fixed !important;
            }
        `;
  }
  return css;
};
var IframePreview = React.forwardRef(({ children, viewport = "desktop", theme, styleGuide, className, src }, ref) => {
  const iframeRef = useRef(null);
  const [mountNode, setMountNode] = useState(null);
  const [tailwindScriptReady, setTailwindScriptReady] = useState(false);
  React.useImperativeHandle(ref, () => ({
    scrollToSectionId: (id) => {
      const el = iframeRef.current?.contentDocument?.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    contentWindow: iframeRef.current?.contentWindow
  }));
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const updateContent = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      const headingFont = styleGuide.typography.headingFont;
      const bodyFont = styleGuide.typography.bodyFont;
      const elementCss = generateElementCss(styleGuide);
      const rootFontSize = styleGuide.typography.fontSize === "large" ? "20px" : styleGuide.typography.fontSize === "regular" ? "18px" : "16px";
      const bodyWeight = styleGuide.typography.fontWeight === "bold" ? "700" : styleGuide.typography.fontWeight === "medium" ? "500" : "400";
      let extraCss = "";
      if (styleGuide.typography.fontStyle === "spacious") {
        extraCss = `
                    body { letter-spacing: 0.025em; line-height: 1.6; }
                    h1, h2, h3, h4, h5, h6 { letter-spacing: 0.05em; }
                 `;
      } else if (styleGuide.typography.fontStyle === "uppercase") {
        extraCss = `
                    h1, h2, h3, h4, h5, h6 { text-transform: uppercase; letter-spacing: 0.05em; }
                 `;
      }
      const generatedTailwindConfig = generateTailwindConfig(styleGuide, theme);
      const htmlContent = `
                 <!DOCTYPE html>
                 <html lang="en" class="${theme === "dark" ? "dark" : ""}">
                   <head>
                     <meta charset="UTF-8" />
                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <script src="https://cdn.tailwindcss.com"></script>
                     <link rel="preconnect" href="https://fonts.googleapis.com">
                     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                     <link href="https://fonts.googleapis.com/css2?family=${headingFont.replace(/\s/g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet">
                     <link href="https://fonts.googleapis.com/css2?family=${bodyFont.replace(/\s/g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet">
                     <script>
                         tailwind.config = ${JSON.stringify(generatedTailwindConfig, null, 2)};
                     </script>
                     <style>
                         html { font-size: ${rootFontSize}; scroll-behavior: smooth; }
                         body { font-family: "${bodyFont}", sans-serif; margin: 0; font-weight: ${bodyWeight}; }
                         h1, h2, h3, h4, h5, h6 { font-family: "${headingFont}", sans-serif; }
                         
                         ::-webkit-scrollbar { width: 6px; height: 6px; }
                         ::-webkit-scrollbar-track { background: transparent; }
                         ::-webkit-scrollbar-thumb { background: #e2e2e2; border-radius: 3px; }
                         .dark ::-webkit-scrollbar-thumb { background: #4d4d4d; }
                         ::-webkit-scrollbar-thumb:hover { background: #cdcdcd; }
                         .dark ::-webkit-scrollbar-thumb:hover { background: #666666; }
                         
                         .rounded-md, .rounded, .rounded-lg { border-radius: ${styleGuide.borderRadius} !important; }
                         .rounded-full { border-radius: 9999px !important; }
                        
                         ${elementCss}
                         ${extraCss}
                     </style>
                   </head>
                   <body class="bg-background text-foreground transition-colors duration-200">
                     <div id="root"></div>
                   </body>
                 </html>
             `;
      doc.open();
      doc.write(htmlContent);
      doc.close();
      const handleIframeLoad = () => {
        setMountNode(doc.getElementById("root"));
        setTailwindScriptReady(true);
      };
      if (doc.readyState === "complete") {
        handleIframeLoad();
      } else {
        doc.addEventListener("DOMContentLoaded", handleIframeLoad);
      }
    };
    updateContent();
    const onLoad = () => updateContent();
    iframe.addEventListener("load", onLoad);
    return () => {
      iframe.removeEventListener("load", onLoad);
    };
  }, [theme, styleGuide]);
  const width = viewport === "mobile" ? "375px" : viewport === "tablet" ? "768px" : "100%";
  const iframeSrc = src || "about:blank";
  return /* @__PURE__ */ jsx(
    "iframe",
    {
      ref: iframeRef,
      src: iframeSrc,
      className: `transition-all duration-300 mx-auto ${className || ""}`,
      style: { width, height: "100%", border: "none" },
      title: "Preview",
      children: iframeSrc === "about:blank" && mountNode && tailwindScriptReady && createPortal(children, mountNode)
    }
  );
});
IframePreview.displayName = "IframePreview";
var CartToast = ({ item, onClose, onViewCart }) => {
  useEffect(() => {
    if (item) {
      const timer = setTimeout(() => {
        onClose();
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [item, onClose]);
  if (!item) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed top-4 right-4 z-[60] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-xl p-4 flex gap-4 animate-in slide-in-from-right fade-in duration-300 max-w-sm w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0", children: item.image ? /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Check, { className: "w-6 h-6 text-green-500" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm text-neutral-900 dark:text-white truncate", children: "Added to Cart!" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 truncate", children: item.title }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onViewCart,
          className: "text-primary text-sm font-medium hover:underline mt-1",
          children: "View Cart"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-neutral-400 hover:text-neutral-500 self-start", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) })
  ] });
};
var CartContext = createContext(void 0);
var CartProvider = ({
  children,
  currency = "$",
  currencyPosition = "left",
  checkoutUrl,
  whatsappNumber
}) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);
  useEffect(() => {
    const savedCart = localStorage.getItem("lumegem_cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lumegem_cart", JSON.stringify(items));
  }, [items]);
  const generateVariantKey = (id, options) => {
    if (!options || Object.keys(options).length === 0) return id;
    const sortedOptions = Object.entries(options).sort(([k1], [k2]) => k1.localeCompare(k2));
    const optionsString = sortedOptions.map(([k, v]) => `${k}:${v}`).join("|");
    return `${id}-${optionsString}`;
  };
  const addToCart = (newItem) => {
    setItems((prev) => {
      const newKey = generateVariantKey(newItem.id, newItem.selectedOptions);
      const existing = prev.find((i) => generateVariantKey(i.id, i.selectedOptions) === newKey);
      if (existing) {
        return prev.map((i) => generateVariantKey(i.id, i.selectedOptions) === newKey ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setLastAddedItem({ ...newItem, quantity: 1 });
  };
  const removeFromCart = (id, selectedOptions) => {
    setItems((prev) => prev.filter((i) => generateVariantKey(i.id, i.selectedOptions) !== generateVariantKey(id, selectedOptions)));
  };
  const updateQuantity = (id, quantity, selectedOptions) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedOptions);
      return;
    }
    setItems((prev) => prev.map((i) => generateVariantKey(i.id, i.selectedOptions) === generateVariantKey(id, selectedOptions) ? { ...i, quantity } : i));
  };
  const clearCart = () => {
    setItems([]);
  };
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const formatPrice = (price) => {
    const fixed = price.toFixed(2);
    return currencyPosition === "left" ? `${currency}${fixed}` : `${fixed} ${currency}`;
  };
  return /* @__PURE__ */ jsxs(CartContext.Provider, { value: {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
    isCartOpen,
    setCartOpen,
    currency,
    currencyPosition,
    formatPrice,
    checkoutUrl,
    whatsappNumber
  }, children: [
    children,
    /* @__PURE__ */ jsx(
      CartToast,
      {
        item: lastAddedItem,
        onClose: () => setLastAddedItem(null),
        onViewCart: () => {
          setLastAddedItem(null);
          setCartOpen(true);
        }
      }
    )
  ] });
};
var useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
var SiteContext = createContext({});
var useSite = () => useContext(SiteContext);
var SiteProvider = ({ siteData, children }) => {
  return /* @__PURE__ */ jsx(SiteContext.Provider, { value: { siteData }, children });
};
var getPlaceholderImage = (seed, width, height) => {
  return `https://placehold.co/${width}x${height}?text=${encodeURIComponent(seed)}`;
};
var getImageSrc = (content, defaultSeed, width, height) => {
  if (content.image && content.image.trim() !== "") return content.image;
  return getPlaceholderImage(content.image_alt || defaultSeed, width, height);
};
var getMaskImageValue = (mask, stop = 50) => {
  if (!mask) return void 0;
  const s = Math.min(Math.max(0, typeof stop === "number" ? stop : 50), 100);
  if (mask.startsWith("url") || mask.startsWith("linear-") || mask.startsWith("radial-")) {
    return mask.replace(/\[STOP\]/g, `${s}%`);
  }
  const shapes = {
    "squircle": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 C0 5 5 0 50 0 S100 5 100 50 S95 100 50 100 S0 95 0 50' /%3E%3C/svg%3E")`,
    "hexagon": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z' /%3E%3C/svg%3E")`,
    "hexagon-2": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M25 6.7 L75 6.7 L100 50 L75 93.3 L25 93.3 L0 50 Z' /%3E%3C/svg%3E")`,
    "pentagon": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 38 L81 100 L19 100 L0 38 Z' /%3E%3C/svg%3E")`,
    "diamond": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' /%3E%3C/svg%3E")`,
    "heart": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C50 85 10 60 10 35 C10 15 30 10 50 30 C70 10 90 15 90 35 C90 60 50 85 50 85 Z' /%3E%3C/svg%3E")`,
    "star": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z' /%3E%3C/svg%3E")`,
    "triangle": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 100 L0 100 Z' /%3E%3C/svg%3E")`,
    "parallelogram": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M25 0 L100 0 L75 100 L0 100 Z' /%3E%3C/svg%3E")`,
    "fade-bottom": `linear-gradient(to bottom, black 0%, black ${s}%, transparent 100%)`,
    "fade-top": `linear-gradient(to top, black 0%, black ${s}%, transparent 100%)`,
    "fade-left": `linear-gradient(to left, black 0%, black ${s}%, transparent 100%)`,
    "fade-right": `linear-gradient(to right, black 0%, black ${s}%, transparent 100%)`,
    "fade-y": `linear-gradient(to bottom, transparent 0%, black ${Math.max(0, s - 20)}%, black ${Math.min(100, s + 20)}%, transparent 100%)`,
    "fade-x": `linear-gradient(to right, transparent 0%, black ${Math.max(0, s - 20)}%, black ${Math.min(100, s + 20)}%, transparent 100%)`,
    "radial-corner": `mask-radial-farthest-corner mask-radial-from-100% mask-radial-at-[${s}%_${s}%]`
  };
  return shapes[mask] || (mask.includes(" ") ? mask : `url(${mask})`);
};
var ResponsiveImage = ({
  src,
  alt,
  className,
  priority = false,
  attribution,
  enableParallax,
  maskImage,
  maskSize = "cover",
  maskPosition = "center",
  maskRepeat = "no-repeat",
  maskGradientValue = 50,
  clipPath
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!enableParallax) return;
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setOffset((scrollProgress - 0.5) * -30);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax]);
  const maskValue = getMaskImageValue(maskImage || "", maskGradientValue);
  const finalClipPath = React.useMemo(() => {
    if (!clipPath) return void 0;
    if (clipPath.trim().startsWith("url(#") && maskImage && !maskImage.startsWith("linear") && !maskImage.startsWith("radial")) {
      let svgUrl = maskImage.trim();
      if (svgUrl.startsWith("url(")) {
        const match = svgUrl.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (match) svgUrl = match[1];
      }
      if ((svgUrl.includes(".svg") || svgUrl.startsWith("/") || svgUrl.startsWith("http")) && !svgUrl.startsWith("data:")) {
        const id = clipPath.match(/#([^)]+)/)?.[1];
        if (id) return `url(${svgUrl}#${id})`;
      }
    }
    return clipPath;
  }, [clipPath, maskImage]);
  const hasMask = !!maskValue || !!finalClipPath;
  const maskStyles = hasMask ? {
    // Only apply maskImage if it's NOT just the container for the clipPath
    // If finalClipPath is a combined reference url(file.svg#id), we skip maskImage: url(file.svg)
    ...maskValue && (!finalClipPath || !finalClipPath.includes("#") || !finalClipPath.includes(maskValue.replace(/url\(['"]?|['"]?\)/g, ""))) ? {
      maskImage: maskValue,
      WebkitMaskImage: maskValue,
      maskSize,
      WebkitMaskSize: maskSize,
      maskPosition,
      WebkitMaskPosition: maskPosition,
      maskRepeat,
      WebkitMaskRepeat: maskRepeat
    } : {},
    ...finalClipPath ? {
      clipPath: finalClipPath,
      WebkitClipPath: finalClipPath
    } : {}
  } : {};
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "bg-surface-container-low relative w-full h-full group",
        !hasMask && "overflow-hidden",
        className
      ),
      style: maskStyles,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            loading: priority ? "eager" : "lazy",
            width: "800",
            height: "600",
            className: cn("w-full h-full object-cover transition-opacity duration-300 block", enableParallax && "scale-110"),
            style: enableParallax ? { transform: `translateY(${offset}px) scale(1.1)` } : void 0
          }
        ),
        attribution && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-2 right-2 max-w-[80%] bg-black/60 text-white text-[9px] md:text-[10px] px-2 py-1 rounded backdrop-blur-sm shadow-sm pointer-events-auto opacity-70 hover:opacity-100 transition-opacity z-10 font-sans",
            children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: attribution }, className: "flex items-center gap-1 [&>a]:underline [&>a]:hover:text-blue-300" })
          }
        )
      ]
    }
  );
};
var ActionButtons = ({ buttons, className }) => {
  const { itemCount, checkoutUrl, setCartOpen } = useCart();
  const { siteData } = useSite();
  const [openDropdown, setOpenDropdown] = useState(null);
  if (!buttons || buttons.length === 0) return null;
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-wrap gap-4 items-center mt-6 md:mt-8", className), children: buttons.map((btn, idx) => {
    const isViewCart = btn.action === "viewCart";
    const isGoToCheckout = btn.action === "goToCheckout";
    const isSwitchConcept = btn.action === "switch-concept";
    if (isSwitchConcept) {
      const concepts = siteData?.mountableConcepts || [];
      if (concepts.length === 0) return null;
      const isOpen = openDropdown === idx;
      return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: btn.style,
            onClick: () => setOpenDropdown(isOpen ? null : idx),
            className: "w-full md:w-auto flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Globe, { size: 16 }),
              btn.text,
              /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: cn("transition-transform", isOpen && "rotate-180") })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-50", children: concepts.map((c) => /* @__PURE__ */ jsx(
          "a",
          {
            href: `/${c.slug}`,
            className: "block px-4 py-2 text-sm text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800",
            children: c.name
          },
          c.id
        )) }),
        isOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpenDropdown(null) })
      ] }, idx);
    }
    const showCartBadge = isViewCart || isGoToCheckout;
    const badgeText = showCartBadge ? itemCount > 0 ? itemCount.toString() : void 0 : btn.badgeText;
    let href = btn.href;
    let onClick = void 0;
    if (isGoToCheckout) {
      href = checkoutUrl || btn.href;
    } else if (isViewCart) {
      href = void 0;
      onClick = () => setCartOpen(true);
    }
    return /* @__PURE__ */ jsx(
      Button,
      {
        variant: btn.style,
        href,
        onClick,
        badgeText,
        icon: btn.icon,
        className: "w-full md:w-auto",
        children: btn.text
      },
      idx
    );
  }) });
};
var SectionHeading = ({ children, design, className }) => {
  const Tag = design?.seo?.headingLevel || "h2";
  return /* @__PURE__ */ jsx(Tag, { className, children });
};
var SectionBase = ({ children, className, id, design }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const animation = design?.animation || "none";
  const duration = design?.animationDuration || "normal";
  const replayToken = design?.replayToken || 0;
  const Tag = design?.seo?.tag || "section";
  useEffect(() => {
    setIsVisible(false);
    if (animation === "none") {
      setIsVisible(true);
      return;
    }
    let observer;
    let timer;
    timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    }, 50);
    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [animation, duration, id, replayToken]);
  const getAnimationClasses = () => {
    if (animation === "none") return "";
    const base = "transition-all ease-out transform";
    const durationClass = duration === "fast" ? "duration-500" : duration === "slow" ? "duration-1000" : "duration-700";
    const stateClass = isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : cn(
      "opacity-0",
      animation === "slide-up" && "translate-y-8",
      animation === "slide-left" && "-translate-x-8",
      animation === "slide-right" && "translate-x-8",
      animation === "zoom-in" && "scale-95",
      animation === "fade-in" && ""
      // just opacity
    );
    return `${base} ${durationClass} ${stateClass}`;
  };
  return /* @__PURE__ */ jsx(
    Tag,
    {
      id,
      ref,
      className: cn(
        "px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 bg-background overflow-hidden",
        className
      ),
      "data-animation": animation,
      children: /* @__PURE__ */ jsx("div", { className: cn("container mx-auto", getAnimationClasses()), children })
    }
  );
};
var FeatureDetails = ({ details, style = "checkmarks", className }) => {
  if (!details || details.length === 0) return null;
  const getIcon = (index) => {
    switch (style) {
      case "checkmarks":
        return /* @__PURE__ */ jsx("span", { className: "mt-1 text-primary shrink-0", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) });
      case "bullets":
        return /* @__PURE__ */ jsx("span", { className: "mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" });
      case "numbers":
        return /* @__PURE__ */ jsxs("span", { className: "mt-0.5 text-sm font-bold text-primary shrink-0 min-w-[1.5rem]", children: [
          index + 1,
          "."
        ] });
      case "minimal":
        return null;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx("ul", { className: cn("mt-4 space-y-3", className), children: details.map((detail, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
    getIcon(idx),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground/90 block leading-relaxed", children: detail.text }),
      detail.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/60 mt-1 leading-relaxed", children: detail.description })
    ] })
  ] }, idx)) });
};
var ProseContainer = ({ children, className }) => {
  return /* @__PURE__ */ jsx("div", { className: cn(
    "prose prose-neutral dark:prose-invert max-w-none",
    "prose-headings:font-heading prose-headings:font-bold",
    "prose-p:text-foreground/70 prose-p:leading-relaxed",
    "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
    className
  ), children });
};
var MobileMenu = ({ isOpen, links, buttons }) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: cn(
      "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-[5%] transition-transform duration-300 ease-in-out md:hidden",
      isOpen ? "translate-x-0" : "translate-x-full"
    ),
    "data-role": "mobile-menu",
    children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 text-center", children: links.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "block text-xl font-medium text-foreground py-2", children: link.title }, idx)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-4", children: /* @__PURE__ */ jsx(ActionButtons, { buttons, className: "flex-col w-full mt-0 gap-3" }) })
    ]
  }
);
var Navbar1 = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "bg-base-100 shadow-sm sticky top-0 z-50 w-full relative", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto h-16 md:h-20 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl tracking-tight text-foreground flex-shrink-0 z-50 justify-self-start", "aria-label": "Homepage", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-6 lg:gap-8 items-center justify-self-center w-full justify-center", children: navLinks.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "text-base font-medium text-foreground hover:text-primary/80 transition-colors whitespace-nowrap", children: link.title }, idx)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-self-end", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "mt-0 md:mt-0" }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", "aria-label": "Toggle menu", "data-role": "mobile-menu-toggle", children: [
          /* @__PURE__ */ jsx("div", { className: isOpen ? "hidden" : "block", "data-icon": "menu", children: /* @__PURE__ */ jsx(Menu, { size: 24 }) }),
          /* @__PURE__ */ jsx("div", { className: isOpen ? "block" : "hidden", "data-icon": "close", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar2 = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "bg-base-100 shadow-sm sticky top-0 z-50 w-full relative", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto h-16 md:h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl tracking-tight text-foreground z-50", "aria-label": "Homepage", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-6 lg:gap-8 items-center", children: navLinks.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "text-base font-medium text-foreground hover:text-primary/80 transition-colors whitespace-nowrap", children: link.title }, idx)) }),
        data.content.buttons && data.content.buttons.length > 0 && navLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border/70" }),
        /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "mt-0 md:mt-0" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", "aria-label": "Toggle menu", "data-role": "mobile-menu-toggle", children: [
        /* @__PURE__ */ jsx("div", { className: isOpen ? "hidden" : "block", "data-icon": "menu", children: /* @__PURE__ */ jsx(Menu, { size: 24 }) }),
        /* @__PURE__ */ jsx("div", { className: isOpen ? "block" : "hidden", "data-icon": "close", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar3 = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  const half = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, half);
  const rightLinks = navLinks.slice(half);
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full relative", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-16 md:h-20 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-6 lg:gap-8 items-center justify-start", children: leftLinks.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "text-base font-medium text-foreground hover:text-primary/80 transition-colors whitespace-nowrap", children: link.title }, idx)) }),
      /* @__PURE__ */ jsx("div", { className: "justify-self-start md:justify-self-center z-50", children: /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl tracking-tight text-foreground", "aria-label": "Homepage", children: data.content.heading || "Brand" }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-6 lg:gap-8 items-center justify-end align-middle", children: [
        rightLinks.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "text-base font-medium text-foreground hover:text-primary/80 transition-colors whitespace-nowrap", children: link.title }, idx)),
        /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "mt-0 ml-6 md:mt-0" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden z-50 justify-self-end", children: /* @__PURE__ */ jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", "aria-label": "Toggle menu", "data-role": "mobile-menu-toggle", children: [
        /* @__PURE__ */ jsx("div", { className: isOpen ? "hidden" : "block", "data-icon": "menu", children: /* @__PURE__ */ jsx(Menu, { size: 24 }) }),
        /* @__PURE__ */ jsx("div", { className: isOpen ? "block" : "hidden", "data-icon": "close", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar4 = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full relative", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-16 md:h-20 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl tracking-tight text-foreground flex-shrink-0 z-50", "aria-label": "Homepage", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-1 max-w-md mx-4", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", size: 18 }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search...",
            className: "w-full pl-10 pr-4 py-2 border border-border rounded-full bg-surface-container-high focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-colors"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 align-middle", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "mt-0 md:mt-0" }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", "aria-label": "Toggle menu", "data-role": "mobile-menu-toggle", children: [
          /* @__PURE__ */ jsx("div", { className: isOpen ? "hidden" : "block", "data-icon": "menu", children: /* @__PURE__ */ jsx(Menu, { size: 24 }) }),
          /* @__PURE__ */ jsx("div", { className: isOpen ? "block" : "hidden", "data-icon": "close", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-[5%] transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        ),
        "data-role": "mobile-menu",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400", size: 20 }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search...",
                className: "w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-base"
              }
            )
          ] }) }),
          navLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 text-center border-t border-border pt-6", children: navLinks.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "block text-xl font-medium text-foreground py-2", children: link.title }, idx)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pb-8 flex flex-col gap-4", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "flex-col w-full mt-0 gap-3" }) })
        ]
      }
    )
  ] });
};
var Navbar5 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-20 grid grid-cols-[auto_1fr_auto] items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-2xl tracking-tight text-foreground flex-shrink-0 z-50", "aria-label": "Homepage", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-8 items-center h-full", children: navLinks.map((link, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative h-full flex items-center group",
          onMouseEnter: () => setHoveredLink(link.title),
          onMouseLeave: () => setHoveredLink(null),
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.url || "#",
                className: "text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1",
                children: [
                  link.title,
                  link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: cn("transition-transform duration-200", hoveredLink === link.title ? "rotate-180" : "") })
                ]
              }
            ),
            link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx("div", { className: cn(
              "absolute top-full left-0 w-[900px] -ml-[100px] bg-background border border-border shadow-2xl rounded-b-xl p-0 transition-all duration-200 opacity-0 translate-y-2 invisible overflow-hidden",
              hoveredLink === link.title ? "opacity-100 translate-y-0 visible" : ""
            ), children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 divide-x divide-border", children: link.sub_items.map((subItem, subIdx) => {
              const isFeatured = subItem.badge === "featured" || subItem.details_style === "minimal";
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    "p-6 flex flex-col h-full",
                    isFeatured ? "bg-emerald-400 text-black" : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  ),
                  children: [
                    subItem.badge && subItem.badge !== "featured" && /* @__PURE__ */ jsx("span", { className: "inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 self-start", children: subItem.badge }),
                    isFeatured && /* @__PURE__ */ jsx("span", { className: "inline-block px-2 py-0.5 bg-black text-white text-xs font-bold mb-4 self-start", children: "Featured" }),
                    /* @__PURE__ */ jsx("h3", { className: cn("font-semibold text-lg mb-2", isFeatured ? "text-black" : "text-foreground"), children: subItem.title }),
                    subItem.description && /* @__PURE__ */ jsx("p", { className: cn("text-sm leading-relaxed mb-6 flex-grow", isFeatured ? "text-black/80 font-medium" : "text-muted-foreground"), children: subItem.description }),
                    subItem.sub_items && subItem.sub_items.length > 0 && /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-4", children: subItem.sub_items.map((child, childIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: child.url || "#", className: "text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5", children: child.title }) }, childIdx)) }),
                    /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4 flex justify-end", children: /* @__PURE__ */ jsx("div", { className: cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1",
                      isFeatured ? "bg-black text-white" : "bg-primary text-primary-foreground"
                    ), children: /* @__PURE__ */ jsx(ChevronDown, { className: "rotate-[-90deg] w-4 h-4" }) }) })
                  ]
                },
                subIdx
              );
            }) }) })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 justify-self-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("button", { className: "text-foreground hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Search, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm font-medium text-foreground hover:text-primary transition-colors", children: "Login" }),
          /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "mt-0 md:mt-0" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", "aria-label": "Toggle menu", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar6 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-24 grid grid-cols-[auto_1fr_auto] items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-2xl tracking-tight text-foreground flex-shrink-0 z-50", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-8 items-center h-full justify-center", children: navLinks.map((link, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative h-full flex items-center group",
          onMouseEnter: () => setHoveredLink(link.title),
          onMouseLeave: () => setHoveredLink(null),
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.url || "#",
                className: "text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1.5",
                children: [
                  link.title,
                  link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: cn("transition-transform duration-200", hoveredLink === link.title ? "rotate-180" : "") })
                ]
              }
            ),
            link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx("div", { className: cn(
              "fixed left-0 w-full bg-background border-b border-border shadow-md transition-all duration-300 transform origin-top z-40",
              hoveredLink === link.title ? "opacity-100 visible top-[96px]" : "opacity-0 invisible top-[100px]"
            ), children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-[5%] py-12", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-8", children: link.sub_items.map((item, itemIdx) => /* @__PURE__ */ jsxs("a", { href: item.url || "#", className: "group/item block space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative", children: [
                item.image ? /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: item.image,
                    alt: item.title,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  }
                ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center text-neutral-300", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full border-2 border-current flex items-center justify-center opacity-50", children: /* @__PURE__ */ jsx(ArrowRight, { size: 20 }) }) }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg text-foreground group-hover/item:text-primary transition-colors mb-1", children: item.title }),
                item.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2", children: item.description })
              ] })
            ] }, itemIdx)) }) }) })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-self-end", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar7 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-20 grid grid-cols-[auto_1fr_auto] items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-2xl tracking-tight text-foreground flex-shrink-0 z-50", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-10 items-center h-full", children: navLinks.map((link, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative h-full flex items-center group",
          onMouseEnter: () => setHoveredLink(link.title),
          onMouseLeave: () => setHoveredLink(null),
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.url || "#",
                className: "text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors flex items-center gap-1",
                children: [
                  link.title,
                  link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: cn("transition-transform duration-200", hoveredLink === link.title ? "rotate-180" : "") })
                ]
              }
            ),
            link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsxs("div", { className: cn(
              "absolute top-full left-0 w-[800px] bg-background border border-border shadow-2xl rounded-xl p-0 grid grid-cols-[2fr_1fr] transition-all duration-200 opacity-0 translate-y-2 invisible overflow-hidden",
              hoveredLink === link.title ? "opacity-100 translate-y-4 visible" : ""
            ), children: [
              /* @__PURE__ */ jsx("div", { className: "p-8 grid grid-cols-2 gap-8 bg-background", children: link.sub_items.slice(0, 4).map((col, colIdx) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("h3", { className: "font-bold text-foreground text-sm flex items-center gap-2", children: [
                  col.avatar_or_icon && /* @__PURE__ */ jsx("span", { className: "text-primary text-lg", children: col.avatar_or_icon }),
                  col.title
                ] }),
                col.sub_items && col.sub_items.length > 0 && /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: col.sub_items.map((item, itemIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.url || "#", className: "text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors block", children: item.title }) }, itemIdx)) })
              ] }, colIdx)) }),
              /* @__PURE__ */ jsxs("div", { className: "bg-neutral-50 dark:bg-neutral-900 p-8 flex flex-col justify-between relative overflow-hidden", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "New Arrivals" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 mb-6", children: "Check out the latest collection for this season." }),
                  /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center text-sm font-semibold text-primary hover:underline gap-1", children: [
                    "Shop Now ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" })
              ] })
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-self-end", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden z-50", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 -mr-2 text-foreground focus:outline-none", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var renderIcon = (name) => {
  switch (name) {
    case "Zap":
      return /* @__PURE__ */ jsx(Zap, { size: 20 });
    case "Shield":
      return /* @__PURE__ */ jsx(Shield, { size: 20 });
    case "Star":
      return /* @__PURE__ */ jsx(Star, { size: 20 });
    case "Heart":
      return /* @__PURE__ */ jsx(Heart, { size: 20 });
    default:
      return /* @__PURE__ */ jsx(Star, { size: 20 });
  }
};
var Navbar8 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "border-b border-border bg-background sticky top-0 z-50 w-full", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[5%] relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-6 items-center h-full justify-start", children: navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative h-full flex items-center group",
          onMouseEnter: () => setHoveredLink(link.title),
          onMouseLeave: () => setHoveredLink(null),
          children: [
            /* @__PURE__ */ jsxs("a", { href: link.url || "#", className: "text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1", children: [
              link.title,
              link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(ChevronDown, { size: 14 })
            ] }),
            link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx("div", { className: cn("absolute top-full left-0 w-[400px] bg-background border border-border shadow-xl rounded-xl p-4 grid grid-cols-2 gap-2 transition-all opacity-0 translate-y-2 invisible", hoveredLink === link.title ? "opacity-100 translate-y-0 visible" : ""), children: link.sub_items.map((item, i) => /* @__PURE__ */ jsxs("a", { href: item.url || "#", className: "flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group/item", children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary mt-1", children: renderIcon(item.avatar_or_icon) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm text-foreground", children: item.title }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: item.description })
              ] })
            ] }, i)) })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-2xl tracking-tight text-foreground flex-shrink-0 z-50 justify-self-center", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-6 items-center h-full justify-end", children: [
        navLinks.slice(Math.ceil(navLinks.length / 2)).map((link, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative h-full flex items-center group",
            onMouseEnter: () => setHoveredLink(link.title),
            onMouseLeave: () => setHoveredLink(null),
            children: /* @__PURE__ */ jsxs("a", { href: link.url || "#", className: "text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1", children: [
              link.title,
              link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(ChevronDown, { size: 14 })
            ] })
          },
          idx
        )),
        /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden justify-self-end", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 text-foreground focus:outline-none", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Navbar9 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = data.content.items || [];
  return /* @__PURE__ */ jsxs("nav", { className: "bg-background sticky top-0 z-50 w-full", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsx("div", { className: "px-[2%] border-b border-border relative z-50 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-extrabold text-2xl tracking-tighter text-foreground uppercase", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center h-full", children: navLinks.map((link, idx) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full flex items-center",
          onMouseEnter: () => setHoveredLink(link.title),
          onMouseLeave: () => setHoveredLink(null),
          children: /* @__PURE__ */ jsx(
            "a",
            {
              href: link.url || "#",
              className: "px-6 h-full flex items-center text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors",
              children: link.title
            }
          )
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons }) }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), className: "p-2 text-foreground focus:outline-none", children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }) })
      ] })
    ] }) }),
    navLinks.map((link, idx) => link.sub_items && link.sub_items.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 transform origin-top",
          hoveredLink === link.title ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        ),
        onMouseEnter: () => setHoveredLink(link.title),
        onMouseLeave: () => setHoveredLink(null),
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto h-full px-[5%] py-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-12 h-full max-h-[600px]", children: link.sub_items.map((col, colIdx) => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-black text-3xl text-foreground tracking-tight", children: col.title }),
          col.sub_items && col.sub_items.length > 0 && /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: col.sub_items.map((item, itemIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: item.url || "#", className: "group flex items-center justify-between text-lg font-medium text-neutral-500 hover:text-foreground transition-colors border-b border-transparent hover:border-border pb-1", children: [
            item.title,
            /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" })
          ] }) }, itemIdx)) })
        ] }, colIdx)) }) })
      },
      idx
    )),
    /* @__PURE__ */ jsx(MobileMenu, { isOpen, links: navLinks, buttons: data.content.buttons })
  ] });
};
var Header1 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "header", 800, 640),
        alt: data.content.image_alt || "header image",
        priority: true,
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "aspect-[4/3] lg:aspect-auto h-full"
      }
    ) })
  ] }) });
};
var Header2 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full order-2 lg:order-1", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "header-2", 800, 640),
        alt: data.content.image_alt || "header image",
        priority: true,
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "aspect-[4/3] lg:aspect-auto h-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl order-1 lg:order-2", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] })
  ] }) });
};
var Header9 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-3xl", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg max-w-xl mx-auto text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 md:mt-20 w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "header-center", 1200, 600),
        alt: data.content.image_alt || "header image",
        priority: true,
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "aspect-video"
      }
    ) })
  ] });
};
var Header18 = ({ data }) => {
  const imgSrc = getImageSrc(data.content, "header-18", 1600, 900);
  const Tag = data.design?.seo?.tag || "header";
  return /* @__PURE__ */ jsxs(Tag, { id: data.id, className: "relative flex items-center min-h-[600px] lg:min-h-[800px] py-16 md:py-24 text-white overflow-hidden group", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: imgSrc,
          alt: data.content.image_alt || "hero background",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      data.content.image_attribution && /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 max-w-[80%] bg-surface-container/60 text-white text-[9px] md:text-[10px] px-2 py-1 rounded backdrop-blur-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity z-10 font-sans", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: data.content.image_attribution }, className: "flex items-center gap-1 [&>a]:underline [&>a]:hover:text-blue-300" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-[5%] relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] text-white", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-white/90", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 items-center mt-6 md:mt-8", children: data.content.buttons?.map((btn, idx) => /* @__PURE__ */ jsx(
        Button,
        {
          variant: btn.style === "primary" ? "primary" : "outline",
          href: btn.href,
          className: cn("w-full md:w-auto", btn.style !== "primary" ? "border-white text-white hover:bg-white hover:text-black" : ""),
          children: btn.text
        },
        idx
      )) })
    ] }) })
  ] });
};
var Header30 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg mb-6 md:mb-8 text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full max-w-md", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `email-${data.id}`, className: "sr-only", children: "Email address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: `email-${data.id}`,
            type: "email",
            placeholder: "Enter your email",
            className: "h-11 px-4 border border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-foreground flex-1 w-full placeholder:text-muted-foreground",
            "aria-label": "Email address"
          }
        ),
        /* @__PURE__ */ jsx(Button, { className: "w-full sm:w-auto", children: "Sign Up" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "By signing up, you agree to our Terms and Conditions." })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "header-30", 800, 640),
        alt: data.content.image_alt || "header image",
        priority: true,
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        className: "aspect-[4/3]"
      }
    ) })
  ] }) });
};
var Header46 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 md:gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "text-4xl font-bold md:text-6xl lg:text-7xl leading-[1.1]", children: data.content.heading }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
        /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "header-46", 1200, 600),
        alt: data.content.image_alt || "header image",
        priority: true,
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "max-h-[60vh] aspect-[2/1] w-full"
      }
    ) })
  ] }) });
};
var Feature1 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 md:gap-y-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2 lg:col-span-3 mb-4 max-w-2xl", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md max-w-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-5 md:mb-6", children: /* @__PURE__ */ jsx(Zap, { className: "w-12 h-12", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold md:mb-4 md:text-2xl", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80", children: item.description }),
      /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style })
    ] }, i))
  ] }) });
};
var Feature2 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 max-w-3xl mx-auto", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold text-primary", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl lg:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary bg-opacity-10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(Layout, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 leading-relaxed", children: item.description }),
      /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style })
    ] }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" }) })
  ] });
};
var Feature3 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold text-primary", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-3xl font-bold md:text-4xl lg:text-5xl leading-tight", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-foreground opacity-70", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8", children: data.content.items?.slice(0, 4).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-1 p-2 rounded-lg bg-secondary bg-opacity-20 text-secondary-foreground", children: /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70", children: item.description }),
          /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style, className: "mt-2" })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "feature-3", 800, 600),
        alt: data.content.image_alt || "Features overview",
        className: "rounded-2xl shadow-2xl",
        enableParallax: data.design?.parallax
      }
    ) })
  ] }) });
};
var Feature4 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
      data.content.tagline && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-4xl font-bold md:text-5xl lg:text-6xl max-w-4xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-foreground opacity-70 max-w-2xl mb-8", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "w-full max-w-5xl mb-16", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: getImageSrc(data.content, "feature-4", 1200, 600),
          alt: data.content.image_alt || "Platform interface",
          className: "rounded-xl shadow-2xl border border-border aspect-[2/1]"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 rounded-full bg-secondary bg-opacity-10 text-secondary-foreground", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-bold", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70", children: item.description }),
      /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style, className: "mt-3" })
    ] }, i)) })
  ] });
};
var Feature5 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold text-primary", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-3xl font-bold md:text-4xl lg:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-foreground opacity-70", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 flex flex-col gap-12", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-none", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary bg-opacity-10 text-primary text-xl md:text-2xl font-bold", children: i + 1 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold md:text-2xl", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 leading-relaxed", children: item.description }),
        /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style })
      ] })
    ] }, i)) })
  ] }) });
};
var Feature6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 md:text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl lg:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "relative overflow-hidden rounded-2xl p-8 border border-border group transition-all hover:shadow-lg",
          i === 0 ? "md:col-span-2 md:row-span-2 bg-primary bg-opacity-5" : "bg-card",
          i === 3 ? "md:col-span-2 bg-secondary bg-opacity-5" : ""
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex p-3 rounded-lg bg-background shadow-sm", children: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx("h3", { className: cn("font-bold mb-2", i === 0 ? "text-3xl" : "text-xl"), children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70", children: item.description }),
              /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style })
            ] }),
            i === 0 && /* @__PURE__ */ jsx("div", { className: "mt-8 relative h-48 rounded-lg overflow-hidden border border-border opacity-50 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-primary to-transparent opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" })
        ]
      },
      i
    )) })
  ] });
};
var Feature16 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-1", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 md:mb-8 md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-4 py-2", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start self-start", children: [
        /* @__PURE__ */ jsx("div", { className: "mr-4 flex-none mt-1", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: item.description }),
        /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style, className: "mt-2" })
      ] }, i)) }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "order-2 w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "feature-16", 800, 800),
        alt: data.content.image_alt || "feature illustration",
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "aspect-square"
      }
    ) })
  ] }) });
};
var Feature24 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1 w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "feature-24", 800, 800),
        alt: data.content.image_alt || "feature illustration",
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "aspect-square"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
      data.content.tagline && /* @__PURE__ */ jsx("p", { className: "mb-3 font-semibold md:mb-4", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 md:mb-8 md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-4 py-2", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start self-start", children: [
        /* @__PURE__ */ jsx("div", { className: "mr-4 flex-none mt-1", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: item.description }),
        /* @__PURE__ */ jsx(FeatureDetails, { details: item.feature_details, style: item.details_style, className: "mt-2" })
      ] }, i)) }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] })
  ] }) });
};
var Logos1 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-12 md:py-16 border-b border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-8 font-semibold text-center text-foreground opacity-70 dark:opacity-80", children: data.content.heading || "Trusted by the world's best companies" }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 dark:opacity-60 dark:hover:opacity-100", children: [
      item.image ? /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "h-8 w-auto max-w-[120px] object-contain" }) : /* @__PURE__ */ jsx(Box, { className: "w-8 h-8" }),
      /* @__PURE__ */ jsx("span", { className: "font-bold text-xl", children: item.title })
    ] }, i)) })
  ] }) });
};
var Logos2 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "py-16 md:py-24 bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "text-3xl font-bold md:text-4xl mb-4", children: data.content.heading || "Partners" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 max-w-2xl", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-col items-center justify-center p-8 bg-surface-container border border-outline-variant rounded-lg hover:border-outline transition-colors", children: [
      item.image ? /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "h-10 w-auto max-w-[150px] object-contain mb-3" }) : /* @__PURE__ */ jsx(Box, { className: "w-10 h-10 mb-3 text-foreground" }),
      /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: item.title })
    ] }, i)) })
  ] });
};
var Stats1 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12", children: data.content.items?.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-foreground pl-8 py-2", children: [
    /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold md:text-6xl lg:text-7xl mb-2 leading-none", children: item.title }),
    /* @__PURE__ */ jsx("h3", { className: "text-md md:text-lg font-semibold text-foreground opacity-70 dark:opacity-80", children: item.description })
  ] }, i)) }) });
};
var Stats2 = ({ data }) => {
  const getIcon = (name) => {
    switch (name?.toLowerCase()) {
      case "users":
        return /* @__PURE__ */ jsx(Users, { className: "w-8 h-8" });
      case "server":
        return /* @__PURE__ */ jsx(Server, { className: "w-8 h-8" });
      case "globe":
        return /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8" });
      case "life-buoy":
        return /* @__PURE__ */ jsx(LifeBuoy, { className: "w-8 h-8" });
      default:
        return /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8" });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 bg-primary/10 text-primary rounded-full", children: getIcon(item.avatar_or_icon) }),
      /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold md:text-5xl mb-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-foreground opacity-70 dark:opacity-80 font-medium", children: item.description })
    ] }, i)) })
  ] });
};
var Stats3 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-8", children: data.content.items?.slice(0, 4).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-primary pl-6 py-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold md:text-5xl mb-2 text-foreground", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
    ] }, i)) })
  ] }) });
};
var Stats4 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16", children: /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: data.content.items?.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card bg-background p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center hover:border-primary transition-colors", children: [
      /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold md:text-6xl mb-4 text-primary", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-foreground mb-2", children: item.description }),
      item.list_items && /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-60", children: item.list_items[0] })
    ] }, i)) })
  ] });
};
var Stats5 = ({ data }) => {
  const imgSrc = getImageSrc(data.content, "stats-bg", 1600, 900);
  const Tag = data.design?.seo?.tag || "section";
  return /* @__PURE__ */ jsxs(Tag, { id: data.id, className: "relative py-24 md:py-32 overflow-hidden group", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: imgSrc,
          alt: data.content.image_alt || "stats background",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70" }),
      data.content.image_attribution && /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 right-2 max-w-[80%] bg-black/60 text-white text-[9px] md:text-[10px] px-2 py-1 rounded backdrop-blur-sm shadow-sm opacity-70 group-hover:opacity-100 transition-opacity z-10 font-sans", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: data.content.image_attribution }, className: "flex items-center gap-1 [&>a]:underline [&>a]:hover:text-blue-300" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-[5%] relative z-10 text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "md:text-lg text-white/80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold md:text-5xl mb-2 text-white", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-white/70 font-medium uppercase tracking-wide", children: item.description })
      ] }, i)) })
    ] })
  ] });
};
var Stats6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-border -z-10" }),
      data.content.items?.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-md ring-4 ring-background", children: i + 1 }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80", children: item.description })
      ] }, i))
    ] })
  ] });
};
var Testimonial1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card flex w-full flex-col border border-border p-6 md:p-8 bg-background h-full justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex gap-1", children: [...Array(item.rating || 5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 20, fill: "currentColor", className: "text-foreground" }, i2)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "md:text-md font-bold mb-6 flex-1 text-foreground/90", children: [
        '"',
        item.description,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
            alt: item.title,
            className: "h-12 w-12 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground/90", children: item.title }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: "Customer" })
        ] })
      ] })
    ] }, i)) })
  ] });
};
var Testimonial2 = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  useEffect(() => {
    const handleResizeAndScroll = () => {
      checkScroll();
    };
    window.addEventListener("resize", handleResizeAndScroll);
    if (scrollRef.current) {
      checkScroll();
    }
    return () => {
      window.removeEventListener("resize", handleResizeAndScroll);
    };
  }, [data.content.items]);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth ? container.firstElementChild.clientWidth + 32 : 300;
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      data.content.items && data.content.items.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: checkScroll,
        className: "flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-[5%] px-[5%] md:mx-0 md:px-0",
        style: { scrollbarWidth: "none", msOverflowStyle: "none" },
        children: data.content.items?.map((item, i) => /* @__PURE__ */ jsx("div", { className: "snap-start flex-shrink-0 w-[85%] sm:w-[50%] lg:w-[33%]", children: /* @__PURE__ */ jsxs("div", { className: "card flex w-full flex-col border border-border p-6 md:p-8 bg-background h-full justify-between rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex gap-1", children: [...Array(item.rating || 5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 20, fill: "currentColor", className: "text-yellow-400" }, i2)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "md:text-md font-bold mb-6 flex-1 text-foreground/90 leading-relaxed", children: [
            '"',
            item.description,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
                alt: item.title,
                className: "h-12 w-12 rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground/90", children: item.title }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: item.avatar_or_icon || "Customer" })
            ] })
          ] })
        ] }) }, i))
      }
    )
  ] });
};
var Testimonial3 = ({ data }) => {
  const item = data.content.items?.[0] || { title: "Name Surname", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", rating: 5, image: "" };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-8 flex gap-1", children: [...Array(item.rating || 5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 24, fill: "currentColor", className: "text-yellow-400" }, i)) }),
    /* @__PURE__ */ jsxs("blockquote", { className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 leading-tight text-foreground/90", children: [
      '"',
      item.description,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-center border-l-4 border-foreground pl-5 text-left", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
          alt: item.title,
          className: "h-14 w-14 rounded-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg text-foreground/90", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "text-foreground opacity-70 dark:opacity-80", children: "CEO, Company Name" })
      ] })
    ] })
  ] }) });
};
var Testimonial4 = ({ data }) => {
  const items = data.content.items || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: items.map((item, i) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: item.url || "#",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "card group relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border",
        title: `Watch ${item.title}`,
        children: [
          /* @__PURE__ */ jsx(
            ResponsiveImage,
            {
              src: item.image || getImageSrc(data.content, `video-thumb-${i}`, 640, 360),
              alt: item.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx(PlayCircle, { size: 64, className: "text-white opacity-80 group-hover:opacity-100 transition-opacity", fill: "currentColor" }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80", children: item.description })
          ] })
        ]
      },
      i
    )) })
  ] });
};
var Testimonial5 = ({ data }) => {
  const items = data.content.items || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6", children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card break-inside-avoid flex flex-col p-6 bg-surface-container border border-border rounded-xl shadow-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex gap-1", children: [...Array(item.rating || 5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor", className: "text-yellow-400" }, i2)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-md font-medium text-foreground/90 flex-1 leading-relaxed mb-4", children: [
        '"',
        item.description,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
            alt: item.title,
            className: "h-10 w-10 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm text-foreground/90", children: item.title }),
          item.avatar_or_icon && /* @__PURE__ */ jsx("div", { className: "text-xs text-foreground opacity-70 dark:opacity-80", children: item.avatar_or_icon })
        ] })
      ] })
    ] }, i)) })
  ] });
};
var Testimonial6 = ({ data }) => {
  const items = data.content.items || [];
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card p-6 border border-border rounded-lg bg-background shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
            alt: item.title,
            className: "h-12 w-12 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground/90", children: item.title }),
          item.avatar_or_icon && /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: item.avatar_or_icon })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-md text-foreground/90 leading-relaxed mb-4", children: [
        '"',
        item.description,
        '"'
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(item.rating || 5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor", className: "text-yellow-400" }, i2)) })
    ] }, i)) })
  ] }) });
};
var Testimonial7 = ({ data }) => {
  const items = data.content.items || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-col items-center text-center p-8 bg-background border border-border rounded-xl shadow-lg", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image || getImageSrc(data.content, `quote-${item.title}`, 150, 150),
          alt: item.title,
          className: "h-20 w-20 rounded-full object-cover mb-6 border-4 border-primary/10"
        }
      ),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-xl md:text-2xl font-bold text-foreground/90 mb-6 leading-snug", children: [
        '"',
        item.description,
        '"'
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.avatar_or_icon || getImageSrc(data.content, `logo-${item.title}`, 80, 40),
          alt: `${item.title} logo`,
          className: "h-8 object-contain"
        }
      )
    ] }, i)) })
  ] });
};
var SocialProof2 = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  useEffect(() => {
    const handleResizeAndScroll = () => {
      checkScroll();
    };
    window.addEventListener("resize", handleResizeAndScroll);
    if (scrollRef.current) {
      checkScroll();
    }
    return () => {
      window.removeEventListener("resize", handleResizeAndScroll);
    };
  }, [data.content.items]);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth ? container.firstElementChild.clientWidth + 32 : 300;
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      data.content.items && data.content.items.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: checkScroll,
        className: "flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-[5%] px-[5%] md:mx-0 md:px-0",
        style: { scrollbarWidth: "none", msOverflowStyle: "none" },
        children: data.content.items?.map((item, i) => /* @__PURE__ */ jsx("div", { className: "snap-start flex-shrink-0 w-[85%] sm:w-[50%] lg:w-[33%]", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col border border-border p-6 md:p-8 bg-background h-full justify-between rounded-xl shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex gap-1", children: [...Array(item.rating || 5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 20, fill: "currentColor", className: "text-yellow-400" }, i2)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "md:text-md font-bold mb-6 flex-1 text-foreground/90 leading-relaxed", children: [
            '"',
            item.description,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
                alt: item.title,
                className: "h-12 w-12 rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground/90", children: item.title }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: "Customer" })
            ] })
          ] })
        ] }) }, i))
      }
    )
  ] });
};
var SocialProof3 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold md:text-5xl mb-2 text-primary", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-foreground opacity-70 dark:opacity-80 font-medium", children: item.description })
    ] }, i)) })
  ] });
};
var SocialProof4 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-background border border-border rounded-xl shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image || getImageSrc(data.content, `partner-${item.title}`, 100, 100),
          alt: item.title,
          className: "h-16 w-auto object-contain mb-4"
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: item.description })
    ] }, i)) })
  ] });
};
var SocialProof5 = ({ data }) => {
  const item = data.content.items?.[0];
  if (!item) return null;
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card max-w-3xl mx-auto bg-neutral-50 dark:bg-neutral-900/50 border border-border rounded-xl p-8 md:p-12 shadow-lg flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx(Quote, { size: 48, className: "text-primary mb-6" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "text-xl md:text-2xl font-bold text-foreground/90 mb-8 leading-snug", children: [
        '"',
        item.description,
        '"'
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image || `https://i.pravatar.cc/150?u=${item.title}`,
          alt: item.title,
          className: "h-16 w-16 rounded-full object-cover mb-4 border-2 border-primary/20"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg text-foreground/90", children: item.title }),
      item.avatar_or_icon && /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: item.avatar_or_icon })
    ] })
  ] });
};
var SocialProof6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-col items-center text-center p-6 bg-background border border-border rounded-xl shadow-sm", children: [
      item.image ? /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "h-12 w-auto object-contain mb-4" }) : /* @__PURE__ */ jsx(Award, { size: 48, className: "text-primary mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 dark:opacity-80", children: item.description })
    ] }, i)) })
  ] });
};
var CTA1 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto", children: [
    /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
    /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
    /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
  ] }) });
};
var CTA2 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "cta-2", 800, 600),
        alt: data.content.image_alt || "cta image",
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        className: "aspect-[4/3] rounded-md"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] })
  ] }) });
};
var CTA3 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "cta-3", 800, 600),
        alt: data.content.image_alt || "cta image",
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        className: "aspect-[4/3] rounded-md"
      }
    ) })
  ] }) });
};
var CTA4 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
    /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 w-full", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "Enter your email",
          className: "h-12 px-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground flex-1 rounded-md placeholder:text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsx(Button, { className: "h-12 px-8", children: data.content.buttons?.[0]?.text || "Subscribe" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "By clicking Sign Up you're confirming that you agree with our Terms and Conditions." })
  ] }) });
};
var Pricing1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col border border-border p-8 rounded-md bg-background", children: [
      item.badge && /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4", children: item.badge }),
      /* @__PURE__ */ jsx("h3", { className: "text-md font-bold mb-2", children: item.title }),
      /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-6", children: item.description }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 mb-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: item.list_items ? item.list_items.map((f, fi) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-90", children: f })
      ] }, fi)) : ["Feature one", "Feature two", "Feature three"].map((f, fi) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-90", children: f })
      ] }, fi)) }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "w-full",
          variant: item.buttons?.[0]?.style,
          href: item.buttons?.[0]?.href,
          badgeText: item.buttons?.[0]?.badgeText,
          icon: item.buttons?.[0]?.icon,
          children: item.buttons?.[0]?.text || "Get Started"
        }
      )
    ] }, i)) })
  ] });
};
var Pricing2 = ({ data }) => {
  const featureColumn = data.content.items?.[0];
  const pricingPlans = data.content.items?.slice(1);
  if (!featureColumn || !pricingPlans) return null;
  const maxFeatures = Math.max(...pricingPlans.map((p) => p.list_items?.length || 0), featureColumn.list_items?.length || 0);
  const featureRows = Array.from({ length: maxFeatures });
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "justify-center" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto w-full border border-border rounded-lg bg-background", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left table-auto", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-surface-container border-b border-border", children: [
        /* @__PURE__ */ jsx("th", { className: "p-4 whitespace-nowrap text-sm font-bold text-foreground", children: featureColumn.title }),
        pricingPlans.map((plan, i) => /* @__PURE__ */ jsx("th", { className: "p-4 whitespace-nowrap text-sm font-bold text-foreground text-center", children: plan.title }, i))
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: featureRows.map((_, rowIndex) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border last:border-b-0", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-foreground/90 whitespace-nowrap", children: featureColumn.list_items?.[rowIndex] || "-" }),
        pricingPlans.map((plan, colIndex) => /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: plan.list_items?.[rowIndex] === "Check" ? /* @__PURE__ */ jsx(Check, { size: 20, className: "text-green-500 mx-auto" }) : plan.list_items?.[rowIndex] === "Cross" ? /* @__PURE__ */ jsx(X, { size: 20, className: "text-red-500 mx-auto" }) : /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: plan.list_items?.[rowIndex] || "-" }) }, colIndex))
      ] }, rowIndex)) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-surface-container border-t border-border", children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 text-sm font-bold text-foreground" }),
        pricingPlans.map((plan, i) => /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            className: "w-full",
            variant: plan.buttons?.[0]?.style,
            href: plan.buttons?.[0]?.href,
            badgeText: plan.buttons?.[0]?.badgeText,
            icon: plan.buttons?.[0]?.icon,
            children: plan.buttons?.[0]?.text || "Select Plan"
          }
        ) }, i))
      ] }) })
    ] }) })
  ] });
};
var Pricing3 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: cn(
      "flex flex-col border p-8 rounded-md bg-background relative",
      item.badge ? "border-primary ring-1 ring-primary shadow-lg" : "border-border shadow-sm"
    ), children: [
      item.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap", children: item.badge }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mt-4 mb-2", children: item.title }),
      /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-6", children: item.description }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 mb-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: item.list_items?.map((f, fi) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 flex-shrink-0 text-green-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-90", children: f })
      ] }, fi)) }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "w-full",
          variant: item.buttons?.[0]?.style,
          href: item.buttons?.[0]?.href,
          badgeText: item.buttons?.[0]?.badgeText,
          icon: item.buttons?.[0]?.icon,
          children: item.buttons?.[0]?.text || "Get Started"
        }
      )
    ] }, i)) })
  ] });
};
var Pricing4 = ({ data }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const monthlyPlans = data.content.items?.filter((item) => item.badge === "monthly");
  const yearlyPlans = data.content.items?.filter((item) => item.badge === "yearly");
  const plansToShow = isMonthly ? monthlyPlans : yearlyPlans;
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex bg-surface-container-high p-1 rounded-full shadow-inner", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMonthly(true),
            className: cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all",
              isMonthly ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
            ),
            children: "Monthly"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMonthly(false),
            className: cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all",
              !isMonthly ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
            ),
            children: "Yearly (-20%)"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-3", children: plansToShow?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col border border-border p-8 rounded-md bg-background", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: item.title?.replace(" (Monthly)", "").replace(" (Yearly)", "") }),
      /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-6", children: item.description }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 mb-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: item.list_items?.map((f, fi) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 flex-shrink-0 text-green-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-90", children: f })
      ] }, fi)) }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "w-full",
          variant: item.buttons?.[0]?.style,
          href: item.buttons?.[0]?.href,
          badgeText: item.buttons?.[0]?.badgeText,
          icon: item.buttons?.[0]?.icon,
          children: item.buttons?.[0]?.text || "Get Started"
        }
      )
    ] }, i)) })
  ] });
};
var Pricing5 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: getImageSrc(data.content, "enterprise-plan", 800, 600),
        alt: data.content.image_alt || "enterprise solution illustration",
        attribution: data.content.image_attribution,
        enableParallax: data.design?.parallax,
        className: "aspect-[4/3] rounded-md"
      }
    ) })
  ] }) });
};
var Pricing6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto", children: data.content.items?.slice(0, 2).map((item, i) => /* @__PURE__ */ jsxs("div", { className: cn(
      "flex flex-col border p-8 rounded-md bg-background relative",
      item.badge ? "border-primary ring-1 ring-primary shadow-lg" : "border-border shadow-sm"
    ), children: [
      item.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap", children: item.badge }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 mt-4", children: item.title }),
      /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-6", children: item.description }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 mb-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: item.list_items?.map((f, fi) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 flex-shrink-0 text-green-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-90", children: f })
      ] }, fi)) }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "w-full",
          variant: item.buttons?.[0]?.style,
          href: item.buttons?.[0]?.href,
          badgeText: item.buttons?.[0]?.badgeText,
          icon: item.buttons?.[0]?.icon,
          children: item.buttons?.[0]?.text || "Select Plan"
        }
      )
    ] }, i)) })
  ] });
};
var Contact1 = ({ data }) => {
  const contactInfo = data.content.items || [
    { title: "Email", description: "hello@relume.io" },
    { title: "Phone", description: "+1 (555) 000-0000" },
    { title: "Office", description: "123 Sample St, Sydney NSW 2000 AU" }
  ];
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { design: data.design, className: "mb-5 text-4xl font-bold md:mb-6 md::text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md mb-8 text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contactInfo.map((info, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
          info.title,
          ":"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-70 dark:opacity-80", children: info.description })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border border-border p-6 md:p-8 bg-background rounded-md", children: /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `fname-${data.id}`, className: "text-sm font-medium", children: "First name" }),
          /* @__PURE__ */ jsx("input", { id: `fname-${data.id}`, className: "flex h-10 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-md" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `lname-${data.id}`, className: "text-sm font-medium", children: "Last name" }),
          /* @__PURE__ */ jsx("input", { id: `lname-${data.id}`, className: "flex h-10 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-md" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `email-${data.id}`, className: "text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ jsx("input", { id: `email-${data.id}`, type: "email", className: "flex h-10 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-md" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `message-${data.id}`, className: "text-sm font-medium", children: "Message" }),
        /* @__PURE__ */ jsx("textarea", { id: `message-${data.id}`, className: "flex min-h-[120px] w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-muted-foreground rounded-md" })
      ] }),
      /* @__PURE__ */ jsx(Button, { className: "w-full", children: "Submit" })
    ] }) })
  ] }) });
};
var SocialContact1 = ({ data }) => {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanHandle = handle.replace("@", "");
    if (platform === "Instagram") {
      window.open(`https://instagram.com/${cleanHandle}`, "_blank");
    } else if (platform === "Twitter / X") {
      const tweet = encodeURIComponent(`${message} @${cleanHandle}`);
      window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
    } else if (platform === "LinkedIn") {
      window.open(`https://linkedin.com/in/${cleanHandle}`, "_blank");
    } else {
      const subject = encodeURIComponent(`Contact from ${name} via Website`);
      const body = encodeURIComponent(`Name: ${name}
Platform: ${platform}
Handle: ${handle}

Message:
${message}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1 border border-border p-6 md:p-8 bg-background rounded-md shadow-sm", children: /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `name-${data.id}`, className: "text-sm font-medium", children: "Full Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: `name-${data.id}`,
            value: name,
            onChange: (e) => setName(e.target.value),
            className: "flex h-10 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-neutral-500 rounded-md",
            placeholder: "Your name",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `platform-${data.id}`, className: "text-sm font-medium", children: "Preferred Platform" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: `platform-${data.id}`,
            value: platform,
            onChange: (e) => setPlatform(e.target.value),
            className: "flex h-10 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground rounded-md",
            children: [
              /* @__PURE__ */ jsx("option", { children: "Instagram" }),
              /* @__PURE__ */ jsx("option", { children: "Twitter / X" }),
              /* @__PURE__ */ jsx("option", { children: "LinkedIn" }),
              /* @__PURE__ */ jsx("option", { children: "Other" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `handle-${data.id}`, className: "text-sm font-medium", children: "Social Handle / URL" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(AtSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400", size: 16 }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: `handle-${data.id}`,
              value: handle,
              onChange: (e) => setHandle(e.target.value),
              className: "flex h-10 w-full border border-border pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-neutral-500 rounded-md",
              placeholder: "username",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `message-${data.id}`, className: "text-sm font-medium", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: `message-${data.id}`,
            value: message,
            onChange: (e) => setMessage(e.target.value),
            className: "flex min-h-[100px] w-full border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-foreground placeholder:text-neutral-500 rounded-md",
            placeholder: "What's on your mind?"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full gap-2", children: [
        /* @__PURE__ */ jsx(Share2, { size: 16 }),
        " Connect"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md mb-8 text-foreground opacity-70 dark:opacity-80", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: data.content.items?.map((info, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-semibold text-sm", children: [
          info.title,
          ":"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/80 dark:text-foreground/90 text-sm", children: info.description })
      ] }, i)) })
    ] })
  ] }) });
};
var SocialContact2 = ({ data }) => {
  const [handle, setHandle] = useState("");
  const businessHandle = data.content.socialLink || "brandname";
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://instagram.com/${businessHandle.replace("@", "")}`, "_blank");
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white", children: /* @__PURE__ */ jsx(Instagram, { size: 32 }) }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 md:text-lg", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto border border-border bg-background p-6 rounded-2xl shadow-sm", children: [
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `ig-email-${data.id}`, className: "text-xs font-bold uppercase text-neutral-500", children: "Email Address (Optional)" }),
          /* @__PURE__ */ jsx("input", { id: `ig-email-${data.id}`, type: "email", className: "w-full px-3 py-2 border-b-2 border-neutral-200 dark:border-neutral-700 bg-transparent focus:border-purple-500 focus:outline-none transition-colors", placeholder: "you@example.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `ig-handle-${data.id}`, className: "text-xs font-bold uppercase text-neutral-500", children: "Instagram Handle" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-neutral-400 mr-1", children: "@" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: `ig-handle-${data.id}`,
                type: "text",
                value: handle,
                onChange: (e) => setHandle(e.target.value),
                className: "w-full px-2 py-2 border-b-2 border-neutral-200 dark:border-neutral-700 bg-transparent focus:border-purple-500 focus:outline-none transition-colors",
                placeholder: "username"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-none text-white shadow-md", children: [
          "Go to @",
          businessHandle
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center gap-8 text-sm font-medium text-neutral-500", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-bold text-lg", children: item.description }),
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide", children: item.title })
      ] }, i)) })
    ] })
  ] });
};
var SocialContact3 = ({ data }) => {
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const destinationHandle = data.content.socialLink || "brandname";
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = message;
    {
      text += ` @${destinationHandle.replace("@", "")}`;
    }
    const encoded = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, "_blank");
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-neutral-900 dark:text-white mb-6", children: [
        /* @__PURE__ */ jsx(Twitter, { size: 32, fill: "currentColor" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight", children: "/ Connect" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl leading-tight", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      data.content.items && data.content.items.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold", children: /* @__PURE__ */ jsx(Twitter, { size: 18, fill: "currentColor" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-sm", children: "Latest Update" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 dark:text-foreground/90 mt-1", children: data.content.items[0].description })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6 border-b border-neutral-100 dark:border-neutral-800 pb-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
          "Dm / Mention @",
          destinationHandle
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-medium", children: "Verified" })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "sr-only", children: "X Handle" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-bold", children: "@" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: handle,
                onChange: (e) => setHandle(e.target.value),
                className: "w-full bg-neutral-50 dark:bg-neutral-900 border-none rounded-xl py-3 pl-8 pr-4 focus:ring-2 focus:ring-blue-500",
                placeholder: "your_handle"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "sr-only", children: "Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: message,
              onChange: (e) => setMessage(e.target.value),
              className: "w-full bg-neutral-50 dark:bg-neutral-900 border-none rounded-xl py-3 px-4 min-h-[120px] focus:ring-2 focus:ring-blue-500 resize-none",
              placeholder: `Tweet to @${destinationHandle}...`,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "rounded-full bg-blue-500 hover:bg-blue-600 text-white border-none px-6", children: "Tweet / Send" }) })
      ] })
    ] })
  ] }) });
};
var SocialContact4 = ({ data }) => {
  const destinationUser = data.content.socialLink || "company/brandname";
  const handleSubmit = (e) => {
    e.preventDefault();
    let target = destinationUser;
    if (!target.includes("linkedin.com")) {
      target = `https://www.linkedin.com/in/${target.replace("/", "")}`;
    }
    window.open(target, "_blank");
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-border overflow-hidden flex flex-col md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#0077b5] p-8 md:w-1/3 text-white flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Linkedin, { size: 40, fill: "currentColor", className: "mb-6" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Professional Network" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-sm", children: "Connect with our team and stay updated on company news and career opportunities." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "text-sm bg-white/10 p-3 rounded backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "block font-semibold opacity-80 uppercase text-xs", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: item.description })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-8 md:w-2/3", children: /* @__PURE__ */ jsxs("form", { className: "grid grid-cols-1 gap-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-neutral-500 uppercase", children: "First Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", className: "w-full p-2 border border-border rounded bg-background" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-neutral-500 uppercase", children: "Last Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", className: "w-full p-2 border border-border rounded bg-background" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-neutral-500 uppercase", children: "Work Email" }),
          /* @__PURE__ */ jsx("input", { type: "email", className: "w-full p-2 border border-border rounded bg-background" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full md:w-auto bg-[#0077b5] hover:bg-[#006097] text-white border-none", children: "View Profile & Connect" }) })
      ] }) })
    ] })
  ] });
};
var SocialContact5 = ({ data }) => {
  const [message, setMessage] = useState("");
  const destinationNumber = data.content.socialLink || "15551234567";
  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const cleanNumber = destinationNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, "_blank");
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[400px]", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-[#25D366] text-white p-4 rounded-full mb-6 shadow-lg hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(MessageCircle, { size: 40 }) }),
    /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-5xl text-center", children: data.content.heading }),
    /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 text-center max-w-lg mb-10", children: data.content.description }),
    /* @__PURE__ */ jsxs("div", { className: "card w-full max-w-md bg-white dark:bg-neutral-900 border border-border rounded-xl shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#075E54] p-4 text-white flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: "WhatsApp Support" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs opacity-80", children: "Usually replies instantly" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "p-6 space-y-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-neutral-500 uppercase", children: "Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: message,
              onChange: (e) => setMessage(e.target.value),
              className: "w-full p-3 border border-border rounded-lg bg-background min-h-[100px]",
              placeholder: "Hi! I'd like to inquire about...",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none py-3 text-lg h-auto", children: "Start Chat" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex gap-6", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-neutral-500", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
      /* @__PURE__ */ jsxs("strong", { children: [
        item.title,
        ":"
      ] }),
      " ",
      item.description
    ] }, i)) })
  ] }) });
};
var SocialContact6 = ({ data }) => {
  const pageId = data.content.socialLink || "brandname";
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      window.open(`http://m.me/${pageId}`, "_blank");
    }
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-[#1877F2] mb-6", children: [
        /* @__PURE__ */ jsx(Facebook, { size: 32, fill: "currentColor" }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "Messenger" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl leading-tight", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 border border-border rounded-lg bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-full", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: item.title }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-500", children: item.description })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card bg-white dark:bg-neutral-900 border border-border rounded-xl shadow-xl overflow-hidden max-w-md mx-auto w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#1877F2] h-24 relative", children: /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 left-6 w-16 h-16 rounded-full border-4 border-white dark:border-neutral-900 bg-neutral-200 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "https://picsum.photos/100/100", className: "w-full h-full object-cover", alt: "Profile" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "pt-10 px-6 pb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Our Facebook Page" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 mb-6", children: "Send us a message and we'll reply as soon as possible." }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-blue-800 dark:text-blue-200", children: [
            "You are messaging: ",
            /* @__PURE__ */ jsx("strong", { children: pageId })
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full bg-[#1877F2] hover:bg-[#166fe5] text-white border-none h-auto py-3 gap-2", children: [
            /* @__PURE__ */ jsx(Send, { size: 16 }),
            " Send Message"
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
var Blog1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx(ProseContainer, { children: /* @__PURE__ */ jsx("p", { className: "md:text-md", children: data.content.description }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3", children: data.content.items?.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 aspect-[3/2] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-${i}`, 600, 400),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-300 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center text-sm font-semibold text-foreground opacity-70 dark:opacity-80", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-surface-container-high px-2 py-1", children: "Category" }),
        /* @__PURE__ */ jsx("span", { className: "mx-2", "aria-hidden": "true", children: "\u2022" }),
        /* @__PURE__ */ jsx("span", { children: "5 min read" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold md:text-2xl", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-foreground opacity-70 dark:opacity-80 line-clamp-3", children: item.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-semibold hover:underline mt-auto", children: [
        "Read more ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
      ] })
    ] }, i)) })
  ] });
};
var Blog2 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-2/3", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl lg:text-5xl", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: data.content.items?.slice(0, 6).map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col group cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 aspect-[3/2] w-full overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`blog-grid-${i}`, 600, 400),
            alt: item.title,
            attribution: item.image_attribution,
            enableParallax: data.design?.parallax,
            className: "transition-transform duration-300 group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center text-xs font-semibold text-primary uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("span", { children: "Category" }),
          /* @__PURE__ */ jsx("span", { className: "mx-2", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { children: "5 min read" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold group-hover:text-primary transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-foreground opacity-70 dark:opacity-80 line-clamp-2", children: item.description })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/3 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-low p-6 rounded-xl", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold mb-4", children: "Search" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search articles...",
              className: "w-full pl-10 pr-4 py-2 rounded-lg border border-outline-variant bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            }
          ),
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-low p-6 rounded-xl", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold mb-4", children: "Categories" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["Technology", "Design", "Business", "Lifestyle", "Health"].map((cat, i) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center cursor-pointer hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsx("span", { children: cat }),
          /* @__PURE__ */ jsx("span", { className: "bg-surface-container-high px-2 py-0.5 rounded-full text-xs", children: Math.floor(Math.random() * 20) + 1 })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-6 rounded-xl border border-primary/10", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold mb-2", children: "Subscribe" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 mb-4", children: "Get the latest updates directly to your inbox." }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Your email",
            className: "w-full px-4 py-2 rounded-lg border border-outline-variant bg-background mb-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity", children: "Subscribe" })
      ] })
    ] })
  ] }) });
};
var Blog3 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-16 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-12", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col md:flex-row gap-8 group cursor-pointer items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-2/5 aspect-[4/3] overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-list-${i}`, 600, 450),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-500 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-3/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Article" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-60", children: "Oct 24, 2023" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold group-hover:text-primary transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-foreground opacity-70 dark:opacity-80 line-clamp-2", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium text-primary hover:underline", children: [
          "Read Article ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }, i)) })
  ] });
};
var Blog4 = ({ data }) => {
  const featuredItem = data.content.items?.[0];
  const gridItems = data.content.items?.slice(1, 4);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-col md:flex-row justify-between items-end gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold md:text-5xl mb-4", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80 max-w-xl", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: data.content.buttons, className: "" })
    ] }),
    featuredItem && /* @__PURE__ */ jsxs("div", { className: "mb-16 group cursor-pointer relative overflow-hidden rounded-2xl aspect-[2/1] md:aspect-[2.5/1]", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: featuredItem.image || getPlaceholderImage("blog-featured", 1200, 600),
            alt: featuredItem.title,
            attribution: featuredItem.image_attribution,
            enableParallax: data.design?.parallax,
            className: "transition-transform duration-700 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3 text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-primary text-white rounded-full", children: "Featured" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-3xl md:text-4xl font-bold leading-tight", children: featuredItem.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-white/80 line-clamp-2 md:text-lg", children: featuredItem.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
          "Read Story ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: gridItems?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 aspect-[3/2] w-full overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-grid-${i}`, 600, 400),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-300 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-bold text-primary uppercase tracking-wider", children: "Latest" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold group-hover:text-primary transition-colors", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 dark:opacity-80 line-clamp-2", children: item.description })
    ] }, i)) })
  ] });
};
var Blog5 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-4xl font-bold md:text-5xl lg:text-6xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "break-inside-avoid mb-8 group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 w-full overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-masonry-${i}`, 600, 400 + i % 3 * 200),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-500 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsx("span", { children: "Design" }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-outline-variant" }),
          /* @__PURE__ */ jsx("span", { children: "Nov 12" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 line-clamp-3", children: item.description })
      ] })
    ] }, i)) })
  ] });
};
var Blog6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold md:text-5xl mb-4", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-lg font-semibold border-b-2 border-primary pb-1 hover:text-primary transition-colors", children: "View Archive" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-outline-variant", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-4 -mx-4 rounded-lg cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-1/4 mb-2 md:mb-0", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-mono text-foreground opacity-50", children: [
        "0",
        i + 1,
        " / Oct 2023"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 mb-2 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold group-hover:text-primary transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-60 mt-1 line-clamp-1", children: item.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/4 flex justify-end", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0", children: [
        "Read Article ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
      ] }) })
    ] }, i)) })
  ] });
};
var Blog7 = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth ? container.firstElementChild.clientWidth + 24 : 300;
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-12 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl font-bold md:text-5xl", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: checkScroll,
        className: "flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-[5%] px-[5%] md:mx-0 md:px-0",
        style: { scrollbarWidth: "none", msOverflowStyle: "none" },
        children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "snap-start flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] group cursor-pointer bg-surface-container rounded-2xl overflow-hidden border border-outline-variant", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
            ResponsiveImage,
            {
              src: item.image || getPlaceholderImage(`blog-carousel-${i}`, 600, 400),
              alt: item.title,
              attribution: item.image_attribution,
              enableParallax: data.design?.parallax,
              className: "transition-transform duration-500 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: /* @__PURE__ */ jsx("span", { children: "Category" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold group-hover:text-primary transition-colors", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm text-foreground opacity-70 dark:opacity-80 line-clamp-3", children: item.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold hover:underline", children: [
              "Read Post ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] })
        ] }, i))
      }
    )
  ] });
};
var Blog8 = ({ data }) => {
  const mainPost = data.content.items?.[0];
  const sidePosts = data.content.items?.slice(1, 4);
  const bottomPosts = data.content.items?.slice(4, 8);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold md:text-6xl mb-4 tracking-tight", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80 max-w-2xl mx-auto", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 group cursor-pointer", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden rounded-2xl mb-6", children: [
          /* @__PURE__ */ jsx(
            ResponsiveImage,
            {
              src: mainPost?.image || getPlaceholderImage("blog-mag-main", 1200, 800),
              alt: mainPost?.title || "Featured",
              attribution: mainPost?.image_attribution,
              enableParallax: data.design?.parallax,
              className: "transition-transform duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-surface-container-high px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md", children: "Cover Story" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors", children: mainPost?.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80 line-clamp-3", children: mainPost?.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 flex flex-col gap-8", children: sidePosts?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex gap-4 group cursor-pointer items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "w-24 h-24 shrink-0 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`blog-mag-side-${i}`, 200, 200),
            alt: item.title,
            className: "transition-transform duration-300 group-hover:scale-110"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-primary mb-1 uppercase", children: "Trending" }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-foreground opacity-50", children: "5 min read" })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-outline-variant", children: bottomPosts?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 aspect-[3/2] overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-mag-bottom-${i}`, 400, 300),
          alt: item.title,
          className: "transition-transform duration-300 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsx("h4", { className: "font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 line-clamp-2", children: item.description })
    ] }, i)) })
  ] });
};
var Blog9 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-0 lg:gap-0 rounded-3xl overflow-hidden bg-surface-container", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 p-8 md:p-16 flex flex-col justify-center lg:sticky lg:top-0 lg:h-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto lg:mx-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold md:text-5xl mb-6", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity", children: [
        "Read Our Blog ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 bg-surface-container-high p-8 md:p-16", children: /* @__PURE__ */ jsx("div", { className: "space-y-12", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 aspect-[3/2] w-full overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`blog-split-${i}`, 600, 400),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-500 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-primary uppercase tracking-wider", children: "Design" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "\u2022" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground opacity-60", children: "5 min read" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold group-hover:text-primary transition-colors", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 line-clamp-3", children: item.description })
    ] }, i)) }) })
  ] }) });
};
var Blog10 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold md:text-5xl mb-6", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12 md:space-y-24", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: `relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white dark:border-black md:-translate-x-1/2 z-10" }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 pl-12 md:pl-0 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: `group cursor-pointer ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`, children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2 text-sm font-bold text-primary uppercase tracking-wider", children: "October 2023" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 group-hover:text-primary transition-colors", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 mb-4 line-clamp-3", children: item.description })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 pl-12 md:pl-0 md:px-12", children: /* @__PURE__ */ jsx("div", { className: "aspect-[3/2] overflow-hidden rounded-xl shadow-md group cursor-pointer", children: /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`blog-timeline-${i}`, 600, 400),
            alt: item.title,
            attribution: item.image_attribution,
            enableParallax: data.design?.parallax,
            className: "transition-transform duration-500 group-hover:scale-105"
          }
        ) }) })
      ] }, i)) })
    ] })
  ] });
};
var Blog11 = ({ data }) => {
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-low p-8 rounded-2xl sticky top-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Mail, { size: 24 }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 mb-6", children: data.content.description }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "sr-only", children: "Email address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              placeholder: "Enter your email",
              className: "w-full px-4 py-3 rounded-lg border border-outline-variant bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity", children: "Subscribe" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground opacity-50 mt-4 text-center", children: "We respect your privacy. Unsubscribe at any time." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold border-b border-outline-variant pb-4", children: "Latest Articles" }),
      data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col sm:flex-row gap-6 group cursor-pointer", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:w-1/3 aspect-[4/3] overflow-hidden rounded-xl shrink-0", children: /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`blog-newsletter-${i}`, 400, 300),
            alt: item.title,
            attribution: item.image_attribution,
            enableParallax: data.design?.parallax,
            className: "transition-transform duration-300 group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "sm:w-2/3", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider", children: [
            /* @__PURE__ */ jsx("span", { children: "Product" }),
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-outline-variant" }),
            /* @__PURE__ */ jsx("span", { children: "5 min read" })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-2 group-hover:text-primary transition-colors", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70 dark:opacity-80 line-clamp-2 mb-4", children: item.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold hover:underline", children: [
            "Read Article ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, i))
    ] })
  ] }) });
};
var FAQ1 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto border-t border-border", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-center justify-between py-5 md:py-6 text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          "data-role": "faq-toggle",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-md md:text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0"),
                "aria-hidden": "true",
                "data-role": "faq-icon"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"),
          "aria-hidden": openIndex !== i,
          "data-role": "faq-content",
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] });
};
var FAQ2 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-start justify-between py-4 text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground mt-1", openIndex === i ? "rotate-180" : "rotate-0")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] });
};
var FAQ3 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      data.content.buttons?.map((btn, i) => /* @__PURE__ */ jsx("a", { href: btn.href, className: cn("inline-block px-6 py-3 rounded-md font-medium transition-colors", btn.style === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"), children: btn.text }, i))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border first:border-t", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-center justify-between py-5 md:py-6 text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] }) });
};
var FAQ4 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: data.content.image || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
        alt: data.content.image_alt || "FAQ Image",
        className: "object-cover w-full h-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-3xl font-bold md:mb-6 md:text-4xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsx("div", { className: "w-full", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border first:border-t", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center justify-between py-4 md:py-5 text-left focus:outline-none group",
            onClick: () => setOpenIndex(openIndex === i ? null : i),
            "aria-expanded": openIndex === i,
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg pr-4", children: item.title }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"),
            children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
          }
        )
      ] }, i)) })
    ] })
  ] }) });
};
var FAQ5 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-lg p-6 transition-shadow hover:shadow-sm", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-start justify-between text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg pr-4", children: item.title }),
            openIndex === i ? /* @__PURE__ */ jsx(Minus, { className: "w-5 h-5 flex-shrink-0 text-primary mt-1" }) : /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5 flex-shrink-0 text-muted-foreground mt-1 group-hover:text-primary transition-colors" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] });
};
var FAQ6 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-12", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80 leading-relaxed", children: item.description })
    ] }, i)) })
  ] });
};
var FAQ7 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredItems = data.content.items?.filter(
    (item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || (item.description || "").toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search questions...",
            className: "w-full pl-10 pr-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto border-t border-border", children: filteredItems.length > 0 ? filteredItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-center justify-between py-5 md:py-6 text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-md md:text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description || "" })
        }
      )
    ] }, i)) : /* @__PURE__ */ jsx("div", { className: "py-12 text-center text-muted-foreground", children: "No questions found matching your search." }) })
  ] });
};
var FAQ8 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const categories = ["General", "Account", "Billing", "Support"];
  const itemsPerCategory = Math.ceil((data.content.items?.length || 0) / categories.length);
  const currentItems = data.content.items?.slice(activeTab * itemsPerCategory, (activeTab + 1) * itemsPerCategory) || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((cat, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setActiveTab(i);
          setOpenIndex(null);
        },
        className: cn(
          "px-6 py-2 rounded-full text-sm font-medium transition-colors",
          activeTab === i ? "bg-primary text-primary-foreground" : "bg-surface-container-low text-muted-foreground hover:bg-surface-container-high"
        ),
        children: cat
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto border-t border-border", children: currentItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-center justify-between py-5 md:py-6 text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-md md:text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] });
};
var FAQ9 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(0);
  return /* @__PURE__ */ jsxs("section", { id: data.id, className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: data.content.image || "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop",
          alt: data.content.image_alt || "Background",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-6 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2] text-white", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "md:text-md text-white/80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center justify-between p-5 md:p-6 text-left focus:outline-none group text-white",
            onClick: () => setOpenIndex(openIndex === i ? null : i),
            "aria-expanded": openIndex === i,
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-md md:text-lg pr-4", children: item.title }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-white/70", openIndex === i ? "rotate-180" : "rotate-0")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
            children: /* @__PURE__ */ jsx("p", { className: "text-base text-white/80 p-6 pt-0", children: item.description })
          }
        )
      ] }, i)) })
    ] })
  ] });
};
var FAQ10 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "bg-background border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer",
          openIndex === i ? "row-span-2" : ""
        ),
        onClick: () => setOpenIndex(openIndex === i ? null : i),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronRight,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-primary", openIndex === i ? "rotate-90" : "rotate-0")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
              children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
            }
          )
        ]
      },
      i
    )) })
  ] });
};
var FAQ11 = ({ data }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const featuredItem = data.content.items?.[0];
  const otherItems = data.content.items?.slice(1);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80 mb-8", children: data.content.description }),
      featuredItem && /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/10 rounded-xl p-8 mb-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-4 text-primary", children: featuredItem.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-80", children: featuredItem.description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: otherItems?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-lg px-6 py-4", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex w-full items-center justify-between text-left focus:outline-none group",
          onClick: () => setOpenIndex(openIndex === i ? null : i),
          "aria-expanded": openIndex === i,
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg pr-4", children: item.title }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn("w-5 h-5 transition-transform duration-300 flex-shrink-0 text-muted-foreground", openIndex === i ? "rotate-180" : "rotate-0")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"),
          children: /* @__PURE__ */ jsx("p", { className: "text-base text-foreground opacity-70 dark:opacity-80", children: item.description })
        }
      )
    ] }, i)) })
  ] }) });
};
var SocialIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return /* @__PURE__ */ jsx(Facebook, { size: 20 });
    case "twitter":
      return /* @__PURE__ */ jsx(Twitter, { size: 20 });
    case "instagram":
      return /* @__PURE__ */ jsx(Instagram, { size: 20 });
    case "linkedin":
      return /* @__PURE__ */ jsx(Linkedin, { size: 20 });
    case "youtube":
      return /* @__PURE__ */ jsx(Youtube, { size: 20 });
    default:
      return /* @__PURE__ */ jsx(Globe, { size: 20 });
  }
};
var SocialLinks = ({ links }) => {
  if (!links || links.length === 0) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: links.map((link, idx) => /* @__PURE__ */ jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", "aria-label": link.platform, className: "text-foreground/80 hover:text-foreground transition-transform hover:scale-110", children: /* @__PURE__ */ jsx(SocialIcon, { platform: link.platform }) }, idx)) });
};
var LegalLinks = ({ buttons, links }) => {
  const items = links || buttons?.map((b) => ({ text: b.text, url: b.href })) || [];
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center md:justify-end gap-6", children: items.map((item, idx) => /* @__PURE__ */ jsx("a", { href: item.url || "#", className: "text-sm text-foreground/70 dark:text-foreground/80 hover:underline", children: item.text }, idx)) });
};
var Footer1 = ({ data }) => {
  const columns = data.content.items || [];
  return /* @__PURE__ */ jsx("footer", { id: data.id, className: "px-[5%] py-12 md:py-16 bg-background border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr] lg:gap-x-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl mb-4 block", "aria-label": "Brand Home", children: data.content.heading || "Brand" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-foreground/70 dark:text-foreground/80 max-w-sm", children: data.content.description }),
        /* @__PURE__ */ jsx(SocialLinks, { links: data.content.social_links })
      ] }),
      columns.map((col, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: col.link_items ? col.link_items.map((link, lIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.url, className: "text-sm text-foreground/80 dark:text-foreground/90 hover:text-foreground hover:underline", children: link.text }) }, lIdx)) : col.list_items?.map((link, lIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-foreground/80 dark:text-foreground/90 hover:text-foreground hover:underline", children: link }) }, lIdx)) })
      ] }, idx))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 md:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/70 dark:text-foreground/80 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("div", { children: data.content.copyright_text || "\xA9 2024 Brand. All rights reserved." }),
      /* @__PURE__ */ jsx(LegalLinks, { buttons: data.content.buttons, links: data.content.legal_links })
    ] })
  ] }) });
};
var Footer2 = ({ data }) => {
  const links = data.content.items || [];
  return /* @__PURE__ */ jsx("footer", { id: data.id, className: "px-[5%] py-12 md:py-20 bg-background border-t border-border text-center", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-2xl mb-6 block", children: data.content.heading || "Brand" }),
    data.content.description && /* @__PURE__ */ jsx("p", { className: "mb-8 text-foreground/70 dark:text-foreground/80 max-w-md", children: data.content.description }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap justify-center gap-6 md:gap-8 mb-8 font-medium", children: links.map((link, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.url || "#", className: "hover:text-foreground/80 transition-colors", children: link.title }) }, idx)) }),
    /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx(SocialLinks, { links: data.content.social_links }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/70 dark:text-foreground/80", children: [
      /* @__PURE__ */ jsx("div", { children: data.content.copyright_text || "\xA9 2024 Brand. All rights reserved." }),
      /* @__PURE__ */ jsx(LegalLinks, { buttons: data.content.buttons, links: data.content.legal_links })
    ] })
  ] }) });
};
var Footer3 = ({ data }) => {
  const columns = data.content.items || [];
  const subscribeBtn = data.content.buttons?.[0];
  const legalLinks = data.content.buttons?.slice(1);
  return /* @__PURE__ */ jsx("footer", { id: data.id, className: "px-[5%] py-12 md:py-20 bg-background border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: data.content.heading || "Join our newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 dark:text-foreground/90 mb-6", children: data.content.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 max-w-md", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter your email",
              className: "flex h-11 w-full border border-border px-3 py-2 text-sm bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-foreground"
            }
          ),
          /* @__PURE__ */ jsx(Button, { children: subscribeBtn?.text || "Subscribe" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-foreground/60 mt-3", children: [
          "By subscribing you agree to our ",
          /* @__PURE__ */ jsx("a", { href: "#", className: "underline", children: "Privacy Policy" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8", children: columns.map((col, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: col.link_items?.map((link, lIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.url, className: "text-sm text-foreground/80 dark:text-foreground/90 hover:text-foreground hover:underline", children: link.text }) }, lIdx)) })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-4 md:gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-xl", children: data.content.heading ? "Brand" : "Logo" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/70", children: data.content.copyright_text || "\xA9 2024 Brand. All rights reserved." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6", children: [
        /* @__PURE__ */ jsx(LegalLinks, { buttons: legalLinks, links: data.content.legal_links }),
        /* @__PURE__ */ jsx(SocialLinks, { links: data.content.social_links })
      ] })
    ] })
  ] }) });
};
var Footer4 = ({ data }) => {
  return /* @__PURE__ */ jsx("footer", { id: data.id, className: "px-[5%] py-8 border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col md:flex-row justify-between items-center gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-bold text-lg", children: data.content.heading || "Brand" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/70", children: data.content.copyright_text || "\xA9 2024. All rights reserved." })
    ] }),
    /* @__PURE__ */ jsx(SocialLinks, { links: data.content.social_links })
  ] }) });
};
var Gallery1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getImageSrc(data.content, `gallery-${i}`, 800, 600),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          maskImage: data.design?.maskImage,
          maskSize: data.design?.maskSize,
          maskPosition: data.design?.maskPosition,
          maskRepeat: data.design?.maskRepeat,
          maskGradientValue: data.design?.maskGradientValue,
          clipPath: data.design?.clipPath,
          className: "transition-transform duration-300 group-hover:scale-105"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 dark:opacity-80 mt-1", children: item.description })
      ] })
    ] }, i)) })
  ] });
};
var Gallery2 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 md:mb-20 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card group relative overflow-hidden rounded-lg aspect-[4/3]", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`gallery-${i}`, 800, 600),
          alt: item.title,
          className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-white p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90", children: item.description })
      ] }) })
    ] }, i)) })
  ] });
};
var Gallery3 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden aspect-square", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getImageSrc(data.content, `gallery-small-${i}`, 400, 400),
          alt: item.title,
          attribution: item.image_attribution,
          enableParallax: data.design?.parallax,
          className: "transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-sm", children: item.title }) })
    ] }, i)) })
  ] });
};
var Gallery4 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground opacity-70", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden aspect-square", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`gallery-${i}`, 400, 400),
          alt: item.title,
          className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" })
    ] }, i)) })
  ] });
};
var Gallery5 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 md:mb-20 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground opacity-70", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`gallery-${i}`, 600, i % 2 === 0 ? 800 : 600),
          alt: item.title,
          className: "w-full h-auto object-cover"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-lg", children: item.title }),
        item.description && /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mt-1", children: item.description })
      ] })
    ] }, i)) })
  ] });
};
var Gallery6 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = data.content.items || [];
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 relative rounded-xl overflow-hidden h-full", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: items[activeIndex].image || getPlaceholderImage(`gallery-${activeIndex}`, 1200, 800),
          alt: items[activeIndex].title,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: items[activeIndex].title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/90 text-lg", children: items[activeIndex].description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-1 flex flex-col gap-4 overflow-y-auto pr-2", children: items.map((item, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setActiveIndex(i),
        className: cn(
          "flex gap-4 p-2 rounded-lg transition-all text-left group",
          activeIndex === i ? "bg-surface-container-highest ring-2 ring-primary" : "hover:bg-surface-container-low"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-24 h-24 flex-shrink-0 rounded-md overflow-hidden", children: /* @__PURE__ */ jsx(
            ResponsiveImage,
            {
              src: item.image || getPlaceholderImage(`gallery-${i}`, 200, 200),
              alt: item.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx("h4", { className: cn("font-semibold mb-1", activeIndex === i ? "text-primary" : "text-foreground"), children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: item.description })
          ] })
        ]
      },
      i
    )) })
  ] }) });
};
var Gallery7 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "overflow-hidden py-12", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8 text-center px-4", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: data.content.heading }) }),
    /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx("div", { className: "flex gap-4 animate-scroll whitespace-nowrap hover:pause-animation", children: [...data.content.items || [], ...data.content.items || []].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "inline-block w-[300px] md:w-[400px] aspect-[16/9] flex-shrink-0 rounded-lg overflow-hidden relative group", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`gallery-${i}`, 600, 400),
          alt: item.title,
          className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-lg", children: item.title }) })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("style", { children: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused;
                }
            ` })
  ] });
};
var Gallery8 = ({ data }) => {
  const items = data.content.items || [];
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 h-[800px] md:h-[600px]", children: items.slice(0, 5).map((item, i) => {
      const gridClasses = [
        "md:col-span-2 md:row-span-2",
        // Large item 1
        "md:col-span-1 md:row-span-1",
        // Small item 2
        "md:col-span-1 md:row-span-2",
        // Tall item 3
        "md:col-span-2 md:row-span-1",
        // Wide item 4
        "md:col-span-1 md:row-span-1"
        // Small item 5
      ][i] || "col-span-1 row-span-1";
      return /* @__PURE__ */ jsxs("div", { className: cn("relative rounded-xl overflow-hidden group", gridClasses), children: [
        /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`gallery-${i}`, 800, 600),
            alt: item.title,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-xl", children: item.title }),
          item.description && /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mt-1", children: item.description })
        ] })
      ] }, i);
    }) })
  ] });
};
var Gallery9 = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = data.content.items || [];
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "p-0 max-w-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[600px] md:h-[800px] w-full overflow-hidden group", children: [
      items.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          ),
          children: [
            /* @__PURE__ */ jsx(
              ResponsiveImage,
              {
                src: item.image || getPlaceholderImage(`gallery-${index}`, 1920, 1080),
                alt: item.title,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-white max-w-4xl px-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold mb-4 translate-y-4 opacity-0 animate-fade-in-up", style: { animationDelay: "0.3s", animationFillMode: "forwards" }, children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl opacity-0 translate-y-4 animate-fade-in-up", style: { animationDelay: "0.5s", animationFillMode: "forwards" }, children: item.description })
            ] }) })
          ]
        },
        index
      )),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevSlide,
          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-8 h-8" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextSlide,
          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-8 h-8" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: items.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrentIndex(i),
          className: cn(
            "w-2 h-2 rounded-full transition-all",
            i === currentIndex ? "w-8 bg-white" : "bg-white/50 hover:bg-white/80"
          )
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out;
                }
            ` })
  ] });
};
var Gallery10 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "bg-surface-container-low", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-serif italic mb-4", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8 md:gap-12", children: data.content.items?.map((item, i) => {
      const rotation = i % 2 === 0 ? "-rotate-2" : "rotate-2";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-surface-container p-4 pb-12 shadow-lg transform ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 w-[280px] md:w-[320px]`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-square w-full overflow-hidden mb-4 bg-secondary/10", children: /* @__PURE__ */ jsx(
              ResponsiveImage,
              {
                src: item.image || getPlaceholderImage(`gallery-${i}`, 400, 400),
                alt: item.title,
                className: "w-full h-full object-cover filter sepia-[.2] hover:sepia-0 transition-all"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center font-handwriting", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: item.description })
            ] })
          ]
        },
        i
      );
    }) })
  ] });
};
var Gallery11 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsx("div", { className: "mb-12 text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: data.content.heading }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-1", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group relative aspect-[4/5] overflow-hidden cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: item.image || getPlaceholderImage(`gallery-${i}`, 600, 800),
          alt: item.title,
          className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8 translate-y-4 group-hover:translate-y-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white text-2xl font-bold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300", children: item.description })
      ] })
    ] }, i)) })
  ] });
};
var Gallery12 = ({ data }) => {
  const items = data.content.items || [];
  const firstItem = items[0];
  const remainingItems = items.slice(1);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-xl", children: firstItem && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        ResponsiveImage,
        {
          src: firstItem.image || getPlaceholderImage("gallery-main", 800, 1e3),
          alt: firstItem.title,
          className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white text-2xl font-bold", children: firstItem.title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 mt-2", children: firstItem.description })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: remainingItems.slice(0, 4).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-xl overflow-hidden group cursor-pointer", children: [
        /* @__PURE__ */ jsx(
          ResponsiveImage,
          {
            src: item.image || getPlaceholderImage(`gallery-${i}`, 400, 400),
            alt: item.title,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" })
      ] }, i)) })
    ] })
  ] }) });
};
var Gallery15 = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth ? container.firstElementChild.clientWidth + 16 : 300;
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            className: "p-3 rounded-full border border-outline-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: checkScroll,
        className: "flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-[5%] px-[5%] md:mx-0 md:px-0",
        style: { scrollbarWidth: "none", msOverflowStyle: "none" },
        children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "snap-start flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%]", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[3/2] w-full overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
            ResponsiveImage,
            {
              src: item.image || getImageSrc(data.content, `gallery-carousel-${i}`, 600, 400),
              alt: item.title,
              attribution: item.image_attribution,
              enableParallax: data.design?.parallax,
              className: "transition-transform duration-300 hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground opacity-70 dark:opacity-80 mt-1", children: item.description })
          ] })
        ] }, i))
      }
    )
  ] });
};
var Gallery18 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-lg mx-auto mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl leading-[1.2]", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "md:text-md text-foreground opacity-70 dark:opacity-80", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid group relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full overflow-hidden mb-2 relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image || getImageSrc(data.content, `gallery-masonry-${i}`, 600, 400 + i % 3 * 200),
            alt: item.title,
            className: "w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105",
            loading: "lazy"
          }
        ),
        item.image_attribution && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-2 right-2 max-w-[80%] bg-black/60 text-white text-[9px] md:text-[10px] px-2 py-1 rounded backdrop-blur-sm shadow-sm pointer-events-auto opacity-70 hover:opacity-100 transition-opacity z-10 font-sans",
            children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: item.image_attribution }, className: "flex items-center gap-1 [&>a]:underline [&>a]:hover:text-blue-300" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold", children: item.title })
    ] }, i)) })
  ] });
};
var Portfolio1 = ({ section }) => {
  const { content, design } = section;
  return /* @__PURE__ */ jsx(SectionBase, { id: section.id, design, className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      content.tagline && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary tracking-wider uppercase mb-3 block", children: content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design, className: "text-3xl md:text-4xl font-bold text-foreground mb-6", children: content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: content.items?.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsxs("div", { className: "card relative overflow-hidden rounded-xl aspect-[4/3] mb-6 bg-muted", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image || getPlaceholderImage(item.title, 800, 600),
            alt: item.title,
            className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "button text-white font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm", children: "View Project" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        item.badge && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary mb-2 block", children: item.badge }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground line-clamp-2", children: item.description })
      ] })
    ] }, idx)) })
  ] }) });
};
var Portfolio2 = ({ section }) => {
  const { content, design } = section;
  return /* @__PURE__ */ jsx(SectionBase, { id: section.id, design, className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      content.tagline && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary tracking-wider uppercase mb-3 block", children: content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design, className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: content.description })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", children: content.items?.map((item, idx) => /* @__PURE__ */ jsx("div", { className: "break-inside-avoid group cursor-pointer", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl mb-4 bg-muted", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image || getPlaceholderImage(item.title, 800, idx % 2 === 0 ? 1e3 : 600),
          alt: item.title,
          className: "w-full h-auto transition-transform duration-700 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white/80 text-sm font-medium mb-1", children: item.badge || "Project" }),
        /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold", children: item.title })
      ] })
    ] }) }, idx)) })
  ] }) });
};
var Portfolio3 = ({ section }) => {
  const { content, design } = section;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth ? container.firstElementChild.clientWidth + 24 : 300;
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: section.id, design, className: "py-20 bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-[5%]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        content.tagline && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary tracking-wider uppercase mb-3 block", children: content.tagline }),
        /* @__PURE__ */ jsx(SectionHeading, { design, className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: content.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            disabled: !canScrollLeft,
            className: "p-3 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            disabled: !canScrollRight,
            className: "p-3 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: checkScroll,
        className: "flex overflow-x-auto gap-6 pb-8 px-[5%] snap-x snap-mandatory scrollbar-hide",
        style: { scrollbarWidth: "none", msOverflowStyle: "none" },
        children: content.items?.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "min-w-[85vw] md:min-w-[600px] snap-center group cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl aspect-[16/9] mb-6 bg-muted", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image || getPlaceholderImage(item.title, 1200, 800),
                alt: item.title,
                className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.description })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) }) })
          ] })
        ] }, idx))
      }
    )
  ] });
};
var Portfolio4 = ({ section }) => {
  const { content, design } = section;
  const featuredItem = content.items?.[0];
  if (!featuredItem) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: section.id, design, className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
      content.tagline && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary tracking-wider uppercase mb-4 block", children: content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design, className: "text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight", children: featuredItem.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-8 leading-relaxed", children: featuredItem.description }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-8 mb-10 border-y border-border py-8", children: featuredItem.feature_details?.map((detail, idx) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: detail.text }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-foreground", children: detail.description })
      ] }, idx)) }),
      /* @__PURE__ */ jsx(ActionButtons, { buttons: content.buttons })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl overflow-hidden aspect-[4/5] bg-muted shadow-2xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: featuredItem.image || getPlaceholderImage(featuredItem.title, 800, 1e3),
          alt: featuredItem.title,
          className: "object-cover w-full h-full"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -z-10 -bottom-10 -left-10 w-full h-full bg-secondary/10 rounded-2xl" })
    ] })
  ] }) }) });
};
var Portfolio5 = ({ section }) => {
  const { content, design } = section;
  return /* @__PURE__ */ jsx(SectionBase, { id: section.id, design, className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      content.tagline && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary tracking-wider uppercase mb-3 block", children: content.tagline }),
      /* @__PURE__ */ jsx(SectionHeading, { design, className: "text-3xl md:text-4xl font-bold text-foreground mb-6", children: content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: content.items?.map((item, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative flex items-center justify-between p-6 md:p-8 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border cursor-pointer",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 md:gap-10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-mono text-muted-foreground/50 group-hover:text-primary transition-colors", children: String(idx + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground hidden md:block", children: item.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
            item.badge && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground", children: item.badge }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all transform group-hover:-rotate-45", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M14 5l7 7m0 0l-7 7m7-7H3" }) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl z-10", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image || getPlaceholderImage(item.title, 400, 300),
              alt: item.title,
              className: "object-cover w-full h-full"
            }
          ) })
        ]
      },
      idx
    )) })
  ] }) });
};
var Alert1 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-3 px-4 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 text-center text-sm font-medium", children: data.content.heading }),
    data.content.dismissable !== false && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsVisible(false),
        className: "p-1 rounded-full hover:bg-black/10 transition-colors",
        children: /* @__PURE__ */ jsx(X, { size: 16 })
      }
    )
  ] }) });
};
var Alert2 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-4 px-4 bg-surface text-foreground border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left container mx-auto", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium flex-1", children: [
      data.content.heading,
      data.content.description && /* @__PURE__ */ jsx("span", { className: "opacity-80 ml-2 font-normal hidden md:inline", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      data.content.buttons?.map((btn, i) => /* @__PURE__ */ jsx(Button, { href: btn.href, variant: btn.style, size: "sm", children: btn.text }, i)),
      data.content.dismissable !== false && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsVisible(false),
          className: "p-1.5 rounded-full hover:bg-muted transition-colors sm:ml-2",
          children: /* @__PURE__ */ jsx(X, { size: 16 })
        }
      )
    ] })
  ] }) });
};
var Alert3 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-3 px-4 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 border-b border-blue-100 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 container mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsx(Info, { size: 20, className: "shrink-0" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold", children: data.content.heading }),
      data.content.description && /* @__PURE__ */ jsx("span", { className: "mx-2 opacity-80", children: data.content.description })
    ] }),
    data.content.dismissable !== false && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsVisible(false),
        className: "p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
        children: /* @__PURE__ */ jsx(X, { size: 16 })
      }
    )
  ] }) });
};
var Alert4 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-6", children: /* @__PURE__ */ jsxs("div", { className: "pointer-events-auto max-w-sm w-full bg-surface-container-high border border-outline-variant shadow-xl rounded-xl p-4 flex gap-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-bold mb-1", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: data.content.description })
    ] }),
    data.content.dismissable !== false && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsVisible(false),
        className: "h-fit p-1.5 rounded-md hover:bg-surface-container-highest transition-colors text-muted-foreground",
        children: /* @__PURE__ */ jsx(X, { size: 16 })
      }
    )
  ] }) });
};
var Alert5 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-2.5 px-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-sm font-medium container mx-auto", children: [
    /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide", children: data.content.tagline || "New" }),
    /* @__PURE__ */ jsx("span", { children: data.content.heading }),
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-1 hover:underline opacity-90 hover:opacity-100", children: [
      "Learn more ",
      /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
    ] }),
    data.content.dismissable !== false && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsVisible(false),
        className: "ml-4 p-1 rounded-full hover:bg-white/20 dark:hover:bg-black/10 transition-colors",
        children: /* @__PURE__ */ jsx(X, { size: 14 })
      }
    )
  ] }) });
};
var NoticeBar1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, className: "py-2 lg:py-2 xl:py-2 md:py-2 sm:py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-8 z-10 bg-gradient-to-r from-neutral-900 to-transparent dark:from-white pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-neutral-900 to-transparent dark:from-white pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8 mx-4", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: data.content.heading }),
      /* @__PURE__ */ jsx("span", { className: "text-white/30 dark:text-black/30", children: "\u2022" }),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: data.content.description }),
      /* @__PURE__ */ jsx("span", { className: "text-white/30 dark:text-black/30", children: "\u2022" })
    ] }, i)) }),
    /* @__PURE__ */ jsx("style", { children: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            ` })
  ] });
};
var NoticeBar2 = ({ data }) => {
  const targetDate = data.content.date ? new Date(data.content.date).getTime() : (/* @__PURE__ */ new Date()).setHours(24, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
          minutes: Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)),
          seconds: Math.floor(distance % (1e3 * 60) / 1e3)
        });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [targetDate]);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-2 lg:py-2 xl:py-2 md:py-2 sm:py-2 px-4 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 container mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center sm:text-left font-medium", children: data.content.heading }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-4 font-mono text-sm sm:text-base font-bold bg-black/10 rounded-lg py-1 px-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center leading-none", children: [
        /* @__PURE__ */ jsx("span", { children: String(timeLeft.days).padStart(2, "0") }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal opacity-70 uppercase", children: "Days" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "opacity-50 -mt-3", children: ":" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center leading-none", children: [
        /* @__PURE__ */ jsx("span", { children: String(timeLeft.hours).padStart(2, "0") }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal opacity-70 uppercase", children: "Hrs" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "opacity-50 -mt-3", children: ":" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center leading-none", children: [
        /* @__PURE__ */ jsx("span", { children: String(timeLeft.minutes).padStart(2, "0") }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal opacity-70 uppercase", children: "Min" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "opacity-50 -mt-3", children: ":" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center leading-none", children: [
        /* @__PURE__ */ jsx("span", { children: String(timeLeft.seconds).padStart(2, "0") }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal opacity-70 uppercase", children: "Sec" })
      ] })
    ] }),
    data.content.buttons && data.content.buttons.length > 0 && /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: data.content.buttons.map((btn, i) => {
      const { style, text, ...btnProps } = btn;
      return /* @__PURE__ */ jsx(Button, { ...btnProps, variant: "secondary", size: "sm", className: "bg-white text-primary hover:bg-white/90", children: text }, i);
    }) })
  ] }) });
};
var NoticeBar3 = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = data.content.items?.length ? data.content.items : [{ title: data.content.heading }];
  useEffect(() => {
    if (messages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [messages.length]);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, className: "py-2 lg:py-2 xl:py-2 md:py-2 sm:py-2 px-4 bg-muted text-foreground border-b border-border bg-neutral-100 dark:bg-neutral-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center justify-center max-w-2xl relative", children: [
    messages.length > 1 && /* @__PURE__ */ jsx("button", { onClick: handlePrev, className: "absolute left-0 p-1 hover:bg-black/5 rounded-full transition-colors", "aria-label": "Previous", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 14 }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden flex-1 mx-8 h-6 relative", children: messages.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform`,
        style: {
          opacity: index === currentIndex ? 1 : 0,
          transform: `translateY(${index === currentIndex ? 0 : "100%"})`,
          pointerEvents: index === currentIndex ? "auto" : "none"
        },
        children: /* @__PURE__ */ jsxs("span", { className: "text-xs sm:text-sm font-medium text-center truncate px-2", children: [
          item.title,
          item.description && /* @__PURE__ */ jsxs("span", { className: "font-normal opacity-70 ml-2 hidden sm:inline", children: [
            " ",
            item.description
          ] })
        ] })
      },
      index
    )) }),
    messages.length > 1 && /* @__PURE__ */ jsx("button", { onClick: handleNext, className: "absolute right-0 p-1 hover:bg-black/5 rounded-full transition-colors", "aria-label": "Next", children: /* @__PURE__ */ jsx(ChevronRight, { size: 14 }) })
  ] }) });
};
var CatalogContext = createContext(void 0);
var CatalogProvider = ({ products = [], categories = [], children }) => {
  const productMap = useMemo(() => {
    return new Map(products.map((p) => [p.id, p]));
  }, [products]);
  const categoryMap = useMemo(() => {
    return new Map(categories.map((c) => [c.id, c]));
  }, [categories]);
  const getProduct = (id) => productMap.get(id);
  const getCategory = (id) => categoryMap.get(id);
  const enrichItem = (item) => {
    if (!item.productId) return item;
    const product = getProduct(item.productId);
    if (!product) return item;
    return {
      ...item,
      title: product.name || item.title,
      description: product.description || item.description,
      price: product.price || item.price,
      image: product.image || item.image,
      rating: product.rating || item.rating,
      reviewCount: product.reviewCount || item.reviewCount,
      options: product.options || item.options,
      variants: product.variants || item.variants
    };
  };
  const enrichSectionContent = (content) => {
    if (!content.productId) return content;
    const product = getProduct(content.productId);
    if (!product) return content;
    return {
      ...content,
      heading: product.name || content.heading,
      description: product.description || content.description,
      price: product.price || content.price,
      image: product.image || content.image,
      rating: product.rating || content.rating,
      reviewCount: product.reviewCount || content.reviewCount,
      options: product.options || content.options,
      variants: product.variants || content.variants
    };
  };
  return /* @__PURE__ */ jsx(CatalogContext.Provider, { value: { products, categories, getProduct, getCategory, enrichItem, enrichSectionContent }, children });
};
var useCatalog = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error("useCatalog must be used within a CatalogProvider");
  }
  return context;
};
var ProductCard = ({ item }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichItem } = useCatalog();
  const finalItem = enrichItem(item);
  const baseNumericPrice = parseFloat((finalItem.price || "0").replace(/[^0-9.]/g, "")) || 0;
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    if (finalItem.options && finalItem.options.length > 0) {
      const defaults = {};
      finalItem.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [finalItem]);
  const selectedVariant = finalItem.variants?.find((v) => {
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const finalNumericPrice = selectedVariant?.price ? parseFloat(String(selectedVariant.price).replace(/[^0-9.]/g, "")) || baseNumericPrice : baseNumericPrice;
  const finalImage = selectedVariant?.image || finalItem.image;
  const variantDisplay = item.variantDisplay || "normal";
  const renderVariants = () => finalItem.options && finalItem.options.length > 0 && /* @__PURE__ */ jsx("div", { className: `space-y-2 ${variantDisplay === "overlay" ? "mb-2" : "mt-2 mb-4 border-t pt-2 border-border/50"}`, children: finalItem.options.map((opt, idx) => {
    const validValues = opt.values.filter((v) => v.trim() !== "");
    if (validValues.length === 0) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      variantDisplay === "normal" && /* @__PURE__ */ jsx("label", { htmlFor: `opt-${finalItem.id || finalItem.productId}-${idx}`, className: "text-xs font-semibold uppercase text-muted-foreground block mb-1", children: opt.name }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: `opt-${finalItem.id || finalItem.productId}-${idx}`,
          className: `w-full text-sm p-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-primary ${variantDisplay === "overlay" ? "bg-white/90 border-white/20 backdrop-blur-sm" : "bg-background border-input"}`,
          value: selectedOptions[opt.name] || "",
          onChange: (e) => setSelectedOptions((prev) => ({ ...prev, [opt.name]: e.target.value })),
          children: [
            variantDisplay === "overlay" && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: opt.name }),
            validValues.map((val) => /* @__PURE__ */ jsx("option", { value: val, children: val }, val))
          ]
        }
      )
    ] }, idx);
  }) });
  const renderActions = () => /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-3 ${variantDisplay === "overlay" ? "" : "mt-auto"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("div", { className: `font-medium text-lg ${variantDisplay === "overlay" ? "text-white" : "text-primary"}`, children: formatPrice(finalNumericPrice) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        [...Array(5)].map((_, starsKey) => /* @__PURE__ */ jsx(Star, { size: 14, className: starsKey < Math.round(finalItem.rating || 5) ? "fill-current text-yellow-400" : variantDisplay === "overlay" ? "text-white/40" : "text-muted-foreground" }, starsKey)),
        finalItem.reviewCount && /* @__PURE__ */ jsxs("span", { className: `text-xs ml-1 ${variantDisplay === "overlay" ? "text-white/60" : "text-muted-foreground"}`, children: [
          "(",
          finalItem.reviewCount,
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        className: `w-full shadow-sm ${variantDisplay === "overlay" ? "bg-white text-black hover:bg-white/90" : ""}`,
        onClick: () => {
          addToCart({
            id: selectedVariant?.id || finalItem.productId || finalItem.id || finalItem.title,
            sku: selectedVariant?.sku || finalItem.id,
            title: finalItem.title,
            price: finalNumericPrice,
            image: finalImage,
            selectedOptions
          });
        },
        children: [
          /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4 mr-2" }),
          "Add to Cart"
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "card group bg-surface-container border border-outline-variant overflow-hidden flex flex-col h-full rounded-xl relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-surface-container-high", children: [
      finalImage && /* @__PURE__ */ jsx(
        "img",
        {
          src: finalImage,
          alt: finalItem.title,
          className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105",
          loading: "lazy",
          width: 400,
          height: 500
        }
      ),
      finalItem.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-inverse-surface text-inverse-on-surface text-xs font-bold px-2 py-1 rounded-full shadow-sm", children: finalItem.badge }),
      variantDisplay === "overlay" && /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-end h-full z-10", children: [
        renderVariants(),
        renderActions()
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1 relative z-20 bg-surface-container", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-1 text-foreground", children: finalItem.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3 line-clamp-2", children: finalItem.description }),
      /* @__PURE__ */ jsx("div", { className: "flex-1" }),
      variantDisplay === "normal" && /* @__PURE__ */ jsxs(Fragment, { children: [
        renderVariants(),
        renderActions()
      ] })
    ] })
  ] });
};
var ProductGrid1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-4xl font-bold md:text-5xl", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsx(ProductCard, { item: { ...item, variantDisplay: data.content.variantDisplay } }, i)) }),
    data.content.buttons && /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: data.content.buttons.map((btn, i) => /* @__PURE__ */ jsx(Button, { href: btn.href, variant: "outline", className: "min-w-[200px]", children: btn.text }, i)) })
  ] });
};
var ProductGrid2 = ({ data }) => {
  const { addToCart, formatPrice } = useCart();
  const { products, categories } = useCatalog();
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const getPrice = (p) => {
    return parseFloat(String(p.price || "0").replace(/[^0-9.]/g, "")) || 0;
  };
  const filteredProducts = products.filter((p) => {
    if (activeCategoryId !== "all" && p.categoryId !== activeCategoryId) return false;
    const price = getPrice(p);
    if (priceRange.min && price < parseFloat(priceRange.min)) return false;
    if (priceRange.max && price > parseFloat(priceRange.max)) return false;
    return true;
  });
  const dynamicItems = filteredProducts.map((p) => ({
    id: p.id,
    productId: p.id,
    title: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
    rating: p.rating,
    reviewCount: p.reviewCount,
    options: p.options,
    variants: p.variants,
    badge: p.id === "new" ? "New" : void 0
  }));
  const displayItems = products && products.length > 0 ? dynamicItems : data.content.items;
  const activeCategoryName = activeCategoryId === "all" ? "All Products" : categories.find((c) => c.id === activeCategoryId)?.name || "Category";
  const activeCategoryDesc = activeCategoryId === "all" ? data.content.description : categories.find((c) => c.id === activeCategoryId)?.description || `Explore our ${activeCategoryName} collection.`;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-64 flex-shrink-0 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-4 border-b border-outline-variant lg:hidden flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Filters" }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setShowFilters(!showFilters),
            children: [
              /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 mr-2" }),
              " Filter"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `space-y-8 ${showFilters ? "block" : "hidden"} lg:block`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold mb-4 flex justify-between items-center", children: [
            "Categories ",
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(
              "li",
              {
                className: `cursor-pointer transition-colors ${activeCategoryId === "all" ? "font-bold text-primary" : "hover:text-primary"}`,
                onClick: () => setActiveCategoryId("all"),
                children: "All Products"
              }
            ),
            categories && categories.filter((c) => !data.content.categoryIds || data.content.categoryIds.length === 0 || data.content.categoryIds.includes(c.id)).map((c) => /* @__PURE__ */ jsx(
              "li",
              {
                className: `cursor-pointer transition-colors ${activeCategoryId === c.id ? "font-bold text-primary" : "hover:text-primary"}`,
                onClick: () => setActiveCategoryId(c.id),
                children: c.name
              },
              c.id
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold mb-4 flex justify-between items-center", children: [
            "Price Range ",
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs", children: "$" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  placeholder: "Min",
                  className: "w-full pl-5 pr-2 py-1.5 text-sm rounded-md border border-input bg-background",
                  value: priceRange.min,
                  onChange: (e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "-" }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground text-xs", children: "$" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  placeholder: "Max",
                  className: "w-full pl-5 pr-2 py-1.5 text-sm rounded-md border border-input bg-background",
                  value: priceRange.max,
                  onChange: (e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex justify-between items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: activeCategoryName }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: activeCategoryDesc })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium mr-2 text-muted-foreground", children: "Sort by:" }),
          /* @__PURE__ */ jsxs("select", { className: "bg-transparent font-bold focus:outline-none cursor-pointer text-foreground", children: [
            /* @__PURE__ */ jsx("option", { children: "Featured" }),
            /* @__PURE__ */ jsx("option", { children: "Newest" }),
            /* @__PURE__ */ jsx("option", { children: "Price: Low to High" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        displayItems?.map((item, i) => /* @__PURE__ */ jsx(ProductCard, { item: { ...item, variantDisplay: data.content.variantDisplay } }, item.id || i)),
        (!displayItems || displayItems.length === 0) && /* @__PURE__ */ jsx("div", { className: "col-span-full py-12 text-center text-muted-foreground bg-surface-container rounded-xl border border-dashed border-outline", children: /* @__PURE__ */ jsx("p", { children: "No products found in this category." }) })
      ] })
    ] })
  ] }) });
};
var ProductList1Item = ({ item }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichItem } = useCatalog();
  const finalItem = enrichItem(item);
  const priceString = String(finalItem.price || "0");
  const numericPrice = parseFloat(priceString.replace(/[^0-9.]/g, "")) || 250;
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    if (finalItem.options && finalItem.options.length > 0) {
      const defaults = {};
      finalItem.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [finalItem]);
  const selectedVariant = finalItem.variants?.find((v) => {
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const finalNumericPrice = selectedVariant?.price ? parseFloat(String(selectedVariant.price).replace(/[^0-9.]/g, "")) || numericPrice : numericPrice;
  const finalImage = selectedVariant?.image || finalItem.image;
  return /* @__PURE__ */ jsxs("div", { className: "card group bg-surface-container border border-outline-variant overflow-hidden flex flex-col sm:flex-row gap-6 p-4 items-start", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full sm:w-48 h-48 flex-shrink-0 bg-surface-container-high rounded-lg overflow-hidden", children: finalImage && /* @__PURE__ */ jsx(
      "img",
      {
        src: finalImage,
        alt: finalItem.title,
        className: "object-cover w-full h-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left w-full", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl mb-2", children: finalItem.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center sm:justify-start gap-1 mb-3 text-sm", children: [
        [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 14, className: i < Math.round(finalItem.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground" }, i)),
        finalItem.reviewCount && /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground ml-1", children: [
          "(",
          finalItem.reviewCount,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 line-clamp-2", children: finalItem.description }),
      finalItem.options && finalItem.options.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto sm:mx-0", children: finalItem.options.map((opt, idx) => {
        const validValues = opt.values.filter((v) => v.trim() !== "");
        if (validValues.length === 0) return null;
        return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 text-left", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `opt-${finalItem.id || finalItem.productId}-${idx}`, className: "text-xs font-semibold uppercase text-muted-foreground", children: opt.name }),
          /* @__PURE__ */ jsx(
            "select",
            {
              id: `opt-${finalItem.id || finalItem.productId}-${idx}`,
              className: "w-full text-sm p-1.5 rounded border border-input bg-background",
              value: selectedOptions[opt.name] || "",
              onChange: (e) => setSelectedOptions((prev) => ({ ...prev, [opt.name]: e.target.value })),
              children: validValues.map((val) => /* @__PURE__ */ jsx("option", { value: val, children: val }, val))
            }
          )
        ] }, idx);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mt-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-2xl text-primary", children: formatPrice(finalNumericPrice) }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            className: "gap-2 w-full sm:w-auto",
            onClick: () => {
              addToCart({
                id: finalItem.productId || finalItem.title,
                title: finalItem.title,
                price: finalNumericPrice,
                image: finalImage,
                selectedOptions
              });
            },
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
              " Add to Cart"
            ]
          }
        )
      ] })
    ] })
  ] });
};
var ProductList1 = ({ data }) => {
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto mb-16", children: /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-bold md:text-4xl", children: data.content.heading }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-6", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsx(ProductList1Item, { item }, i)) })
  ] });
};
var CategoryGrid1 = ({ data }) => {
  const { categories, products } = useCatalog();
  const { formatPrice } = useCart();
  const selectedIds = data.content.categoryIds;
  let displayCategories = categories;
  if (selectedIds && selectedIds.length > 0) {
    displayCategories = categories?.filter((c) => selectedIds.includes(c.id)) || [];
  }
  const showManual = !displayCategories || displayCategories.length === 0;
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: data.content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      showManual && data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg aspect-[4/5] bg-surface-container border border-outline-variant", children: [
        item.image && /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image,
            alt: item.title,
            className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-1", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90 mb-4", children: item.description }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300", children: [
            "Shop Now ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] })
        ] })
      ] }, i)),
      !showManual && displayCategories?.map((cat) => {
        const categoryProducts = products?.filter((p) => p.categoryId === cat.id);
        const minPrice = categoryProducts && categoryProducts.length > 0 ? Math.min(...categoryProducts.map((p) => parseFloat(String(p.price || 0)))) : 0;
        return /* @__PURE__ */ jsxs(
          "a",
          {
            href: cat.url || "#",
            className: "group relative overflow-hidden rounded-lg aspect-[4/5] bg-surface-container border border-outline-variant cursor-pointer block",
            children: [
              cat.image && /* @__PURE__ */ jsx(
                "img",
                {
                  src: cat.image,
                  alt: cat.name,
                  className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-1", children: cat.name }),
                minPrice > 0 && /* @__PURE__ */ jsxs("p", { className: "text-sm opacity-90 mb-4", children: [
                  "From ",
                  formatPrice(minPrice)
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300", children: [
                  "Browse Category ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                ] })
              ] })
            ]
          },
          cat.id
        );
      })
    ] })
  ] });
};
var CategoryHero1 = ({ data }) => {
  const { getCategory, products } = useCatalog();
  const { addToCart, formatPrice } = useCart();
  const categoryId = data.content.categoryId;
  const category = categoryId ? getCategory(categoryId) : void 0;
  const title = category?.name || data.content.heading;
  const description = category?.description || data.content.description;
  const image = category?.image || data.content.image;
  const categoryProducts = categoryId ? products.filter((p) => p.categoryId === categoryId) : data.content.items?.map((item) => ({
    id: item.productId || "manual",
    name: item.title,
    price: item.price || "0",
    image: item.image,
    description: item.description || ""
  })) || [];
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);
  const currentProducts = categoryProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-12 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary font-bold tracking-wider uppercase mb-2 text-sm", children: data.content.tagline || "Shop Category" }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-lg", children: description }),
        data.content.buttons && data.content.buttons.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: data.content.buttons.map((btn, i) => /* @__PURE__ */ jsx(Button, { variant: btn.style, onClick: () => console.log("Button clicked"), children: btn.text }, i)) })
      ] }),
      image && /* @__PURE__ */ jsx("div", { className: "flex-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full h-full object-cover" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: currentProducts.map((product, idx) => /* @__PURE__ */ jsx(ProductCard, { item: {
      id: product.id,
      title: product.name || product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      productId: product.id,
      rating: product.rating,
      reviewCount: product.reviewCount,
      options: product.options,
      variants: product.variants,
      variantDisplay: data.content.variantDisplay
    } }, idx)) }),
    categoryProducts.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-20 text-muted-foreground bg-surface-container rounded-xl border border-dashed border-outline-variant", children: "No products found in this category." }),
    totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 mt-12", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => handlePageChange(currentPage - 1),
          disabled: currentPage === 1,
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16 })
        }
      ),
      Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handlePageChange(i + 1),
          className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${currentPage === i + 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"}`,
          children: i + 1
        },
        i
      )),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => handlePageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
        }
      )
    ] })
  ] });
};
var CategoryHero2 = ({ data }) => {
  const { getCategory, products } = useCatalog();
  const { addToCart, formatPrice } = useCart();
  const categoryId = data.content.categoryId;
  const category = categoryId ? getCategory(categoryId) : void 0;
  const title = category?.name || data.content.heading;
  const description = category?.description || data.content.description;
  const image = category?.image || data.content.image;
  const categoryProducts = categoryId ? products.filter((p) => p.categoryId === categoryId) : data.content.items?.map((item) => ({
    id: item.productId || "manual",
    name: item.title,
    price: item.price || "0",
    image: item.image,
    description: item.description || ""
  })) || [];
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);
  const currentProducts = categoryProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden mb-16 min-h-[400px] flex items-center justify-center text-center", children: [
      image && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 z-10" }),
        /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "absolute inset-0 w-full h-full object-cover" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-20 max-w-3xl px-6 py-12 text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold uppercase tracking-wider mb-4", children: data.content.tagline || "Collection" }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white/90 mb-8", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: currentProducts.map((product, idx) => /* @__PURE__ */ jsx(ProductCard, { item: {
      id: product.id,
      // Item ID (SKU for products)
      title: product.name || product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      productId: product.id,
      // For enrichment lookup
      rating: product.rating,
      reviewCount: product.reviewCount,
      options: product.options,
      variants: product.variants,
      variantDisplay: data.content.variantDisplay
    } }, idx)) }),
    categoryProducts.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-20 text-muted-foreground bg-surface-container rounded-xl border border-dashed border-outline-variant", children: "No products found in this category." }),
    totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 mt-12", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => handlePageChange(currentPage - 1),
          disabled: currentPage === 1,
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16 })
        }
      ),
      Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handlePageChange(i + 1),
          className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${currentPage === i + 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"}`,
          children: i + 1
        },
        i
      )),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "icon",
          onClick: () => handlePageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
        }
      )
    ] })
  ] });
};
var ProductHero1 = ({ data }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichSectionContent } = useCatalog();
  const content = enrichSectionContent(data.content);
  const userPrice = content.description.match(/[\d,]+\.\d{2}/)?.[0] || "199.00";
  const numericPrice = parseFloat(String(content.price || userPrice).replace(/[^0-9.]/g, "")) || 199;
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const productContent = content;
  const variants = content.variants || [];
  const selectedVariant = variants.find((v) => {
    if (!v.options) return false;
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const finalPrice = selectedVariant?.price || content.price || userPrice;
  const finalNumericPrice = parseFloat(String(finalPrice).replace(/[^0-9.]/g, "")) || numericPrice;
  const finalDisplayPrice = formatPrice(finalNumericPrice);
  const finalImage = selectedVariant?.image || content.image;
  React.useEffect(() => {
    if (productContent.options && productContent.options.length > 0) {
      const defaults = {};
      productContent.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [productContent]);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-surface-container-low rounded-2xl aspect-square lg:aspect-auto h-full min-h-[500px] relative overflow-hidden", children: data.content.image && /* @__PURE__ */ jsx(
      ResponsiveImage,
      {
        src: data.content.image,
        alt: content.heading,
        priority: true,
        maskImage: data.design?.maskImage,
        maskSize: data.design?.maskSize,
        maskPosition: data.design?.maskPosition,
        maskRepeat: data.design?.maskRepeat,
        maskGradientValue: data.design?.maskGradientValue,
        clipPath: data.design?.clipPath,
        className: "absolute inset-0 w-full h-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
      data.content.tagline && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-primary mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-wider", children: content.tagline }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-yellow-500 mb-4", children: [
        [1, 2, 3, 4, 5].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `w-5 h-5 ${i < (data.content.rating || 5) ? "fill-current text-yellow-500" : "text-muted-foreground"}` }, i)),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm ml-2", children: content.reviewCount ? `(${content.reviewCount})` : "(128 Reviews)" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold mb-4", children: content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-foreground mb-6", children: finalDisplayPrice }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed", children: content.description }),
      productContent.options && productContent.options.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8 space-y-4", children: productContent.options.map((opt, idx) => {
        const validValues = opt.values.filter((v) => v.trim() !== "");
        if (validValues.length === 0) return null;
        return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `hero-opt-${idx}`, className: "text-sm font-bold uppercase text-foreground", children: opt.name }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: validValues.map((val) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedOptions((prev) => ({ ...prev, [opt.name]: val })),
              className: `px-4 py-2 border rounded-md text-sm transition-all
                                                        ${selectedOptions[opt.name] === val ? "border-primary bg-primary/5 text-primary font-bold ring-1 ring-primary" : "border-outline hover:border-primary/50 text-foreground bg-surface"}`,
              children: val
            },
            val
          )) })
        ] }, idx);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: data.content.items?.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex border-b border-outline-variant py-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold w-1/3", children: item.title }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground w-2/3", children: item.description })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
        data.content.buttons?.map((btn, i) => /* @__PURE__ */ jsx(
          Button,
          {
            href: btn.action === "addToCart" ? void 0 : btn.href,
            variant: btn.style,
            size: "lg",
            className: "flex-1",
            onClick: btn.action === "addToCart" ? () => addToCart({
              id: selectedVariant?.id || content.productId || content.heading,
              title: content.heading,
              price: finalNumericPrice,
              image: finalImage,
              selectedOptions
            }) : void 0,
            children: btn.text
          },
          i
        )),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "primary",
            size: "lg",
            className: "flex-1",
            onClick: () => addToCart({
              id: selectedVariant?.id || content.productId || content.heading,
              title: content.heading,
              price: finalNumericPrice,
              image: finalImage,
              selectedOptions
            }),
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5 mr-2" }),
              "Add to Cart"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 text-sm text-muted-foreground", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
        " ",
        item.title
      ] }, i)) || /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Truck, { className: "w-4 h-4" }),
          " Free Shipping"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          " 2 Year Warranty"
        ] })
      ] }) })
    ] })
  ] }) });
};
var ProductHero2 = ({ data }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichSectionContent } = useCatalog();
  const content = enrichSectionContent(data.content);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const productContent = content;
  const variants = content.variants || [];
  const selectedVariant = variants.find((v) => {
    if (!v.options) return false;
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const raw = content.price || "299.00";
  const numericPrice = parseFloat(String(raw).replace(/[^0-9.]/g, "")) || 299;
  const finalPrice = selectedVariant?.price || content.price || raw;
  const finalNumericPrice = parseFloat(String(finalPrice).replace(/[^0-9.]/g, "")) || numericPrice;
  const finalDisplayPrice = formatPrice(finalNumericPrice);
  const finalImage = selectedVariant?.image || content.image;
  React.useEffect(() => {
    if (productContent.options && productContent.options.length > 0) {
      const defaults = {};
      productContent.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [productContent]);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 aspect-[4/3] bg-surface-container-high rounded-xl overflow-hidden", children: finalImage && /* @__PURE__ */ jsx("img", { src: finalImage, alt: "Main", className: "w-full h-full object-cover" }) }),
      (content.images || [content.image]).map((img, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square bg-surface-container-high rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: img || `https://picsum.photos/seed/${i + 123}/500/500`, alt: "Gallery", className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500" }) }, i))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold mb-4", children: content.heading }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-foreground", children: finalDisplayPrice }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-yellow-500", children: [
            [1, 2, 3, 4, 5].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, className: i < (content.rating || 5) ? "fill-current" : "text-muted-foreground" }, i)),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground ml-1", children: [
              "(",
              content.reviewCount || "86",
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed", children: content.description }),
      productContent.options && productContent.options.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-6", children: productContent.options.map((opt, idx) => {
        const validValues = opt.values.filter((v) => v.trim() !== "");
        if (validValues.length === 0) return null;
        return /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground", children: opt.name }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: validValues.map((val) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedOptions((prev) => ({ ...prev, [opt.name]: val })),
              className: `px-4 py-2 rounded-full border text-sm transition-all
                                                            ${selectedOptions[opt.name] === val ? "border-primary bg-primary text-on-primary font-bold shadow-md" : "border-outline hover:border-primary/50 text-foreground bg-surface"}`,
              children: val
            },
            val
          )) })
        ] }, idx);
      }) }) : (
        // Mock variants if none just to keep visual fidelity of original design if needed, 
        // but we replaced it with dynamic. The original had "Select Color".
        /* @__PURE__ */ jsx("div", { className: "space-y-4 hidden" })
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4 border-t border-outline-variant", children: [
        content.buttons?.map((btn, i) => /* @__PURE__ */ jsx(
          Button,
          {
            href: btn.action === "addToCart" ? void 0 : btn.href,
            variant: btn.style,
            size: "lg",
            className: "w-full",
            onClick: btn.action === "addToCart" ? () => addToCart({
              id: selectedVariant?.id || content.productId || content.heading,
              title: content.heading,
              price: finalNumericPrice,
              image: finalImage,
              selectedOptions
            }) : void 0,
            children: btn.text
          },
          i
        )),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground", children: content.infoText || "Free shipping on all orders over $100" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card bg-surface-container border border-outline-variant rounded-xl p-4 space-y-3", children: content.items?.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm font-medium", children: [
        /* @__PURE__ */ jsx("span", { children: item.title }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item.description })
      ] }, i)) })
    ] }) })
  ] }) });
};
var ProductFeature1 = ({ data }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichSectionContent } = useCatalog();
  const content = enrichSectionContent(data.content);
  const raw = content.price || "0";
  const numericPrice = parseFloat(String(raw).replace(/[^0-9.]/g, "")) || parseFloat((content.description || "").match(/\$\d+(\.\d{2})?/)?.[0].replace("$", "") || "149");
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const productContent = content;
  React.useEffect(() => {
    if (productContent.options && productContent.options.length > 0) {
      const defaults = {};
      productContent.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [productContent]);
  const selectedVariant = productContent.variants?.find((v) => {
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const finalNumericPrice = selectedVariant?.price ? parseFloat(String(selectedVariant.price).replace(/[^0-9.]/g, "")) || numericPrice : numericPrice;
  const finalImage = selectedVariant?.image || content.image;
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "card overflow-hidden bg-surface-container text-foreground rounded-3xl relative min-h-[500px] flex items-center", children: [
    finalImage && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-40", children: /* @__PURE__ */ jsx("img", { src: finalImage, alt: "Background", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full p-8 lg:p-16 items-center", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      data.content.tagline && /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-wide uppercase border border-primary/50", children: data.content.tagline }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-black leading-tight", children: data.content.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-lg", children: data.content.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-3xl font-bold", children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: formatPrice(finalNumericPrice) }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground line-through text-xl", children: formatPrice(numericPrice * 1.5) })
      ] }),
      productContent.options && productContent.options.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-6 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-outline-variant w-fit", children: productContent.options.map((opt, idx) => {
        const validValues = opt.values.filter((v) => v.trim() !== "");
        if (validValues.length === 0) return null;
        return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", role: "radiogroup", "aria-labelledby": `feature-opt-label-${idx}`, children: [
          /* @__PURE__ */ jsx("span", { id: `feature-opt-label-${idx}`, className: "text-xs font-bold uppercase text-muted-foreground", children: opt.name }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: validValues.map((val) => {
            const isSelected = selectedOptions[opt.name] === val;
            return /* @__PURE__ */ jsx(
              "button",
              {
                role: "radio",
                "aria-checked": isSelected,
                onClick: () => setSelectedOptions((prev) => ({ ...prev, [opt.name]: val })),
                className: `px-3 py-1 rounded text-sm transition-all border
                                                            ${isSelected ? "border-primary bg-primary text-on-primary font-bold" : "border-outline hover:border-primary/50 bg-surface"}`,
                children: val
              },
              val
            );
          }) })
        ] }, idx);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 p-4 bg-white/10 backdrop-blur-md rounded-xl inline-flex border border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-mono", children: "08" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase", children: "Hours" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: ":" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-mono", children: "45" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase", children: "Mins" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: ":" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-mono", children: "12" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase", children: "Secs" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 pt-4", children: data.content.buttons?.map((btn, i) => /* @__PURE__ */ jsx(
        Button,
        {
          href: btn.action === "addToCart" ? void 0 : btn.href,
          variant: btn.style,
          size: "lg",
          className: "min-w-[160px]",
          onClick: btn.action === "addToCart" ? () => addToCart({
            id: selectedVariant?.id || content.productId || content.heading,
            title: content.heading,
            price: finalNumericPrice,
            image: finalImage,
            selectedOptions
          }) : void 0,
          children: btn.text
        },
        i
      )) })
    ] }) })
  ] }) });
};
var ProductCarouselItem = ({ item }) => {
  const { addToCart, formatPrice } = useCart();
  const { enrichItem } = useCatalog();
  const finalItem = enrichItem(item);
  const priceString = String(finalItem.price || "0");
  const baseNumericPrice = parseFloat(priceString.replace(/[^0-9.]/g, "")) || parseFloat((finalItem.description || "").match(/\$\d+(\.\d{2})?/)?.[0].replace("$", "") || "0") || 0;
  const [selectedOptions, setSelectedOptions] = useState({});
  useEffect(() => {
    if (finalItem.options && finalItem.options.length > 0) {
      const defaults = {};
      finalItem.options.forEach((opt) => {
        if (opt.values && opt.values.length > 0) {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length > 0) {
            defaults[opt.name] = validValues[0];
          }
        }
      });
      setSelectedOptions((prev) => Object.keys(prev).length === 0 ? defaults : prev);
    }
  }, [finalItem]);
  const selectedVariant = finalItem.variants?.find((v) => {
    const keys = Object.keys(v.options);
    if (keys.length === 0) return false;
    return keys.every((k) => String(v.options[k]) === String(selectedOptions[k]));
  });
  const finalNumericPrice = selectedVariant?.price ? parseFloat(String(selectedVariant.price).replace(/[^0-9.]/g, "")) || baseNumericPrice : baseNumericPrice;
  const finalImage = selectedVariant?.image || finalItem.image;
  return /* @__PURE__ */ jsxs("div", { className: "min-w-[280px] md:min-w-[320px] snap-start card group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden", children: [
      finalImage && /* @__PURE__ */ jsx("img", { src: finalImage, alt: finalItem.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-3", children: [
        finalItem.options && finalItem.options.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: finalItem.options.map((opt, idx) => {
          const validValues = opt.values.filter((v) => v.trim() !== "");
          if (validValues.length === 0) return null;
          return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsx(
            "select",
            {
              className: "w-full text-xs p-1 rounded border-none bg-white/90 text-black shadow-sm",
              value: selectedOptions[opt.name] || "",
              onClick: (e) => e.stopPropagation(),
              onChange: (e) => setSelectedOptions((prev) => ({ ...prev, [opt.name]: e.target.value })),
              "aria-label": `Select ${opt.name}`,
              children: validValues.map((val) => /* @__PURE__ */ jsx("option", { value: val, children: val }, val))
            }
          ) }, idx);
        }) }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "sm",
            className: "w-full shadow-lg",
            onClick: () => addToCart({
              id: selectedVariant?.id || finalItem.productId || finalItem.title,
              title: finalItem.title,
              price: finalNumericPrice,
              image: finalImage,
              selectedOptions
            }),
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4 mr-2" }),
              " Add"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-1 line-clamp-1", children: finalItem.title }),
      /* @__PURE__ */ jsx("p", { className: "text-primary font-bold", children: formatPrice(finalNumericPrice) })
    ] })
  ] });
};
var ProductCarousel1 = ({ data }) => {
  const scrollContainerRef = React.useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs(SectionBase, { id: data.id, design: data.design, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-12 px-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-600 dark:text-neutral-400", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "rounded-full", onClick: () => scroll("left"), children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "rounded-full", onClick: () => scroll("right"), children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { ref: scrollContainerRef, className: "flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar -mx-4 px-4 scroll-smooth", children: data.content.items?.map((item, i) => /* @__PURE__ */ jsx(ProductCarouselItem, { item }, i)) })
  ] });
};
var CategoryShowcase1 = ({ data }) => {
  const { categories, products } = useCatalog();
  const { formatPrice } = useCart();
  const selectedIds = data.content.categoryIds;
  let displayCategories = categories;
  if (selectedIds && selectedIds.length > 0) {
    displayCategories = categories?.filter((c) => selectedIds.includes(c.id)) || [];
  }
  const showManual = !displayCategories || displayCategories.length === 0;
  const getItems = () => {
    if (showManual) return data.content.items || [];
    return displayCategories.slice(0, 4).map((cat) => {
      const categoryProducts = products?.filter((p) => p.categoryId === cat.id);
      const minPrice = categoryProducts && categoryProducts.length > 0 ? Math.min(...categoryProducts.map((p) => parseFloat(String(p.price || 0)))) : 0;
      return {
        title: cat.name,
        description: minPrice > 0 ? `From ${formatPrice(minPrice)}` : cat.description,
        image: cat.image,
        url: cat.url || "#"
      };
    });
  };
  const items = getItems();
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]", children: [
    /* @__PURE__ */ jsx("div", { className: "card md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-2xl", children: items[0] && /* @__PURE__ */ jsxs(Fragment, { children: [
      items[0].image && /* @__PURE__ */ jsx("img", { src: items[0].image, alt: items[0].title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-2 text-primary font-bold uppercase tracking-wider text-sm", children: "Collection" }),
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold mb-4", children: items[0].title }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-neutral-300 max-w-sm", children: items[0].description }),
        /* @__PURE__ */ jsxs(Button, { href: items[0].url, variant: "outline", className: "border-white text-white hover:bg-white hover:text-black w-fit", children: [
          "Shop Now ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "card lg:col-span-2 relative overflow-hidden group rounded-2xl", children: items[1] && /* @__PURE__ */ jsxs(Fragment, { children: [
      items[1].image && /* @__PURE__ */ jsx("img", { src: items[1].image, alt: items[1].title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/40 p-8 flex flex-col justify-center items-start text-white", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: items[1].title }),
        /* @__PURE__ */ jsxs(Button, { href: items[1].url, size: "sm", variant: "link", className: "text-white p-0 h-auto hover:text-primary", children: [
          "Explore ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 w-4 h-4" })
        ] })
      ] })
    ] }) }),
    items[2] ? /* @__PURE__ */ jsxs("a", { href: items[2].url || "#", className: "card relative overflow-hidden group rounded-2xl block", children: [
      items[2].image && /* @__PURE__ */ jsx("img", { src: items[2].image, alt: items[2].title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors p-6 flex items-end", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: items[2].title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-300", children: items[2].description })
      ] }) })
    ] }) : /* @__PURE__ */ jsx("div", { className: "card relative overflow-hidden group rounded-2xl" }),
    items[3] ? /* @__PURE__ */ jsxs("a", { href: items[3].url || "#", className: "card relative overflow-hidden group rounded-2xl block", children: [
      items[3].image && /* @__PURE__ */ jsx("img", { src: items[3].image, alt: items[3].title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors p-6 flex items-end", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: items[3].title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-300", children: items[3].description })
      ] }) })
    ] }) : /* @__PURE__ */ jsx("div", { className: "card relative overflow-hidden group rounded-2xl" })
  ] }) });
};
var ProductBundle1 = ({ data }) => {
  const { addToCart, formatPrice } = useCart();
  const [activeHotspot, setActiveHotspot] = useState(null);
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800", children: [
      data.content.image && /* @__PURE__ */ jsx("img", { src: data.content.image, alt: "Look", className: "w-full h-auto object-cover" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn("absolute top-[30%] left-[40%] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-110", activeHotspot === 0 && "scale-110 ring-4 ring-white/50"),
          onClick: () => setActiveHotspot(activeHotspot === 0 ? null : 0),
          children: /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn("absolute top-[60%] left-[55%] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-110", activeHotspot === 1 && "scale-110 ring-4 ring-white/50"),
          onClick: () => setActiveHotspot(activeHotspot === 1 ? null : 1),
          children: /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn("absolute bottom-[10%] left-[45%] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-110", activeHotspot === 2 && "scale-110 ring-4 ring-white/50"),
          onClick: () => setActiveHotspot(activeHotspot === 2 ? null : 2),
          children: /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: data.content.heading }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-600 dark:text-neutral-400", children: data.content.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: data.content.items?.map((item, i) => {
        const raw = item.price ? String(item.price) : (item.description || "").match(/[\d,]+\.\d{2}/)?.[0] || "0";
        const numericPrice = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "card p-4 flex items-center gap-4 transition-all duration-300 border border-transparent",
              activeHotspot === i ? "border-primary bg-primary/5 shadow-md" : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            ),
            onMouseEnter: () => setActiveHotspot(i),
            onMouseLeave: () => setActiveHotspot(null),
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: item.image || `https://picsum.photos/seed/${i + 55}/100/100`, alt: item.title, className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-neutral-500", children: item.description || "" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-primary", children: formatPrice(numericPrice) })
              ] }),
              /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", className: "rounded-full flex-shrink-0", children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
            ]
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-500", children: "Total Bundle Price:" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-2xl ml-2", children: (() => {
            const total = data.content.items?.reduce((sum, item) => {
              const raw = item.price ? String(item.price) : (item.description || "").match(/[\d,]+\.\d{2}/)?.[0] || "0";
              const p = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
              return sum + p;
            }, 0) || 0;
            const finalTotal = data.content.price ? parseFloat(String(data.content.price).replace(/[^0-9.]/g, "")) : total;
            return formatPrice(finalTotal);
          })() })
        ] }),
        data.content.buttons?.map((btn, i) => /* @__PURE__ */ jsx(Button, { href: btn.href, variant: btn.style, size: "lg", className: "min-w-[180px]", children: btn.text }, i)),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "primary",
            size: "lg",
            className: "min-w-[180px]",
            onClick: () => {
              data.content.items?.forEach((item, idx) => {
                const raw = item.price ? String(item.price) : (item.description || "").match(/[\d,]+\.\d{2}/)?.[0] || "0";
                const p = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
                addToCart({
                  id: `${item.title}-${Date.now()}-${idx}`,
                  title: item.title,
                  price: p,
                  image: item.image || `https://picsum.photos/seed/${idx + 55}/100/100`
                });
              });
            },
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 mr-2" }),
              "Add All"
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
var Checkout1 = ({ data, whatsappNumber: propWhatsappNumber }) => {
  const { items: cartItems, cartTotal: contextCartTotal, formatPrice, updateQuantity, removeFromCart, whatsappNumber: contextWhatsappNumber } = useCart();
  const { getProduct } = useCatalog();
  const finalWhatsAppNumber = propWhatsappNumber || contextWhatsappNumber || "212600000000";
  const linkedProductId = data.content.productId;
  const [linkedItem, setLinkedItem] = useState(null);
  useEffect(() => {
    if (linkedProductId) {
      const product = getProduct(linkedProductId);
      if (product) {
        setLinkedItem({
          id: product.id,
          title: product.name,
          price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
          image: product.image,
          quantity: 1,
          sku: product.sku
        });
      }
    } else {
      setLinkedItem(null);
    }
  }, [linkedProductId, getProduct]);
  const activeItems = linkedItem ? [linkedItem] : cartItems;
  const activeTotal = linkedItem ? linkedItem.price * linkedItem.quantity : contextCartTotal;
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    city: "Casablanca",
    address: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLinkedQuantity = (delta) => {
    if (linkedItem) {
      const newQty = Math.max(1, linkedItem.quantity + delta);
      setLinkedItem({ ...linkedItem, quantity: newQty });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `*New Order Request*

`;
    message += `*Customer Details:*
`;
    message += `Name: ${formData.name}
`;
    message += `WhatsApp: ${formData.whatsapp}
`;
    message += `City: ${formData.city}
`;
    message += `Address: ${formData.address}

`;
    message += `*Order Summary:*
`;
    activeItems.forEach((item) => {
      let itemLine = `- ${item.quantity}x ${item.title}`;
      if (item.sku) itemLine += ` (SKU: ${item.sku})`;
      if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
        const optionsStr = Object.entries(item.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(", ");
        itemLine += ` (${optionsStr})`;
      }
      itemLine += ` (${formatPrice(item.price)})
`;
      message += itemLine;
    });
    message += `
*Total: ${formatPrice(activeTotal)}*`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${finalWhatsAppNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  const heading = data.content.heading || "Checkout";
  const description = data.content.description || "Complete your order via WhatsApp.";
  const submitText = data.content.buttons?.[0]?.text || "Complete Order via WhatsApp";
  const labels = {
    name: "Full Name",
    phone: "WhatsApp Number",
    city: "City",
    address: "Address / Notes"
  };
  return /* @__PURE__ */ jsx(SectionBase, { id: data.id, design: data.design, children: /* @__PURE__ */ jsxs("div", { id: "checkout-form", className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShoppingBag, { className: "w-5 h-5" }),
        "Order Summary"
      ] }),
      activeItems.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-center py-8", children: "Your cart is empty." }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        activeItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start pb-4 border-b border-neutral-200 dark:border-neutral-800 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white rounded-lg overflow-hidden border border-neutral-200 flex-shrink-0", children: item.image && /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.title }),
              item.sku && /* @__PURE__ */ jsxs("div", { className: "text-xs text-neutral-500 font-mono", children: [
                "SKU: ",
                item.sku
              ] }),
              item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 space-y-0.5", children: Object.entries(item.selectedOptions).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize", children: [
                  key,
                  ":"
                ] }),
                /* @__PURE__ */ jsx("span", { children: value })
              ] }, key)) }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mt-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-1", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "p-1 hover:text-primary transition-colors",
                    onClick: (e) => {
                      e.preventDefault();
                      linkedItem ? handleLinkedQuantity(-1) : updateQuantity(item.id, item.quantity - 1, item.selectedOptions);
                    },
                    "aria-label": "Decrease quantity",
                    children: /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium w-4 text-center", children: item.quantity }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "p-1 hover:text-primary transition-colors",
                    onClick: (e) => {
                      e.preventDefault();
                      linkedItem ? handleLinkedQuantity(1) : updateQuantity(item.id, item.quantity + 1, item.selectedOptions);
                    },
                    "aria-label": "Increase quantity",
                    children: /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3" })
                  }
                )
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold mb-1", children: formatPrice(item.price * item.quantity) }),
            !linkedItem && /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-xs text-red-500 hover:text-red-600 underline",
                onClick: (e) => {
                  e.preventDefault();
                  removeFromCart(item.id, item.selectedOptions);
                },
                children: "Remove"
              }
            )
          ] })
        ] }, item.id)),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 flex justify-between items-center text-lg font-bold border-t border-neutral-200 dark:border-neutral-800", children: [
          /* @__PURE__ */ jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsx("span", { children: formatPrice(activeTotal) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: heading }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-600 dark:text-neutral-400", children: description })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-neutral-500" }),
            " ",
            labels.name
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              required: true,
              name: "name",
              value: formData.name,
              onChange: handleChange,
              placeholder: "John Doe",
              className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-neutral-500" }),
              " ",
              labels.phone
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                name: "whatsapp",
                value: formData.whatsapp,
                onChange: handleChange,
                placeholder: "+212 6...",
                className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-neutral-500" }),
              " ",
              labels.city
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  required: true,
                  name: "city",
                  value: formData.city,
                  onChange: handleChange,
                  placeholder: "Casablanca",
                  className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 pointer-events-none bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded", children: "Morocco" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: labels.address }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "address",
              value: formData.address,
              onChange: handleChange,
              placeholder: "Delivery details or special requests...",
              rows: 3,
              className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "submit",
            size: "lg",
            className: "w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-none",
            disabled: activeItems.length === 0,
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
              submitText
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-neutral-500", children: "By clicking confirming, you will be redirected to WhatsApp to send your order details directly to us." })
      ] })
    ] })
  ] }) });
};
var LayoutContentRenderer = () => /* @__PURE__ */ jsx("div", { className: "py-24 border-y-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-center text-neutral-400 dark:text-neutral-500", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: "Page Content Placeholder" }),
  /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Pages using this layout will render their unique sections here" })
] }) });
var SectionRenderer = ({ section }) => {
  switch (section.type) {
    case SectionType.Navbar1:
      return /* @__PURE__ */ jsx(Navbar1, { data: section });
    case SectionType.Navbar2:
      return /* @__PURE__ */ jsx(Navbar2, { data: section });
    case SectionType.Navbar3:
      return /* @__PURE__ */ jsx(Navbar3, { data: section });
    case SectionType.Navbar4:
      return /* @__PURE__ */ jsx(Navbar4, { data: section });
    case SectionType.Navbar5:
      return /* @__PURE__ */ jsx(Navbar5, { data: section });
    case SectionType.Navbar6:
      return /* @__PURE__ */ jsx(Navbar6, { data: section });
    case SectionType.Navbar7:
      return /* @__PURE__ */ jsx(Navbar7, { data: section });
    case SectionType.Navbar8:
      return /* @__PURE__ */ jsx(Navbar8, { data: section });
    case SectionType.Navbar9:
      return /* @__PURE__ */ jsx(Navbar9, { data: section });
    case SectionType.Header1:
      return /* @__PURE__ */ jsx(Header1, { data: section });
    case SectionType.Header2:
      return /* @__PURE__ */ jsx(Header2, { data: section });
    case SectionType.Header9:
      return /* @__PURE__ */ jsx(Header9, { data: section });
    case SectionType.Header18:
      return /* @__PURE__ */ jsx(Header18, { data: section });
    case SectionType.Header30:
      return /* @__PURE__ */ jsx(Header30, { data: section });
    case SectionType.Header46:
      return /* @__PURE__ */ jsx(Header46, { data: section });
    case SectionType.Feature1:
      return /* @__PURE__ */ jsx(Feature1, { data: section });
    case SectionType.Feature2:
      return /* @__PURE__ */ jsx(Feature2, { data: section });
    case SectionType.Feature3:
      return /* @__PURE__ */ jsx(Feature3, { data: section });
    case SectionType.Feature4:
      return /* @__PURE__ */ jsx(Feature4, { data: section });
    case SectionType.Feature5:
      return /* @__PURE__ */ jsx(Feature5, { data: section });
    case SectionType.Feature6:
      return /* @__PURE__ */ jsx(Feature6, { data: section });
    case SectionType.Feature24:
      return /* @__PURE__ */ jsx(Feature24, { data: section });
    case SectionType.Feature16:
      return /* @__PURE__ */ jsx(Feature16, { data: section });
    case SectionType.Testimonial1:
      return /* @__PURE__ */ jsx(Testimonial1, { data: section });
    case SectionType.Testimonial2:
      return /* @__PURE__ */ jsx(Testimonial2, { data: section });
    // New
    case SectionType.Testimonial3:
      return /* @__PURE__ */ jsx(Testimonial3, { data: section });
    case SectionType.Testimonial4:
      return /* @__PURE__ */ jsx(Testimonial4, { data: section });
    // New
    case SectionType.Testimonial5:
      return /* @__PURE__ */ jsx(Testimonial5, { data: section });
    // New
    case SectionType.Testimonial6:
      return /* @__PURE__ */ jsx(Testimonial6, { data: section });
    // New
    case SectionType.Testimonial7:
      return /* @__PURE__ */ jsx(Testimonial7, { data: section });
    // New
    case SectionType.Logos1:
      return /* @__PURE__ */ jsx(Logos1, { data: section });
    case SectionType.Logos2:
      return /* @__PURE__ */ jsx(Logos2, { data: section });
    case SectionType.Stats1:
      return /* @__PURE__ */ jsx(Stats1, { data: section });
    case SectionType.Stats2:
      return /* @__PURE__ */ jsx(Stats2, { data: section });
    case SectionType.Stats3:
      return /* @__PURE__ */ jsx(Stats3, { data: section });
    case SectionType.Stats4:
      return /* @__PURE__ */ jsx(Stats4, { data: section });
    case SectionType.Stats5:
      return /* @__PURE__ */ jsx(Stats5, { data: section });
    case SectionType.Stats6:
      return /* @__PURE__ */ jsx(Stats6, { data: section });
    case SectionType.SocialProof2:
      return /* @__PURE__ */ jsx(SocialProof2, { data: section });
    case SectionType.SocialProof3:
      return /* @__PURE__ */ jsx(SocialProof3, { data: section });
    case SectionType.SocialProof4:
      return /* @__PURE__ */ jsx(SocialProof4, { data: section });
    case SectionType.SocialProof5:
      return /* @__PURE__ */ jsx(SocialProof5, { data: section });
    case SectionType.SocialProof6:
      return /* @__PURE__ */ jsx(SocialProof6, { data: section });
    case SectionType.CTA1:
      return /* @__PURE__ */ jsx(CTA1, { data: section });
    case SectionType.CTA2:
      return /* @__PURE__ */ jsx(CTA2, { data: section });
    case SectionType.CTA3:
      return /* @__PURE__ */ jsx(CTA3, { data: section });
    case SectionType.CTA4:
      return /* @__PURE__ */ jsx(CTA4, { data: section });
    case SectionType.FAQ1:
      return /* @__PURE__ */ jsx(FAQ1, { data: section });
    case SectionType.FAQ2:
      return /* @__PURE__ */ jsx(FAQ2, { data: section });
    case SectionType.FAQ3:
      return /* @__PURE__ */ jsx(FAQ3, { data: section });
    case SectionType.FAQ4:
      return /* @__PURE__ */ jsx(FAQ4, { data: section });
    case SectionType.FAQ5:
      return /* @__PURE__ */ jsx(FAQ5, { data: section });
    case SectionType.FAQ6:
      return /* @__PURE__ */ jsx(FAQ6, { data: section });
    case SectionType.FAQ7:
      return /* @__PURE__ */ jsx(FAQ7, { data: section });
    case SectionType.FAQ8:
      return /* @__PURE__ */ jsx(FAQ8, { data: section });
    case SectionType.FAQ9:
      return /* @__PURE__ */ jsx(FAQ9, { data: section });
    case SectionType.FAQ10:
      return /* @__PURE__ */ jsx(FAQ10, { data: section });
    case SectionType.FAQ11:
      return /* @__PURE__ */ jsx(FAQ11, { data: section });
    case SectionType.Pricing1:
      return /* @__PURE__ */ jsx(Pricing1, { data: section });
    case SectionType.Pricing2:
      return /* @__PURE__ */ jsx(Pricing2, { data: section });
    case SectionType.Pricing3:
      return /* @__PURE__ */ jsx(Pricing3, { data: section });
    case SectionType.Pricing4:
      return /* @__PURE__ */ jsx(Pricing4, { data: section });
    case SectionType.Pricing5:
      return /* @__PURE__ */ jsx(Pricing5, { data: section });
    case SectionType.Pricing6:
      return /* @__PURE__ */ jsx(Pricing6, { data: section });
    case SectionType.Contact1:
      return /* @__PURE__ */ jsx(Contact1, { data: section });
    case SectionType.SocialContact1:
      return /* @__PURE__ */ jsx(SocialContact1, { data: section });
    case SectionType.SocialContact2:
      return /* @__PURE__ */ jsx(SocialContact2, { data: section });
    case SectionType.SocialContact3:
      return /* @__PURE__ */ jsx(SocialContact3, { data: section });
    case SectionType.SocialContact4:
      return /* @__PURE__ */ jsx(SocialContact4, { data: section });
    case SectionType.SocialContact5:
      return /* @__PURE__ */ jsx(SocialContact5, { data: section });
    case SectionType.SocialContact6:
      return /* @__PURE__ */ jsx(SocialContact6, { data: section });
    case SectionType.Blog1:
      return /* @__PURE__ */ jsx(Blog1, { data: section });
    case SectionType.Blog2:
      return /* @__PURE__ */ jsx(Blog2, { data: section });
    case SectionType.Blog3:
      return /* @__PURE__ */ jsx(Blog3, { data: section });
    case SectionType.Blog4:
      return /* @__PURE__ */ jsx(Blog4, { data: section });
    case SectionType.Blog5:
      return /* @__PURE__ */ jsx(Blog5, { data: section });
    case SectionType.Blog6:
      return /* @__PURE__ */ jsx(Blog6, { data: section });
    case SectionType.Blog7:
      return /* @__PURE__ */ jsx(Blog7, { data: section });
    case SectionType.Blog8:
      return /* @__PURE__ */ jsx(Blog8, { data: section });
    case SectionType.Blog9:
      return /* @__PURE__ */ jsx(Blog9, { data: section });
    case SectionType.Blog10:
      return /* @__PURE__ */ jsx(Blog10, { data: section });
    case SectionType.Blog11:
      return /* @__PURE__ */ jsx(Blog11, { data: section });
    case SectionType.Gallery1:
      return /* @__PURE__ */ jsx(Gallery1, { data: section });
    case SectionType.Gallery2:
      return /* @__PURE__ */ jsx(Gallery2, { data: section });
    case SectionType.Gallery3:
      return /* @__PURE__ */ jsx(Gallery3, { data: section });
    case SectionType.Gallery4:
      return /* @__PURE__ */ jsx(Gallery4, { data: section });
    case SectionType.Gallery5:
      return /* @__PURE__ */ jsx(Gallery5, { data: section });
    case SectionType.Gallery6:
      return /* @__PURE__ */ jsx(Gallery6, { data: section });
    case SectionType.Gallery7:
      return /* @__PURE__ */ jsx(Gallery7, { data: section });
    case SectionType.Gallery8:
      return /* @__PURE__ */ jsx(Gallery8, { data: section });
    case SectionType.Gallery9:
      return /* @__PURE__ */ jsx(Gallery9, { data: section });
    case SectionType.Gallery10:
      return /* @__PURE__ */ jsx(Gallery10, { data: section });
    case SectionType.Gallery11:
      return /* @__PURE__ */ jsx(Gallery11, { data: section });
    case SectionType.Gallery12:
      return /* @__PURE__ */ jsx(Gallery12, { data: section });
    case SectionType.Gallery15:
      return /* @__PURE__ */ jsx(Gallery15, { data: section });
    case SectionType.Gallery18:
      return /* @__PURE__ */ jsx(Gallery18, { data: section });
    case SectionType.Portfolio1:
      return /* @__PURE__ */ jsx(Portfolio1, { section });
    case SectionType.Portfolio2:
      return /* @__PURE__ */ jsx(Portfolio2, { section });
    case SectionType.Portfolio3:
      return /* @__PURE__ */ jsx(Portfolio3, { section });
    case SectionType.Portfolio4:
      return /* @__PURE__ */ jsx(Portfolio4, { section });
    case SectionType.Portfolio5:
      return /* @__PURE__ */ jsx(Portfolio5, { section });
    case SectionType.Alert1:
      return /* @__PURE__ */ jsx(Alert1, { data: section });
    case SectionType.Alert2:
      return /* @__PURE__ */ jsx(Alert2, { data: section });
    case SectionType.Alert3:
      return /* @__PURE__ */ jsx(Alert3, { data: section });
    case SectionType.Alert4:
      return /* @__PURE__ */ jsx(Alert4, { data: section });
    case SectionType.Alert5:
      return /* @__PURE__ */ jsx(Alert5, { data: section });
    case SectionType.NoticeBar1:
      return /* @__PURE__ */ jsx(NoticeBar1, { data: section });
    case SectionType.NoticeBar2:
      return /* @__PURE__ */ jsx(NoticeBar2, { data: section });
    case SectionType.NoticeBar3:
      return /* @__PURE__ */ jsx(NoticeBar3, { data: section });
    case SectionType.ProductGrid1:
      return /* @__PURE__ */ jsx(ProductGrid1, { data: section });
    case SectionType.ProductGrid2:
      return /* @__PURE__ */ jsx(ProductGrid2, { data: section });
    case SectionType.ProductList1:
      return /* @__PURE__ */ jsx(ProductList1, { data: section });
    case SectionType.CategoryGrid1:
      return /* @__PURE__ */ jsx(CategoryGrid1, { data: section });
    case SectionType.CategoryHero1:
      return /* @__PURE__ */ jsx(CategoryHero1, { data: section });
    case SectionType.CategoryHero2:
      return /* @__PURE__ */ jsx(CategoryHero2, { data: section });
    case SectionType.ProductHero1:
      return /* @__PURE__ */ jsx(ProductHero1, { data: section });
    case SectionType.ProductHero2:
      return /* @__PURE__ */ jsx(ProductHero2, { data: section });
    case SectionType.ProductFeature1:
      return /* @__PURE__ */ jsx(ProductFeature1, { data: section });
    case SectionType.ProductCarousel1:
      return /* @__PURE__ */ jsx(ProductCarousel1, { data: section });
    case SectionType.CategoryShowcase1:
      return /* @__PURE__ */ jsx(CategoryShowcase1, { data: section });
    case SectionType.ProductBundle1:
      return /* @__PURE__ */ jsx(ProductBundle1, { data: section });
    case SectionType.Checkout1:
      return /* @__PURE__ */ jsx(Checkout1, { data: section });
    case SectionType.Footer1:
      return /* @__PURE__ */ jsx(Footer1, { data: section });
    case SectionType.Footer2:
      return /* @__PURE__ */ jsx(Footer2, { data: section });
    case SectionType.Footer3:
      return /* @__PURE__ */ jsx(Footer3, { data: section });
    case SectionType.Footer4:
      return /* @__PURE__ */ jsx(Footer4, { data: section });
    case SectionType.LayoutContent:
      return /* @__PURE__ */ jsx(LayoutContentRenderer, { data: section });
    default:
      return /* @__PURE__ */ jsx("div", { className: "p-12 text-center border-b border-gray-200 bg-gray-50", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
        "Section type ",
        /* @__PURE__ */ jsx("strong", { children: section.type }),
        " not implemented yet."
      ] }) });
  }
};
var CartDrawer = () => {
  const { items, isCartOpen, setCartOpen, updateQuantity, removeFromCart, cartTotal, formatPrice, checkoutUrl } = useCart();
  if (!isCartOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
        onClick: () => setCartOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md bg-white dark:bg-neutral-900 h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-lg font-bold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ShoppingBag, { className: "w-5 h-5" }),
          "Your Cart",
          /* @__PURE__ */ jsx("span", { className: "bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full", children: items.length })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setCartOpen(false),
            className: "p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center text-neutral-500 space-y-4", children: [
        /* @__PURE__ */ jsx(ShoppingBag, { className: "w-16 h-16 opacity-20" }),
        /* @__PURE__ */ jsx("p", { children: "Your cart is empty" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setCartOpen(false), children: "Continue Shopping" })
      ] }) : items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-neutral-700", children: item.image ? /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-8 h-8 text-neutral-300" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium truncate", children: item.title }),
            item.sku && /* @__PURE__ */ jsxs("div", { className: "text-xs text-neutral-500 dark:text-neutral-400 font-mono", children: [
              "SKU: ",
              item.sku
            ] }),
            item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 space-y-0.5", children: Object.entries(item.selectedOptions).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize", children: [
                key,
                ":"
              ] }),
              /* @__PURE__ */ jsx("span", { children: value })
            ] }, key)) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-primary mt-1", children: formatPrice(item.price) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-1", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "p-1 hover:text-primary transition-colors",
                  onClick: () => updateQuantity(item.id, item.quantity - 1, item.selectedOptions),
                  children: /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3" })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium w-4 text-center", children: item.quantity }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "p-1 hover:text-primary transition-colors",
                  onClick: () => updateQuantity(item.id, item.quantity + 1, item.selectedOptions),
                  children: /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-xs text-red-500 hover:text-red-600 underline",
                onClick: () => removeFromCart(item.id, item.selectedOptions),
                children: "Remove"
              }
            )
          ] })
        ] })
      ] }, item.id)) }),
      items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-neutral-500", children: "Subtotal" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: formatPrice(cartTotal) })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "w-full",
            size: "lg",
            onClick: () => {
              setCartOpen(false);
              if (checkoutUrl) {
                window.location.href = checkoutUrl;
                return;
              }
              const checkoutSection = document.getElementById("checkout-form");
              if (checkoutSection) {
                checkoutSection.scrollIntoView({ behavior: "smooth" });
              } else {
                alert("Please add a Checkout section to your page to proceed.");
              }
            },
            children: "Proceed to Checkout"
          }
        )
      ] })
    ] })
  ] });
};
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
@material/material-color-utilities/utils/color_utils.js:
@material/material-color-utilities/hct/viewing_conditions.js:
@material/material-color-utilities/hct/cam16.js:
@material/material-color-utilities/hct/hct_solver.js:
@material/material-color-utilities/hct/hct.js:
@material/material-color-utilities/blend/blend.js:
@material/material-color-utilities/palettes/tonal_palette.js:
@material/material-color-utilities/palettes/core_palette.js:
@material/material-color-utilities/quantize/lab_point_provider.js:
@material/material-color-utilities/quantize/quantizer_wsmeans.js:
@material/material-color-utilities/quantize/quantizer_map.js:
@material/material-color-utilities/quantize/quantizer_wu.js:
@material/material-color-utilities/quantize/quantizer_celebi.js:
@material/material-color-utilities/scheme/scheme.js:
@material/material-color-utilities/scheme/scheme_android.js:
@material/material-color-utilities/score/score.js:
@material/material-color-utilities/utils/string_utils.js:
@material/material-color-utilities/utils/image_utils.js:
@material/material-color-utilities/utils/theme_utils.js:
@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
@material/material-color-utilities/dynamiccolor/dynamic_color.js:
@material/material-color-utilities/scheme/variant.js:
@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
@material/material-color-utilities/scheme/dynamic_scheme.js:
@material/material-color-utilities/scheme/scheme_expressive.js:
@material/material-color-utilities/scheme/scheme_monochrome.js:
@material/material-color-utilities/scheme/scheme_neutral.js:
@material/material-color-utilities/scheme/scheme_tonal_spot.js:
@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
@material/material-color-utilities/dynamiccolor/contrast_curve.js:
@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
@material/material-color-utilities/temperature/temperature_cache.js:
@material/material-color-utilities/scheme/scheme_content.js:
@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/

const getCustomThemeName = (css) => {
  if (!css) return null;
  const match = css.match(/name:\s*"([^"]+)"/);
  return match ? match[1] : null;
};
const SiteWrapper = ({ page: initialPage, site: initialSite, theme: initialTheme }) => {
  const [site, setSite] = React.useState(initialSite);
  const [page, setPage] = React.useState(initialPage);
  const [overrideLayoutId, setOverrideLayoutId] = React.useState(void 0);
  React.useEffect(() => {
    const customThemeName = getCustomThemeName(site?.styleGuide?.customCss);
    const themeToApply = customThemeName || site?.styleGuide?.theme || initialTheme || site?.settings?.theme;
    if (themeToApply) {
      document.documentElement.setAttribute("data-theme", themeToApply);
    }
  }, [site, initialTheme]);
  React.useEffect(() => {
    const styleGuide = site?.styleGuide;
    if (!styleGuide) return;
    const { typography, borderRadius } = styleGuide;
    const headingFont = typography.headingFont || "Inter";
    const bodyFont = typography.bodyFont || "Inter";
    const fontSizeMap = { small: "0.875rem", regular: "1rem", large: "1.25rem" };
    const rootFontSize = fontSizeMap[typography.fontSize] || "1.125rem";
    const headingWeightMap = { normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800" };
    const headingWeight = headingWeightMap[typography.headingWeight] || "700";
    const bodyWeightMap = { light: "300", normal: "400", medium: "500", semibold: "600" };
    const bodyWeight = bodyWeightMap[typography.bodyWeight] || "400";
    const lineHeightMap = { tight: "1.2", normal: "1.5", relaxed: "1.625", loose: "2.0" };
    const bodyLineHeight = lineHeightMap[typography.bodyLineHeight] || "1.5";
    const headingTransform = typography.headingTransform || "none";
    const letterSpacingMap = { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em" };
    const headingLetterSpacing = letterSpacingMap[typography.headingLetterSpacing] || "0em";
    let styleTag = document.getElementById("dynamic-typography-styles");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "dynamic-typography-styles";
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = `
            :root {
                --headingFont: "${headingFont}", sans-serif;
                --bodyFont: "${bodyFont}", sans-serif;
                --rootFontSize: ${rootFontSize};
                --headingWeight: ${headingWeight};
                --bodyWeight: ${bodyWeight};
                --bodyLineHeight: ${bodyLineHeight};
                --headingTransform: ${headingTransform};
                --headingLetterSpacing: ${headingLetterSpacing};
                --borderRadius: ${borderRadius || "0.5rem"};

                /* Tailwind Typography variables */
                --font-heading: var(--headingFont);
                --font-sans: var(--bodyFont);
                --tw-prose-body: var(--color-base-content);
                --tw-prose-headings: var(--color-base-content);
                --tw-prose-links: var(--color-primary);
                --tw-prose-bullets: var(--color-primary);
            }
            html { font-size: var(--rootFontSize); }
            body { 
                font-family: var(--bodyFont) !important;
                font-weight: var(--bodyWeight);
                line-height: var(--bodyLineHeight);
            }
            h1, h2, h3, h4, h5, h6 { 
                font-family: var(--headingFont) !important;
                font-weight: var(--headingWeight);
                text-transform: var(--headingTransform);
                letter-spacing: var(--headingLetterSpacing);
            }
            .prose {
                font-family: var(--bodyFont);
            }
            .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                font-family: var(--headingFont) !important;
            }
            .rounded-md, .rounded, .rounded-lg { border-radius: var(--borderRadius) !important; }
            .rounded-full { border-radius: 9999px !important; }
        `;
    const loadFont = (font) => {
      const id = `font-${font.replace(/\s+/g, "-")}`;
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,700&display=swap`;
        document.head.appendChild(link);
      }
    };
    loadFont(headingFont);
    loadFont(bodyFont);
  }, [site?.styleGuide]);
  React.useEffect(() => {
    if (page?.seo) {
      if (page.seo.title) {
        document.title = page.seo.title + " - " + (site.title || "LumeGem");
      }
      const updateMeta = (name, content) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute("name", name);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      };
      const updateOgMeta = (property, content) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute("property", property);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      };
      if (page.seo.description) {
        updateMeta("description", page.seo.description);
        updateOgMeta("og:description", page.seo.description);
      }
      if (page.seo.keywords) {
        updateMeta("keywords", page.seo.keywords);
      }
      if (page.seo.title) {
        updateOgMeta("og:title", page.seo.title);
      }
      if (page.seo.ogImage) {
        updateOgMeta("og:image", page.seo.ogImage);
      }
    }
  }, [page]);
  React.useEffect(() => {
    const handleMessage = (event) => {
      const { type, payload } = event.data;
      if (type === "UPDATE_SITE_DATA") {
        const { site: newSite, page: newPage, theme: newTheme, layoutId } = payload;
        const customThemeName = getCustomThemeName(newSite?.styleGuide?.customCss);
        const themeToApply = customThemeName || newSite?.styleGuide?.theme || newTheme || newSite?.settings?.theme;
        if (themeToApply) {
          document.documentElement.setAttribute("data-theme", themeToApply);
        }
        setOverrideLayoutId(layoutId);
        if (newSite && JSON.stringify(newSite) !== JSON.stringify(site)) {
          setSite(newSite);
        }
        if (newPage && JSON.stringify(newPage) !== JSON.stringify(page)) {
          setPage(newPage);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [site, page]);
  React.useEffect(() => {
    let ws;
    let reconnectTimer;
    const connect = () => {
      ws = new WebSocket("ws://localhost:4322");
      ws.onopen = () => {
      };
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "UPDATE_SITE_DATA") {
            const { payload } = data;
            const newSite = payload.site;
            const newTheme = payload.theme;
            const customThemeName = getCustomThemeName(newSite?.styleGuide?.customCss);
            const themeToApply = customThemeName || newSite?.styleGuide?.theme || newTheme || newSite?.settings?.theme;
            if (themeToApply) {
              document.documentElement.setAttribute("data-theme", themeToApply);
            }
            if (newSite && JSON.stringify(newSite) !== JSON.stringify(site)) {
              setSite(newSite);
              const newPage = newSite.pages.find((p) => p.id === page.id);
              if (newPage && JSON.stringify(newPage) !== JSON.stringify(page)) {
                setPage(newPage);
              }
            }
          }
        } catch (err) {
          console.error("WS: Message error", err);
        }
      };
      ws.onclose = () => {
        reconnectTimer = setTimeout(connect, 3e3);
      };
      ws.onerror = (err) => {
        console.error("WS: Error", err);
        ws.close();
      };
    };
    connect();
    return () => {
      if (ws) ws.close();
      if (reconnectTimer) clearTimeout(reconnectTimer);
    };
  }, []);
  const targetLayoutId = overrideLayoutId || page.layoutId;
  const layout = site.layouts?.find((l) => l.id === targetLayoutId) || site.layouts?.[0];
  const pageSections = page.sections && page.sections.length > 0 ? page.sections : site.pageConfigs?.[page.id]?.sections || [];
  const renderSections = () => {
    if (!layout) return pageSections.map((s) => /* @__PURE__ */ jsx(SectionRenderer, { section: s }, s.id));
    return layout.sections.map((section) => {
      if (section.type === "layout_content") {
        return /* @__PURE__ */ jsx(React.Fragment, { children: pageSections.map((s) => /* @__PURE__ */ jsx(SectionRenderer, { section: s }, s.id)) }, section.id);
      }
      return /* @__PURE__ */ jsx(SectionRenderer, { section }, section.id);
    });
  };
  return /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsx(SiteProvider, { siteData: site, children: /* @__PURE__ */ jsx(
    CartProvider,
    {
      currency: site.settings?.ecommerce?.currency || "USD",
      currencyPosition: site.settings?.ecommerce?.currencyPosition || "left",
      checkoutUrl: `/${site.settings?.ecommerce?.checkoutPageId ? site.pages?.find((p) => p.id === site.settings.ecommerce.checkoutPageId)?.slug.replace(/^\//, "") : "checkout"}`,
      whatsappNumber: site.settings?.ecommerce?.whatsappNumber,
      children: /* @__PURE__ */ jsx(
        CatalogProvider,
        {
          products: site.settings?.ecommerce?.products || [],
          categories: site.settings?.ecommerce?.categories?.map((c) => {
            if (c.pageId) {
              const page2 = site.pages?.find((p) => p.id === c.pageId);
              if (page2) {
                const baseUrl = "http://localhost:3000".endsWith("/") ? "http://localhost:3000".slice(0, -1) : "http://localhost:3000";
                const slug = page2.slug.startsWith("/") ? page2.slug.slice(1) : page2.slug;
                return { ...c, url: `${baseUrl}/${slug}` };
              }
            }
            return c;
          }) || [],
          children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground font-sans antialiased", children: [
            renderSections(),
            /* @__PURE__ */ jsx(CartDrawer, {})
          ] })
        }
      )
    }
  ) }) });
};

const $$Astro = createAstro("https://kainio.github.io");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const currentSlug = slug || "/";
  const getCustomThemeName = (css) => {
    if (!css) return null;
    const match = css.match(/name:\s*"([^"]+)"/);
    return match ? match[1] : null;
  };
  let page, site;
  try {
    const data = await fetchPage(currentSlug);
    page = data.page;
    site = data.site;
  } catch (error) {
    console.error("Error fetching site data:", error);
  }
  const customThemeName = getCustomThemeName(site?.styleGuide?.customCss);
  const activeTheme = customThemeName || site?.settings?.theme || "light";
  const typography = site?.styleGuide?.typography;
  const headingFont = typography?.headingFont || "Inter";
  const bodyFont = typography?.bodyFont || "Inter";
  const headingWeightMap = {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  };
  const headingWeight = headingWeightMap[typography?.headingWeight] || "700";
  const bodyWeightMap = {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600"
  };
  const bodyWeight = bodyWeightMap[typography?.bodyWeight] || "400";
  const fontSizeMap = {
    small: "0.875rem",
    regular: "1rem",
    large: "1.25rem"
  };
  const rootFontSize = fontSizeMap[typography?.fontSize] || "1.125rem";
  const lineHeightMap = {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2.0"
  };
  const bodyLineHeight = lineHeightMap[typography?.bodyLineHeight] || "1.5";
  const headingTransform = typography?.headingTransform || "none";
  const letterSpacingMap = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em"
  };
  const headingLetterSpacing = letterSpacingMap[typography?.headingLetterSpacing] || "0em";
  const headingFontUrl = `https://fonts.googleapis.com/css2?family=${headingFont.replace(/\s+/g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,700&display=swap`;
  const bodyFontUrl = `https://fonts.googleapis.com/css2?family=${bodyFont.replace(/\s+/g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,700&display=swap`;
  if (!page) {
    return Astro2.redirect("/404");
  }
  const $$definedVars = defineStyleVars([{
    headingFont: `"${headingFont}", sans-serif`,
    bodyFont: `"${bodyFont}", sans-serif`,
    rootFontSize,
    headingWeight,
    bodyWeight,
    bodyLineHeight,
    headingTransform,
    headingLetterSpacing
  }]);
  return renderTemplate`<html lang="en"${addAttribute(activeTheme, "data-theme")} data-astro-cid-fzx4jmue${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link${addAttribute(headingFontUrl, "href")} rel="stylesheet"><link${addAttribute(bodyFontUrl, "href")} rel="stylesheet"><title>${page.title} - ${site.title}</title>${renderHead()}</head> <body data-astro-cid-fzx4jmue${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "SiteWrapper", SiteWrapper, { "client:load": true, "page": page, "site": site, "theme": activeTheme, "client:component-hydration": "load", "client:component-path": "C:/Users/HP/Desktop/lumegenbuilderv0.6.4.2/apps/site/src/components/SiteWrapper", "client:component-export": "SiteWrapper", "data-astro-cid-fzx4jmue": true })} </body></html>`;
}, "C:/Users/HP/Desktop/lumegenbuilderv0.6.4.2/apps/site/src/pages/[...slug].astro", void 0);

const $$file = "C:/Users/HP/Desktop/lumegenbuilderv0.6.4.2/apps/site/src/pages/[...slug].astro";
const $$url = "/lumeDemo/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
