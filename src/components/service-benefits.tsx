import { Clock, Sparkles, Home, Shield, Repeat, Microscope, Box, Key, Palmtree, Sunrise, HardHat, Hammer, Building, TrendingUp, Briefcase, Users } from 'lucide-react'

interface BenefitCardProps {
  icon: React.ElementType
  title: string
  description: string
}

function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="border rounded-lg p-6 flex items-start space-x-4 bg-white">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-[#003B6D] flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#003B6D] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export function RegularCleaningBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={Clock}
        title="Time-Saving Convenience"
        description="Reclaim your precious time by entrusting your regular cleaning to our professional team, allowing you to focus on what truly matters in your life."
      />
      <BenefitCard
        icon={Repeat}
        title="Consistent Cleanliness"
        description="Enjoy a consistently clean home with our scheduled cleaning services, maintaining a tidy and welcoming environment throughout the week."
      />
      <BenefitCard
        icon={Sparkles}
        title="Tailored Cleaning Plans"
        description="Benefit from customized cleaning plans that address your specific needs and preferences, ensuring your home receives the care it deserves."
      />
      <BenefitCard
        icon={Shield}
        title="Health and Hygiene"
        description="Promote a healthier living space with regular cleaning that reduces allergens, bacteria, and dust, contributing to better indoor air quality."
      />
    </div>
  )
}

export function DeepCleaningBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={Microscope}
        title="Thorough Sanitization"
        description="Experience a level of cleanliness beyond the surface with our deep cleaning service, targeting hidden germs and bacteria for a truly hygienic home."
      />
      <BenefitCard
        icon={Sparkles}
        title="Revitalized Living Spaces"
        description="Breathe new life into your home as we tackle accumulated grime and dirt, restoring the shine and freshness to your living spaces."
      />
      <BenefitCard
        icon={Home}
        title="Improved Home Maintenance"
        description="Protect your home's surfaces and fixtures with periodic deep cleaning, extending their lifespan and maintaining their appearance."
      />
      <BenefitCard
        icon={Shield}
        title="Allergy Relief"
        description="Dramatically reduce allergens and irritants in your home, providing relief for allergy sufferers and creating a healthier indoor environment."
      />
    </div>
  )
}

export function MoveInOutBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={Box}
        title="Stress-Free Transitions"
        description="Ease the stress of moving with our comprehensive cleaning service, ensuring your old or new space is impeccably clean and ready for the next chapter."
      />
      <BenefitCard
        icon={Key}
        title="Security Deposit Protection"
        description="Maximize your chances of recovering your full security deposit by leaving your rental property in pristine condition."
      />
      <BenefitCard
        icon={Sparkles}
        title="Fresh Start Guarantee"
        description="Begin your new journey in a spotlessly clean home, free from the previous occupants' dirt and germs, creating a truly fresh start."
      />
      <BenefitCard
        icon={Shield}
        title="Thorough Inspection Cleaning"
        description="Benefit from our detail-oriented cleaning that addresses areas often scrutinized during move-out inspections, reducing the risk of deductions."
      />
    </div>
  )
}

export function VacationHomeBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={Palmtree}
        title="Guest-Ready Cleanliness"
        description="Ensure your vacation rental always makes a stellar first impression with our thorough cleaning services, leading to better reviews and repeat bookings."
      />
      <BenefitCard
        icon={Repeat}
        title="Reliable Turnover Service"
        description="Trust our efficient turnover cleaning to prepare your property quickly between guests, maximizing your rental availability and income."
      />
      <BenefitCard
        icon={Shield}
        title="Property Protection"
        description="Protect your investment with regular, professional cleaning that helps maintain the condition of your vacation home and its furnishings."
      />
      <BenefitCard
        icon={Sunrise}
        title="Peace of Mind"
        description="Enjoy peace of mind knowing your vacation property is being cared for professionally, even when you're miles away."
      />
    </div>
  )
}

export function PostConstructionBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={HardHat}
        title="Construction Debris Removal"
        description="Efficiently remove all traces of construction, including dust, debris, and material residues, revealing the true beauty of your new or renovated space."
      />
      <BenefitCard
        icon={Hammer}
        title="Surface Protection"
        description="Safeguard new surfaces and finishes with our careful cleaning techniques, ensuring your construction investment remains pristine."
      />
      <BenefitCard
        icon={Shield}
        title="Health and Safety Compliance"
        description="Ensure your newly constructed or renovated space meets health and safety standards with our thorough post-construction cleaning."
      />
      <BenefitCard
        icon={Sparkles}
        title="Move-In Ready Preparation"
        description="Transform your construction site into a livable, welcoming space ready for immediate occupancy or showcase to potential buyers or tenants."
      />
    </div>
  )
}

export function CommercialCleaningBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      <BenefitCard
        icon={Building}
        title="Professional Image Enhancement"
        description="Maintain a spotless, professional environment that impresses clients and creates a positive work atmosphere for employees."
      />
      <BenefitCard
        icon={TrendingUp}
        title="Increased Productivity"
        description="Boost employee productivity and morale with a clean, organized workspace that promotes focus and reduces distractions."
      />
      <BenefitCard
        icon={Briefcase}
        title="Customized Cleaning Solutions"
        description="Benefit from cleaning plans tailored to your business needs, whether you're an office, retail space, or industrial facility."
      />
      <BenefitCard
        icon={Users}
        title="Healthier Work Environment"
        description="Reduce sick days and promote employee well-being with regular, thorough cleaning that minimizes the spread of germs and allergens."
      />
    </div>
  )
}

