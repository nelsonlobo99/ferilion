'use client'

import React from 'react'
import { Bubble } from '@typebot.io/nextjs';

const Footer = () => {
  return (
    <div>
        <section className="text-center bg-secondary p-2 rounded-lg">
          {/* <h3 className="text-2xl font-bold mb-4">Get in Touch</h3> */}

          <div>
            <p className="text-muted-foreground my-6">
            Follow Ferilion Labs on social media for stories and insights about course provieded by us.
            </p>
          </div>

          <div className="flex w-full justify-center my-8">
            <div className="cursor-pointer"><a href="https://www.instagram.com/ferilionlabs/" target="_blank"><img src="icon-instagram.svg" className="w-6 h-6 mx-2"/></a></div>
            <div className="cursor-pointer"><a href="https://www.facebook.com/ferilionlabs" target="_blank"><img src="icon-facebook.svg"  className="w-6 h-6 mx-2"/></a></div>
            <div className="cursor-pointer"><a href="https://www.linkedin.com/company/ferilion-labs/" target="_blank"><img src="icon-linkedin.svg"  className="w-6 h-6 mx-2"/></a></div>
          </div>
          <div>
            <p className="text-muted-foreground mb-6">
                Made with ❤️ by Ferilion Labs

            </p>
          </div>
        </section>
        {typeof window !== undefined && 
        <Bubble 
          typebot={"my-typebot-1i0ilxv"}
          theme={{ button: { backgroundColor: "#c81919", size: "medium" } }}/>
        }
    </div>
  )
}

export default Footer