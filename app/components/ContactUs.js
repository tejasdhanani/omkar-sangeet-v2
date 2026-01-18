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
      {organization.phoneNums.map((phone) => (
        <div key={phone.id}>
          Phone:&nbsp;
          <Link href={`tel:+91${phone.number}`} className="underline">
            {phone.number}
          </Link>
        </div>
      ))}
    </div>
  );
}
