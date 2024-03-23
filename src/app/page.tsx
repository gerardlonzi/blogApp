'use client'

import Hour_comment from "@/components/article/hour&comment";
import Image from "next/image";
import Container from "@/components/design-system/container";
import CategorieDesign from "@/components/typography/categorie";
import ArticleWraped from "@/components/article/articleWraped";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ScreenLoader from "@/components/design-system/ScreenLoader/ScreenLoader";
import { useState, useEffect } from "react";

const getData = async () => {
  const res = await fetch("/api/post", { cache: "no-store" })
  if (!res.ok) {
    throw new Error("failed")
  }
  return res.json()
}



export default function Home() {


  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {posts} = await getData();
        setDATA(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const { data, status } = useSession()

  console.log("loggons la status");

  console.log(data, status);

  return (
    <>
      <ScreenLoader status={status} >

        <div className="fade-in">
          <Navbar />
          <Container>
            <div className="mt-14">
              <div className="lg:flex gap-5 grid md:grid-cols-2 grid-cols-1">
                <div>

                  {/* blog en avant premiere */}
                  <div className="md:grid grid-cols-2 space-y-4 ">
                    {
                      DATA?.map((items: any, index: number) => {
                        if (index < 2) {
                          return (
                            <div key={index} className="relative col-span-2 group">
                              <Link href={"/hy"}>
                                <Image src={"/imgs/img8.jpg"} alt="" height={600} width={600} className="w-full object-cover h-[31rem] group-hover:filter-none filter duration-200 ease-out brightness-[0.7]" />
                              </Link>
                              <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">Web dev</CategorieDesign>
                              <div className="absolute bottom-0 space-y-5 p-5">
                                <p className="hover:text-gray-text text-white capitalize leading-10 text-2xl font-bold">
                                  <Link href={" "}>
                                    buy your setup coding for an you a more <br /> experience
                                  </Link>
                                </p>
                                <Hour_comment href_filter_by_date="" theme="big" className="text-white" total_comment={9} date="may 19,2020" />
                              </div>
                            </div>
                          );
                        }
                        return null; // Renvoyer null pour les éléments qui ne doivent pas être rendus
                      })
                    }
                    <div className="relative col-span-2 group ">
                      <Link href={"/hy"}>
                        <Image src={"/imgs/img8.jpg"} alt="" height={600} width={600} className="w-full object-cover  h-[31rem] group-hover:filter-none filter duration-200 ease-out brightness-[0.7]" />
                      </Link>
                      <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">Web dev</CategorieDesign>
                      <div className="absolute bottom-0  space-y-5 p-5">
                        <p className="hover:text-gray-text text-white capitalize leading-10  text-2xl  font-bold">
                          <Link href={" "}>
                            buy your setup coding for an you a more <br /> experience
                          </Link>
                        </p>
                        <Hour_comment href_filter_by_date="" theme="big" className="text-white" total_comment={9} date="may 19,2020" />
                      </div>

                    </div>
                    <div className="relative md:mr-2 group">
                      <Link href={"/SinglePost"}>
                        <Image src={"/imgs/img7.jpg"} alt="" height={600} width={600} className="w-full h-[18rem] object-cover  group-hover:filter-none filter duration-200 ease-out brightness-[0.7]" />
                      </Link>
                      <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">PLAY GAMING</CategorieDesign>
                      <div className="absolute bottom-0  space-y-5 p-5">
                        < p className="hover:text-gray-text text-white capitalize leading-7  text-lg  font-bold">
                          <Link href={"/"}>
                            buy your setup coding for an you a more <br /> experience
                          </Link>
                        </p>
                        <Hour_comment href_filter_by_date="" theme="big" className="text-white" total_comment={2} date="may 19,2022" />
                      </div>

                    </div>
                    <div className="relative group">
                      <Link href={"/SinglePost"}>
                        <Image src={"/imgs/img6.jpg"} alt="" height={600} width={600} className="w-full object-cover  h-[18rem] group-hover:filter-none filter duration-200 ease-out brightness-[0.7]" />
                      </Link>
                      <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">PROGRAMMATIONS</CategorieDesign>
                      <div className="absolute bottom-0  space-y-5 p-5">
                        < p className="hover:text-gray-text text-white capitalize leading-7  text-lg  font-bold">
                          <Link href={"/"}>
                            buy your setup coding for an you a more <br /> experience
                          </Link>
                        </p>
                        <Hour_comment href_filter_by_date="" theme="big" className="text-white" total_comment={4} date="may 10,2023" />
                      </div>

                    </div>
                  </div>

                  <div className="w-full">
                    <h2 className="text-3xl font-bold mt-8 mb-3 capitalize text-simple-black">latest works</h2>
                    <hr className="border-2   " />
                    <div>
                      <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img1.jpg" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, explicabo voluptate nulla reprehenderit, necessitatibus eveniet minima repellat enim placeat consectetur tempora earum magni repudiandae illum id accusamus? Placeat, accusamus ipsa.Quas quo nesciunt alias quisquam, fugit modi fuga deleniti repellendus exercitationem asperiores in ducimus eligendi, eum laudantium, aspernatur perspiciatis harum ullam commodi nostrum distinctio magni perferendis. Quis explicabo fuga deserunt." title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />

                      <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img2.jpg" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, explicabo voluptate nulla reprehenderit, necessitatibus eveniet minima repellat enim placeat consectetur tempora earum magni commodi nostrum distinctio magni perferendis. Quis explicabo fuga deserunt." title="exercice en programmation" categorie="PLAY GAMING" date="Aout 09,2016" total_comment={19} />

                      <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img3.jpg" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, explicabo voluptate nulla reprehenderit, necessitatibus eveniet minima repellat enim placeat consectetur tempora earum magni repudiandae illum id accusamus? Placeat, accusamus ipsa.Quas quo nesciunt alias quisquam, fugit modi fuga deleniti repellendus exercitationem asperiores in ducimus eligendi,." title="Promotion de la programmation" categorie="WEB DEV" date="november 02,2016" total_comment={20} />

                      <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img4.jpg" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, explicabo voluptate nulla reprehenderit, necessitatibus eveniet minima repellat enim placeat consectetur tempora earum magni repudiandae illum id accusamus? Placeat, accusamus ipsa.Quas quo nesciunt alias quisquam, fugit modi fuga deleniti repellendus exercitationem asperiores in ducimus eligendi, eum laudantium, aspernatur perspiciatis harum ullam commodi nostrum distinctio magni perferendis. Quis explicabo fuga deserunt." title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />

                    </div>
                    <p className="mt-10">
                      <a href="" className="underline text-sm text-simple-black font-bold">See all</a>
                    </p>

                  </div>
                </div>

                <div className="lg:w-[140rem]">

                  <h2 className="text-3xl font-bold mt-1 mb-3 capitalize text-simple-black">Populars</h2>
                  <hr className="border-2 border-[#c3c1c1]" />
                  <div>
                    <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32 " href="" img_src="/imgs/img5.jpg" title="Promotion de la programmation" categorie="PROGRAMMATION" date="Avril 02,2016" total_comment={10} />
                    <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img6.jpg" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                    <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img1.jpg" title="Promotion de la programmation" categorie="WEB DEV" date="Avril 02,2016" total_comment={10} />
                    <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img2.jpg" title="Promotion de la programmation" categorie="PLAY GAMING" date="Avril 02,2016" total_comment={10} />
                    <ArticleWraped href_categorie="/" href_filter_by_date="/" classname="sm:w-44 sm:h-32" href="" img_src="/imgs/img4.jpg" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                    <p className="mt-7">
                      <a href="" className="underline text-sm text-simple-black font-bold">See all</a>
                    </p>
                  </div>
                  <div>
                    <div className="relative group mt-7">
                      <Link href={"/SinglePost"}>
                        <Image src={"/imgs/img8.jpg"} alt="" height={600} width={600} className="w-full object-cover  h-[18rem] group-hover:filter-none filter duration-200 ease-out brightness-[0.7]" />
                      </Link>
                      <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">PROGRAMMATIONS</CategorieDesign>
                      <div className="absolute bottom-0  space-y-5 p-5">
                        < p className="hover:text-gray-text text-white capitalize leading-7  text-lg  font-bold">
                          <Link href={"/"}>
                            buy your setup coding for an you a more <br /> experience
                          </Link>
                        </p>
                        <Hour_comment href_filter_by_date="/" theme="big" className="text-white" total_comment={4} date="may 10,2023" />
                      </div>

                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mt-10 mb-3 capitalize text-simple-black">Features</h2>
                      <hr className="border-2 border-[#c3c1c1]" />
                      <div className="mt-5">
                        <ArticleWraped href_categorie="/" href_filter_by_date="/" href="" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                        <ArticleWraped href_categorie="/" href_filter_by_date="/" href="" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                        <ArticleWraped href_categorie="/" href_filter_by_date="/" href="" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                        <ArticleWraped href_categorie="/" href_filter_by_date="/" href="" title="Promotion de la programmation" categorie="CRYPTO" date="Avril 02,2016" total_comment={10} />
                      </div>
                      <p className="mt-10">
                        <a href="" className="underline text-sm text-simple-black font-bold">See all</a>
                      </p>

                    </div>
                  </div>
                </div>
                <div className="lg:w-[50rem] flex flex-col sm:flex-row lg:block md:col-span-2 gap-5">
                  <div className="relative group lg:mt-7">
                    <Link href={"/SinglePost"}>
                      <Image src={"/imgs/img8.jpg"} alt="" height={600} width={600} className="w-full object-cover  h-[36rem]  group-hover:filter group-hover:brightness-[0.7] duration-200 ease-out " />
                    </Link>
                    <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">GAMING</CategorieDesign>
                    <div className="absolute bottom-0  space-y-5 p-5 bg-gradient-to-t from-50% sm:from-30% from-simple-black">
                      < p className="hover:text-gray-text text-white capitalize leading-7  text-lg  font-bold">
                        <Link href={"/"}>
                          buy your setup coding for an you a more <br /> experience
                        </Link>
                      </p>
                      <div className="text-xs  text-gray-text">
                        <span className="inline-block h-32 overflow-hidden ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod culpa, recusandae ad eius numquam voluptate, maiores explicabo beatae expedita consequuntur ratione rem nisi quidem, ipsam voluptates tenetur molestiae. Ea, iure!</span>
                        <span>...</span>

                      </div>
                      <Hour_comment href_filter_by_date="" theme="big" className="text-white" date="may 10,2023" />
                    </div>

                  </div>
                  <div className="sticky top-0">
                    <div className="relative group lg:mt-10 ">
                      <Link href={"/SinglePost"}>
                        <Image src={"/imgs/img7.jpg"} alt="" height={600} width={600} className="w-full object-cover  h-[36rem]   group-hover:filter group-hover:brightness-[0.7] duration-200 ease-out " />
                      </Link>
                      <CategorieDesign href_categorie="" theme="primary" className="absolute top-0">GAMING</CategorieDesign>
                      <div className="absolute bottom-0  space-y-5 p-5 bg-gradient-to-t from-30% from-simple-black">
                        < p className="hover:text-gray-text text-white capitalize leading-7  text-lg  font-bold">
                          <Link href={"/"}>
                            buy your setup coding for an you a more <br /> experience
                          </Link>
                        </p>
                        <div className="text-xs  text-gray-text">
                          <span className="inline-block h-32 overflow-hidden ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod culpa, recusandae ad eius numquam voluptate, maiores explicabo beatae expedita consequuntur ratione rem nisi quidem, ipsam voluptates tenetur molestiae. Ea, iure!</span>
                          <span>...</span>

                        </div>
                        <Hour_comment href_filter_by_date="" theme="big" className="text-white" date="may 10,2023" />
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </div >

          </Container>
          <Footer />
        </div>
      </ScreenLoader>
    </>
  );
}
