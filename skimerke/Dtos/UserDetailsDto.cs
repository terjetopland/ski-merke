using skimerke.Models;

namespace skimerke.Dtos;

public record UserDetailsDto(
    string? UserId,
    string? FirstName,
    string? LastName,
    string? Email,
    DateOnly? DateOfBirth,
    PersonGender? Gender
    );