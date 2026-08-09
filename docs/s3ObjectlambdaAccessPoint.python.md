# `s3ObjectlambdaAccessPoint` Submodule <a name="`s3ObjectlambdaAccessPoint` Submodule" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectlambdaAccessPoint <a name="S3ObjectlambdaAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point awscc_s3objectlambda_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_lambda_configuration: S3ObjectlambdaAccessPointObjectLambdaConfiguration,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.objectLambdaConfiguration">object_lambda_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name you want to assign to this Object lambda Access Point. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_lambda_configuration`<sup>Required</sup> <a name="object_lambda_configuration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.objectLambdaConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.name"></a>

- *Type:* str

The name you want to assign to this Object lambda Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#name S3ObjectlambdaAccessPoint#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration">put_object_lambda_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_object_lambda_configuration` <a name="put_object_lambda_configuration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration"></a>

```python
def put_object_lambda_configuration(
  supporting_access_point: str,
  transformation_configurations: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations],
  allowed_features: typing.List[str] = None,
  cloudwatch_metrics_enabled: bool | IResolvable = None
) -> None
```

###### `supporting_access_point`<sup>Required</sup> <a name="supporting_access_point" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.supportingAccessPoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}.

---

###### `transformation_configurations`<sup>Required</sup> <a name="transformation_configurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.transformationConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}.

---

###### `allowed_features`<sup>Optional</sup> <a name="allowed_features" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.allowedFeatures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}.

---

###### `cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.cloudwatchMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}.

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ObjectlambdaAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ObjectlambdaAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ObjectlambdaAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias">alias</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration">object_lambda_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus">policy_status</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput">object_lambda_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias"></a>

```python
alias: S3ObjectlambdaAccessPointAliasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_lambda_configuration`<sup>Required</sup> <a name="object_lambda_configuration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration"></a>

```python
object_lambda_configuration: S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a>

---

##### `policy_status`<sup>Required</sup> <a name="policy_status" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus"></a>

```python
policy_status: S3ObjectlambdaAccessPointPolicyStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a>

---

##### `public_access_block_configuration`<sup>Required</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_lambda_configuration_input`<sup>Optional</sup> <a name="object_lambda_configuration_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput"></a>

```python
object_lambda_configuration_input: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectlambdaAccessPointAlias <a name="S3ObjectlambdaAccessPointAlias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias()
```


### S3ObjectlambdaAccessPointConfig <a name="S3ObjectlambdaAccessPointConfig" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_lambda_configuration: S3ObjectlambdaAccessPointObjectLambdaConfiguration,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration">object_lambda_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name">name</a></code> | <code>str</code> | The name you want to assign to this Object lambda Access Point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_lambda_configuration`<sup>Required</sup> <a name="object_lambda_configuration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration"></a>

```python
object_lambda_configuration: S3ObjectlambdaAccessPointObjectLambdaConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name you want to assign to this Object lambda Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#name S3ObjectlambdaAccessPoint#name}

---

### S3ObjectlambdaAccessPointObjectLambdaConfiguration <a name="S3ObjectlambdaAccessPointObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration(
  supporting_access_point: str,
  transformation_configurations: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations],
  allowed_features: typing.List[str] = None,
  cloudwatch_metrics_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint">supporting_access_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations">transformation_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures">allowed_features</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}. |

---

##### `supporting_access_point`<sup>Required</sup> <a name="supporting_access_point" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint"></a>

```python
supporting_access_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}.

---

##### `transformation_configurations`<sup>Required</sup> <a name="transformation_configurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations"></a>

```python
transformation_configurations: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}.

---

##### `allowed_features`<sup>Optional</sup> <a name="allowed_features" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures"></a>

```python
allowed_features: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}.

---

##### `cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations(
  actions: typing.List[str],
  content_transformation: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation">content_transformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}.

---

##### `content_transformation`<sup>Required</sup> <a name="content_transformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation"></a>

```python
content_transformation: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation(
  aws_lambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda">aws_lambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}. |

---

##### `aws_lambda`<sup>Optional</sup> <a name="aws_lambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda"></a>

```python
aws_lambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda(
  function_arn: str = None,
  function_payload: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload">function_payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}. |

---

##### `function_arn`<sup>Optional</sup> <a name="function_arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}.

---

##### `function_payload`<sup>Optional</sup> <a name="function_payload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload"></a>

```python
function_payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}.

---

### S3ObjectlambdaAccessPointPolicyStatus <a name="S3ObjectlambdaAccessPointPolicyStatus" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus()
```


### S3ObjectlambdaAccessPointPublicAccessBlockConfiguration <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### S3ObjectlambdaAccessPointAliasOutputReference <a name="S3ObjectlambdaAccessPointAliasOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue"></a>

```python
internal_value: S3ObjectlambdaAccessPointAlias
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations">put_transformation_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures">reset_allowed_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled">reset_cloudwatch_metrics_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation_configurations` <a name="put_transformation_configurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations"></a>

```python
def put_transformation_configurations(
  value: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]

---

##### `reset_allowed_features` <a name="reset_allowed_features" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures"></a>

```python
def reset_allowed_features() -> None
```

##### `reset_cloudwatch_metrics_enabled` <a name="reset_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled"></a>

```python
def reset_cloudwatch_metrics_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations">transformation_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput">allowed_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatch_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput">supporting_access_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput">transformation_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures">allowed_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint">supporting_access_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation_configurations`<sup>Required</sup> <a name="transformation_configurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations"></a>

```python
transformation_configurations: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a>

---

##### `allowed_features_input`<sup>Optional</sup> <a name="allowed_features_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput"></a>

```python
allowed_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```python
cloudwatch_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `supporting_access_point_input`<sup>Optional</sup> <a name="supporting_access_point_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput"></a>

```python
supporting_access_point_input: str
```

- *Type:* str

---

##### `transformation_configurations_input`<sup>Optional</sup> <a name="transformation_configurations_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput"></a>

```python
transformation_configurations_input: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]

---

##### `allowed_features`<sup>Required</sup> <a name="allowed_features" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures"></a>

```python
allowed_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `supporting_access_point`<sup>Required</sup> <a name="supporting_access_point" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint"></a>

```python
supporting_access_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn">reset_function_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload">reset_function_payload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_arn` <a name="reset_function_arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn"></a>

```python
def reset_function_arn() -> None
```

##### `reset_function_payload` <a name="reset_function_payload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload"></a>

```python
def reset_function_payload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput">function_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload">function_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `function_payload_input`<sup>Optional</sup> <a name="function_payload_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput"></a>

```python
function_payload_input: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_payload`<sup>Required</sup> <a name="function_payload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload"></a>

```python
function_payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda">put_aws_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda">reset_aws_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_lambda` <a name="put_aws_lambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda"></a>

```python
def put_aws_lambda(
  function_arn: str = None,
  function_payload: str = None
) -> None
```

###### `function_arn`<sup>Optional</sup> <a name="function_arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda.parameter.functionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}.

---

###### `function_payload`<sup>Optional</sup> <a name="function_payload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda.parameter.functionPayload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}.

---

##### `reset_aws_lambda` <a name="reset_aws_lambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda"></a>

```python
def reset_aws_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda">aws_lambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput">aws_lambda_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_lambda`<sup>Required</sup> <a name="aws_lambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda"></a>

```python
aws_lambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a>

---

##### `aws_lambda_input`<sup>Optional</sup> <a name="aws_lambda_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput"></a>

```python
aws_lambda_input: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>]

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation">put_content_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content_transformation` <a name="put_content_transformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation"></a>

```python
def put_content_transformation(
  aws_lambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda = None
) -> None
```

###### `aws_lambda`<sup>Optional</sup> <a name="aws_lambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation.parameter.awsLambda"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation">content_transformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput">content_transformation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_transformation`<sup>Required</sup> <a name="content_transformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation"></a>

```python
content_transformation: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_transformation_input`<sup>Optional</sup> <a name="content_transformation_input" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput"></a>

```python
content_transformation_input: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>

---


### S3ObjectlambdaAccessPointPolicyStatusOutputReference <a name="S3ObjectlambdaAccessPointPolicyStatusOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic">is_public</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue"></a>

```python
internal_value: S3ObjectlambdaAccessPointPolicyStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a>

---


### S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_objectlambda_access_point

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3ObjectlambdaAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a>

---



