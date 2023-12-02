import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3000/assets/dev.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Lone Corp</Typography>
        <Typography color={medium}>
          <a href="https://my-portfolio-green-chi.vercel.app/" target="_blank">
            Our Webiste
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Expertise in Crafting beautiful and intuitive user interfaces and
        ensuring a seamless user experience across devices and Designing robust
        server-side architecture and working for efficient data storage and
        retrieval. Bringing together the frontend and backend to create cohesive
        and dynamic web applications.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
