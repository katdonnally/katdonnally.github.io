# rename_paths.py
# renames image paths affected by `srcset` requirements

import os

img_dir = "C:/Users/Katherine/OneDrive/Clay/clay-pics-08-20-24/pottery/"

bowl_dir = img_dir + "bowls/400/" # this number changes depending on resolution
jar_dir = img_dir + "jars/400/" # can be 400, 600, 800, or 1200
mug_dir = img_dir + "mugs/1200/"
planter_dir = img_dir + "planters/1200/"
plate_dir = img_dir + "plates/1200/"
vase_dir = img_dir + "vases/1200/"

# bowls
# contents include both files & directories
bowl_dir_contents = os.listdir(bowl_dir)
# filter out the directories, leave the files
bowl_dir_files = [bowl for bowl in bowl_dir_contents if '.' in bowl]

# jars
jar_dir_contents = os.listdir(jar_dir)
jar_dir_files = [jar for jar in jar_dir_contents if '.' in jar]

# mugs
mug_dir_contents = os.listdir(mug_dir)
mug_dir_files = [mug for mug in mug_dir_contents if '.' in mug]

# planters
planter_dir_contents = os.listdir(planter_dir)
planter_dir_files = [planter for planter in planter_dir_contents if '.' in planter]

# plates
plate_dir_contents = os.listdir(plate_dir)
plate_dir_files = [plate for plate in plate_dir_contents if '.' in plate]

# vases
vase_dir_contents = os.listdir(vase_dir)
vase_dir_files = [vase for vase in vase_dir_contents if '.' in vase]

# plug in different details based on what you need:

short_name_contents = [filename.split(".")[0] + "-1200w.jpg" for filename in vase_dir_files]

for i, filename in enumerate(vase_dir_files):
	os.rename(vase_dir + filename, vase_dir + short_name_contents[i])