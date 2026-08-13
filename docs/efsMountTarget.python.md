# `efsMountTarget` Submodule <a name="`efsMountTarget` Submodule" id="@cdktn/provider-awscc.efsMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsMountTarget <a name="EfsMountTarget" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target awscc_efs_mount_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTarget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  security_groups: typing.List[str],
  subnet_id: str,
  ip_address: str = None,
  ip_address_type: str = None,
  ipv6_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the file system for which to create the mount target. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | VPC security group IDs, of the form ``sg-xxxxxxxx``. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet to add the mount target in. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the mount target. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipv6Address">ipv6_address</a></code> | <code>str</code> | If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.fileSystemId"></a>

- *Type:* str

The ID of the file system for which to create the mount target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#file_system_id EfsMountTarget#file_system_id}

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

VPC security group IDs, of the form ``sg-xxxxxxxx``.

These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table). If you don't specify a security group, then Amazon EFS uses the default security group for the subnet's VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#security_groups EfsMountTarget#security_groups}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet to add the mount target in.

For One Zone file systems, use the subnet that is associated with the file system's Availability Zone. The subnet type must be the same type as the `IpAddressType`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#subnet_id EfsMountTarget#subnet_id}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipAddress"></a>

- *Type:* str

If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use.

If you do not specify an `IpAddress`, then Amazon EFS selects an unused IP address from the subnet specified for `SubnetId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ip_address EfsMountTarget#ip_address}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The IP address type for the mount target.

The possible values are `IPV4_ONLY` (only IPv4 addresses), `IPV6_ONLY` (only IPv6 addresses), and `DUAL_STACK` (dual-stack, both IPv4 and IPv6 addresses). If you don?t specify an `IpAddressType`, then `IPV4_ONLY` is used.
The `IPAddressType` must match the IP type of the subnet. Additionally, the `IPAddressType` parameter overrides the value set as the default IP address for the subnet in the VPC. For example, if the `IPAddressType` is `IPV4_ONLY` and `AssignIpv6AddressOnCreation` is `true`, then IPv4 is used for the mount target. For more information, see [Modify the IP addressing attributes of your subnet](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ip_address_type EfsMountTarget#ip_address_type}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.Initializer.parameter.ipv6Address"></a>

- *Type:* str

If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use.

If you do not specify an `Ipv6Address`, then Amazon EFS selects an unused IP address from the subnet specified for `SubnetId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ipv_6_address EfsMountTarget#ipv_6_address}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EfsMountTarget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isConstruct"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformElement"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformResource"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EfsMountTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EfsMountTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EfsMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EfsMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EfsMountTargetConfig <a name="EfsMountTargetConfig" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import efs_mount_target

efsMountTarget.EfsMountTargetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  security_groups: typing.List[str],
  subnet_id: str,
  ip_address: str = None,
  ip_address_type: str = None,
  ipv6_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The ID of the file system for which to create the mount target. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | VPC security group IDs, of the form ``sg-xxxxxxxx``. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet to add the mount target in. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the mount target. |
| <code><a href="#@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The ID of the file system for which to create the mount target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#file_system_id EfsMountTarget#file_system_id}

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

VPC security group IDs, of the form ``sg-xxxxxxxx``.

These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table). If you don't specify a security group, then Amazon EFS uses the default security group for the subnet's VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#security_groups EfsMountTarget#security_groups}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet to add the mount target in.

For One Zone file systems, use the subnet that is associated with the file system's Availability Zone. The subnet type must be the same type as the `IpAddressType`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#subnet_id EfsMountTarget#subnet_id}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use.

If you do not specify an `IpAddress`, then Amazon EFS selects an unused IP address from the subnet specified for `SubnetId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ip_address EfsMountTarget#ip_address}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type for the mount target.

The possible values are `IPV4_ONLY` (only IPv4 addresses), `IPV6_ONLY` (only IPv6 addresses), and `DUAL_STACK` (dual-stack, both IPv4 and IPv6 addresses). If you don?t specify an `IpAddressType`, then `IPV4_ONLY` is used.
The `IPAddressType` must match the IP type of the subnet. Additionally, the `IPAddressType` parameter overrides the value set as the default IP address for the subnet in the VPC. For example, if the `IPAddressType` is `IPV4_ONLY` and `AssignIpv6AddressOnCreation` is `true`, then IPv4 is used for the mount target. For more information, see [Modify the IP addressing attributes of your subnet](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ip_address_type EfsMountTarget#ip_address_type}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.efsMountTarget.EfsMountTargetConfig.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use.

If you do not specify an `Ipv6Address`, then Amazon EFS selects an unused IP address from the subnet specified for `SubnetId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/efs_mount_target#ipv_6_address EfsMountTarget#ipv_6_address}

---



