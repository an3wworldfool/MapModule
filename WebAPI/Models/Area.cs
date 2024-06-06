using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Area
    {
        public int IdArea { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public decimal SurfaceArea { get; set; }
        public string Points { get; set; }
        public string Color { get; set; }
        public string Type { get; set; }

        public virtual Location AddressNavigation { get; set; }
    }
}
