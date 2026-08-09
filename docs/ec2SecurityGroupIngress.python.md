# `ec2SecurityGroupIngress` Submodule <a name="`ec2SecurityGroupIngress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupIngress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupIngress <a name="Ec2SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngress(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_protocol: str,
  cidr_ip: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  group_id: str = None,
  group_name: str = None,
  source_prefix_list_id: str = None,
  source_security_group_id: str = None,
  source_security_group_name: str = None,
  source_security_group_owner_id: str = None,
  to_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIp">cidr_ip</a></code> | <code>str</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.description">description</a></code> | <code>str</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupName">group_name</a></code> | <code>str</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourcePrefixListId">source_prefix_list_id</a></code> | <code>str</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupId">source_security_group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupName">source_security_group_name</a></code> | <code>str</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupOwnerId">source_security_group_owner_id</a></code> | <code>str</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `cidr_ip`<sup>Optional</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIp"></a>

- *Type:* str

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIpv6"></a>

- *Type:* str

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.description"></a>

- *Type:* str

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupId"></a>

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupName"></a>

- *Type:* str

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `source_prefix_list_id`<sup>Optional</sup> <a name="source_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourcePrefixListId"></a>

- *Type:* str

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `source_security_group_id`<sup>Optional</sup> <a name="source_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupId"></a>

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `source_security_group_name`<sup>Optional</sup> <a name="source_security_group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupName"></a>

- *Type:* str

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `source_security_group_owner_id`<sup>Optional</sup> <a name="source_security_group_owner_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupOwnerId"></a>

- *Type:* str

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp">reset_cidr_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6">reset_cidr_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId">reset_source_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId">reset_source_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName">reset_source_security_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId">reset_source_security_group_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cidr_ip` <a name="reset_cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp"></a>

```python
def reset_cidr_ip() -> None
```

##### `reset_cidr_ipv6` <a name="reset_cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6"></a>

```python
def reset_cidr_ipv6() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_source_prefix_list_id` <a name="reset_source_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId"></a>

```python
def reset_source_prefix_list_id() -> None
```

##### `reset_source_security_group_id` <a name="reset_source_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId"></a>

```python
def reset_source_security_group_id() -> None
```

##### `reset_source_security_group_name` <a name="reset_source_security_group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName"></a>

```python
def reset_source_security_group_name() -> None
```

##### `reset_source_security_group_owner_id` <a name="reset_source_security_group_owner_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId"></a>

```python
def reset_source_security_group_owner_id() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort"></a>

```python
def reset_to_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SecurityGroupIngress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SecurityGroupIngress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupIngress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId">security_group_ingress_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput">cidr_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input">cidr_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput">source_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput">source_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput">source_security_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput">source_security_group_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp">cidr_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId">source_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId">source_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName">source_security_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId">source_security_group_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_ingress_id`<sup>Required</sup> <a name="security_group_ingress_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId"></a>

```python
security_group_ingress_id: str
```

- *Type:* str

---

##### `cidr_ip_input`<sup>Optional</sup> <a name="cidr_ip_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput"></a>

```python
cidr_ip_input: str
```

- *Type:* str

---

##### `cidr_ipv6_input`<sup>Optional</sup> <a name="cidr_ipv6_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input"></a>

```python
cidr_ipv6_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `source_prefix_list_id_input`<sup>Optional</sup> <a name="source_prefix_list_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput"></a>

```python
source_prefix_list_id_input: str
```

- *Type:* str

---

##### `source_security_group_id_input`<sup>Optional</sup> <a name="source_security_group_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput"></a>

```python
source_security_group_id_input: str
```

- *Type:* str

---

##### `source_security_group_name_input`<sup>Optional</sup> <a name="source_security_group_name_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput"></a>

```python
source_security_group_name_input: str
```

- *Type:* str

---

##### `source_security_group_owner_id_input`<sup>Optional</sup> <a name="source_security_group_owner_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput"></a>

```python
source_security_group_owner_id_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_ip`<sup>Required</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `source_prefix_list_id`<sup>Required</sup> <a name="source_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId"></a>

```python
source_prefix_list_id: str
```

- *Type:* str

---

##### `source_security_group_id`<sup>Required</sup> <a name="source_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId"></a>

```python
source_security_group_id: str
```

- *Type:* str

---

##### `source_security_group_name`<sup>Required</sup> <a name="source_security_group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName"></a>

```python
source_security_group_name: str
```

- *Type:* str

---

##### `source_security_group_owner_id`<sup>Required</sup> <a name="source_security_group_owner_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```python
source_security_group_owner_id: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupIngressConfig <a name="Ec2SecurityGroupIngressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_ingress

ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_protocol: str,
  cidr_ip: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  group_id: str = None,
  group_name: str = None,
  source_prefix_list_id: str = None,
  source_security_group_id: str = None,
  source_security_group_name: str = None,
  source_security_group_owner_id: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp">cidr_ip</a></code> | <code>str</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description">description</a></code> | <code>str</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId">group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName">group_name</a></code> | <code>str</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId">source_prefix_list_id</a></code> | <code>str</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId">source_security_group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName">source_security_group_name</a></code> | <code>str</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId">source_security_group_owner_id</a></code> | <code>str</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `cidr_ip`<sup>Optional</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `source_prefix_list_id`<sup>Optional</sup> <a name="source_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId"></a>

```python
source_prefix_list_id: str
```

- *Type:* str

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `source_security_group_id`<sup>Optional</sup> <a name="source_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId"></a>

```python
source_security_group_id: str
```

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `source_security_group_name`<sup>Optional</sup> <a name="source_security_group_name" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName"></a>

```python
source_security_group_name: str
```

- *Type:* str

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `source_security_group_owner_id`<sup>Optional</sup> <a name="source_security_group_owner_id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId"></a>

```python
source_security_group_owner_id: str
```

- *Type:* str

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---



