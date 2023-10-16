import MainPageBorder from "./_components/MainPageBorder";
import NavigationMenu from "./_components/NavigationMenu";
import ContentSection from "./_components/ContentSection";

export default function Home() {
  return (
    <MainPageBorder>
      <NavigationMenu />
      <ContentSection />
    </MainPageBorder>
  );
}
