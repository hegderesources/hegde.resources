-- Create products table for HEGDE Resources
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Organic Fertilizers', 'Sustainable Packaging')),
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  specs JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create enquiries table for customer enquiries
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Products are viewable by everyone (public catalog)
CREATE POLICY "Products are viewable by everyone"
  ON public.products
  FOR SELECT
  USING (true);

-- Anyone can submit an enquiry
CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, category, short_description, description, image_url, specs) VALUES
('Premium Vermicompost', 'Organic Fertilizers', 'Rich organic fertilizer from earthworm castings, perfect for all crops', 'Our Premium Vermicompost is produced through controlled vermiculture processes, creating a nutrient-rich organic fertilizer. Enriched with beneficial microorganisms, it improves soil structure, water retention, and provides essential nutrients for healthy plant growth. Ideal for vegetables, fruits, flowers, and all agricultural applications.', '/placeholder.svg', '{"npk": "2-1-1", "organic_matter": "40-45%", "moisture": "30-35%", "ph": "6.5-7.5"}'::jsonb),
('Bio NPK Complex', 'Organic Fertilizers', 'Complete organic NPK fertilizer for balanced plant nutrition', 'Our Bio NPK Complex provides a balanced ratio of essential nutrients derived from natural sources. This eco-friendly fertilizer promotes vigorous growth, improves flowering and fruiting, while maintaining soil health. Suitable for all types of crops and completely safe for organic farming.', '/placeholder.svg', '{"npk": "8-4-4", "organic_matter": "50%", "micronutrients": "Fe, Zn, Mn, Cu", "application": "200-300 kg/acre"}'::jsonb),
('Compost Enriched Soil', 'Organic Fertilizers', 'Premium quality compost for soil enrichment and conditioning', 'Fully decomposed organic compost that enhances soil fertility and structure. Our composting process ensures complete breakdown of organic matter, eliminating weed seeds and pathogens while preserving beneficial microbes. Perfect for soil preparation and top dressing.', '/placeholder.svg', '{"organic_carbon": "15-18%", "c_n_ratio": "15:1", "moisture": "25-30%", "bulk_density": "400-500 kg/m3"}'::jsonb),
('Biodegradable Food Containers', 'Sustainable Packaging', 'Eco-friendly food containers made from natural plant fibers', 'Our biodegradable food containers are crafted from sustainable plant fibers including bagasse and bamboo. These containers are sturdy, microwave-safe, and completely compostable within 60-90 days. Available in various sizes for different food service needs. Perfect for restaurants, catering, and food delivery services.', '/placeholder.svg', '{"material": "Bagasse & Bamboo Fiber", "temperature_range": "-20°C to 120°C", "compost_time": "60-90 days", "certifications": "FDA, BPI"}'::jsonb),
('Eco-Friendly Packaging Boxes', 'Sustainable Packaging', 'Recyclable corrugated boxes made from recycled materials', 'Sustainable packaging solution made from 100% recycled paper and cardboard. Our boxes are strong, durable, and fully recyclable. Available in custom sizes and designs, perfect for e-commerce, shipping, and product packaging. Reduces carbon footprint while ensuring product safety.', '/placeholder.svg', '{"material": "100% Recycled Cardboard", "recyclable": true, "strength": "32 ECT", "custom_printing": "Available"}'::jsonb),
('Compostable Bags', 'Sustainable Packaging', 'Plant-based compostable bags as an alternative to plastic', 'Made from cornstarch and other plant-based materials, our compostable bags are a perfect replacement for traditional plastic bags. They break down completely in commercial composting facilities within 180 days. Available in various sizes for retail, grocery, and waste collection.', '/placeholder.svg', '{"material": "Cornstarch & PLA", "thickness": "15-25 microns", "compost_time": "180 days", "certifications": "EN 13432, ASTM D6400"}'::jsonb);