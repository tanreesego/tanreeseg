import * as React from "react";
import Link from "next/link";

import { Detail } from "../Details/Basics";

export function Homepage() {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  return (
    <Detail.ContentContainer>
      <Detail.SectionContainer>
        <Detail.SectionContent>
          <div className="pb-24 space-y-8 md:space-y-16">
            <h1 className="text-xl font-bold">Tanreese Go</h1>
            <p>Hi there! </p>
            <p>
              I&apos;m a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dlsu.edu.ph/colleges/gcoe/undergraduate-degree-programs/bachelor-of-science-in-mechanical-engineering-with-specialization-in-mechatronics-engineering/"
              >
                DLSU MechEng{" "}
              </a>
              student from &#127477;&#127469; who enjoys designing and building
              technology. I&apos;m still figuring out what my next
              steps are though. But currently, trying to build better solutions
              for farmers.{" "}
            </p>
            <p>
              Here are some things I&apos;ve{" "}
              <Link href="/writing" passHref>
                <a>written</a>
              </Link>
              :
            </p>
          </div>
        </Detail.SectionContent>
      </Detail.SectionContainer>
    </Detail.ContentContainer>
  );
}
