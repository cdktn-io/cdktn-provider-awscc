# `ec2ClientVpnEndpoint` Submodule <a name="`ec2ClientVpnEndpoint` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnEndpoint <a name="Ec2ClientVpnEndpoint" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_options: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions],
  connection_log_options: Ec2ClientVpnEndpointConnectionLogOptions,
  server_certificate_arn: str,
  authorization_policy: Ec2ClientVpnEndpointAuthorizationPolicy = None,
  client_cidr_block: str = None,
  client_connect_options: Ec2ClientVpnEndpointClientConnectOptions = None,
  client_login_banner_options: Ec2ClientVpnEndpointClientLoginBannerOptions = None,
  client_route_enforcement_options: Ec2ClientVpnEndpointClientRouteEnforcementOptions = None,
  description: str = None,
  device_posture_options: Ec2ClientVpnEndpointDevicePostureOptions = None,
  disconnect_on_session_timeout: bool | IResolvable = None,
  dns_servers: typing.List[str] = None,
  endpoint_ip_address_type: str = None,
  security_group_ids: typing.List[str] = None,
  self_service_portal: str = None,
  session_timeout_hours: typing.Union[int, float] = None,
  split_tunnel: bool | IResolvable = None,
  tag_specifications: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications] = None,
  traffic_ip_address_type: str = None,
  transit_gateway_configuration: Ec2ClientVpnEndpointTransitGatewayConfiguration = None,
  transport_protocol: str = None,
  vpc_id: str = None,
  vpn_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authenticationOptions">authentication_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]</code> | Information about the authentication method to be used to authenticate clients. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connectionLogOptions">connection_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | Information about the client connection logging options. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.serverCertificateArn">server_certificate_arn</a></code> | <code>str</code> | The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authorizationPolicy">authorization_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | The Cedar authorization policy to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientCidrBlock">client_cidr_block</a></code> | <code>str</code> | The IPv4 address range, in CIDR notation, from which to assign client IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientConnectOptions">client_connect_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | The options for managing connection authorization for new client connections. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientLoginBannerOptions">client_login_banner_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientRouteEnforcementOptions">client_route_enforcement_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | A brief description of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.devicePostureOptions">device_posture_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | The device-posture trust providers to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.disconnectOnSessionTimeout">disconnect_on_session_timeout</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Information about the DNS servers to be used for DNS resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.endpointIpAddressType">endpoint_ip_address_type</a></code> | <code>str</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of one or more security groups to apply to the target network. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.selfServicePortal">self_service_portal</a></code> | <code>str</code> | Specify whether to enable the self-service portal for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.sessionTimeoutHours">session_timeout_hours</a></code> | <code>typing.Union[int, float]</code> | The maximum VPN session duration time in hours. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.splitTunnel">split_tunnel</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]</code> | The tags to apply to the Client VPN endpoint during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.trafficIpAddressType">traffic_ip_address_type</a></code> | <code>str</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transportProtocol">transport_protocol</a></code> | <code>str</code> | The transport protocol to be used by the VPN session. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpnPort">vpn_port</a></code> | <code>typing.Union[int, float]</code> | The port number to assign to the Client VPN endpoint for TCP and UDP traffic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_options`<sup>Required</sup> <a name="authentication_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authenticationOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]

Information about the authentication method to be used to authenticate clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `connection_log_options`<sup>Required</sup> <a name="connection_log_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.connectionLogOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

Information about the client connection logging options.

If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `server_certificate_arn`<sup>Required</sup> <a name="server_certificate_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.serverCertificateArn"></a>

- *Type:* str

The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}

---

##### `authorization_policy`<sup>Optional</sup> <a name="authorization_policy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.authorizationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

The Cedar authorization policy to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy Ec2ClientVpnEndpoint#authorization_policy}

---

##### `client_cidr_block`<sup>Optional</sup> <a name="client_cidr_block" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientCidrBlock"></a>

- *Type:* str

The IPv4 address range, in CIDR notation, from which to assign client IP addresses.

The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}

---

##### `client_connect_options`<sup>Optional</sup> <a name="client_connect_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientConnectOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

The options for managing connection authorization for new client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `client_login_banner_options`<sup>Optional</sup> <a name="client_login_banner_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientLoginBannerOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `client_route_enforcement_options`<sup>Optional</sup> <a name="client_route_enforcement_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.clientRouteEnforcementOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN.

This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.description"></a>

- *Type:* str

A brief description of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `device_posture_options`<sup>Optional</sup> <a name="device_posture_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.devicePostureOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

The device-posture trust providers to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options Ec2ClientVpnEndpoint#device_posture_options}

---

##### `disconnect_on_session_timeout`<sup>Optional</sup> <a name="disconnect_on_session_timeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.disconnectOnSessionTimeout"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached.

If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.dnsServers"></a>

- *Type:* typing.List[str]

Information about the DNS servers to be used for DNS resolution.

A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}

---

##### `endpoint_ip_address_type`<sup>Optional</sup> <a name="endpoint_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.endpointIpAddressType"></a>

- *Type:* str

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of one or more security groups to apply to the target network.

You must also specify the ID of the VPC that contains the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}

---

##### `self_service_portal`<sup>Optional</sup> <a name="self_service_portal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.selfServicePortal"></a>

- *Type:* str

Specify whether to enable the self-service portal for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}

---

##### `session_timeout_hours`<sup>Optional</sup> <a name="session_timeout_hours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.sessionTimeoutHours"></a>

- *Type:* typing.Union[int, float]

The maximum VPN session duration time in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}

---

##### `split_tunnel`<sup>Optional</sup> <a name="split_tunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.splitTunnel"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.tagSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]

The tags to apply to the Client VPN endpoint during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications Ec2ClientVpnEndpoint#tag_specifications}

---

##### `traffic_ip_address_type`<sup>Optional</sup> <a name="traffic_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.trafficIpAddressType"></a>

- *Type:* str

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}

---

##### `transit_gateway_configuration`<sup>Optional</sup> <a name="transit_gateway_configuration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transitGatewayConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}.

---

##### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.transportProtocol"></a>

- *Type:* str

The transport protocol to be used by the VPN session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC to associate with the Client VPN endpoint.

If no security group IDs are specified in the request, the default security group for the VPC is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}

---

##### `vpn_port`<sup>Optional</sup> <a name="vpn_port" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.vpnPort"></a>

- *Type:* typing.Union[int, float]

The port number to assign to the Client VPN endpoint for TCP and UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions">put_authentication_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy">put_authorization_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions">put_client_connect_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions">put_client_login_banner_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions">put_client_route_enforcement_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions">put_connection_log_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions">put_device_posture_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications">put_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration">put_transit_gateway_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy">reset_authorization_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock">reset_client_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions">reset_client_connect_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions">reset_client_login_banner_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions">reset_client_route_enforcement_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions">reset_device_posture_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout">reset_disconnect_on_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType">reset_endpoint_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal">reset_self_service_portal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours">reset_session_timeout_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel">reset_split_tunnel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications">reset_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType">reset_traffic_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration">reset_transit_gateway_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol">reset_transport_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId">reset_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort">reset_vpn_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication_options` <a name="put_authentication_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions"></a>

```python
def put_authentication_options(
  value: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]

---

##### `put_authorization_policy` <a name="put_authorization_policy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy"></a>

```python
def put_authorization_policy(
  description: str = None,
  policy_document: str = None,
  shadow_mode: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy.parameter.description"></a>

- *Type:* str

A brief description of the authorization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

###### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy.parameter.policyDocument"></a>

- *Type:* str

The Cedar policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document Ec2ClientVpnEndpoint#policy_document}

---

###### `shadow_mode`<sup>Optional</sup> <a name="shadow_mode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy.parameter.shadowMode"></a>

- *Type:* str

Whether the authorization policy runs in shadow (observe-only) mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode Ec2ClientVpnEndpoint#shadow_mode}

---

##### `put_client_connect_options` <a name="put_client_connect_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions"></a>

```python
def put_client_connect_options(
  enabled: bool | IResolvable = None,
  lambda_function_arn: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

###### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.lambdaFunctionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

##### `put_client_login_banner_options` <a name="put_client_login_banner_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions"></a>

```python
def put_client_login_banner_options(
  banner_text: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `banner_text`<sup>Optional</sup> <a name="banner_text" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.bannerText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `put_client_route_enforcement_options` <a name="put_client_route_enforcement_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions"></a>

```python
def put_client_route_enforcement_options(
  enforced: bool | IResolvable = None
) -> None
```

###### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions.parameter.enforced"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}.

---

##### `put_connection_log_options` <a name="put_connection_log_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions"></a>

```python
def put_connection_log_options(
  enabled: bool | IResolvable,
  cloudwatch_log_group: str = None,
  cloudwatch_log_stream: str = None,
  include_authorization_policy_context: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

###### `cloudwatch_log_group`<sup>Optional</sup> <a name="cloudwatch_log_group" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.cloudwatchLogGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

###### `cloudwatch_log_stream`<sup>Optional</sup> <a name="cloudwatch_log_stream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.cloudwatchLogStream"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

###### `include_authorization_policy_context`<sup>Optional</sup> <a name="include_authorization_policy_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.includeAuthorizationPolicyContext"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether authorization-policy evaluation context is included in the connection logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context Ec2ClientVpnEndpoint#include_authorization_policy_context}

---

##### `put_device_posture_options` <a name="put_device_posture_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions"></a>

```python
def put_device_posture_options(
  enabled: bool | IResolvable = None,
  trust_providers: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether device posture is enabled for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}

---

###### `trust_providers`<sup>Optional</sup> <a name="trust_providers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions.parameter.trustProviders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]

The device-posture trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers Ec2ClientVpnEndpoint#trust_providers}

---

##### `put_tag_specifications` <a name="put_tag_specifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications"></a>

```python
def put_tag_specifications(
  value: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]

---

##### `put_transit_gateway_configuration` <a name="put_transit_gateway_configuration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration"></a>

```python
def put_transit_gateway_configuration(
  availability_zone_ids: typing.List[str] = None,
  availability_zones: typing.List[str] = None,
  transit_gateway_id: str = None
) -> None
```

###### `availability_zone_ids`<sup>Optional</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration.parameter.availabilityZoneIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}.

---

###### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}.

---

###### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}.

---

##### `reset_authorization_policy` <a name="reset_authorization_policy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy"></a>

```python
def reset_authorization_policy() -> None
```

##### `reset_client_cidr_block` <a name="reset_client_cidr_block" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock"></a>

```python
def reset_client_cidr_block() -> None
```

##### `reset_client_connect_options` <a name="reset_client_connect_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions"></a>

```python
def reset_client_connect_options() -> None
```

##### `reset_client_login_banner_options` <a name="reset_client_login_banner_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions"></a>

```python
def reset_client_login_banner_options() -> None
```

##### `reset_client_route_enforcement_options` <a name="reset_client_route_enforcement_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions"></a>

```python
def reset_client_route_enforcement_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_posture_options` <a name="reset_device_posture_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions"></a>

```python
def reset_device_posture_options() -> None
```

##### `reset_disconnect_on_session_timeout` <a name="reset_disconnect_on_session_timeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout"></a>

```python
def reset_disconnect_on_session_timeout() -> None
```

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_endpoint_ip_address_type` <a name="reset_endpoint_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType"></a>

```python
def reset_endpoint_ip_address_type() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_self_service_portal` <a name="reset_self_service_portal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal"></a>

```python
def reset_self_service_portal() -> None
```

##### `reset_session_timeout_hours` <a name="reset_session_timeout_hours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours"></a>

```python
def reset_session_timeout_hours() -> None
```

##### `reset_split_tunnel` <a name="reset_split_tunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel"></a>

```python
def reset_split_tunnel() -> None
```

##### `reset_tag_specifications` <a name="reset_tag_specifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications"></a>

```python
def reset_tag_specifications() -> None
```

##### `reset_traffic_ip_address_type` <a name="reset_traffic_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType"></a>

```python
def reset_traffic_ip_address_type() -> None
```

##### `reset_transit_gateway_configuration` <a name="reset_transit_gateway_configuration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration"></a>

```python
def reset_transit_gateway_configuration() -> None
```

##### `reset_transport_protocol` <a name="reset_transport_protocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol"></a>

```python
def reset_transport_protocol() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

##### `reset_vpn_port` <a name="reset_vpn_port" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort"></a>

```python
def reset_vpn_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2ClientVpnEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2ClientVpnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions">authentication_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy">authorization_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions">client_connect_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions">client_login_banner_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions">client_route_enforcement_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions">connection_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions">device_posture_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput">authentication_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput">authorization_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput">client_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput">client_connect_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput">client_login_banner_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput">client_route_enforcement_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput">connection_log_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput">device_posture_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput">disconnect_on_session_timeout_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput">endpoint_ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput">self_service_portal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput">server_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput">session_timeout_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput">split_tunnel_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput">tag_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput">traffic_ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput">transit_gateway_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput">transport_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput">vpn_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock">client_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout">disconnect_on_session_timeout</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType">endpoint_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal">self_service_portal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn">server_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours">session_timeout_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel">split_tunnel</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType">traffic_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort">vpn_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_options`<sup>Required</sup> <a name="authentication_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions"></a>

```python
authentication_options: Ec2ClientVpnEndpointAuthenticationOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `authorization_policy`<sup>Required</sup> <a name="authorization_policy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy"></a>

```python
authorization_policy: Ec2ClientVpnEndpointAuthorizationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a>

---

##### `client_connect_options`<sup>Required</sup> <a name="client_connect_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions"></a>

```python
client_connect_options: Ec2ClientVpnEndpointClientConnectOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `client_login_banner_options`<sup>Required</sup> <a name="client_login_banner_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```python
client_login_banner_options: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `client_route_enforcement_options`<sup>Required</sup> <a name="client_route_enforcement_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions"></a>

```python
client_route_enforcement_options: Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a>

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

---

##### `connection_log_options`<sup>Required</sup> <a name="connection_log_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions"></a>

```python
connection_log_options: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `device_posture_options`<sup>Required</sup> <a name="device_posture_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions"></a>

```python
device_posture_options: Ec2ClientVpnEndpointDevicePostureOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications"></a>

```python
tag_specifications: Ec2ClientVpnEndpointTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a>

---

##### `transit_gateway_configuration`<sup>Required</sup> <a name="transit_gateway_configuration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration"></a>

```python
transit_gateway_configuration: Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a>

---

##### `authentication_options_input`<sup>Optional</sup> <a name="authentication_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput"></a>

```python
authentication_options_input: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]

---

##### `authorization_policy_input`<sup>Optional</sup> <a name="authorization_policy_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput"></a>

```python
authorization_policy_input: IResolvable | Ec2ClientVpnEndpointAuthorizationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---

##### `client_cidr_block_input`<sup>Optional</sup> <a name="client_cidr_block_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput"></a>

```python
client_cidr_block_input: str
```

- *Type:* str

---

##### `client_connect_options_input`<sup>Optional</sup> <a name="client_connect_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput"></a>

```python
client_connect_options_input: IResolvable | Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `client_login_banner_options_input`<sup>Optional</sup> <a name="client_login_banner_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput"></a>

```python
client_login_banner_options_input: IResolvable | Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `client_route_enforcement_options_input`<sup>Optional</sup> <a name="client_route_enforcement_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput"></a>

```python
client_route_enforcement_options_input: IResolvable | Ec2ClientVpnEndpointClientRouteEnforcementOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---

##### `connection_log_options_input`<sup>Optional</sup> <a name="connection_log_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput"></a>

```python
connection_log_options_input: IResolvable | Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_posture_options_input`<sup>Optional</sup> <a name="device_posture_options_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput"></a>

```python
device_posture_options_input: IResolvable | Ec2ClientVpnEndpointDevicePostureOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---

##### `disconnect_on_session_timeout_input`<sup>Optional</sup> <a name="disconnect_on_session_timeout_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput"></a>

```python
disconnect_on_session_timeout_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `endpoint_ip_address_type_input`<sup>Optional</sup> <a name="endpoint_ip_address_type_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput"></a>

```python
endpoint_ip_address_type_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_service_portal_input`<sup>Optional</sup> <a name="self_service_portal_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput"></a>

```python
self_service_portal_input: str
```

- *Type:* str

---

##### `server_certificate_arn_input`<sup>Optional</sup> <a name="server_certificate_arn_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput"></a>

```python
server_certificate_arn_input: str
```

- *Type:* str

---

##### `session_timeout_hours_input`<sup>Optional</sup> <a name="session_timeout_hours_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput"></a>

```python
session_timeout_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `split_tunnel_input`<sup>Optional</sup> <a name="split_tunnel_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput"></a>

```python
split_tunnel_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tag_specifications_input`<sup>Optional</sup> <a name="tag_specifications_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput"></a>

```python
tag_specifications_input: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]

---

##### `traffic_ip_address_type_input`<sup>Optional</sup> <a name="traffic_ip_address_type_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput"></a>

```python
traffic_ip_address_type_input: str
```

- *Type:* str

---

##### `transit_gateway_configuration_input`<sup>Optional</sup> <a name="transit_gateway_configuration_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput"></a>

```python
transit_gateway_configuration_input: IResolvable | Ec2ClientVpnEndpointTransitGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---

##### `transport_protocol_input`<sup>Optional</sup> <a name="transport_protocol_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput"></a>

```python
transport_protocol_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpn_port_input`<sup>Optional</sup> <a name="vpn_port_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput"></a>

```python
vpn_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_cidr_block`<sup>Required</sup> <a name="client_cidr_block" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock"></a>

```python
client_cidr_block: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disconnect_on_session_timeout`<sup>Required</sup> <a name="disconnect_on_session_timeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout"></a>

```python
disconnect_on_session_timeout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `endpoint_ip_address_type`<sup>Required</sup> <a name="endpoint_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType"></a>

```python
endpoint_ip_address_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_service_portal`<sup>Required</sup> <a name="self_service_portal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal"></a>

```python
self_service_portal: str
```

- *Type:* str

---

##### `server_certificate_arn`<sup>Required</sup> <a name="server_certificate_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn"></a>

```python
server_certificate_arn: str
```

- *Type:* str

---

##### `session_timeout_hours`<sup>Required</sup> <a name="session_timeout_hours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```python
session_timeout_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `split_tunnel`<sup>Required</sup> <a name="split_tunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel"></a>

```python
split_tunnel: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traffic_ip_address_type`<sup>Required</sup> <a name="traffic_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType"></a>

```python
traffic_ip_address_type: str
```

- *Type:* str

---

##### `transport_protocol`<sup>Required</sup> <a name="transport_protocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpn_port`<sup>Required</sup> <a name="vpn_port" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort"></a>

```python
vpn_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnEndpointAuthenticationOptions <a name="Ec2ClientVpnEndpointAuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions(
  type: str,
  active_directory: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory = None,
  federated_authentication: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication = None,
  mutual_authentication: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication">federated_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory"></a>

```python
active_directory: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}.

---

##### `federated_authentication`<sup>Optional</sup> <a name="federated_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication"></a>

```python
federated_authentication: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}.

---

##### `mutual_authentication`<sup>Optional</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication"></a>

```python
mutual_authentication: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory(
  directory_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}. |

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication(
  saml_provider_arn: str = None,
  self_service_saml_provider_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn">saml_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn">self_service_saml_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}. |

---

##### `saml_provider_arn`<sup>Optional</sup> <a name="saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn"></a>

```python
saml_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

##### `self_service_saml_provider_arn`<sup>Optional</sup> <a name="self_service_saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn"></a>

```python
self_service_saml_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication(
  client_root_certificate_chain_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn">client_root_certificate_chain_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}. |

---

##### `client_root_certificate_chain_arn`<sup>Optional</sup> <a name="client_root_certificate_chain_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn"></a>

```python
client_root_certificate_chain_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}.

---

### Ec2ClientVpnEndpointAuthorizationPolicy <a name="Ec2ClientVpnEndpointAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy(
  description: str = None,
  policy_document: str = None,
  shadow_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description">description</a></code> | <code>str</code> | A brief description of the authorization policy. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | The Cedar policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode">shadow_mode</a></code> | <code>str</code> | Whether the authorization policy runs in shadow (observe-only) mode. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

A brief description of the authorization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

The Cedar policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document Ec2ClientVpnEndpoint#policy_document}

---

##### `shadow_mode`<sup>Optional</sup> <a name="shadow_mode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode"></a>

```python
shadow_mode: str
```

- *Type:* str

Whether the authorization policy runs in shadow (observe-only) mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode Ec2ClientVpnEndpoint#shadow_mode}

---

### Ec2ClientVpnEndpointClientConnectOptions <a name="Ec2ClientVpnEndpointClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions(
  enabled: bool | IResolvable = None,
  lambda_function_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

### Ec2ClientVpnEndpointClientLoginBannerOptions <a name="Ec2ClientVpnEndpointClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions(
  banner_text: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText">banner_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |

---

##### `banner_text`<sup>Optional</sup> <a name="banner_text" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText"></a>

```python
banner_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

### Ec2ClientVpnEndpointClientRouteEnforcementOptions <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions(
  enforced: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced">enforced</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}. |

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced"></a>

```python
enforced: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}.

---

### Ec2ClientVpnEndpointConfig <a name="Ec2ClientVpnEndpointConfig" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_options: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions],
  connection_log_options: Ec2ClientVpnEndpointConnectionLogOptions,
  server_certificate_arn: str,
  authorization_policy: Ec2ClientVpnEndpointAuthorizationPolicy = None,
  client_cidr_block: str = None,
  client_connect_options: Ec2ClientVpnEndpointClientConnectOptions = None,
  client_login_banner_options: Ec2ClientVpnEndpointClientLoginBannerOptions = None,
  client_route_enforcement_options: Ec2ClientVpnEndpointClientRouteEnforcementOptions = None,
  description: str = None,
  device_posture_options: Ec2ClientVpnEndpointDevicePostureOptions = None,
  disconnect_on_session_timeout: bool | IResolvable = None,
  dns_servers: typing.List[str] = None,
  endpoint_ip_address_type: str = None,
  security_group_ids: typing.List[str] = None,
  self_service_portal: str = None,
  session_timeout_hours: typing.Union[int, float] = None,
  split_tunnel: bool | IResolvable = None,
  tag_specifications: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications] = None,
  traffic_ip_address_type: str = None,
  transit_gateway_configuration: Ec2ClientVpnEndpointTransitGatewayConfiguration = None,
  transport_protocol: str = None,
  vpc_id: str = None,
  vpn_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions">authentication_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]</code> | Information about the authentication method to be used to authenticate clients. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions">connection_log_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | Information about the client connection logging options. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn">server_certificate_arn</a></code> | <code>str</code> | The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy">authorization_policy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | The Cedar authorization policy to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock">client_cidr_block</a></code> | <code>str</code> | The IPv4 address range, in CIDR notation, from which to assign client IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions">client_connect_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | The options for managing connection authorization for new client connections. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions">client_login_banner_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions">client_route_enforcement_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description">description</a></code> | <code>str</code> | A brief description of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions">device_posture_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | The device-posture trust providers to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout">disconnect_on_session_timeout</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Information about the DNS servers to be used for DNS resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType">endpoint_ip_address_type</a></code> | <code>str</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of one or more security groups to apply to the target network. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal">self_service_portal</a></code> | <code>str</code> | Specify whether to enable the self-service portal for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours">session_timeout_hours</a></code> | <code>typing.Union[int, float]</code> | The maximum VPN session duration time in hours. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel">split_tunnel</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]</code> | The tags to apply to the Client VPN endpoint during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType">traffic_ip_address_type</a></code> | <code>str</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol">transport_protocol</a></code> | <code>str</code> | The transport protocol to be used by the VPN session. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort">vpn_port</a></code> | <code>typing.Union[int, float]</code> | The port number to assign to the Client VPN endpoint for TCP and UDP traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_options`<sup>Required</sup> <a name="authentication_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions"></a>

```python
authentication_options: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]

Information about the authentication method to be used to authenticate clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `connection_log_options`<sup>Required</sup> <a name="connection_log_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions"></a>

```python
connection_log_options: Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

Information about the client connection logging options.

If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `server_certificate_arn`<sup>Required</sup> <a name="server_certificate_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn"></a>

```python
server_certificate_arn: str
```

- *Type:* str

The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}

---

##### `authorization_policy`<sup>Optional</sup> <a name="authorization_policy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy"></a>

```python
authorization_policy: Ec2ClientVpnEndpointAuthorizationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

The Cedar authorization policy to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy Ec2ClientVpnEndpoint#authorization_policy}

---

##### `client_cidr_block`<sup>Optional</sup> <a name="client_cidr_block" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock"></a>

```python
client_cidr_block: str
```

- *Type:* str

The IPv4 address range, in CIDR notation, from which to assign client IP addresses.

The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}

---

##### `client_connect_options`<sup>Optional</sup> <a name="client_connect_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions"></a>

```python
client_connect_options: Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

The options for managing connection authorization for new client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `client_login_banner_options`<sup>Optional</sup> <a name="client_login_banner_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions"></a>

```python
client_login_banner_options: Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `client_route_enforcement_options`<sup>Optional</sup> <a name="client_route_enforcement_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions"></a>

```python
client_route_enforcement_options: Ec2ClientVpnEndpointClientRouteEnforcementOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN.

This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A brief description of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `device_posture_options`<sup>Optional</sup> <a name="device_posture_options" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions"></a>

```python
device_posture_options: Ec2ClientVpnEndpointDevicePostureOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

The device-posture trust providers to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options Ec2ClientVpnEndpoint#device_posture_options}

---

##### `disconnect_on_session_timeout`<sup>Optional</sup> <a name="disconnect_on_session_timeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout"></a>

```python
disconnect_on_session_timeout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached.

If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Information about the DNS servers to be used for DNS resolution.

A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}

---

##### `endpoint_ip_address_type`<sup>Optional</sup> <a name="endpoint_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType"></a>

```python
endpoint_ip_address_type: str
```

- *Type:* str

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of one or more security groups to apply to the target network.

You must also specify the ID of the VPC that contains the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}

---

##### `self_service_portal`<sup>Optional</sup> <a name="self_service_portal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal"></a>

```python
self_service_portal: str
```

- *Type:* str

Specify whether to enable the self-service portal for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}

---

##### `session_timeout_hours`<sup>Optional</sup> <a name="session_timeout_hours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours"></a>

```python
session_timeout_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum VPN session duration time in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}

---

##### `split_tunnel`<sup>Optional</sup> <a name="split_tunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel"></a>

```python
split_tunnel: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications"></a>

```python
tag_specifications: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]

The tags to apply to the Client VPN endpoint during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications Ec2ClientVpnEndpoint#tag_specifications}

---

##### `traffic_ip_address_type`<sup>Optional</sup> <a name="traffic_ip_address_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType"></a>

```python
traffic_ip_address_type: str
```

- *Type:* str

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}

---

##### `transit_gateway_configuration`<sup>Optional</sup> <a name="transit_gateway_configuration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration"></a>

```python
transit_gateway_configuration: Ec2ClientVpnEndpointTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}.

---

##### `transport_protocol`<sup>Optional</sup> <a name="transport_protocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol"></a>

```python
transport_protocol: str
```

- *Type:* str

The transport protocol to be used by the VPN session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC to associate with the Client VPN endpoint.

If no security group IDs are specified in the request, the default security group for the VPC is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}

---

##### `vpn_port`<sup>Optional</sup> <a name="vpn_port" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort"></a>

```python
vpn_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number to assign to the Client VPN endpoint for TCP and UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}

---

### Ec2ClientVpnEndpointConnectionLogOptions <a name="Ec2ClientVpnEndpointConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions(
  enabled: bool | IResolvable,
  cloudwatch_log_group: str = None,
  cloudwatch_log_stream: str = None,
  include_authorization_policy_context: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup">cloudwatch_log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream">cloudwatch_log_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext">include_authorization_policy_context</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether authorization-policy evaluation context is included in the connection logs. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `cloudwatch_log_group`<sup>Optional</sup> <a name="cloudwatch_log_group" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup"></a>

```python
cloudwatch_log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

##### `cloudwatch_log_stream`<sup>Optional</sup> <a name="cloudwatch_log_stream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream"></a>

```python
cloudwatch_log_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

##### `include_authorization_policy_context`<sup>Optional</sup> <a name="include_authorization_policy_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext"></a>

```python
include_authorization_policy_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether authorization-policy evaluation context is included in the connection logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context Ec2ClientVpnEndpoint#include_authorization_policy_context}

---

### Ec2ClientVpnEndpointDevicePostureOptions <a name="Ec2ClientVpnEndpointDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions(
  enabled: bool | IResolvable = None,
  trust_providers: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether device posture is enabled for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders">trust_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]</code> | The device-posture trust providers. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether device posture is enabled for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}

---

##### `trust_providers`<sup>Optional</sup> <a name="trust_providers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders"></a>

```python
trust_providers: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]

The device-posture trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers Ec2ClientVpnEndpoint#trust_providers}

---

### Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders(
  public_signing_key_url: str = None,
  tenant_id: str = None,
  trust_provider_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | The URL of the public signing key. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId">tenant_id</a></code> | <code>str</code> | The tenant identifier registered with the trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | The device-posture trust provider type. |

---

##### `public_signing_key_url`<sup>Optional</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

The URL of the public signing key.

Conditionally required by the provider type and enforced server-side (crowdstrike/jumpcloud require it, jamf rejects it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#public_signing_key_url Ec2ClientVpnEndpoint#public_signing_key_url}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The tenant identifier registered with the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tenant_id Ec2ClientVpnEndpoint#tenant_id}

---

##### `trust_provider_type`<sup>Optional</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

The device-posture trust provider type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_provider_type Ec2ClientVpnEndpoint#trust_provider_type}

---

### Ec2ClientVpnEndpointTagSpecifications <a name="Ec2ClientVpnEndpointTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications(
  resource_type: str = None,
  tags: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecificationsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

### Ec2ClientVpnEndpointTagSpecificationsTags <a name="Ec2ClientVpnEndpointTagSpecificationsTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}.

---

### Ec2ClientVpnEndpointTransitGatewayConfiguration <a name="Ec2ClientVpnEndpointTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration(
  availability_zone_ids: typing.List[str] = None,
  availability_zones: typing.List[str] = None,
  transit_gateway_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds">availability_zone_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}. |

---

##### `availability_zone_ids`<sup>Optional</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds"></a>

```python
availability_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}.

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId">reset_directory_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn">reset_saml_provider_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn">reset_self_service_saml_provider_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_saml_provider_arn` <a name="reset_saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn"></a>

```python
def reset_saml_provider_arn() -> None
```

##### `reset_self_service_saml_provider_arn` <a name="reset_self_service_saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn"></a>

```python
def reset_self_service_saml_provider_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput">saml_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput">self_service_saml_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn">saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn">self_service_saml_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `saml_provider_arn_input`<sup>Optional</sup> <a name="saml_provider_arn_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput"></a>

```python
saml_provider_arn_input: str
```

- *Type:* str

---

##### `self_service_saml_provider_arn_input`<sup>Optional</sup> <a name="self_service_saml_provider_arn_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput"></a>

```python
self_service_saml_provider_arn_input: str
```

- *Type:* str

---

##### `saml_provider_arn`<sup>Required</sup> <a name="saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn"></a>

```python
saml_provider_arn: str
```

- *Type:* str

---

##### `self_service_saml_provider_arn`<sup>Required</sup> <a name="self_service_saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn"></a>

```python
self_service_saml_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsList <a name="Ec2ClientVpnEndpointAuthenticationOptionsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ClientVpnEndpointAuthenticationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>]

---


### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn">reset_client_root_certificate_chain_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_root_certificate_chain_arn` <a name="reset_client_root_certificate_chain_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn"></a>

```python
def reset_client_root_certificate_chain_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput">client_root_certificate_chain_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn">client_root_certificate_chain_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_root_certificate_chain_arn_input`<sup>Optional</sup> <a name="client_root_certificate_chain_arn_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput"></a>

```python
client_root_certificate_chain_arn_input: str
```

- *Type:* str

---

##### `client_root_certificate_chain_arn`<sup>Required</sup> <a name="client_root_certificate_chain_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn"></a>

```python
client_root_certificate_chain_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication">put_federated_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication">put_mutual_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication">reset_federated_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication">reset_mutual_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  directory_id: str = None
) -> None
```

###### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}.

---

##### `put_federated_authentication` <a name="put_federated_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication"></a>

```python
def put_federated_authentication(
  saml_provider_arn: str = None,
  self_service_saml_provider_arn: str = None
) -> None
```

###### `saml_provider_arn`<sup>Optional</sup> <a name="saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication.parameter.samlProviderArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

###### `self_service_saml_provider_arn`<sup>Optional</sup> <a name="self_service_saml_provider_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication.parameter.selfServiceSamlProviderArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

##### `put_mutual_authentication` <a name="put_mutual_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication"></a>

```python
def put_mutual_authentication(
  client_root_certificate_chain_arn: str = None
) -> None
```

###### `client_root_certificate_chain_arn`<sup>Optional</sup> <a name="client_root_certificate_chain_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication.parameter.clientRootCertificateChainArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_federated_authentication` <a name="reset_federated_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication"></a>

```python
def reset_federated_authentication() -> None
```

##### `reset_mutual_authentication` <a name="reset_mutual_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication"></a>

```python
def reset_mutual_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication">federated_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication">mutual_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput">federated_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput">mutual_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory"></a>

```python
active_directory: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a>

---

##### `federated_authentication`<sup>Required</sup> <a name="federated_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication"></a>

```python
federated_authentication: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a>

---

##### `mutual_authentication`<sup>Required</sup> <a name="mutual_authentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication"></a>

```python
mutual_authentication: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---

##### `federated_authentication_input`<sup>Optional</sup> <a name="federated_authentication_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput"></a>

```python
federated_authentication_input: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---

##### `mutual_authentication_input`<sup>Optional</sup> <a name="mutual_authentication_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput"></a>

```python
mutual_authentication_input: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>

---


### Ec2ClientVpnEndpointAuthorizationPolicyOutputReference <a name="Ec2ClientVpnEndpointAuthorizationPolicyOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode">reset_shadow_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_shadow_mode` <a name="reset_shadow_mode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode"></a>

```python
def reset_shadow_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput">shadow_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode">shadow_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `shadow_mode_input`<sup>Optional</sup> <a name="shadow_mode_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput"></a>

```python
shadow_mode_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `shadow_mode`<sup>Required</sup> <a name="shadow_mode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode"></a>

```python
shadow_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointAuthorizationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---


### Ec2ClientVpnEndpointClientConnectOptionsOutputReference <a name="Ec2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn">reset_lambda_function_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_lambda_function_arn` <a name="reset_lambda_function_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn"></a>

```python
def reset_lambda_function_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput">lambda_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `lambda_function_arn_input`<sup>Optional</sup> <a name="lambda_function_arn_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput"></a>

```python
lambda_function_arn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---


### Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText">reset_banner_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_banner_text` <a name="reset_banner_text" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText"></a>

```python
def reset_banner_text() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput">banner_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">banner_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banner_text_input`<sup>Optional</sup> <a name="banner_text_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput"></a>

```python
banner_text_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `banner_text`<sup>Required</sup> <a name="banner_text" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```python
banner_text: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---


### Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced">reset_enforced</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforced` <a name="reset_enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced"></a>

```python
def reset_enforced() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput">enforced_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced">enforced</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput"></a>

```python
enforced_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced"></a>

```python
enforced: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointClientRouteEnforcementOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---


### Ec2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="Ec2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup">reset_cloudwatch_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream">reset_cloudwatch_log_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext">reset_include_authorization_policy_context</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_log_group` <a name="reset_cloudwatch_log_group" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup"></a>

```python
def reset_cloudwatch_log_group() -> None
```

##### `reset_cloudwatch_log_stream` <a name="reset_cloudwatch_log_stream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream"></a>

```python
def reset_cloudwatch_log_stream() -> None
```

##### `reset_include_authorization_policy_context` <a name="reset_include_authorization_policy_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext"></a>

```python
def reset_include_authorization_policy_context() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput">cloudwatch_log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput">cloudwatch_log_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput">include_authorization_policy_context_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatch_log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatch_log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext">include_authorization_policy_context</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_input`<sup>Optional</sup> <a name="cloudwatch_log_group_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput"></a>

```python
cloudwatch_log_group_input: str
```

- *Type:* str

---

##### `cloudwatch_log_stream_input`<sup>Optional</sup> <a name="cloudwatch_log_stream_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput"></a>

```python
cloudwatch_log_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_authorization_policy_context_input`<sup>Optional</sup> <a name="include_authorization_policy_context_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput"></a>

```python
include_authorization_policy_context_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cloudwatch_log_group`<sup>Required</sup> <a name="cloudwatch_log_group" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```python
cloudwatch_log_group: str
```

- *Type:* str

---

##### `cloudwatch_log_stream`<sup>Required</sup> <a name="cloudwatch_log_stream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```python
cloudwatch_log_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_authorization_policy_context`<sup>Required</sup> <a name="include_authorization_policy_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext"></a>

```python
include_authorization_policy_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders">put_trust_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders">reset_trust_providers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trust_providers` <a name="put_trust_providers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders"></a>

```python
def put_trust_providers(
  value: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_trust_providers` <a name="reset_trust_providers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders"></a>

```python
def reset_trust_providers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders">trust_providers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput">trust_providers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trust_providers`<sup>Required</sup> <a name="trust_providers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders"></a>

```python
trust_providers: Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `trust_providers_input`<sup>Optional</sup> <a name="trust_providers_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput"></a>

```python
trust_providers_input: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointDevicePostureOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>]

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl">reset_public_signing_key_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType">reset_trust_provider_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_public_signing_key_url` <a name="reset_public_signing_key_url" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl"></a>

```python
def reset_public_signing_key_url() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_trust_provider_type` <a name="reset_trust_provider_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType"></a>

```python
def reset_trust_provider_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput">public_signing_key_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput">trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_signing_key_url_input`<sup>Optional</sup> <a name="public_signing_key_url_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput"></a>

```python
public_signing_key_url_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `trust_provider_type_input`<sup>Optional</sup> <a name="trust_provider_type_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```python
trust_provider_type_input: str
```

- *Type:* str

---

##### `public_signing_key_url`<sup>Required</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>

---


### Ec2ClientVpnEndpointTagSpecificationsList <a name="Ec2ClientVpnEndpointTagSpecificationsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ClientVpnEndpointTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>]

---


### Ec2ClientVpnEndpointTagSpecificationsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecificationsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]

---

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags"></a>

```python
tags: Ec2ClientVpnEndpointTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointTagSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>

---


### Ec2ClientVpnEndpointTagSpecificationsTagsList <a name="Ec2ClientVpnEndpointTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ClientVpnEndpointTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>]

---


### Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>

---


### Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference <a name="Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_client_vpn_endpoint

ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds">reset_availability_zone_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_ids` <a name="reset_availability_zone_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds"></a>

```python
def reset_availability_zone_ids() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput">availability_zone_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds">availability_zone_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_ids_input`<sup>Optional</sup> <a name="availability_zone_ids_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput"></a>

```python
availability_zone_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `availability_zone_ids`<sup>Required</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds"></a>

```python
availability_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ClientVpnEndpointTransitGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---



