using Microsoft.AspNetCore.Mvc;

namespace exam_react_net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{   

    [HttpPost]
    public IActionResult Post([FromBody] Object newEvent)
    {
        Console.WriteLine(newEvent);
        return Ok();
    }

}