const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');
const SpotifyStrategy = require('passport-spotify').Strategy;
const SlackStrategy = require('passport-slack').Strategy;
const YoutubeStrategy = require('passport-youtube').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require('../src/Config/keysIndex.js~');
const chalk = require('chalk');

let user = {};
passport.serializeUser((user, cb) => {
  console.log('what is going on with serialize', user, cb);
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      server.post('/user', (req, res) => {
        res.send(user);
      });
      return cb(null, profile);
    }
  )
);

passport.use(
  new AmazonStrategy(
    {
      clientID: keys.AMAZON.clientID,
      clientSecret: keys.AMAZON.clientSecret,
      callbackURL: 'http://localhost:3000/auth/amazon/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      server.post('/user', (req, res) => {
        user.send(user, 'here');
      });
      return cb(null, profile);
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: keys.GITHUB.clientID,
      clientSecret: keys.GITHUB.clientSecret,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: keys.INSTAGRAM.clientID,
      clientSecret: keys.INSTAGRAM.clientSecret,
      callbackURL: 'http://localhost:3000/auth/instagram/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      server.post('/user', (req, res) => {
        res.send(user);
      });
      return cb(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.SPOTIFY.clientID,
      clientSecret: keys.SPOTIFY.clientSecret,
      callbackURL: '/auth/spotify/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER.consumerKey,
      consumerSecret: keys.TWITTER.consumerSecret,
      callbackURL: '/auth/twitter/callback',
      includeEmail: true,
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
passport.use(
  new SlackStrategy(
    {
      clientID: keys.SLACK.clientID,
      clientSecret: keys.SLACK.clientSecret,
      callbackURL: '/auth/slack/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new YoutubeStrategy(
    {
      clientID: keys.YOUTUBE.clientID,
      clientSecret: keys.YOUTUBE.clientSecret,
      callbackURL: '/auth/youtube/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.LINKEDIN.clientID,
      clientSecret: keys.LINKEDIN.clientSecret,
      callbackURL: 'http://localhost:3000/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_basicprofile'],
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

const server = express();
server.use(cors());
server.use(
  session({
    secret: keys.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
server.get('/auth/facebook', passport.authenticate('facebook'));
server.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => res.redirect('/profile'));

server.get('/auth/amazon', passport.authenticate('amazon', { scope: ['profile'] }));
server.get('/auth/amazon/callback', passport.authenticate('amazon'), (req, res) => {
  console.log(res.user);
  res.redirect('/profile');
});

server.get('/auth/github', passport.authenticate('github'));
server.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
  res.redirect('/profile');
});

server.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
server.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile');
});

server.get('/auth/instagram', passport.authenticate('instagram'));
server.get('/auth/instagram/callback', passport.authenticate('instagram'), (req, res) => {
  res.redirect('/profile');
});
server.get('/auth/instagram', passport.authenticate('instagram'));
server.get('/auth/instagram/callback', passport.authenticate('instagram'), (req, res) => {
  res.redirect('/profile');
});
server.get('/auth/spotify', passport.authenticate('spotify'));
server.get('/auth/spotify/callback', passport.authenticate('spotify'), (req, res) => {
  res.redirect('/profile');
});

server.get('/auth/twitter', passport.authenticate('twitter'));
server.get('/auth/twitter/callback', passport.authenticate('twitter'), (req, res) => {
  res.redirect('/profile');
});
server.get('/auth/slack', passport.authenticate('slack'));
server.get('/auth/slack/callback', passport.authenticate('slack'), (req, res) => {
  res.redirect('/profile');
});
server.get('/auth/linkedin', passport.authenticate('linkedin'));
server.get('/auth/linkedin/callback', passport.authenticate('linkedin'), (req, res) => {
  res.redirect('/profile');
});
server.get(
  '/auth/youtube',
  passport.authenticate('youtube', {
    scope: ['profile', 'email'],
  })
);
server.get('/auth/youtube/callback', passport.authenticate('youtube'), (req, res) => {
  res.redirect('/profile');
});

server.get('/user', (req, res) => {
  res.send(user);
});

server.get('/auth/logout', (req, res) => {
  console.log('loggin out');
  user = {};
  res.redirect('/');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT);
console.log('listingin on ', PORT);
