/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author matia
 */
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Productos implements Serializable {
        @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
        
    @Column(name = "idproductos")
    private Long idproductos;
        
    @Column(name = "producto_nombre")
    private String producto_nombre;
    
    @Column(name="producto_precio")
    private String producto_precio;
    
    @Column(name="producto_descripcion")
    private String producto_descripcion;
    
    @Column(name="producto_caracteristica1")
    private String producto_caracteristica1;
    
    @Column(name="producto_caracteristica2")
    private String producto_caracteristica2;
    
    @Column(name="producto_caracteristica3")
    private String producto_caracteristica3;
    
    @Column(name="producto_foto")
    private String producto_foto;
    
    @Column(name="producto_categoria")
    private String producto_categoria;
    
    @Column(name="producto_subcategoria")
    private String producto_subcategoria;
    
    
}
