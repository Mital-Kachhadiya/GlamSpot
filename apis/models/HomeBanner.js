const mongoose = require("mongoose");

const HomeBannerSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Image is required."],
    },
    beautican_id: {
      type: String,
      default: "0",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("homebanner", HomeBannerSchema);
