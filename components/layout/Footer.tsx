"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            RepairTouch
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            We provide enterprise technology solutions including infrastructure,
            call center systems, security, data services and certified IT equipment
            for modern businesses.
          </p>
        </div>


        {/* SOUTH AFRICA */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            South Africa Office
          </h3>

          <p className="text-sm mb-2">
            📧 sales@repairtouch.co.za  
            <br />
            📧 micklon@repairtouch.co.za
          </p>

          <p className="text-sm mb-2">
            📍 Block A, Ground Floor, Surrey Square Office Park,<br />
            256 Surrey Road, Randburg, Johannesburg, South Africa
          </p>

          <p className="text-sm mb-2">
            ☎ Tel: 010 500 7201
          </p>

          <p className="text-sm">
            📱 +27 83 575 6464  
            <br />
            📱 +27 78 989 8423
          </p>
        </div>


        {/* MALAWI */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Malawi Office
          </h3>

          <p className="text-sm mb-2">
            📧 sales@repairtouch.mw  
            <br />
            📧 admin@repairtouch.mw
          </p>

          <p className="text-sm mb-2">
            📍 Shop 26, Crossroads Shopping Centre,<br />
            Lilongwe, Malawi
          </p>

          <p className="text-sm">
            📱 +265 886 337 978
          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} RepairTouch. All rights reserved.
      </div>

    </footer>
  );
}