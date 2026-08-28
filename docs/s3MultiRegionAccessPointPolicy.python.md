# `s3MultiRegionAccessPointPolicy` Submodule <a name="`s3MultiRegionAccessPointPolicy` Submodule" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3MultiRegionAccessPointPolicy <a name="S3MultiRegionAccessPointPolicy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mrap_name: str,
  policy: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.mrapName">mrap_name</a></code> | <code>str</code> | The name of the Multi Region Access Point to apply policy. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Policy document to apply to a Multi Region Access Point. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mrap_name`<sup>Required</sup> <a name="mrap_name" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.mrapName"></a>

- *Type:* str

The name of the Multi Region Access Point to apply policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.policy"></a>

- *Type:* str

Policy document to apply to a Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#policy S3MultiRegionAccessPointPolicy#policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3MultiRegionAccessPointPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3MultiRegionAccessPointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3MultiRegionAccessPointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyStatus">policy_status</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference">S3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapNameInput">mrap_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapName">mrap_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_status`<sup>Required</sup> <a name="policy_status" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyStatus"></a>

```python
policy_status: S3MultiRegionAccessPointPolicyPolicyStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference">S3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a>

---

##### `mrap_name_input`<sup>Optional</sup> <a name="mrap_name_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapNameInput"></a>

```python
mrap_name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `mrap_name`<sup>Required</sup> <a name="mrap_name" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapName"></a>

```python
mrap_name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3MultiRegionAccessPointPolicyConfig <a name="S3MultiRegionAccessPointPolicyConfig" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mrap_name: str,
  policy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.mrapName">mrap_name</a></code> | <code>str</code> | The name of the Multi Region Access Point to apply policy. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.policy">policy</a></code> | <code>str</code> | Policy document to apply to a Multi Region Access Point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mrap_name`<sup>Required</sup> <a name="mrap_name" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.mrapName"></a>

```python
mrap_name: str
```

- *Type:* str

The name of the Multi Region Access Point to apply policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Policy document to apply to a Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point_policy#policy S3MultiRegionAccessPointPolicy#policy}

---

### S3MultiRegionAccessPointPolicyPolicyStatus <a name="S3MultiRegionAccessPointPolicyPolicyStatus" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### S3MultiRegionAccessPointPolicyPolicyStatusOutputReference <a name="S3MultiRegionAccessPointPolicyPolicyStatusOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point_policy

s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic">is_public</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus">S3MultiRegionAccessPointPolicyPolicyStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic"></a>

```python
is_public: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue"></a>

```python
internal_value: S3MultiRegionAccessPointPolicyPolicyStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus">S3MultiRegionAccessPointPolicyPolicyStatus</a>

---



