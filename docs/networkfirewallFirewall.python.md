# `networkfirewallFirewall` Submodule <a name="`networkfirewallFirewall` Submodule" id="@cdktn/provider-awscc.networkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewall <a name="NetworkfirewallFirewall" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall awscc_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewall(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_name: str,
  firewall_policy_arn: str,
  availability_zone_change_protection: bool | IResolvable = None,
  availability_zone_mappings: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings] = None,
  delete_protection: bool | IResolvable = None,
  description: str = None,
  enabled_analysis_types: typing.List[str] = None,
  firewall_policy_change_protection: bool | IResolvable = None,
  nat_gateway_mappings: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings] = None,
  no_source_preservation: bool | IResolvable = None,
  proxy_settings: NetworkfirewallFirewallProxySettings = None,
  subnet_change_protection: bool | IResolvable = None,
  subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings] = None,
  tags: IResolvable | typing.List[NetworkfirewallFirewallTags] = None,
  transit_gateway_id: str = None,
  vpc_endpoint: NetworkfirewallFirewallVpcEndpoint = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallName">firewall_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallPolicyArn">firewall_policy_arn</a></code> | <code>str</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.availabilityZoneChangeProtection">availability_zone_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.availabilityZoneMappings">availability_zone_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.deleteProtection">delete_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.enabledAnalysisTypes">enabled_analysis_types</a></code> | <code>typing.List[str]</code> | The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallPolicyChangeProtection">firewall_policy_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.natGatewayMappings">nat_gateway_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]</code> | The NAT gateways that the firewall proxies egress traffic through when NoSourcePreservation is true. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.noSourcePreservation">no_source_preservation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the firewall operates in proxy mode, where the source IP address of traffic is not preserved. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.proxySettings">proxy_settings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a></code> | The proxy listener configuration for a proxy-mode (no source preservation) firewall. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.subnetChangeProtection">subnet_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.subnetMappings">subnet_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a></code> | The VPC and subnets for a proxy-mode firewall's endpoint. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_name`<sup>Required</sup> <a name="firewall_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}.

---

##### `firewall_policy_arn`<sup>Required</sup> <a name="firewall_policy_arn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallPolicyArn"></a>

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}

---

##### `availability_zone_change_protection`<sup>Optional</sup> <a name="availability_zone_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.availabilityZoneChangeProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}.

---

##### `availability_zone_mappings`<sup>Optional</sup> <a name="availability_zone_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.availabilityZoneMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}.

---

##### `delete_protection`<sup>Optional</sup> <a name="delete_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.deleteProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}.

---

##### `enabled_analysis_types`<sup>Optional</sup> <a name="enabled_analysis_types" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.enabledAnalysisTypes"></a>

- *Type:* typing.List[str]

The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#enabled_analysis_types NetworkfirewallFirewall#enabled_analysis_types}

---

##### `firewall_policy_change_protection`<sup>Optional</sup> <a name="firewall_policy_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.firewallPolicyChangeProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.

---

##### `nat_gateway_mappings`<sup>Optional</sup> <a name="nat_gateway_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.natGatewayMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]

The NAT gateways that the firewall proxies egress traffic through when NoSourcePreservation is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#nat_gateway_mappings NetworkfirewallFirewall#nat_gateway_mappings}

---

##### `no_source_preservation`<sup>Optional</sup> <a name="no_source_preservation" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.noSourcePreservation"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the firewall operates in proxy mode, where the source IP address of traffic is not preserved.

When true, specify NatGatewayMappings and VpcEndpoint instead of the top-level VpcId and SubnetMappings. You can't change this setting after you create the firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#no_source_preservation NetworkfirewallFirewall#no_source_preservation}

---

##### `proxy_settings`<sup>Optional</sup> <a name="proxy_settings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.proxySettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a>

The proxy listener configuration for a proxy-mode (no source preservation) firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#proxy_settings NetworkfirewallFirewall#proxy_settings}

---

##### `subnet_change_protection`<sup>Optional</sup> <a name="subnet_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.subnetChangeProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.

---

##### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.subnetMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}.

---

##### `vpc_endpoint`<sup>Optional</sup> <a name="vpc_endpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.vpcEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a>

The VPC and subnets for a proxy-mode firewall's endpoint.

Provide this instead of the top-level VpcId and SubnetMappings when NoSourcePreservation is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_endpoint NetworkfirewallFirewall#vpc_endpoint}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings">put_availability_zone_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putNatGatewayMappings">put_nat_gateway_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putProxySettings">put_proxy_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings">put_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putVpcEndpoint">put_vpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneChangeProtection">reset_availability_zone_change_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneMappings">reset_availability_zone_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection">reset_delete_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetEnabledAnalysisTypes">reset_enabled_analysis_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection">reset_firewall_policy_change_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetNatGatewayMappings">reset_nat_gateway_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetNoSourcePreservation">reset_no_source_preservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetProxySettings">reset_proxy_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection">reset_subnet_change_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetMappings">reset_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcEndpoint">reset_vpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_availability_zone_mappings` <a name="put_availability_zone_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings"></a>

```python
def put_availability_zone_mappings(
  value: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]

---

##### `put_nat_gateway_mappings` <a name="put_nat_gateway_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putNatGatewayMappings"></a>

```python
def put_nat_gateway_mappings(
  value: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putNatGatewayMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]

---

##### `put_proxy_settings` <a name="put_proxy_settings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putProxySettings"></a>

```python
def put_proxy_settings(
  listener_properties: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties] = None
) -> None
```

###### `listener_properties`<sup>Optional</sup> <a name="listener_properties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putProxySettings.parameter.listenerProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#listener_properties NetworkfirewallFirewall#listener_properties}.

---

##### `put_subnet_mappings` <a name="put_subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings"></a>

```python
def put_subnet_mappings(
  value: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkfirewallFirewallTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]

---

##### `put_vpc_endpoint` <a name="put_vpc_endpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putVpcEndpoint"></a>

```python
def put_vpc_endpoint(
  subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings] = None,
  vpc_id: str = None
) -> None
```

###### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putVpcEndpoint.parameter.subnetMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putVpcEndpoint.parameter.vpcId"></a>

- *Type:* str

The unique identifier of the VPC for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}

---

##### `reset_availability_zone_change_protection` <a name="reset_availability_zone_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneChangeProtection"></a>

```python
def reset_availability_zone_change_protection() -> None
```

##### `reset_availability_zone_mappings` <a name="reset_availability_zone_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneMappings"></a>

```python
def reset_availability_zone_mappings() -> None
```

##### `reset_delete_protection` <a name="reset_delete_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection"></a>

```python
def reset_delete_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled_analysis_types` <a name="reset_enabled_analysis_types" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetEnabledAnalysisTypes"></a>

```python
def reset_enabled_analysis_types() -> None
```

##### `reset_firewall_policy_change_protection` <a name="reset_firewall_policy_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection"></a>

```python
def reset_firewall_policy_change_protection() -> None
```

##### `reset_nat_gateway_mappings` <a name="reset_nat_gateway_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetNatGatewayMappings"></a>

```python
def reset_nat_gateway_mappings() -> None
```

##### `reset_no_source_preservation` <a name="reset_no_source_preservation" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetNoSourcePreservation"></a>

```python
def reset_no_source_preservation() -> None
```

##### `reset_proxy_settings` <a name="reset_proxy_settings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetProxySettings"></a>

```python
def reset_proxy_settings() -> None
```

##### `reset_subnet_change_protection` <a name="reset_subnet_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection"></a>

```python
def reset_subnet_change_protection() -> None
```

##### `reset_subnet_mappings` <a name="reset_subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetMappings"></a>

```python
def reset_subnet_mappings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_endpoint` <a name="reset_vpc_endpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcEndpoint"></a>

```python
def reset_vpc_endpoint() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewall.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkfirewallFirewall resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkfirewallFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkfirewallFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappings">availability_zone_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList">NetworkfirewallFirewallAvailabilityZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.endpointIds">endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallArn">firewall_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallId">firewall_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.natGatewayMappings">nat_gateway_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList">NetworkfirewallFirewallNatGatewayMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.numberOfAssociations">number_of_associations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.proxySettings">proxy_settings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference">NetworkfirewallFirewallProxySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappings">subnet_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList">NetworkfirewallFirewallSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList">NetworkfirewallFirewallTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference">NetworkfirewallFirewallVpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtectionInput">availability_zone_change_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappingsInput">availability_zone_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput">delete_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypesInput">enabled_analysis_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallNameInput">firewall_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput">firewall_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput">firewall_policy_change_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.natGatewayMappingsInput">nat_gateway_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.noSourcePreservationInput">no_source_preservation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.proxySettingsInput">proxy_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput">subnet_change_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingsInput">subnet_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcEndpointInput">vpc_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtection">availability_zone_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection">delete_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypes">enabled_analysis_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallName">firewall_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn">firewall_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewall_policy_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.noSourcePreservation">no_source_preservation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection">subnet_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone_mappings`<sup>Required</sup> <a name="availability_zone_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappings"></a>

```python
availability_zone_mappings: NetworkfirewallFirewallAvailabilityZoneMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList">NetworkfirewallFirewallAvailabilityZoneMappingsList</a>

---

##### `endpoint_ids`<sup>Required</sup> <a name="endpoint_ids" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.endpointIds"></a>

```python
endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallArn"></a>

```python
firewall_arn: str
```

- *Type:* str

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nat_gateway_mappings`<sup>Required</sup> <a name="nat_gateway_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.natGatewayMappings"></a>

```python
nat_gateway_mappings: NetworkfirewallFirewallNatGatewayMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList">NetworkfirewallFirewallNatGatewayMappingsList</a>

---

##### `number_of_associations`<sup>Required</sup> <a name="number_of_associations" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.numberOfAssociations"></a>

```python
number_of_associations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_settings`<sup>Required</sup> <a name="proxy_settings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.proxySettings"></a>

```python
proxy_settings: NetworkfirewallFirewallProxySettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference">NetworkfirewallFirewallProxySettingsOutputReference</a>

---

##### `subnet_mappings`<sup>Required</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappings"></a>

```python
subnet_mappings: NetworkfirewallFirewallSubnetMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList">NetworkfirewallFirewallSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tags"></a>

```python
tags: NetworkfirewallFirewallTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList">NetworkfirewallFirewallTagsList</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `vpc_endpoint`<sup>Required</sup> <a name="vpc_endpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcEndpoint"></a>

```python
vpc_endpoint: NetworkfirewallFirewallVpcEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference">NetworkfirewallFirewallVpcEndpointOutputReference</a>

---

##### `availability_zone_change_protection_input`<sup>Optional</sup> <a name="availability_zone_change_protection_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtectionInput"></a>

```python
availability_zone_change_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_mappings_input`<sup>Optional</sup> <a name="availability_zone_mappings_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappingsInput"></a>

```python
availability_zone_mappings_input: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]

---

##### `delete_protection_input`<sup>Optional</sup> <a name="delete_protection_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput"></a>

```python
delete_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_analysis_types_input`<sup>Optional</sup> <a name="enabled_analysis_types_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypesInput"></a>

```python
enabled_analysis_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `firewall_name_input`<sup>Optional</sup> <a name="firewall_name_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallNameInput"></a>

```python
firewall_name_input: str
```

- *Type:* str

---

##### `firewall_policy_arn_input`<sup>Optional</sup> <a name="firewall_policy_arn_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput"></a>

```python
firewall_policy_arn_input: str
```

- *Type:* str

---

##### `firewall_policy_change_protection_input`<sup>Optional</sup> <a name="firewall_policy_change_protection_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput"></a>

```python
firewall_policy_change_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `nat_gateway_mappings_input`<sup>Optional</sup> <a name="nat_gateway_mappings_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.natGatewayMappingsInput"></a>

```python
nat_gateway_mappings_input: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]

---

##### `no_source_preservation_input`<sup>Optional</sup> <a name="no_source_preservation_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.noSourcePreservationInput"></a>

```python
no_source_preservation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proxy_settings_input`<sup>Optional</sup> <a name="proxy_settings_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.proxySettingsInput"></a>

```python
proxy_settings_input: IResolvable | NetworkfirewallFirewallProxySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a>

---

##### `subnet_change_protection_input`<sup>Optional</sup> <a name="subnet_change_protection_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput"></a>

```python
subnet_change_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subnet_mappings_input`<sup>Optional</sup> <a name="subnet_mappings_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingsInput"></a>

```python
subnet_mappings_input: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkfirewallFirewallTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_input`<sup>Optional</sup> <a name="vpc_endpoint_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcEndpointInput"></a>

```python
vpc_endpoint_input: IResolvable | NetworkfirewallFirewallVpcEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a>

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `availability_zone_change_protection`<sup>Required</sup> <a name="availability_zone_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtection"></a>

```python
availability_zone_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_protection`<sup>Required</sup> <a name="delete_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection"></a>

```python
delete_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled_analysis_types`<sup>Required</sup> <a name="enabled_analysis_types" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypes"></a>

```python
enabled_analysis_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `firewall_name`<sup>Required</sup> <a name="firewall_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallName"></a>

```python
firewall_name: str
```

- *Type:* str

---

##### `firewall_policy_arn`<sup>Required</sup> <a name="firewall_policy_arn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn"></a>

```python
firewall_policy_arn: str
```

- *Type:* str

---

##### `firewall_policy_change_protection`<sup>Required</sup> <a name="firewall_policy_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```python
firewall_policy_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_source_preservation`<sup>Required</sup> <a name="no_source_preservation" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.noSourcePreservation"></a>

```python
no_source_preservation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subnet_change_protection`<sup>Required</sup> <a name="subnet_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection"></a>

```python
subnet_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallAvailabilityZoneMappings <a name="NetworkfirewallFirewallAvailabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings(
  availability_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.property.availabilityZone">availability_zone</a></code> | <code>str</code> | A AvailabilityZone. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

A AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone NetworkfirewallFirewall#availability_zone}

---

### NetworkfirewallFirewallConfig <a name="NetworkfirewallFirewallConfig" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_name: str,
  firewall_policy_arn: str,
  availability_zone_change_protection: bool | IResolvable = None,
  availability_zone_mappings: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings] = None,
  delete_protection: bool | IResolvable = None,
  description: str = None,
  enabled_analysis_types: typing.List[str] = None,
  firewall_policy_change_protection: bool | IResolvable = None,
  nat_gateway_mappings: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings] = None,
  no_source_preservation: bool | IResolvable = None,
  proxy_settings: NetworkfirewallFirewallProxySettings = None,
  subnet_change_protection: bool | IResolvable = None,
  subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings] = None,
  tags: IResolvable | typing.List[NetworkfirewallFirewallTags] = None,
  transit_gateway_id: str = None,
  vpc_endpoint: NetworkfirewallFirewallVpcEndpoint = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallName">firewall_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn">firewall_policy_arn</a></code> | <code>str</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneChangeProtection">availability_zone_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneMappings">availability_zone_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection">delete_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.enabledAnalysisTypes">enabled_analysis_types</a></code> | <code>typing.List[str]</code> | The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection">firewall_policy_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.natGatewayMappings">nat_gateway_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]</code> | The NAT gateways that the firewall proxies egress traffic through when NoSourcePreservation is true. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.noSourcePreservation">no_source_preservation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the firewall operates in proxy mode, where the source IP address of traffic is not preserved. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.proxySettings">proxy_settings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a></code> | The proxy listener configuration for a proxy-mode (no source preservation) firewall. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection">subnet_change_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMappings">subnet_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcEndpoint">vpc_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a></code> | The VPC and subnets for a proxy-mode firewall's endpoint. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_name`<sup>Required</sup> <a name="firewall_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallName"></a>

```python
firewall_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}.

---

##### `firewall_policy_arn`<sup>Required</sup> <a name="firewall_policy_arn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn"></a>

```python
firewall_policy_arn: str
```

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}

---

##### `availability_zone_change_protection`<sup>Optional</sup> <a name="availability_zone_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneChangeProtection"></a>

```python
availability_zone_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}.

---

##### `availability_zone_mappings`<sup>Optional</sup> <a name="availability_zone_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneMappings"></a>

```python
availability_zone_mappings: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}.

---

##### `delete_protection`<sup>Optional</sup> <a name="delete_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection"></a>

```python
delete_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}.

---

##### `enabled_analysis_types`<sup>Optional</sup> <a name="enabled_analysis_types" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.enabledAnalysisTypes"></a>

```python
enabled_analysis_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#enabled_analysis_types NetworkfirewallFirewall#enabled_analysis_types}

---

##### `firewall_policy_change_protection`<sup>Optional</sup> <a name="firewall_policy_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection"></a>

```python
firewall_policy_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.

---

##### `nat_gateway_mappings`<sup>Optional</sup> <a name="nat_gateway_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.natGatewayMappings"></a>

```python
nat_gateway_mappings: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]

The NAT gateways that the firewall proxies egress traffic through when NoSourcePreservation is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#nat_gateway_mappings NetworkfirewallFirewall#nat_gateway_mappings}

---

##### `no_source_preservation`<sup>Optional</sup> <a name="no_source_preservation" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.noSourcePreservation"></a>

```python
no_source_preservation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the firewall operates in proxy mode, where the source IP address of traffic is not preserved.

When true, specify NatGatewayMappings and VpcEndpoint instead of the top-level VpcId and SubnetMappings. You can't change this setting after you create the firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#no_source_preservation NetworkfirewallFirewall#no_source_preservation}

---

##### `proxy_settings`<sup>Optional</sup> <a name="proxy_settings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.proxySettings"></a>

```python
proxy_settings: NetworkfirewallFirewallProxySettings
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a>

The proxy listener configuration for a proxy-mode (no source preservation) firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#proxy_settings NetworkfirewallFirewall#proxy_settings}

---

##### `subnet_change_protection`<sup>Optional</sup> <a name="subnet_change_protection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection"></a>

```python
subnet_change_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.

---

##### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMappings"></a>

```python
subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkfirewallFirewallTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}.

---

##### `vpc_endpoint`<sup>Optional</sup> <a name="vpc_endpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcEndpoint"></a>

```python
vpc_endpoint: NetworkfirewallFirewallVpcEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a>

The VPC and subnets for a proxy-mode firewall's endpoint.

Provide this instead of the top-level VpcId and SubnetMappings when NoSourcePreservation is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_endpoint NetworkfirewallFirewall#vpc_endpoint}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}.

---

### NetworkfirewallFirewallNatGatewayMappings <a name="NetworkfirewallFirewallNatGatewayMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings(
  nat_gateway_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | The unique identifier of a NAT gateway. |

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

The unique identifier of a NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#nat_gateway_id NetworkfirewallFirewall#nat_gateway_id}

---

### NetworkfirewallFirewallProxySettings <a name="NetworkfirewallFirewallProxySettings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallProxySettings(
  listener_properties: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings.property.listenerProperties">listener_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#listener_properties NetworkfirewallFirewall#listener_properties}. |

---

##### `listener_properties`<sup>Optional</sup> <a name="listener_properties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings.property.listenerProperties"></a>

```python
listener_properties: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#listener_properties NetworkfirewallFirewall#listener_properties}.

---

### NetworkfirewallFirewallProxySettingsListenerProperties <a name="NetworkfirewallFirewallProxySettingsListenerProperties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties(
  port: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port the proxy listener accepts traffic on. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties.property.type">type</a></code> | <code>str</code> | The protocol the proxy listener uses. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port the proxy listener accepts traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#port NetworkfirewallFirewall#port}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties.property.type"></a>

```python
type: str
```

- *Type:* str

The protocol the proxy listener uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#type NetworkfirewallFirewall#type}

---

### NetworkfirewallFirewallSubnetMappings <a name="NetworkfirewallFirewallSubnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings(
  ip_address_type: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | A IPAddressType. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.subnetId">subnet_id</a></code> | <code>str</code> | A SubnetId. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}

---

### NetworkfirewallFirewallTags <a name="NetworkfirewallFirewallTags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#key NetworkfirewallFirewall#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#value NetworkfirewallFirewall#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#key NetworkfirewallFirewall#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#value NetworkfirewallFirewall#value}.

---

### NetworkfirewallFirewallVpcEndpoint <a name="NetworkfirewallFirewallVpcEndpoint" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint(
  subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint.property.subnetMappings">subnet_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | The unique identifier of the VPC for the firewall endpoint. |

---

##### `subnet_mappings`<sup>Optional</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint.property.subnetMappings"></a>

```python
subnet_mappings: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The unique identifier of the VPC for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}

---

### NetworkfirewallFirewallVpcEndpointSubnetMappings <a name="NetworkfirewallFirewallVpcEndpointSubnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings(
  ip_address_type: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | A IPAddressType. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings.property.subnetId">subnet_id</a></code> | <code>str</code> | A SubnetId. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallAvailabilityZoneMappingsList <a name="NetworkfirewallFirewallAvailabilityZoneMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallAvailabilityZoneMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>]

---


### NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference <a name="NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>

---


### NetworkfirewallFirewallNatGatewayMappingsList <a name="NetworkfirewallFirewallNatGatewayMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallNatGatewayMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallNatGatewayMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>]

---


### NetworkfirewallFirewallNatGatewayMappingsOutputReference <a name="NetworkfirewallFirewallNatGatewayMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.resetNatGatewayId">reset_nat_gateway_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nat_gateway_id` <a name="reset_nat_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.resetNatGatewayId"></a>

```python
def reset_nat_gateway_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallNatGatewayMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallNatGatewayMappings">NetworkfirewallFirewallNatGatewayMappings</a>

---


### NetworkfirewallFirewallProxySettingsListenerPropertiesList <a name="NetworkfirewallFirewallProxySettingsListenerPropertiesList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]

---


### NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference <a name="NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallProxySettingsListenerProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>

---


### NetworkfirewallFirewallProxySettingsOutputReference <a name="NetworkfirewallFirewallProxySettingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.putListenerProperties">put_listener_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.resetListenerProperties">reset_listener_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_listener_properties` <a name="put_listener_properties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.putListenerProperties"></a>

```python
def put_listener_properties(
  value: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.putListenerProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]

---

##### `reset_listener_properties` <a name="reset_listener_properties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.resetListenerProperties"></a>

```python
def reset_listener_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.listenerProperties">listener_properties</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList">NetworkfirewallFirewallProxySettingsListenerPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.listenerPropertiesInput">listener_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listener_properties`<sup>Required</sup> <a name="listener_properties" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.listenerProperties"></a>

```python
listener_properties: NetworkfirewallFirewallProxySettingsListenerPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerPropertiesList">NetworkfirewallFirewallProxySettingsListenerPropertiesList</a>

---

##### `listener_properties_input`<sup>Optional</sup> <a name="listener_properties_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.listenerPropertiesInput"></a>

```python
listener_properties_input: IResolvable | typing.List[NetworkfirewallFirewallProxySettingsListenerProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsListenerProperties">NetworkfirewallFirewallProxySettingsListenerProperties</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallProxySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallProxySettings">NetworkfirewallFirewallProxySettings</a>

---


### NetworkfirewallFirewallSubnetMappingsList <a name="NetworkfirewallFirewallSubnetMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>]

---


### NetworkfirewallFirewallSubnetMappingsOutputReference <a name="NetworkfirewallFirewallSubnetMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallSubnetMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>

---


### NetworkfirewallFirewallTagsList <a name="NetworkfirewallFirewallTagsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>]

---


### NetworkfirewallFirewallTagsOutputReference <a name="NetworkfirewallFirewallTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>

---


### NetworkfirewallFirewallVpcEndpointOutputReference <a name="NetworkfirewallFirewallVpcEndpointOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.putSubnetMappings">put_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resetSubnetMappings">reset_subnet_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subnet_mappings` <a name="put_subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.putSubnetMappings"></a>

```python
def put_subnet_mappings(
  value: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.putSubnetMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]

---

##### `reset_subnet_mappings` <a name="reset_subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resetSubnetMappings"></a>

```python
def reset_subnet_mappings() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappings">subnet_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList">NetworkfirewallFirewallVpcEndpointSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappingsInput">subnet_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_mappings`<sup>Required</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappings"></a>

```python
subnet_mappings: NetworkfirewallFirewallVpcEndpointSubnetMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList">NetworkfirewallFirewallVpcEndpointSubnetMappingsList</a>

---

##### `subnet_mappings_input`<sup>Optional</sup> <a name="subnet_mappings_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.subnetMappingsInput"></a>

```python
subnet_mappings_input: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallVpcEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpoint">NetworkfirewallFirewallVpcEndpoint</a>

---


### NetworkfirewallFirewallVpcEndpointSubnetMappingsList <a name="NetworkfirewallFirewallVpcEndpointSubnetMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallFirewallVpcEndpointSubnetMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>]

---


### NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference <a name="NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_firewall

networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallFirewallVpcEndpointSubnetMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallVpcEndpointSubnetMappings">NetworkfirewallFirewallVpcEndpointSubnetMappings</a>

---



