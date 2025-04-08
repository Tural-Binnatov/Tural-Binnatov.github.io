
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";

// const OrderForm = () => {
//   const [date, setDate] = useState<Date | undefined>(undefined);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     productType: "",
//     details: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData({
//       ...formData,
//       productType: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validate form data
//     if (!formData.name || !formData.email || !formData.productType || !date) {
//       toast.error("Vänligen fyll i alla obligatoriska fält");
//       return;
//     }
    
//     // In a real app, you would send the form data to a server
//     console.log({ ...formData, date });
    
//     toast.success("Tack för din beställning! Vi kontaktar dig inom kort.");
    
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       productType: "",
//       details: "",
//     });
//     setDate(undefined);
//   };

//   return (
//     <section id="order" className="bg-bakery-beige/30 py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="section-heading">Beställning</h2>
//             <p className="section-subheading">
//               Vill du beställa en specialtårta eller catering till ditt event? Fyll i formuläret nedan så kontaktar vi dig inom kort.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-bakery-brown">Namn *</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-bakery-brown">E-post *</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone" className="text-bakery-brown">Telefon</Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="productType" className="text-bakery-brown">Produkt *</Label>
//                   <Select required onValueChange={handleSelectChange} value={formData.productType}>
//                     <SelectTrigger className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown">
//                       <SelectValue placeholder="Välj produkt" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="cake">Tårta</SelectItem>
//                       <SelectItem value="bread">Bröd</SelectItem>
//                       <SelectItem value="pastry">Bullar</SelectItem>
//                       <SelectItem value="cookies">Kakor</SelectItem>
//                       <SelectItem value="catering">Catering</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label className="text-bakery-brown">Hämtning/Leverans Datum *</Label>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant={"outline"}
//                         className={cn(
//                           "w-full border-bakery-beige/50 justify-start text-left font-normal",
//                           !date && "text-muted-foreground"
//                         )}
//                       >
//                         <CalendarIcon className="mr-2 h-4 w-4" />
//                         {date ? format(date, "PPP") : <span>Välj datum</span>}
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0">
//                       <Calendar
//                         mode="single"
//                         selected={date}
//                         onSelect={setDate}
//                         initialFocus
//                         disabled={(date) => date < new Date()}
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 <div className="space-y-2 md:col-span-2">
//                   <Label htmlFor="details" className="text-bakery-brown">Detaljer</Label>
//                   <Textarea
//                     id="details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     className="min-h-32 border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
//                     placeholder="Beskriv din beställning (storlek, smak, specialönskemål, etc.)"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                 <Button type="submit" className="btn-primary w-full md:w-auto">
//                   Skicka beställning
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OrderForm;
