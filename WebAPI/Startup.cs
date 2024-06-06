using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using AutoMapper;

namespace WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {          
                    services.AddDbContext<_57lbsContext>(opt =>
                    opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
                    //Mapper.Initialize(Configuration=>cfg.AddProfile<MappingProfile>());
                    //services.AddAutoMapper();
                    //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
                    //services.AddControllersWithViews();
                    var mappingConfig = new MapperConfiguration(mc =>{
                        mc.AddProfile(new MappingProfile());
                    });
                    IMapper mapper = mappingConfig.CreateMapper();
                    services.AddSingleton(mapper);
                    services.AddMvc();
                    services.AddCors(opt =>{
                        opt.AddPolicy("*",
                        builder =>
                        {
                            builder.SetIsOriginAllowedToAllowWildcardSubdomains()
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                        });
                    });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("*");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
