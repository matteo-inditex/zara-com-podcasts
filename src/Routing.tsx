import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Podcast from "./views/Podcast/Podcast";
import Episode from "./views/Episode/Episode";
import Home from "./views/Home/Home";

const Routing = () => {
    return <Routes >
        <Route element={<RootLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/podcast/:podcastId" element={<Podcast />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
        </Route>
    </Routes>
}

export default Routing;