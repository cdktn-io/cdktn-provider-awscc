# `ec2IpamAllocation` Submodule <a name="`ec2IpamAllocation` Submodule" id="@cdktn/provider-awscc.ec2IpamAllocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamAllocation <a name="Ec2IpamAllocation" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation awscc_ec2_ipam_allocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipam_pool_id: str,
  cidr: str = None,
  description: str = None,
  netmask_length: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Id of the IPAM Pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | The desired netmask length of the allocation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Id of the IPAM Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#ipam_pool_id Ec2IpamAllocation#ipam_pool_id}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.cidr"></a>

- *Type:* str

Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#cidr Ec2IpamAllocation#cidr}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.Initializer.parameter.netmaskLength"></a>

- *Type:* typing.Union[int, float]

The desired netmask length of the allocation.

If set, IPAM will choose a block of free space with this size and return the CIDR representing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#netmask_length Ec2IpamAllocation#netmask_length}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetNetmaskLength">reset_netmask_length</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_netmask_length` <a name="reset_netmask_length" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.resetNetmaskLength"></a>

```python
def reset_netmask_length() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2IpamAllocation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2IpamAllocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2IpamAllocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2IpamAllocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamAllocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolAllocationId">ipam_pool_allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLengthInput">netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_allocation_id`<sup>Required</sup> <a name="ipam_pool_allocation_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolAllocationId"></a>

```python
ipam_pool_allocation_id: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `netmask_length_input`<sup>Optional</sup> <a name="netmask_length_input" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLengthInput"></a>

```python
netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `netmask_length`<sup>Required</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamAllocationConfig <a name="Ec2IpamAllocationConfig" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_allocation

ec2IpamAllocation.Ec2IpamAllocationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipam_pool_id: str,
  cidr: str = None,
  description: str = None,
  netmask_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Id of the IPAM Pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.cidr">cidr</a></code> | <code>str</code> | Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | The desired netmask length of the allocation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Id of the IPAM Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#ipam_pool_id Ec2IpamAllocation#ipam_pool_id}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Represents an IPAM custom allocation of a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#cidr Ec2IpamAllocation#cidr}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#description Ec2IpamAllocation#description}.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamAllocation.Ec2IpamAllocationConfig.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired netmask length of the allocation.

If set, IPAM will choose a block of free space with this size and return the CIDR representing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_allocation#netmask_length Ec2IpamAllocation#netmask_length}

---



