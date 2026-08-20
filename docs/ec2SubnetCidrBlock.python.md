# `ec2SubnetCidrBlock` Submodule <a name="`ec2SubnetCidrBlock` Submodule" id="@cdktn/provider-awscc.ec2SubnetCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SubnetCidrBlock <a name="Ec2SubnetCidrBlock" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block awscc_ec2_subnet_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlock(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  ipv6_cidr_block: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#subnet_id Ec2SubnetCidrBlock#subnet_id}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_cidr_block Ec2SubnetCidrBlock#ipv_6_cidr_block}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* str

The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_ipam_pool_id Ec2SubnetCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* typing.Union[int, float]

The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_netmask_length Ec2SubnetCidrBlock#ipv_6_netmask_length}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6IpamPoolId">reset_ipv6_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6NetmaskLength">reset_ipv6_netmask_length</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_ipam_pool_id` <a name="reset_ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6IpamPoolId"></a>

```python
def reset_ipv6_ipam_pool_id() -> None
```

##### `reset_ipv6_netmask_length` <a name="reset_ipv6_netmask_length" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.resetIpv6NetmaskLength"></a>

```python
def reset_ipv6_netmask_length() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SubnetCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlock.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SubnetCidrBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SubnetCidrBlock to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SubnetCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SubnetCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipSource">ip_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6AddressAttribute">ipv6_address_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetCidrBlockId">subnet_cidr_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6IpamPoolIdInput">ipv6_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6NetmaskLengthInput">ipv6_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_source`<sup>Required</sup> <a name="ip_source" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipSource"></a>

```python
ip_source: str
```

- *Type:* str

---

##### `ipv6_address_attribute`<sup>Required</sup> <a name="ipv6_address_attribute" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6AddressAttribute"></a>

```python
ipv6_address_attribute: str
```

- *Type:* str

---

##### `subnet_cidr_block_id`<sup>Required</sup> <a name="subnet_cidr_block_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetCidrBlockId"></a>

```python
subnet_cidr_block_id: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv6_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6IpamPoolIdInput"></a>

```python
ipv6_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv6_netmask_length_input`<sup>Optional</sup> <a name="ipv6_netmask_length_input" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6NetmaskLengthInput"></a>

```python
ipv6_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id`<sup>Required</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv6_netmask_length`<sup>Required</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetCidrBlockConfig <a name="Ec2SubnetCidrBlockConfig" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_subnet_cidr_block

ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  ipv6_cidr_block: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#subnet_id Ec2SubnetCidrBlock#subnet_id}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_cidr_block Ec2SubnetCidrBlock#ipv_6_cidr_block}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_ipam_pool_id Ec2SubnetCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2SubnetCidrBlock.Ec2SubnetCidrBlockConfig.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_netmask_length Ec2SubnetCidrBlock#ipv_6_netmask_length}

---



