import Feed from "@components/Feed";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        This is an open-source artificial intelligence prompting tool for modern
        world to discover, create and share your prompts.
      </p>
      <Feed />
    </section>
  );
}
