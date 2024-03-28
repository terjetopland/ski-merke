using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using skimerke.Data;
using skimerke.Models;
using skimerke.Services;


namespace skimerke.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RequirementController : ControllerBase
    {
        private readonly IRequirementService _service;
        
        public RequirementController(IRequirementService service)
        {
            _service = service;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Requirement>> Get()
        {
            // Call the repository method to retrieve requirements
            var data = await _service.GetAll();
            return data;
        }
    }
}
