# `ec2IpamPoolCidr` Submodule <a name="`ec2IpamPoolCidr` Submodule" id="@cdktn/provider-awscc.ec2IpamPoolCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPoolCidr <a name="Ec2IpamPoolCidr" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr awscc_ec2_ipam_pool_cidr}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidr(
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
  netmask_length: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Id of the IPAM Pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Represents a single IPv4 or IPv6 CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | The desired netmask length of the provision. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Id of the IPAM Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#ipam_pool_id Ec2IpamPoolCidr#ipam_pool_id}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.cidr"></a>

- *Type:* str

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#cidr Ec2IpamPoolCidr#cidr}

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* typing.Union[int, float]

The desired netmask length of the provision.

If set, IPAM will choose a block of free space with this size and return the CIDR representing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#netmask_length Ec2IpamPoolCidr#netmask_length}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetNetmaskLength">reset_netmask_length</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_netmask_length` <a name="reset_netmask_length" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.resetNetmaskLength"></a>

```python
def reset_netmask_length() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2IpamPoolCidr resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidr.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidr.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2IpamPoolCidr resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2IpamPoolCidr to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2IpamPoolCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPoolCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolCidrId">ipam_pool_cidr_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.netmaskLengthInput">netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_cidr_id`<sup>Required</sup> <a name="ipam_pool_cidr_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolCidrId"></a>

```python
ipam_pool_cidr_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `netmask_length_input`<sup>Optional</sup> <a name="netmask_length_input" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.netmaskLengthInput"></a>

```python
netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `netmask_length`<sup>Required</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPoolCidrConfig <a name="Ec2IpamPoolCidrConfig" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_pool_cidr

ec2IpamPoolCidr.Ec2IpamPoolCidrConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipam_pool_id: str,
  cidr: str = None,
  netmask_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Id of the IPAM Pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.cidr">cidr</a></code> | <code>str</code> | Represents a single IPv4 or IPv6 CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | The desired netmask length of the provision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Id of the IPAM Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#ipam_pool_id Ec2IpamPoolCidr#ipam_pool_id}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#cidr Ec2IpamPoolCidr#cidr}

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktn/provider-awscc.ec2IpamPoolCidr.Ec2IpamPoolCidrConfig.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired netmask length of the provision.

If set, IPAM will choose a block of free space with this size and return the CIDR representing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool_cidr#netmask_length Ec2IpamPoolCidr#netmask_length}

---



