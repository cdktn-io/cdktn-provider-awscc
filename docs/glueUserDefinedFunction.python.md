# `glueUserDefinedFunction` Submodule <a name="`glueUserDefinedFunction` Submodule" id="@cdktn/provider-awscc.glueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueUserDefinedFunction <a name="GlueUserDefinedFunction" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function awscc_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_name: str,
  function_name: str,
  class_name: str = None,
  function_type: str = None,
  owner_name: str = None,
  owner_type: str = None,
  resource_uris: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the catalog database in which the function is located. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.className">class_name</a></code> | <code>str</code> | The Java class that contains the function code. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.functionType">function_type</a></code> | <code>str</code> | The type of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerName">owner_name</a></code> | <code>str</code> | The owner of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerType">owner_type</a></code> | <code>str</code> | The owner type. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.resourceUris">resource_uris</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]</code> | The resource URIs for the function. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the catalog database in which the function is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#function_name GlueUserDefinedFunction#function_name}

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.className"></a>

- *Type:* str

The Java class that contains the function code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}

---

##### `function_type`<sup>Optional</sup> <a name="function_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.functionType"></a>

- *Type:* str

The type of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#function_type GlueUserDefinedFunction#function_type}

---

##### `owner_name`<sup>Optional</sup> <a name="owner_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerName"></a>

- *Type:* str

The owner of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}

---

##### `owner_type`<sup>Optional</sup> <a name="owner_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.ownerType"></a>

- *Type:* str

The owner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}

---

##### `resource_uris`<sup>Optional</sup> <a name="resource_uris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.resourceUris"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]

The resource URIs for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris">put_resource_uris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetClassName">reset_class_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetFunctionType">reset_function_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOwnerName">reset_owner_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOwnerType">reset_owner_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris">reset_resource_uris</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_uris` <a name="put_resource_uris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris"></a>

```python
def put_resource_uris(
  value: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]

---

##### `reset_class_name` <a name="reset_class_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetClassName"></a>

```python
def reset_class_name() -> None
```

##### `reset_function_type` <a name="reset_function_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetFunctionType"></a>

```python
def reset_function_type() -> None
```

##### `reset_owner_name` <a name="reset_owner_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOwnerName"></a>

```python
def reset_owner_name() -> None
```

##### `reset_owner_type` <a name="reset_owner_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetOwnerType"></a>

```python
def reset_owner_type() -> None
```

##### `reset_resource_uris` <a name="reset_resource_uris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris"></a>

```python
def reset_resource_uris() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueUserDefinedFunction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueUserDefinedFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueUserDefinedFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueUserDefinedFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueUserDefinedFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris">resource_uris</a></code> | <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionTypeInput">function_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput">owner_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput">owner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput">resource_uris_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionType">function_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName">owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_uris`<sup>Required</sup> <a name="resource_uris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris"></a>

```python
resource_uris: GlueUserDefinedFunctionResourceUrisList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a>

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_type_input`<sup>Optional</sup> <a name="function_type_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionTypeInput"></a>

```python
function_type_input: str
```

- *Type:* str

---

##### `owner_name_input`<sup>Optional</sup> <a name="owner_name_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput"></a>

```python
owner_name_input: str
```

- *Type:* str

---

##### `owner_type_input`<sup>Optional</sup> <a name="owner_type_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput"></a>

```python
owner_type_input: str
```

- *Type:* str

---

##### `resource_uris_input`<sup>Optional</sup> <a name="resource_uris_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput"></a>

```python
resource_uris_input: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_type`<sup>Required</sup> <a name="function_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.functionType"></a>

```python
function_type: str
```

- *Type:* str

---

##### `owner_name`<sup>Required</sup> <a name="owner_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName"></a>

```python
owner_name: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueUserDefinedFunctionConfig <a name="GlueUserDefinedFunctionConfig" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_name: str,
  function_name: str,
  class_name: str = None,
  function_type: str = None,
  owner_name: str = None,
  owner_type: str = None,
  resource_uris: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the catalog database in which the function is located. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className">class_name</a></code> | <code>str</code> | The Java class that contains the function code. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.functionType">function_type</a></code> | <code>str</code> | The type of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName">owner_name</a></code> | <code>str</code> | The owner of the function. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType">owner_type</a></code> | <code>str</code> | The owner type. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris">resource_uris</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]</code> | The resource URIs for the function. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the catalog database in which the function is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#function_name GlueUserDefinedFunction#function_name}

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className"></a>

```python
class_name: str
```

- *Type:* str

The Java class that contains the function code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}

---

##### `function_type`<sup>Optional</sup> <a name="function_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.functionType"></a>

```python
function_type: str
```

- *Type:* str

The type of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#function_type GlueUserDefinedFunction#function_type}

---

##### `owner_name`<sup>Optional</sup> <a name="owner_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName"></a>

```python
owner_name: str
```

- *Type:* str

The owner of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}

---

##### `owner_type`<sup>Optional</sup> <a name="owner_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

The owner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}

---

##### `resource_uris`<sup>Optional</sup> <a name="resource_uris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris"></a>

```python
resource_uris: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]

The resource URIs for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

### GlueUserDefinedFunctionResourceUris <a name="GlueUserDefinedFunctionResourceUris" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.Initializer"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris(
  resource_type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType">resource_type</a></code> | <code>str</code> | The type of the resource. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri">uri</a></code> | <code>str</code> | The URI for accessing the resource. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_user_defined_function#uri GlueUserDefinedFunction#uri}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueUserDefinedFunctionResourceUrisList <a name="GlueUserDefinedFunctionResourceUrisList" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueUserDefinedFunctionResourceUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueUserDefinedFunctionResourceUris]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>]

---


### GlueUserDefinedFunctionResourceUrisOutputReference <a name="GlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_user_defined_function

glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueUserDefinedFunctionResourceUris
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>

---



