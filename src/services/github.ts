import { GithubStats } from "../model/Github";

export const getGithubStats = async (): Promise<GithubStats> => {
  const githubStats = await fetch("https://api.github.com/users/JOAO-LEE");
  const responseGithubStats = await githubStats.json();
  console.log(responseGithubStats)
  return responseGithubStats;
}

  // const repos = await fetch(githubStats["repos_url"]).then((response) => response).then((result) => result.json());
  // console.log(repos)