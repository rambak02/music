import { getTracks } from "@/api/api";
import { Main } from "@/components/Main/Main";
import { TrackType } from "@/types/type";

export default async function Home() {
  const tracks: TrackType[] = await getTracks();
  return <Main tracks={tracks} />;
}
