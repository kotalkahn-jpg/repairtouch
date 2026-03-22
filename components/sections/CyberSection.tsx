"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CyberSection() {

  const [open, setOpen] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpen(open === index ? null : index)
  }

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Cybersecurity Guide: Best Practices for Secure Email Management
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            In an era of increasing cyber threats, protecting your digital communication is more critical than ever. 
            We have compiled this guide to help users understand the advanced security protocols we implement and how 
            to manage email effectively across different platforms.
          </p>
        </div>


        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="sticky top-24">
            <Image
              src="/emaill.jpeg"
              alt="Email Security Guide"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>


          {/* RIGHT FAQ */}
          <div className="space-y-4">

            {/* ITEM 1 */}
            <div className="border rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(0)}
                className="w-full text-left p-5 font-semibold bg-gray-50 hover:bg-gray-100"
              >
                1. Advanced Email Authentication: SPF, DKIM, and DMARC
              </button>

              <AnimatePresence>
                {open === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-5 text-gray-600 space-y-3"
                  >
                    <p>
                      To prevent phishing, spoofing, and unauthorized access, modern email servers utilize three core authentication layers:
                    </p>
                    <ul className="space-y-2">
                      <li><strong>SPF (Sender Policy Framework):</strong> Validates which mail servers are authorized to send emails on behalf of your domain.</li>
                      <li><strong>DKIM (DomainKeys Identified Mail):</strong> Adds a digital signature to every outgoing email, ensuring the content has not been tampered with during transit.</li>
                      <li><strong>DMARC:</strong> A policy layer that uses SPF and DKIM to instruct receiving servers on how to handle emails that fail authentication, significantly reducing the risk of your account being impersonated.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* ITEM 2 */}
            <div className="border rounded-xl overflow-hidden">
              <button onClick={() => toggle(1)} className="w-full text-left p-5 font-semibold bg-gray-50 hover:bg-gray-100">
                2. Using Webmail as a Security Buffer
              </button>

              <AnimatePresence>
                {open === 1 && (
                  <motion.div className="p-5 text-gray-600">
                    For users who frequently engage with the public or handle high volumes of external inquiries, we recommend a "Webmail-First" defense strategy.
                    By using your browser-based Webmail as the primary entry point, you create a security buffer. This allows the server-side filters to "clean" incoming traffic before it reaches your local desktop applications like Microsoft Outlook.
                    This strategy protects your local hardware and operating system from being compromised by malicious scripts hidden in unsolicited attachments.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* ITEM 3 */}
            <div className="border rounded-xl overflow-hidden">
              <button onClick={() => toggle(2)} className="w-full text-left p-5 font-semibold bg-gray-50 hover:bg-gray-100">
                3. Managing "Untrusted" or Flagged Emails
              </button>

              <AnimatePresence>
                {open === 2 && (
                  <motion.div className="p-5 text-gray-600 space-y-3">
                    <p>In high-security environments, filters may occasionally flag legitimate emails from new or unknown sources as spam.</p>

                    <p className="font-medium">How to Safely Recover Flagged Emails:</p>

                    <ul className="space-y-2">
                      <li>Access Your Webmail Portal: Log in to your email via your official web browser link.</li>
                      <li>Review the Spam/Junk Folder: If an expected email is missing from your desktop app, it is likely held here for safety.</li>
                      <li>Whitelist the Sender: Select the legitimate email and mark it as "Not Spam" or "Safe."</li>
                      <li>Automatic Synchronization: Once marked as safe, the email will automatically move to your Inbox and sync directly to your desktop email client (e.g., Outlook) for permanent storage.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* ITEM 4 */}
            <div className="border rounded-xl overflow-hidden">
              <button onClick={() => toggle(3)} className="w-full text-left p-5 font-semibold bg-gray-50 hover:bg-gray-100">
                4. Technical Configuration: POP vs. IMAP
              </button>

              <AnimatePresence>
                {open === 3 && (
                  <motion.div className="p-5 text-gray-600 space-y-3">
                    <p>For organizations dealing with massive email archives and high-volume processing, choosing the right protocol is essential for performance.</p>

                    <p><strong>The POP Advantage:</strong> POP downloads emails directly to your computer’s local storage. This frees up server space and allows for faster searching and offline access.</p>

                    <p><strong>Data Integrity:</strong> Emails stored locally require regular backups to prevent loss in case of hardware failure.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* ITEM 5 */}
            <div className="border rounded-xl overflow-hidden">
              <button onClick={() => toggle(4)} className="w-full text-left p-5 font-semibold bg-gray-50 hover:bg-gray-100">
                5. Staying Informed
              </button>

              <AnimatePresence>
                {open === 4 && (
                  <motion.div className="p-5 text-gray-600">
                    A secure digital environment is a shared responsibility. For further technical tutorials, troubleshooting steps, or to access our full Knowledge Base, please visit our official support page.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="mt-20 text-center bg-blue-700 text-white rounded-2xl p-12">

          <h3 className="text-2xl font-semibold mb-4">
            Stay Alert. Stay Secure.
          </h3>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold">
            Request Consultation
          </button>

        </div>

      </div>

    </section>
  )
}