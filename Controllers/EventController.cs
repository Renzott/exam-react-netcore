using Microsoft.AspNetCore.Mvc;

namespace exam_react_net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{   

    [HttpPost]
    public IActionResult Post([FromBody] Object newEvent)
    {   
        // TODO: Connect to database
        Console.WriteLine(newEvent);
        return Ok();
    }

}