import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"

const Contact = ()  => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex justify-center py-6 bg-gray-50">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-balance text-muted-foreground">
              Any Questions or remarks? Write us a message!
            </p>
          </div>
          <div className="grid gap-4">
          <div className="flex">
              <div className="grid gap-2 mx-2">
                <Label htmlFor="email">First Name</Label>
                <Input
                  id="fname"
                  type="text"
                  placeholder="Eg: John"
                  required
                />
              </div>
              <div className="grid gap-2 mx-2">
                <div className="flex items-center">
                  <Label htmlFor="lname">Last Name</Label>
                </div>
                <Input id="lname" type="text" placeholder="Eg: Doe" required />
              </div>
            </div>
            <div className="flex">
              <div className="grid gap-2 mx-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2 mx-2">
                <div className="flex items-center">
                  <Label htmlFor="phno">Phone No</Label>
                </div>
                <Input id="phno" type="number" required />
              </div>
            </div>
            <div>
                <Textarea />
              </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="grid gap-2 text-center py-6">
            <h1 className="text-3xl font-bold">Contact Information</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
