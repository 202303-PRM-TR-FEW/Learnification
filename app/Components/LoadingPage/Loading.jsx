import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';
import Icons from "../Icons";

const Loading = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center h-screen gap-10 bg-white-smoke">
      <section className="flex items-center gap-4">
        <div className="w-24 h-16 bg-blue-500 rounded-3xl flex justify-center items-center">
          <Icons.BrandIcon width={'36px'} />
        </div>
        <h1 className="text-blue-500 font-bold text-4xl">LearnU</h1>
      </section>
      <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    </main>
  );
};

export default Loading;
