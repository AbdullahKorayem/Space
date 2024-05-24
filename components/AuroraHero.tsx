"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FaCircleArrowRight } from "react-icons/fa6";

import {
	animate,
	motion,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";

export default function AuroraHero() {
    const COLORS = [
        "#B76E79", 
        "#8A2BE2", 
        "#9400D3", 
        "#9932CC", 
        "#D4AF37", 
        "#8f6a2e",
        "#FFD700", 
        "#0D1B2A", 
        "#1B263B", 
        "#415A77", 
        "#778DA9", 
        "#E0E1DD", 
        "#0F4C81", 
        "#2E8BC0", 
        "#145DA0", 
        "#007EA7", 
        "#45B8AC", 
        "#8D99AE", 
        "#D90429", 
        "#FF2E63", 
        "#08D9D6", 
        "#252A34", 
        "#3A506B", 
        "#5BC0BE", 
        "#1C2541", 
        "#0B132B", 
        "#6FFFE9", 
    "#e0bb7f",
    "#ffda9e",
        
    ];



	const color = useMotionValue(COLORS[0]);
	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%,${color})`;

	useEffect(() => {
		animate(color, COLORS, {
			ease: "easeInOut",
			duration: 50,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);
	const border = useMotionTemplate`1px solid ${color}`;
	const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

	return (
		<motion.section
			style={{
				backgroundImage,
			}}
			className="relative grid main-h-screen place-content-center overflow-hidden h-screen bg-gray-950 px-4 py-24 text-gray-200"
		>
			<section className="relative z-10 flex flex-col items-center">
				<span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
					Beta Now Live!
				</span>
				<h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
					The Technology Is Between Ur Hands Increase In the
					Preformance by Over 90%
				</h1>
				<p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iste consectetur voluptatem repudiandae vel eum mollitia
					illum ipsa, rerum nam enim commodi culpa unde incidunt quas
					architecto similique laborum ex. Quia?
				</p>
				<motion.button
					style={{
						border,
						boxShadow,
					}}
					whileHover={{
						scale: 1.025,
					}}
					whileTap={{
						scale: 0.985,
					}}
					className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
				>
					Start Free Trial
					<FaCircleArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
				</motion.button>
			</section>

            <div className='absolute inset-0 z-0'>
                <Canvas>
                    <Stars radius={50} count={2000} factor={4} fade speed={2}/>
                </Canvas>
            </div>
		</motion.section>
	);
}
