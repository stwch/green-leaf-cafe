interface LinkOptions {
  rel: string;
  href: string;
}
export default function createLazyLoadLinkEl({ rel, href }: LinkOptions) {
  const linkEl = document.createElement('link');
  linkEl.rel = rel;
  linkEl.href = href;
  linkEl.fetchPriority = 'low';
  return linkEl;
}
