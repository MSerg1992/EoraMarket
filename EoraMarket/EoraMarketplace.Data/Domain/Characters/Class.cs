﻿using System.ComponentModel.DataAnnotations;

namespace EoraMarketplace.Data.Domain.Characters
{
    public class Class
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}