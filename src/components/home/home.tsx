import { Header } from "./header";
import { HeroSection } from "./heroSection";
import { OutdoorPicsSection } from "./OutdoorPicsSection";
import { SkirtsSection } from "./SkirtsSection";
import { SocialProofSection } from "./SocialProofSection";

export function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<SkirtsSection />
			<OutdoorPicsSection />
			<SocialProofSection />
		</div>
	);
}
