import { FunctionComponent, useState } from "react";

import {
  ImageList,
  IconButton,
  FormControl,
  ImageListItem,
  FormHelperText,
} from "@mui/material";
import {
  Close as CloseIcon,
  CameraAltOutlined as CameraIcon,
} from "@mui/icons-material";

import toBase64 from "../utils/toBase64";

import {
  useNewPathFormStore,
  useNewPathFormDispatch,
} from "../hooks/useNewPathForm";

interface ImageInputProps {}

const ImageInput: FunctionComponent<ImageInputProps> = () => {
  const { images } = useNewPathFormStore();
  const dispatch = useNewPathFormDispatch();

  const handleChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0] as File;
      const image = await toBase64(file);
      dispatch({
        type: "ADD_IMAGE",
        payload: image,
      });
    }
  };

  const removeImage = (imageIdx: number) => {
    dispatch({
      type: "REMOVE_IMAGE",
      payload: imageIdx,
    });
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <input
        type="file"
        accept="image/*"
        id="select-image"
        onChange={handleChange}
        style={{ display: "none" }}
      />

      <ImageList
        sx={{
          my: 1,
          width: "100%",
        }}
        cols={3}
      >
        {images.map((image, i) => (
          <ImageListItem key={i}>
            <img loading="lazy" src={image} />
            <IconButton
              sx={{
                top: 0,
                right: 0,
                color: "white",
                bgcolor: "black",
                position: "absolute",
                ":hover": {
                  bgcolor: "black",
                },
              }}
              size="small"
              onClick={() => removeImage(i)}
            >
              <CloseIcon />
            </IconButton>
          </ImageListItem>
        ))}

        <ImageListItem
          sx={{
            minHeight: 100,
            display: "flex",
            background: "#d5d0d0",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor="select-image"
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <CameraIcon fontSize="large" />
          </label>
        </ImageListItem>
      </ImageList>

      <FormHelperText>Path Images"</FormHelperText>
    </FormControl>
  );
};

export default ImageInput;
