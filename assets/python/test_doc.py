# rename_paths.py
# renames image paths affected by `srcset` requirements

import os

img_dir = "./refactor-pics/"

bowl_dir = img_dir + "bowls/"
jar_dir = img_dir + "jars/"
mug_dir = img_dir + "mugs/"
planter_dir = img_dir + "planters/"
plate_dir = img_dir + "plates/"
vase_dir = img_dir + "vases/"

# size options for pics
sizes = ["400/", "600/", "800/", "1200/"]
endings = ["-400w.jpg", "-600w.jpg", "-800w.jpg", "-1200w.jpg"]

# list of all sizes of bowl paths (400, 600, 800, 1200)
bowl_all_paths = [bowl_dir + s for s in sizes]

# eliminate any non-files
# files in contents of directory inside list of directories
bowl_all_files = []
for filepath in bowl_all_paths:
	files_only = [file for file in os.listdir(filepath) if os.path.isfile(os.path.join(filepath, file))]
	bowl_all_files.append(files_only)

# take file list, rename files with new endings
def renamePotteryType(all_files_list, all_paths_list):
	# generate new names for each size
	all_new_names = []
	for i, file_list in enumerate(all_files_list):
		newnames = []
		for file in file_list:
			newname = file.split('.')[0] + endings[i]
			newnames.append(newname)
		all_new_names.append(newnames)

	# rename files
	for i, size_path in enumerate(all_paths_list):
		oldnames = all_files_list[i]
		newnames = all_new_names[i]
		for oldname, newname in zip(oldnames, newnames):
			os.rename(size_path + oldname, size_path + newname)

# renamePotteryType(bowl_all_files, bowl_all_paths)