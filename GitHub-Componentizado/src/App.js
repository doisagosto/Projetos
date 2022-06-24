import { React, githubState } from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import useGithub from "./hooks/github-hooks";
import GithubProvider from "./providers/github-provider";
import NoSearch from "./no-search";


const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : <NoSearch />}
    </Layout>
  );
};

export default App;
