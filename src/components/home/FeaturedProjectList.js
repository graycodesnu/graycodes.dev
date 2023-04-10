// ! Imports
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
// Import useState for modal functionality
import { useState } from "react";
// Import Data
import { featuredProjectData } from "../../data/featuredProjectData";
// Import project detail pages
import GoodWeeds from "../../pages/projects/GoodWeeds";

// ! Function
export default function ProjectList({ featuredProject }) {
  console.log(
    featuredProject,
    "featured project data from featured project list component"
  );

  return (
    <>
      <div className="py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-2 lg:space-y-2">
              <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                {/* Screenshot */}
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={featuredProject.screenshot}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-red object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold" />
                </div>

                {/* Main Card */}
                <div>
                  {/* Top Half of Card */}
                  <div className="group relative max-w-xl">
                    {/* Title */}
                    <div className="inline-flex items-center justify-between">
                      <h3 className="mt-3 text-2xl font-semibold leading-6 text-secondary group-hover:text-secondary">
                        <a href="">
                          <span className="absolute inset-0" />
                          {featuredProject.title}

                          <span className="absolute top-0 right-0">
                            {/* Learn More */}
                            <ArrowLongRightIcon className="text-silver h-6 w-8 xs:mt-2 md:mt-1" />
                          </span>
                        </a>
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="mt-5 text-sm leading-6 text-silver">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 flex border-t border-green-opaque pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src=""
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="">
                            <span className="absolute inset-0" />
                            ""
                          </a>
                        </p>
                        <p className="text-gray-600">bleh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
