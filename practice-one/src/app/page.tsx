import { TitleSection, CardPost } from "@/ui/components";
import { HashtagGroup } from "@/ui/features";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* category */}
      <section className="category container bg-white-90 items-center justify-center rounded-xl hidden xl:flex lg:mt-11">
        <HashtagGroup />
      </section>
      {/* fantastic posts */}
      <section className="fantastic-posts container hidden items-center gap-6 bg-white-100 h-[452px] mt-9 mb-12.5 sm:flex lg:my-15">
        {/* first card */}
        <div className="hidden xl:block h-full">
          <div className="h-full bg-blue-400 flex items-center justify-center w-[300px] xl:w-[360px] ">
            <p>Fanstatic post</p>
          </div>
        </div>
        {/* second card */}
        <div className="hidden xl:block h-full">
          <div className="h-full bg-amber-700 flex items-center justify-center w-[300px] xl:w-[360px] ">
            <p>Fanstatic post</p>
          </div>
        </div>
        {/* slide card */}
        <div className="h-full bg-red-700 flex flex-1 items-center justify-center ">
          <p>Fanstatic post</p>
        </div>
      </section>
      {/* popular posts */}
      <section className="popular-posts container flex flex-col justify-between bg-white-100 h-459 mt-7.5 sm:my-0">
        <TitleSection title="Popular Posts" />
        <div className="card-group flex gap-6 flex-wrap">
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
        </div>
      </section>
      {/* scheduler */}
      <section className="scheduler w-full flex items-center justify-center bg-primary-50 h-[464px] my-10 sm:mt-9 sm:mb-12.5 lg:my-17.5">
        <p>scheduler</p>
      </section>
      {/* new posts */}
      <section className="new-posts container flex flex-col justify-between bg-white-100">
        <TitleSection title="New Posts" />
        <div className="grid grid-cols-12 grid-rows-3 gap-6 xl:m-auto">
          {/* card first */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
          {/* card secondary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
          {/* card tertinary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost />
          </div>
        </div>
      </section>
      {/* latest videos */}
      <section className="latest-videos w-full flex flex-col justify-between bg-primary-75 h-[644px] my-10 py-16 sm:my-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div>
            <p className="leading-10">Latest videos</p>
          </div>
          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6 mt-[30px]">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card secondary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card tertinary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
          </div>
        </div>
      </section>
      {/* trendy posts */}
      <section className="trendy-posts container flex flex-col justify-between bg-white-100 h-459">
        <TitleSection title="Trendy Posts" />
        <div className="card-group flex gap-6 flex-wrap">
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
        </div>
      </section>
      {/* weather */}
      <section className="weather w-full flex items-center justify-center bg-dark-75 h-[644px] my-10 sm:mt-7.5 sm:mb-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-dark-25 flex items-center justify-center">
              <p>Weather card</p>
            </div>
            {/* card secondary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Weather card</p>
            </div>
            {/* card tertinary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Weather card</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Weather card</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Weather card</p>
            </div>
          </div>
        </div>
      </section>
      {/* top posts */}
      <section className="top-posts container flex flex-col justify-between bg-white-100 h-459 mb-30 sm:mb-7.5 lg:mb-25">
        <TitleSection title="Top Posts" />
        <div className="card-group flex gap-6 flex-wrap">
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
        </div>
      </section>
    </main>
  );
}
