define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:8000/api/member/create",
    "title": "Create Member",
    "name": "Create_Member",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "designation",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_num",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resume",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User",
            "description": "<p>Created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/member.controller.ts",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/assign",
    "title": "We Simply Assign Some Members in a Team",
    "name": "AssignTeamMembers",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Members",
            "description": "<p>Assigned</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/team.controller.ts",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "/creat",
    "title": "Create Team",
    "name": "CreateTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Team",
            "description": "<p>Created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/team.controller.ts",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "/delete/:id/",
    "title": "Soft Delete a Team",
    "name": "DeleteTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": ":id",
            "defaultValue": ">",
            "description": "<p>team id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Team",
            "description": "<p>Deleted and Also Un-Assigned All Members Of That Team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/team.controller.ts",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Get Users List",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Users",
            "description": "<p>List Json Responce</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/member.controller.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login/",
    "title": "Login User",
    "name": "UserLogin",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Login",
            "description": "<p>Success with Valid Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/member.controller.ts",
    "groupTitle": "User"
  }
] });
