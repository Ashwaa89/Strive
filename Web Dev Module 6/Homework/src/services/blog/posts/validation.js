import { checkSchema, validationResult } from "express-validator";
import createError from "http-errors";

const schema = {
  category: {
    in: ["body"],
    isString: {
      errorMessage: "Category is required and should be in string format",
    },
  },
  title: {
    in: ["body"],
    isString: {
      errorMessage: "Title is required and should be in string format",
    },
  },
  cover: {
    in: ["body"],
    isString: {
      errorMessage: "Cover link is required and should be in string format",
    },
  },
  readTime: {
    value: {
      in: ["body"],
      isNumeric: {
        errorMessage: "Read Time is required and should be numeric",
      },
    },
    unit: {
      in: ["body"],
      isString: {
        errorMessage: "Read unit is required and should be in string format",
      },
    },
  },
  author: {
    name: {
      in: ["body"],
      isString: {
        errorMessage: "Author name is required and should be in string format",
      },
    },
    avatar: {
      in: ["body"],
      isString: {
        errorMessage:
          "Author avatar is required and should be in string format",
      },
    },
  },
  content: {
    in: ["body"],
    isString: {
      errorMessage: "Content is required and should be in string format",
    },
  },
};
export const checkBlogPost = checkSchema(schema);
export const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(
      createError(400, "Validation problems in", { errorsList: errors.array() })
    );
  } else {
    next();
  }
};
