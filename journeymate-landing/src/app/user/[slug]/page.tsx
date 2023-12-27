import {redirect} from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
        redirect('journeymate://journeymate.eu/user/' + params.slug)
}