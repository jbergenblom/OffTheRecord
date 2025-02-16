﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OffTheRecord.Models
{
  [Table("April-29")]
  public class GuestInput
  {
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    //public string Relation { get; set; }
    public string Email { get; set; }
    public DateTime DateOfBirth { get; set; }
    //public DateTime DateOfBirth { get; set; }
    public DateTime Created { get; set; }
  }
}