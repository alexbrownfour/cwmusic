/**
 * GET /
 * Home page.
 */
const glob = require('glob');
const path = require('path');

let imageContainer = {};
glob.sync('./public/images/*.json').forEach(function (file) {
  imageContainer[path.basename(file, '.json')] = require(path.resolve(file));
});

class IconImage {
  constructor(imageContainer, name, type, imageElement, description) {
    this.name = imageContainer.name;
    this.type = imageContainer.type;
    this.imageElement = `<img alt="${imageContainer.name}" src="${imageContainer.data}"/>`;
    this.description = imageContainer.description;
  }
}

exports.index = (req, res) => {
  let gradImage = new IconImage(imageContainer["icon_grad"]);

  let classicGuitarImage = new IconImage(imageContainer["icon_classic_guitar"]);

  let bassGuitarImage = new IconImage(imageContainer["icon_bass"]);

  let electricGuitarImage = new IconImage(imageContainer["icon_electric_guitar"]);

  let musicScrollImage = new IconImage(imageContainer["icon_sheet_music_scroll"]);

  let sheetMusicImage = new IconImage(imageContainer["icon_sheet_music"]);

  let studioImage = new IconImage(imageContainer["icon_studio"]);

  let trumpetAltImage = new IconImage(imageContainer["icon_trumpet"]);

  let vocalImage = new IconImage(imageContainer["icon_vocal"]);

  res.render('home', {
    title: 'Home',
    instruments: [ ],
    guitarCerts: [ electricGuitarImage, bassGuitarImage, classicGuitarImage, musicScrollImage, sheetMusicImage, gradImage],
    trumpetCerts: [ trumpetAltImage, gradImage, musicScrollImage, sheetMusicImage],
    vocalCerts: [vocalImage, gradImage, musicScrollImage, sheetMusicImage],
  });
};
