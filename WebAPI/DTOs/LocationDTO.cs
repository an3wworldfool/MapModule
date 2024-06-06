using System;
using System.Collections.Generic;

namespace WebAPI.DTOs
{
    public class LocationDTO
    {     

        public string Address { get; set; }
        public string Coordinates { get; set; }

        public virtual List<AreaDTO> Area { get; set; }
    }
}
