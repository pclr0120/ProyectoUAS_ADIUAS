

export class CicloEscolar{

    public IdCicloEscolar:String="";
    public CicloEscolarA1:String="";
    public CicloEscolarA2:String="";
    public Semestre:String="";
    public FechaInicio:String=""
    public FechaCierre:String=""

}

export class RutasApi{
    readonly root = "http://localhost:3000";

    readonly search = "/search";
    readonly insert = "/register";
    readonly update = "/update";
    readonly delete = "/delete";

    readonly UnidadAcademica ="/Unidad_Academica";
}

export class UnidadAcademica{
    public IDUnidad_Acad:String="";
    public Nombre_UA:String="";
    public Nivel_Educ:String="";
    public Unidad_Reg:String="";
    public Tel_UA:String="";
    public Nom_Direct:String="";
    public Nom_SA:String="";
    public Direcc_UA:String="";
    public Red_Soc:String="";
    public Nom_RT:String="";
    public Tel_RT:String="";
    public Correo_RT:String="";
}

