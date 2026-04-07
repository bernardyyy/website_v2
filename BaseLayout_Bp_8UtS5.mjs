import { b as createAstro, c as createComponent, a as renderTemplate, f as renderSlot, g as renderHead, d as addAttribute } from './astro/server_C7VR82M2.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.gerberworks.xyz");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Bernard Gerber" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F9C9}</text></svg>"><meta property="og:title"', '><meta property="og:type" content="website"><meta property="og:image" content="/og_img.jpg"><meta property="og:url" content="https://www.gerberworks.xyz"><title>', '</title><link rel="stylesheet" href="/style.css"><!-- Preconnect to Vimeo for faster video loading --><link rel="preconnect" href="https://player.vimeo.com" crossorigin><link rel="preconnect" href="https://i.vimeocdn.com" crossorigin><link rel="preconnect" href="https://f.vimeocdn.com" crossorigin><link rel="preconnect" href="https://fresnel.vimeocdn.com" crossorigin><script type="module" src="https://cdn.jsdelivr.net/npm/lite-vimeo-embed/+esm"><\/script>', '</head> <body> <div class="cursor"></div> <div class="header"> <a class="link" href="/">home</a> <a class="link" href="/about">about</a> </div> ', ' <div class="footer_wrapper"> <img src="/img/logo.svg" alt=""> <div class="footer"> <a class="link" href="mailto:bernard@gerberworks.xyz">email</a> <div class="footer_right"> <a class="link" href="https://www.are.na/bernard-gerber">are.na</a> <a class="link" href="https://www.instagram.com/bernard.gerber/">instagram</a> <a class="link" href="https://www.linkedin.com/in/bernardyy/">linkedin</a> </div> </div> </div> <script src="/scripts.js"><\/script> </body> </html>'])), addAttribute(title, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bernardgerber/Desktop/Ber/website_v2-main/personal-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
