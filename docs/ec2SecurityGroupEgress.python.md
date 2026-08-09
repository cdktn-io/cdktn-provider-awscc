# `ec2SecurityGroupEgress` Submodule <a name="`ec2SecurityGroupEgress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupEgress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupEgress <a name="Ec2SecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress awscc_ec2_security_group_egress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgress(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_id: str,
  ip_protocol: str,
  cidr_ip: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  destination_prefix_list_id: str = None,
  destination_security_group_id: str = None,
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIp">cidr_ip</a></code> | <code>str</code> | The IPv4 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | The IPv6 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of an egress (outbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | The prefix list IDs for an AWS service. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationSecurityGroupId">destination_security_group_id</a></code> | <code>str</code> | The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | If the protocol is TCP or UDP, this is the start of the port range. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | If the protocol is TCP or UDP, this is the end of the port range. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.groupId"></a>

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#group_id Ec2SecurityGroupEgress#group_id}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#ip_protocol Ec2SecurityGroupEgress#ip_protocol}

---

##### `cidr_ip`<sup>Optional</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIp"></a>

- *Type:* str

The IPv4 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#cidr_ip Ec2SecurityGroupEgress#cidr_ip}

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIpv6"></a>

- *Type:* str

The IPv6 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#cidr_ipv_6 Ec2SecurityGroupEgress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.description"></a>

- *Type:* str

The description of an egress (outbound) security group rule.

Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#description Ec2SecurityGroupEgress#description}

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationPrefixListId"></a>

- *Type:* str

The prefix list IDs for an AWS service.

This is the AWS service to access through a VPC endpoint from instances associated with the security group.
You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#destination_prefix_list_id Ec2SecurityGroupEgress#destination_prefix_list_id}

---

##### `destination_security_group_id`<sup>Optional</sup> <a name="destination_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationSecurityGroupId"></a>

- *Type:* str

The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#destination_security_group_id Ec2SecurityGroupEgress#destination_security_group_id}

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

If the protocol is TCP or UDP, this is the start of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#from_port Ec2SecurityGroupEgress#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

If the protocol is TCP or UDP, this is the end of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#to_port Ec2SecurityGroupEgress#to_port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp">reset_cidr_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6">reset_cidr_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId">reset_destination_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId">reset_destination_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cidr_ip` <a name="reset_cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp"></a>

```python
def reset_cidr_ip() -> None
```

##### `reset_cidr_ipv6` <a name="reset_cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6"></a>

```python
def reset_cidr_ipv6() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_prefix_list_id` <a name="reset_destination_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId"></a>

```python
def reset_destination_prefix_list_id() -> None
```

##### `reset_destination_security_group_id` <a name="reset_destination_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId"></a>

```python
def reset_destination_security_group_id() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort"></a>

```python
def reset_to_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SecurityGroupEgress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SecurityGroupEgress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupEgress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId">security_group_egress_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput">cidr_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input">cidr_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput">destination_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput">destination_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp">cidr_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId">destination_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_egress_id`<sup>Required</sup> <a name="security_group_egress_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId"></a>

```python
security_group_egress_id: str
```

- *Type:* str

---

##### `cidr_ip_input`<sup>Optional</sup> <a name="cidr_ip_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput"></a>

```python
cidr_ip_input: str
```

- *Type:* str

---

##### `cidr_ipv6_input`<sup>Optional</sup> <a name="cidr_ipv6_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input"></a>

```python
cidr_ipv6_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_prefix_list_id_input`<sup>Optional</sup> <a name="destination_prefix_list_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput"></a>

```python
destination_prefix_list_id_input: str
```

- *Type:* str

---

##### `destination_security_group_id_input`<sup>Optional</sup> <a name="destination_security_group_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput"></a>

```python
destination_security_group_id_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_ip`<sup>Required</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_prefix_list_id`<sup>Required</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

---

##### `destination_security_group_id`<sup>Required</sup> <a name="destination_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId"></a>

```python
destination_security_group_id: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupEgressConfig <a name="Ec2SecurityGroupEgressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_egress

ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_id: str,
  ip_protocol: str,
  cidr_ip: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  destination_prefix_list_id: str = None,
  destination_security_group_id: str = None,
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId">group_id</a></code> | <code>str</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp">cidr_ip</a></code> | <code>str</code> | The IPv4 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | The IPv6 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description">description</a></code> | <code>str</code> | The description of an egress (outbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | The prefix list IDs for an AWS service. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId">destination_security_group_id</a></code> | <code>str</code> | The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | If the protocol is TCP or UDP, this is the start of the port range. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | If the protocol is TCP or UDP, this is the end of the port range. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#group_id Ec2SecurityGroupEgress#group_id}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#ip_protocol Ec2SecurityGroupEgress#ip_protocol}

---

##### `cidr_ip`<sup>Optional</sup> <a name="cidr_ip" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp"></a>

```python
cidr_ip: str
```

- *Type:* str

The IPv4 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#cidr_ip Ec2SecurityGroupEgress#cidr_ip}

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

The IPv6 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#cidr_ipv_6 Ec2SecurityGroupEgress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of an egress (outbound) security group rule.

Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#description Ec2SecurityGroupEgress#description}

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

The prefix list IDs for an AWS service.

This is the AWS service to access through a VPC endpoint from instances associated with the security group.
You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#destination_prefix_list_id Ec2SecurityGroupEgress#destination_prefix_list_id}

---

##### `destination_security_group_id`<sup>Optional</sup> <a name="destination_security_group_id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId"></a>

```python
destination_security_group_id: str
```

- *Type:* str

The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#destination_security_group_id Ec2SecurityGroupEgress#destination_security_group_id}

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If the protocol is TCP or UDP, this is the start of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#from_port Ec2SecurityGroupEgress#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If the protocol is TCP or UDP, this is the end of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_egress#to_port Ec2SecurityGroupEgress#to_port}

---



