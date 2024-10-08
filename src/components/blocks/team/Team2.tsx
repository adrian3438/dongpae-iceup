// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
import { TeamCard2 } from "components/reuseable/team-cards";
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import teams from "data/team-list";

export default function Team2() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-16 mb-md-17 mb-xl-20 align-items-center">
      <div className="col-lg-4">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Meet the Team</h2>
        <h3 className="display-5 mb-5">
          Save your time and money by choosing our professional team.
        </h3>
        <p>
          Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur
          ac, vestibulum at eros tempus porttitor.
        </p>

        <NextLink title="See All Members" href="#" className="btn btn-primary rounded-pill mt-3" />
      </div>

      <div className="col-lg-8">
        <div className="swiper-container text-center mb-6">
          <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {teams.map((team) => (
              <TeamCard2 key={team.id} {...team} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
