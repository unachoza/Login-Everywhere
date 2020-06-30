import AmazonIcon from 'assests/amazon.png';
import FacebookIcon from 'assests/facebook.png';
import GithubIcon from 'assests/github.png';
import GoogleIcon from 'assests/google.png';
import InstagramIcon from 'assests/instagram.png';
import SpotifyIcon from 'assests/spotify.png';
import TwitterIcon from 'assests/twitter.png';
import YouTubeIcon from 'assests/youtube.png';
import LinkedinIcon from 'assests/linkedin.png';
import SlackIcon from 'assests/slack.png';

export const data = [
  {
    img: AmazonIcon,
    name: 'amazon',
    href: 'auth/amazon',
    alt: 'amazon-icon',
    color: '#F9AE31',
    txt: 'Login with Amazon',
  },
  {
    img: FacebookIcon,
    name: 'facebook',
    href: 'auth/facebook',
    alt: 'facebook-icon',
    color: '#3B5899',
    txt: 'Login with Facebook',
  },
  {
    img: GithubIcon,
    name: 'github',
    href: 'auth/github',
    alt: 'github-icon',
    color: '#333333',
    txt: 'Login with Github',
  },
  {
    img: GoogleIcon,
    name: 'google',
    href: 'auth/google',
    alt: 'google-icon',
    color: '#CB4024',
    txt: 'Login with Google',
  },
  {
    img: InstagramIcon,
    name: 'instagram',
    href: '/error',
    alt: 'instagram-icon',
    colors: {
      leftBot: '#fec564',
      leftTop: '#5258cf',
      rightTop: '#893dc2',
      rightBot: '#d9317a',
      baseCoat: 'linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
    },
    color: '#d9317a',
    txt: 'Login with Instagram',
  },
  {
    img: SpotifyIcon,
    name: 'spotify',
    href: 'auth/spotify',
    alt: 'spotify-icon',
    color: '#1EB954',
    txt: 'Login with Spotify',
  },
  {
    img: TwitterIcon,
    name: 'twitter',
    href: 'auth/twitter',
    alt: 'twitter-icon',
    color: '#2eaae1',
    txt: 'Login with Twitter',
  },
  {
    img: YouTubeIcon,
    name: 'YouTube',
    href: '/error',
    alt: 'youtube-icon',
    color: '#ff0100',
    txt: 'Login with YouTube',
  },

  {
    img: LinkedinIcon,
    name: 'linkedin',
    href: 'auth/linkedin',
    alt: 'linkedin-icon',
    color: '#0077b5',
    txt: 'Login with Linkedin',
  },
  {
    img: SlackIcon,
    name: 'slack',
    href: 'auth/slack',
    alt: 'slack-icon',
    colors: {
      leftBot: '#e01f5a',
      leftTop: '#ecb22e',
      rightTop: '#2db67d',
      rightBot: ' #37c5f0',
      baseCoat: 'linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
    },
    txt: 'Login with Slack',
  },
];
