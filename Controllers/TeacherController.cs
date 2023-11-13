using exam_react_net.Models;
using exam_react_net.utils;
using Microsoft.AspNetCore.Mvc;

namespace exam_react_net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeacherController : ControllerBase
{
    private readonly ILogger<TeacherController> _logger;
    private readonly List<Teacher> _teachers;

    public TeacherController(ILogger<TeacherController> logger)
    {
        _logger = logger;
        _teachers = ReadJSON.ReadJSONFile<List<Teacher>>("Data/teachers.json")!;
    }

    [HttpGet]
    public IEnumerable<Teacher> Get()
    {
        return ReadJSON.ReadJSONFile<List<Teacher>>("Data/teachers.json")!;
    }
    
    [HttpGet("search")]
    public IEnumerable<Teacher> Search(string query)
    {
        _logger.Log(LogLevel.Information, $"Searching for {query}");

        return _teachers.Where(teacher => teacher.Username.ToLower().StartsWith(query.ToLower())).Take(5);
    }

    [HttpGet("similarity")]
    public Teacher Similarity(string query)
    {
        _logger.Log(LogLevel.Information, $"Searching for {query}");

        var teachersSimilarity = StringSimilarity.Search(_teachers, query, "Username");

        return teachersSimilarity.FirstOrDefault(new Teacher());
    }

}