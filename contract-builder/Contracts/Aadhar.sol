pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;


contract EthAadhar {
    struct Aadhar {
        string name;
        uint id;
        string addr;
        string[][] faceId;
        bool exist;
    }
    
    address public chairperson;
    
    mapping(uint => Aadhar) public citizens;
    
    constructor() public{
        chairperson = msg.sender;
    }
    
    function createAadhar(string name, uint id, string addr, string[] face) public{
        require(chairperson == msg.sender, "Only Owner can edit");
        Aadhar storage person = citizens[id];
        require(!person.exist, "Already exists");
        person.name = name;
        person.exist = true;
        person.id = id;
        person.addr = addr;
        person.faceId.push(face); 
    }
    
    function addFace(uint id, string[] face) public {
        require(chairperson == msg.sender, "Only Owner can edit");
        Aadhar storage person = citizens[id];
        require(person.exist, "Not found");
        person.faceId.push(face);
    }
    
    function getFace(uint id) public view
        returns (string[][] faces) {
            Aadhar storage person = citizens[id];
            require(person.exist, "Not found");
            faces = person.faceId;
        }
    
    function getInfo(uint id) public view
        returns (Aadhar citizen){
        citizen = citizens[id];
        require(citizen.exist, "Not found");
    }
    
}
