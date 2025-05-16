import Link from "next/link";

export default function Blog(){
    return (
      <div className="h-screen bg-slate-900">
        <div className="h-48 flex items-center justify-center">
          <h1 className="text-white text-4xl font-sans font-semibold">Blog</h1>
        </div>

        <div className="px-24 py-2">
          <div className="h-48  font-sans space-y-4">
            <h1 className="text-xl text-white font-semibold">Blog Title</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Link href={"/"} className="text-blue-400"> {"  "}Read More</Link>
            </p>

            <h1 className="text-xs text-gray-400">January 25, 2025</h1>
          </div>
        </div>
      </div>
    );
}