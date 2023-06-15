// SPDX-License-Identifier: UNKNOWN 
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DecenLink is ERC721{
    address public owner;
    uint256 public totalServers;
    uint256 public totalSupply=0;

    constructor(string memory _name,string memory _symbol) ERC721 (_name,_symbol){
        owner=msg.sender;
    }
    struct User{
        address user_address;
        string user_name;
        string email;
        uint256[] servers_joined;
    }

    struct Channel{
        uint256 channel_ID;
        string name;
    }

    struct Server{
        uint256 server_ID;
        string name;
        address admin;
        uint256 text_channels;
        Channel[] channels;
    }

    event ServerCreated(
        uint256 server_ID,
        string name,
        address admin
    );
     event ChannelCreated(
        uint256 channel_ID,
        string name,
        uint256 server_ID
    );
    event ServerJoined(
        address user,
        uint256 server_ID
    );

    mapping(uint256=>Server) public servers;  
    mapping(address=>User) public users;
    mapping(address=>mapping(uint256=>bool)) public hasJoined;

    function create_channel(uint256 _server_ID,string memory _name) public {
        require(msg.sender==servers[_server_ID].admin);

        uint channel_id=servers[_server_ID].text_channels++;
        Channel memory channel =Channel(channel_id,_name);
        servers[_server_ID].channels.push(channel);
        
        emit ChannelCreated(channel_id, _name, _server_ID);

    }

    function create_server(string memory _name) public {
        totalServers=totalServers+1;
        servers[totalServers]=Server(totalServers,_name,msg.sender,0,new Channel[](0));

        emit ServerCreated(totalServers, _name, msg.sender);
    }

    function mint(uint256 server_id) public {
        require(hasJoined[msg.sender][server_id]==false);

        hasJoined[msg.sender][server_id]=true;
        users[msg.sender].servers_joined.push(server_id);

        totalSupply=totalSupply+1;
        _safeMint(msg.sender, server_id);
        
        emit ServerJoined(msg.sender,server_id);
    }
    

    
}