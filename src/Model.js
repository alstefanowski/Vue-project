class Phone 
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.brandID = -1;
        this.releaseYear = -1;
        this.releaseMonth = -1;
        this.typeID = -1;
        this.sizeInch = -1;
        this.touchscreen = false;
        this.simID = -1;
        this.dualsim = false;
        this.memoryCardID = -1;
        this.memoryMB = -1;
        this.ramMB = -1;
        this.operatingSystemVersion = -1;
        this.cpuGHz = -1;
        this.cores = -1;
        this.batterymAH = -1;
        this.cameraMP = -1;
        this.cameraLED = false;
        this.radio = false;
    }
    //Powstawiać gety 
}

class Brand
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Type
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Sim
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}


class OperatingSystem
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}
