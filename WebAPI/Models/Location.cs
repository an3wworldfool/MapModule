using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Location
    {
        public Location()
        {
            Area = new HashSet<Area>();
        }

        public string Address { get; set; }
        public string Coordinates { get; set; }

        public virtual ICollection<Area> Area { get; set; }
    }
}
