using backend.Helpers;
using backend.Models;
using backend.Models.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        public UserController(UserService userService, JwtTokenGenerator jwtTokenGenerator)
        {
            _userService = userService;
            _jwtTokenGenerator = jwtTokenGenerator;
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] userRequestDto loginUser)
        {
            var user = await _userService.GetAsync(loginUser.Email, loginUser.Password);
            if (user == null)
                return Unauthorized(new { message = "Invalid email or password" });

            var token = _jwtTokenGenerator.GenerateToken(user.Email);
            return Ok(new { token });
        }
        
        [HttpPost("signUp")]
        public async Task<ActionResult> SignUp([FromBody] userRequestDto signUpUser)
        {
            var user = _userService.GetAsync(signUpUser.Email, signUpUser.Password);
            if (user == null!)
            {
                return BadRequest(new { message = "User already exists" });
            }

            var newUser = new User
            {
                Email = signUpUser.Email,
                Password = signUpUser.Password,
            };

            await _userService.createUser(newUser);

            var token = _jwtTokenGenerator.GenerateToken(newUser.Email);
            return Ok(new { user, token });
        }
    }
}
