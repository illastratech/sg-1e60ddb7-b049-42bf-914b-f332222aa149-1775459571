import { Gavel, ListChecks, FileCheck, Handshake } from "lucide-react";

export function Features() {
  return (
    <section className="w-full bg-gradient-to-b from-[#061427] to-[#081A33] py-16 md:py-24">
      <div className="container">
        <div className="mb-14 text-center md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Why Choose <span className="text-primary">Trixion Motors?</span>
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="feature-card">
            <div className="icon-node mb-4 h-16 w-16">
              <Gavel className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">
              Direct Access to<br />Japanese Auctions
            </h3>
            <p className="text-muted-foreground text-sm">
              Trusted. Secure. Reliable.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-node mb-4 h-16 w-16">
              <ListChecks className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">
              Transparent Pricing
            </h3>
            <p className="text-muted-foreground text-sm">
              Clear breakdown before you commit.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-node mb-4 h-16 w-16">
              <FileCheck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">
              Verified Auction<br />Sheets Only
            </h3>
            <p className="text-muted-foreground text-sm">
              Original & Authentic Documents.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-node mb-4 h-16 w-16">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">
              End-to-End<br />Import Handling
            </h3>
            <p className="text-muted-foreground text-sm">
              We handle everything, you relax.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}