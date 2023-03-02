import { Box } from "@mui/material";

const UserImage = ({ image }) => {
  return (
    <Box width="60px" height="60px">
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width="60px"
        height="60px"
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
