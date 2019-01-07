export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'TechWobble',
  description: 'One Stop to solve your Tech Wobbles',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://techwobble.com/',
  facebook: '',
  twitter: '',
  showSubscribe: true,
  mailchimpAction: 'https://techwobble.us7.list-manage.com/subscribe/post?u=e49c149a8e4261345771451e9&amp;id=20777d2cae',
  mailchimpName: 'b_e49c149a8e4261345771451e9_20777d2cae',
};

export default config;
