const parseUrl = (href: string) => {
  if (!href) {
    return {
      as: 'div',
    } as const;
  }

  const domain = 'deepgram.com';
  if (href.charAt(0) !== '/' && !href.includes('http') && !href.includes('tel:') && !href.includes('mailto:')) {
    href = `https://www.${domain}/${href}`;
  }
  if (href[0] === '/') {
    href = `https://www.${domain}${href}`;
  }

  try {
    const url = new URL(href);
    const isInternal = url.hostname === `www.${domain}` || url.hostname === domain;

    return {
      isInternal,
      rel: isInternal ? '' : 'noreferrer noopener',
      target: isInternal ? '' : '_blank',
      href: isInternal ? url.href.split(url.host)[1] : href,
    };
  } catch (error) {
    return {
      as: 'a',
      href,
    } as const;
  }
};

export default parseUrl;
