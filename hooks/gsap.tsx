import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollSmoother);

export const smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1,
    effects: true,
    
})
