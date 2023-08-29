// import DOMPurify from "dompurify";
// DOMPurify.sanitize(htmlString)
interface Props {
    htmlString: string;
}

export default function HTMLComponent({ htmlString }: Props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
}
