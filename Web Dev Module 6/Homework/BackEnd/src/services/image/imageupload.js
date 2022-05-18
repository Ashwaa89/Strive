import multer from "multer"
import { v2 as cloudinary } from "cloudinary" // to find credentials (CLOUDINARY_URL) from process.env
import { CloudinaryStorage } from "multer-storage-cloudinary" // multer plugin used to tell multer to save files on cloudinary
import createError from "http-errors"

export const upload = (folder) => {
    return     multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: 'striveBlog/' + folder,
      },
    }),
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: (req, file, multerNext) => {
        if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            multerNext(null, true)
        } else {
            return multerNext(createError(400, "File in wrong format"))
        }

      },
  }).single("file")}