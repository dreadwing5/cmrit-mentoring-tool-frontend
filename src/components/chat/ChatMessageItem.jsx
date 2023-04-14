import PropTypes from "prop-types";
import { formatDistanceToNowStrict } from "date-fns";

// @mui
import { styled } from "@mui/material/styles";
import { Avatar, Box, Typography } from "@mui/material";
// components

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(3),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 320,
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
}));

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

ChatMessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  conversation: PropTypes.object.isRequired,
};

export default function ChatMessageItem({ message, conversation }) {
  // const sender = conversation.participants.find(
  //   (participant) => participant.id === message.senderId
  // );
  // const senderDetails =
  //   message.senderId === "8864c717-587d-472a-929a-8e5f298024da-0"
  //     ? { type: "me" }
  //     : { avatar: sender?.avatar, name: sender?.name };
  // const isMe = senderDetails.type === "me";
  const isMe = true;
  // const firstName = senderDetails.name && senderDetails.name.split(" ")[0];

  return (
    <RootStyle>
      <Box
        sx={{
          display: "flex",
          ...(isMe && {
            ml: "auto",
          }),
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
          sx={{ width: 32, height: 32, mr: 2 }}
        />

        <div>
          {/* <InfoStyle
            variant="caption"
            sx={{
              ...(isMe && { justifyContent: "flex-end" }),
            }}
          >
            {!isMe && `${firstName},`}&nbsp;
            {formatDistanceToNowStrict(new Date(message.sendTime), {
              addSuffix: true,
            })}
          </InfoStyle> */}

          <ContentStyle
            sx={{
              ...(isMe && { color: "grey.800", bgcolor: "primary.lighter" }),
            }}
          >
            <Typography variant="body2">{message.body}</Typography>
          </ContentStyle>
        </div>
      </Box>
    </RootStyle>
  );
}
