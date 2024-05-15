import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HomeCard = (props) => {
  return (
    <>
        <Card className='duration-300 transition-all hover:p-3 hover:tracking-widest'>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <span>{props.content}</span>
                <br />
                <span className="font-bold underline decoration-blue-300">{props.contentSecond}</span>
            </CardContent>
            <CardFooter>
                <p>{props.footer}</p>
            </CardFooter>
        </Card>

    </>
  )
}

export default HomeCard