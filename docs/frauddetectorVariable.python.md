# `frauddetectorVariable` Submodule <a name="`frauddetectorVariable` Submodule" id="@cdktn/provider-awscc.frauddetectorVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorVariable <a name="FrauddetectorVariable" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable awscc_frauddetector_variable}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source: str,
  data_type: str,
  default_value: str,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[FrauddetectorVariableTags] = None,
  variable_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | The source of the data. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | The data type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | The default value for the variable when no value is received. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]</code> | Tags associated with this variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.variableType">variable_type</a></code> | <code>str</code> | The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dataSource"></a>

- *Type:* str

The source of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#data_source FrauddetectorVariable#data_source}

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.dataType"></a>

- *Type:* str

The data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#data_type FrauddetectorVariable#data_type}

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.defaultValue"></a>

- *Type:* str

The default value for the variable when no value is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#default_value FrauddetectorVariable#default_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.name"></a>

- *Type:* str

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#name FrauddetectorVariable#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.description"></a>

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#description FrauddetectorVariable#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]

Tags associated with this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#tags FrauddetectorVariable#tags}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.variableType"></a>

- *Type:* str

The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#variable_type FrauddetectorVariable#variable_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetVariableType">reset_variable_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorVariableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_variable_type` <a name="reset_variable_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetVariableType"></a>

```python
def reset_variable_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FrauddetectorVariable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FrauddetectorVariable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FrauddetectorVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FrauddetectorVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList">FrauddetectorVariableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tags"></a>

```python
tags: FrauddetectorVariableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList">FrauddetectorVariableTagsList</a>

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorVariableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorVariableConfig <a name="FrauddetectorVariableConfig" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source: str,
  data_type: str,
  default_value: str,
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[FrauddetectorVariableTags] = None,
  variable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataSource">data_source</a></code> | <code>str</code> | The source of the data. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataType">data_type</a></code> | <code>str</code> | The data type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.defaultValue">default_value</a></code> | <code>str</code> | The default value for the variable when no value is received. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.name">name</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]</code> | Tags associated with this variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.variableType">variable_type</a></code> | <code>str</code> | The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The source of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#data_source FrauddetectorVariable#data_source}

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#data_type FrauddetectorVariable#data_type}

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

The default value for the variable when no value is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#default_value FrauddetectorVariable#default_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#name FrauddetectorVariable#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#description FrauddetectorVariable#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorVariableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]

Tags associated with this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#tags FrauddetectorVariable#tags}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#variable_type FrauddetectorVariable#variable_type}

---

### FrauddetectorVariableTags <a name="FrauddetectorVariableTags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#key FrauddetectorVariable#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#value FrauddetectorVariable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#key FrauddetectorVariable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_variable#value FrauddetectorVariable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorVariableTagsList <a name="FrauddetectorVariableTagsList" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorVariableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorVariableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>]

---


### FrauddetectorVariableTagsOutputReference <a name="FrauddetectorVariableTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_variable

frauddetectorVariable.FrauddetectorVariableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorVariableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>

---



