# katdonnally.github.io
Website for pottery portfolio.

## Documentation Notes

### Portfolio pic image names

Format depends on whether many pieces of that type are being made, or if there are currently a finite and easily identifiable number of them that exist.

*Finite:*

`description&type-# made-pic #.png`

E.g. `black-geometric-bowl-01-02.png` &rArr; second picture documenting the first black geometric bowl currently on record

*Infinite:*

Just remove the "# made" part and pluralize the ware type.

E.g. `pumpkin-mugs-03.png`

### Image Magick Commands

Helpful Stack Overflow answer: [link here](https://stackoverflow.com/questions/15315770/how-to-convert-all-files-in-different-formats-in-given-folder-to-different-fil)

To convert from `.heic` to `.png` or `.jpg`:


```cmd
magick mogrify -format png *.*
```

To write to another directory, use the [path option](https://www.imagemagick.org/script/command-line-options.php#path): `-path directory`

### Resizing images

Want to resize images so they're not so unwieldy. Useful links:

- [ImageMagick documentation on resize](https://legacy.imagemagick.org/Usage/resize/)
- [Digital Ocean walk-through of resize](https://www.digitalocean.com/community/tutorials/workflow-resizing-images-with-imagemagick)

*NB: The Digital Ocean tutorial looks useful for other ImageMagick CLI commands, too.*