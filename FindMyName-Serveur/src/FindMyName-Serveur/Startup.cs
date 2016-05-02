using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Data.Entity;
using FindMyName_Serveur.Models;

namespace FindMyName_Serveur
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json")
                            .AddJsonFile("config.json");
            Configuration = builder.Build();

        }

        public IConfigurationRoot Configuration { get; set; }



        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            services.AddCors(options =>
            {
                options.AddPolicy("*",
                    builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader());
            });

            services.AddEntityFramework()
                                .AddSqlServer()
                                .AddDbContext<fmnContext>(options =>

                                    options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"])
                                );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("*");

            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc();

            SampleData.Initialize(app.ApplicationServices);

        }

    // Entry point for the application.
    public static void Main(string[] args) => WebApplication.Run<Startup>(args);
}


}
