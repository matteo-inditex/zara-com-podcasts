import { Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Podcast from "../views/Podcast/Podcast";
import Home from "../views/Home/Home";
import Episode from "../views/Episode/Episode";

const Router = () => {
    return <Routes >
        <Route element={<RootLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/podcast/:podcastId" element={<Podcast />} />
            <Route path="/podcast/:podcastId/episode/:episodeTrackId" element={<Episode />} />
        </Route>
    </Routes>
}

export default Router;