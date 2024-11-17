import { organization } from "@/content/global";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div>
      <p>
        Email:{" "}
        <Link
          className="underline"
          href={`mailto: ${organization.email}?subject=Inquiry`}
        >
          {organization.email}
        </Link>
      </p>
      {organization.phoneNums.map((phoneNum) => (
        <div>
          Phone:&nbsp;
          <Link href={`tel:+91${phoneNum}`} className="underline">
            {phoneNum}
          </Link>
        </div>
      ))}
    </div>
  );
}
