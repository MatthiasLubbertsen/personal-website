# matthiaz.dev - my personal website
I created my personal website with FullPage.js, I designed it first in Figma (my first time doing that). It's deployed on my first own domain, using my own Linux server.

## how I did this
- search inspo ([https://pixel.melbourne](https://pixel.melbourne))
- make it in Figma ([link](https://www.figma.com/design/59dwWiePW9ogbLyu3bql4h/Personal-Website?node-id=0-1&t=052SlVdlQSNw6DVk-1))
- implement it with FullPage.js (I don't get ts so AI did the FullPage.js part), html and css (I LOVE WEBDEV)
- host
- ship

## why
Because I vibeslobbed my first one and my second and my third when I was 12, then it was `hi im matthias` and NOW it's a real personal website!

## what I learnt
- I would never use FullPage.js again
- I love css
- DO NOT USE `!important` IF IT'S NOT IMPORTANT (I learnt this the hard way (there are only 5 `!important`s in one section))
- if you say `danke` to Copilot it says `Gerne.`

# how to run
- clone the repo
- install pm2: `npm install pm2 -g`
- run `pm2 serve public <port> --name matthiaz.dev`
- it's running on `localhost:<port>` now!