<Box sx={{background:'#171718',padding:'2rem 0'}}>
<Container
maxWidth="lg"
sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: "1rem",
            // margin: "2rem auto",
            background: "",
          }} >
{Feeds &&
Feeds.map((post) => (
<Box
sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "1rem",
                  background: "black",
                  maxWidth: "50rem",
                  height: "max-Content",
                  // marginTop: "5rem",
                  margin: "auto",
                  padding: "2rem",
                  borderRadius: "10px",
                  overflow: "hidden",
                }} >
<img
src={userImg}
alt="user image"
width="50"
height="50"
style={{
                    aspectRatio: "1",
                    objectFit: "cover",
                    borderRadius: "100%",
                    // objectPosition:'top'
                  }}
/>
<Box>
{/_ top section of the post _/}
<Box>
<Stack direction="row" justifyContent="space-between">
<Box>
{/_ heading _/}
<Stack
direction="row"
alignItems="center"
spacing={1}
// sx={{ height: "fit-content" }} >
<Typography variant="body1" color="white">
Alexandra Daddario
</Typography>
<Typography
                            component="a"
                            variant="caption"
                            color="gray"
                          >
@Alexcodes
</Typography>
<Stack direction="row" alignItems="start">
<DotIcon color="gray" size="1.2rem" />
<Typography variant="caption" color="gray">
51 mins ago
</Typography>
</Stack>
</Stack>
{/_ user caption _/}
<Stack direction="row">
<Typography variant="caption" color="gray">
Frontend Engineer
</Typography>
<Typography variant="caption" color="gray">
Cybersecurity, ML, and OSS Enthusiast
</Typography>
</Stack>
</Box>
{/_ ThreeDot Icon _/}
<Stack direction="row" alignItems="center" spacing={1}>
<IconButton>
<BookmarkIcon color="gray" size="1.2rem" />
</IconButton>
<IconButton sx={{ alignItems: "start" }}>
<ThreeDotIcon color="gray" />
</IconButton>
</Stack>
</Stack>
</Box>
{/_ mid / post content section of the post _/}
<Box py={2}>
<Typography
variant="h2"
color="#C2CBC2"
sx={{ fontSize: "1rem" }} >
Hello Showwcase! Check out my Show on Why is it so hard to
create PWA with Next.js?. Follow me to get all my latest
content.
</Typography>
</Box>
{/_ bottom section of the post _/}
<Box>
<Stack direction="row" spacing={3}>
<Stack direction="row" alignItems="center" spacing={1}>
<LikeIcon color="gray" />
<Typography variant="caption" color="gray">
21
</Typography>
</Stack>
<Stack direction="row" alignItems="center" spacing={1}>
<BoostIcon color="gray" />
<Typography variant="caption" color="gray">
15
</Typography>
</Stack>
<Stack direction="row" alignItems="center" spacing={1}>
<CommentIcon color="gray" />
<Typography variant="caption" color="gray">
34
</Typography>
</Stack>
</Stack>
</Box>
</Box>
</Box>
))}
</Container>
</Box>
