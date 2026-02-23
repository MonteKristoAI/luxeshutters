import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import serviceWindowInstall from "@/assets/service-window-install.jpg";
import serviceWindowReplace from "@/assets/service-window-replace.jpg";
import serviceDoorInstall from "@/assets/service-door-install.jpg";
import serviceSlidingDoors from "@/assets/service-sliding-doors.jpg";
import serviceEnergyWindows from "@/assets/service-energy-windows.jpg";
import serviceCustomDoors from "@/assets/service-custom-doors.jpg";

const services = [
{
  title: "Window Installation",
  description: "Professional installation of new windows — double-hung, casement, picture, bay, and specialty shapes — fitted precisely for comfort, insulation, and curb appeal.",
  image: serviceWindowInstall,
  anchorId: "window-installation"
},
{
  title: "Window Replacement",
  description: "Upgrade outdated, drafty, or damaged windows with modern energy-efficient units. We handle removal, fitting, insulation, and trim for a seamless finish.",
  image: serviceWindowReplace,
  anchorId: "window-replacement"
},
{
  title: "Door Installation",
  description: "Entry doors, interior doors, French doors, and patio doors — expertly installed with proper alignment, weatherstripping, and hardware for security and style.",
  image: serviceDoorInstall,
  anchorId: "door-installation"
},
{
  title: "Sliding Doors",
  description: "Smooth-gliding sliding glass doors that connect your living space to the outdoors — energy-efficient glass, durable tracks, and modern frames.",
  image: serviceSlidingDoors,
  anchorId: "sliding-doors"
},
{
  title: "Energy-Efficient Windows",
  description: "Low-E glass, argon-filled panes, and insulated frames that reduce energy bills by up to 30%. ENERGY STAR® certified options available.",
  image: serviceEnergyWindows,
  anchorId: "energy-efficient-windows"
},
{
  title: "Custom Doors",
  description: "Handcrafted and made-to-order doors — from elegant entryways to unique interior designs — tailored to your home's style and dimensions.",
  image: serviceCustomDoors,
  anchorId: "custom-doors"
}];


export default function ServicesPreview() {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const goToService = (anchorId: string) => {
    navigate(`/services#${anchorId}`);
  };

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 relative overflow-hidden border-t border-border/40"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--sage) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--warm) / 0.5) 0%, transparent 40%)`,
        backgroundColor: "hsl(210 20% 97%)"
      }}>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />


      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-14">
          <div className="w-12 h-0.5 bg-primary mb-6 rounded-full" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 leading-tight">
            Services built around{" "}
            <span className="text-primary">your home.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            From window replacement and door installation to energy-efficient upgrades — we help you create the home you've always wanted.
          </p>
        </div>

        <button
          onClick={() => goToService(featured.anchorId)}
          className={`w-full text-left mb-6 group scroll-fade ${isVisible ? "visible" : ""}`}>

          <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-56 md:h-auto overflow-hidden relative">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:brightness-100 scale-100 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:to-card/40" />
            </div>
            <div className="md:w-1/2 p-7 md:p-10 flex flex-col justify-center">
              <div className="w-8 h-0.5 bg-primary/40 mb-5 rounded-full group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5 group-hover:text-foreground/80 transition-colors duration-300">{featured.description}</p>
              <span className="text-sm font-medium text-primary group-hover:tracking-wider transition-all duration-300 inline-flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          </div>
        </button>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 scroll-fade ${isVisible ? "visible" : ""}`}>
          {rest.slice(0, 3).map((service) =>
          <button key={service.title} onClick={() => goToService(service.anchorId)} className="text-left group">
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 filter brightness-[0.92] saturate-[0.9] group-hover:brightness-100 group-hover:saturate-100 scale-100 group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="w-6 h-0.5 bg-primary/30 mb-3 rounded-full group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-sans">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
                  <span className="text-xs font-medium text-primary/70 mt-3 group-hover:text-primary transition-colors duration-300 inline-flex items-center gap-1">
                    Learn more
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </button>
          )}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 scroll-fade ${isVisible ? "visible" : ""}`}>
          {rest.slice(3).map((service) =>
          <button key={service.title} onClick={() => goToService(service.anchorId)} className="text-left group w-full">
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 filter brightness-[0.92] saturate-[0.9] group-hover:brightness-100 group-hover:saturate-100 scale-100 group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="w-6 h-0.5 bg-primary/30 mb-3 rounded-full group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
                  <span className="text-xs font-medium text-primary/70 mt-3 group-hover:text-primary transition-colors duration-300 inline-flex items-center gap-1">
                    Learn more
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}
