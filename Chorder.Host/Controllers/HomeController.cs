using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Chorder.Host.Models;
using Microsoft.AspNetCore.Hosting;

namespace Chorder.Host.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment _env;
        public HomeController(IHostingEnvironment env)
        {
            _env = env;
        }

        public IActionResult Index()
        {
            //TODO put access token to single page app
            var indexHtmlPath = System.IO.Path.Combine(_env.WebRootPath, "index.html");
            ViewData["rawHtml"] = System.IO.File.ReadAllText(indexHtmlPath);;
            return View();
        }


    }
}
