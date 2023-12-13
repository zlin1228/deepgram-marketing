const pathName = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
const socialWindow = (url: string) => window.open(url);

const handleTwitter = () => {
  const url = `https://twitter.com/intent/tweet?url=${pathName}`;
  socialWindow(url);
};
const handleLinkedin = (title: string) => {
  const url = `https://www.linkedin.com/shareArticle?mini=true&url=${pathName}&title=${title}`;
  socialWindow(url);
};
const handleFacebook = () => {
  const url = `https://www.facebook.com/sharer.php?u=${pathName}`;
  socialWindow(url);
};

const shareSocialLink = (type: string, title: string) => {
  if (type === 'twitter') {
    handleTwitter();
  }
  if (type === 'linkedin') {
    handleLinkedin(title);
  }
  if (type === 'facebook') {
    handleFacebook();
  }
};

export default shareSocialLink;
