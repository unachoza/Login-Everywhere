const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const InstagramStrategy = require('passport-instagram').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('../src/Config/keysIndex.js~');
const chalk = require('chalk');

let user = {};

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
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
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
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
      console.log(chalk.blue(JSON.stringify(profile)));
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
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

// passport.use(
//   new TwitterStrategy(
//     {
//       clientID: keys.TWITTER.clientID,
//       clientSecret: keys.TWITTER.clientSecret,
//       callbackURL: '/auth/twitter/callback',
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log(chalk.blue(JSON.stringify(profile)));
//       user = { ...profile };
//       return cb(null, profile);
//     }
//   )
// );

const server = express();
server.use(cors());
server.use(passport.initialize());

server.get('/auth/facebook/', passport.authenticate('facebook'));
server.get('auth/facebook/callback', passport.authenticate('facebook'), (req, res) => res.redirect('/profile'));
server.get(
  '/auth/amazon',
  passport.authenticate('amazon', {
    scope: ['profile'],
  })
);
server.get('/auth/amazon/callback', passport.authenticate('amazon'), (req, res) => {
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

server.get('/users', (req, res) => {
  console.log('getting user data');
  res.send(user);
});

server.get('/auth/logoit', (req, res) => {
  console.log('loggin out');
  user = {};
  res.redirect('/');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT);
console.log('listingin on ', PORT);
