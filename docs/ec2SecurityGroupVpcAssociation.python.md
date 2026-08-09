# `ec2SecurityGroupVpcAssociation` Submodule <a name="`ec2SecurityGroupVpcAssociation` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupVpcAssociation <a name="Ec2SecurityGroupVpcAssociation" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association awscc_ec2_security_group_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation(
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
  vpc_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | The group ID of the specified security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC in the security group vpc association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.groupId"></a>

- *Type:* str

The group ID of the specified security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association#group_id Ec2SecurityGroupVpcAssociation#group_id}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC in the security group vpc association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association#vpc_id Ec2SecurityGroupVpcAssociation#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SecurityGroupVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SecurityGroupVpcAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SecurityGroupVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcOwnerId">vpc_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `vpc_owner_id`<sup>Required</sup> <a name="vpc_owner_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcOwnerId"></a>

```python
vpc_owner_id: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupVpcAssociationConfig <a name="Ec2SecurityGroupVpcAssociationConfig" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_security_group_vpc_association

ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_id: str,
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.groupId">group_id</a></code> | <code>str</code> | The group ID of the specified security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC in the security group vpc association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The group ID of the specified security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association#group_id Ec2SecurityGroupVpcAssociation#group_id}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2SecurityGroupVpcAssociation.Ec2SecurityGroupVpcAssociationConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC in the security group vpc association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_vpc_association#vpc_id Ec2SecurityGroupVpcAssociation#vpc_id}

---



