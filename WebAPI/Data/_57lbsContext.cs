using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebAPI.Models
{
    public partial class _57lbsContext : DbContext
    {
        public _57lbsContext()
        {
        }

        public _57lbsContext(DbContextOptions<_57lbsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Area> Area { get; set; }
        public virtual DbSet<Location> Location { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=addresslistserver.database.windows.net;Database=AddressList;user id=addresslistadmin;password=AddressList0");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Area>(entity =>
            {
                entity.HasKey(e => e.IdArea)
                    .HasName("PK_Area");

                entity.ToTable("area");

                entity.Property(e => e.IdArea)
                //  .ValueGeneratedNever();
                    .HasColumnName("id_area")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnName("address")
                    .HasMaxLength(100);


                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasColumnName("color")
                    .HasMaxLength(50);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnName("type")
                    .HasMaxLength(50);

                entity.Property(e => e.Points)
                    .IsRequired()
                    .HasColumnName("points");

                entity.Property(e => e.SurfaceArea)
                    .HasColumnName("surface_area")
                    .HasColumnType("decimal(18, 4)");

                entity.HasOne(d => d.AddressNavigation)
                    .WithMany(p => p.Area)
                    .HasForeignKey(d => d.Address)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Area_Location");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.Address)
                    .HasName("PK_Location");

                entity.ToTable("location");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(100);

                entity.Property(e => e.Coordinates)
                    .IsRequired()
                    .HasColumnName("coordinates")
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
