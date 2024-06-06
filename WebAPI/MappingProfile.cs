using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using AutoMapper;
using WebAPI.DTOs;
using WebAPI.Models;

public class MappingProfile : Profile{
    public MappingProfile(){
        CreateMap<Location,LocationDTO>();
        CreateMap<LocationDTO,Location>();
        CreateMap<Area,AreaDTO>();
        CreateMap<AreaDTO,Area>();
    }
}