# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-awscc.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-awscc.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection awscc_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  connection_input: GlueConnectionConnectionInput,
  tags: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the data catalog to create the catalog object in. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.connectionInput">connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | The connection properties used for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.tags">tags</a></code> | <code>str</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.catalogId"></a>

- *Type:* str

The ID of the data catalog to create the catalog object in.

Currently, this should be the AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}

---

##### `connection_input`<sup>Required</sup> <a name="connection_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.connectionInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

The connection properties used for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_input GlueConnection#connection_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.tags"></a>

- *Type:* str

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#tags GlueConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput">put_connection_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_input` <a name="put_connection_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput"></a>

```python
def put_connection_input(
  connection_type: str,
  athena_properties: str = None,
  authentication_configuration: GlueConnectionConnectionInputAuthenticationConfiguration = None,
  connection_properties: str = None,
  description: str = None,
  match_criteria: typing.List[str] = None,
  name: str = None,
  physical_connection_requirements: GlueConnectionConnectionInputPhysicalConnectionRequirements = None,
  python_properties: str = None,
  spark_properties: str = None,
  validate_credentials: bool | IResolvable = None,
  validate_for_compute_environments: typing.List[str] = None
) -> None
```

###### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.connectionType"></a>

- *Type:* str

The type of the connection that needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}

---

###### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.athenaProperties"></a>

- *Type:* str

Connection properties specific to the Athena compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}

---

###### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

The authentication configuration used to connect to the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

###### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.connectionProperties"></a>

- *Type:* str

A map of key-value pairs used as parameters for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.description"></a>

- *Type:* str

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#description GlueConnection#description}

---

###### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.matchCriteria"></a>

- *Type:* typing.List[str]

A list of criteria that can be used in selecting this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.name"></a>

- *Type:* str

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#name GlueConnection#name}

---

###### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.physicalConnectionRequirements"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

The physical connection requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

###### `python_properties`<sup>Optional</sup> <a name="python_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.pythonProperties"></a>

- *Type:* str

Connection properties specific to the Python compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#python_properties GlueConnection#python_properties}

---

###### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.sparkProperties"></a>

- *Type:* str

Connection properties specific to the Spark compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#spark_properties GlueConnection#spark_properties}

---

###### `validate_credentials`<sup>Optional</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.validateCredentials"></a>

- *Type:* bool | cdktn.IResolvable

A flag to validate the credentials during create connection. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_credentials GlueConnection#validate_credentials}

---

###### `validate_for_compute_environments`<sup>Optional</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.validateForComputeEnvironments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}.

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput">connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput">connection_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags">tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_input`<sup>Required</sup> <a name="connection_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput"></a>

```python
connection_input: GlueConnectionConnectionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `connection_input_input`<sup>Optional</sup> <a name="connection_input_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput"></a>

```python
connection_input_input: IResolvable | GlueConnectionConnectionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_id: str,
  connection_input: GlueConnectionConnectionInput,
  tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The ID of the data catalog to create the catalog object in. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput">connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | The connection properties used for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags">tags</a></code> | <code>str</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The ID of the data catalog to create the catalog object in.

Currently, this should be the AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}

---

##### `connection_input`<sup>Required</sup> <a name="connection_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput"></a>

```python
connection_input: GlueConnectionConnectionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

The connection properties used for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_input GlueConnection#connection_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#tags GlueConnection#tags}

---

### GlueConnectionConnectionInput <a name="GlueConnectionConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInput(
  connection_type: str,
  athena_properties: str = None,
  authentication_configuration: GlueConnectionConnectionInputAuthenticationConfiguration = None,
  connection_properties: str = None,
  description: str = None,
  match_criteria: typing.List[str] = None,
  name: str = None,
  physical_connection_requirements: GlueConnectionConnectionInputPhysicalConnectionRequirements = None,
  python_properties: str = None,
  spark_properties: str = None,
  validate_credentials: bool | IResolvable = None,
  validate_for_compute_environments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType">connection_type</a></code> | <code>str</code> | The type of the connection that needs to be created. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties">athena_properties</a></code> | <code>str</code> | Connection properties specific to the Athena compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | The authentication configuration used to connect to the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties">connection_properties</a></code> | <code>str</code> | A map of key-value pairs used as parameters for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description">description</a></code> | <code>str</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria">match_criteria</a></code> | <code>typing.List[str]</code> | A list of criteria that can be used in selecting this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name">name</a></code> | <code>str</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | The physical connection requirements. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties">python_properties</a></code> | <code>str</code> | Connection properties specific to the Python compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties">spark_properties</a></code> | <code>str</code> | Connection properties specific to the Spark compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials">validate_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag to validate the credentials during create connection. Default is true. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments">validate_for_compute_environments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}. |

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

The type of the connection that needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}

---

##### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties"></a>

```python
athena_properties: str
```

- *Type:* str

Connection properties specific to the Athena compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration"></a>

```python
authentication_configuration: GlueConnectionConnectionInputAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

The authentication configuration used to connect to the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties"></a>

```python
connection_properties: str
```

- *Type:* str

A map of key-value pairs used as parameters for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#description GlueConnection#description}

---

##### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria"></a>

```python
match_criteria: typing.List[str]
```

- *Type:* typing.List[str]

A list of criteria that can be used in selecting this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#name GlueConnection#name}

---

##### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: GlueConnectionConnectionInputPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

The physical connection requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `python_properties`<sup>Optional</sup> <a name="python_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties"></a>

```python
python_properties: str
```

- *Type:* str

Connection properties specific to the Python compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#python_properties GlueConnection#python_properties}

---

##### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties"></a>

```python
spark_properties: str
```

- *Type:* str

Connection properties specific to the Spark compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#spark_properties GlueConnection#spark_properties}

---

##### `validate_credentials`<sup>Optional</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials"></a>

```python
validate_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag to validate the credentials during create connection. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_credentials GlueConnection#validate_credentials}

---

##### `validate_for_compute_environments`<sup>Optional</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments"></a>

```python
validate_for_compute_environments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}.

---

### GlueConnectionConnectionInputAuthenticationConfiguration <a name="GlueConnectionConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration(
  authentication_type: str = None,
  basic_authentication_credentials: GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: str = None,
  kms_key_arn: str = None,
  o_auth2_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType">authentication_type</a></code> | <code>str</code> | A structure containing the authentication configuration in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | For supplying basic auth credentials when not providing a SecretArn value. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>str</code> | A structure containing the authentication credentials in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties">o_auth2_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | A structure containing properties for OAuth2 in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | The secret manager ARN to store credentials in the CreateConnection request. |

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

A structure containing the authentication configuration in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}

---

##### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

For supplying basic auth credentials when not providing a SecretArn value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: str
```

- *Type:* str

A structure containing the authentication credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}

---

##### `o_auth2_properties`<sup>Optional</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```python
o_auth2_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

A structure containing properties for OAuth2 in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_properties GlueConnection#o_auth_2_properties}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The secret manager ARN to store credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}

---

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials(
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>str</code> | The password used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username">username</a></code> | <code>str</code> | The username used in the authentication configuration. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

The password used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#password GlueConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

The username used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#username GlueConnection#username}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties(
  authorization_code_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = None,
  o_auth2_client_application: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = None,
  o_auth2_credentials: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = None,
  o_auth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">o_auth2_client_application</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | The OAuth2 client app used for the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">o_auth2_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | A structure containing the OAuth2 credentials used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">o_auth2_grant_type</a></code> | <code>str</code> | The grant type used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">token_url</a></code> | <code>str</code> | The URL used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>str</code> | A map of key-value pairs used in the authentication configuration. |

---

##### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `o_auth2_client_application`<sup>Optional</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```python
o_auth2_client_application: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

The OAuth2 client app used for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_client_application GlueConnection#o_auth_2_client_application}

---

##### `o_auth2_credentials`<sup>Optional</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```python
o_auth2_credentials: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

A structure containing the OAuth2 credentials used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_credentials GlueConnection#o_auth_2_credentials}

---

##### `o_auth2_grant_type`<sup>Optional</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```python
o_auth2_grant_type: str
```

- *Type:* str

The grant type used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_grant_type GlueConnection#o_auth_2_grant_type}

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

The URL used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url GlueConnection#token_url}

---

##### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: str
```

- *Type:* str

A map of key-value pairs used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties(
  authorization_code: str = None,
  redirect_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorization_code</a></code> | <code>str</code> | The authorization code used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirect_uri</a></code> | <code>str</code> | The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. |

---

##### `authorization_code`<sup>Optional</sup> <a name="authorization_code" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

The authorization code used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}

---

##### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | The reference to the SaaS-side client app that is AWS managed. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | The client application clientID if the ClientAppType is USER_MANAGED. |

---

##### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

The reference to the SaaS-side client app that is AWS managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}

---

##### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

The client application clientID if the ClientAppType is USER_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">access_token</a></code> | <code>str</code> | The access token used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">jwt_token</a></code> | <code>str</code> | The JSON Web Token (JWT) used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">refresh_token</a></code> | <code>str</code> | The refresh token used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | The client application client secret if the client application is user managed. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

The access token used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#access_token GlueConnection#access_token}

---

##### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

The JSON Web Token (JWT) used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}

---

##### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

The refresh token used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}

---

##### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

The client application client secret if the client application is user managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}

---

### GlueConnectionConnectionInputPhysicalConnectionRequirements <a name="GlueConnectionConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The availability zone where the connection is located. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | The security group ID list used by the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId">subnet_id</a></code> | <code>str</code> | The subnet ID used by the connection. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The availability zone where the connection is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}

---

##### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

The security group ID list used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The subnet ID used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">reset_authorization_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">reset_redirect_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_code` <a name="reset_authorization_code" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```python
def reset_authorization_code() -> None
```

##### `reset_redirect_uri` <a name="reset_redirect_uri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```python
def reset_redirect_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorization_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorization_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_input`<sup>Optional</sup> <a name="authorization_code_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```python
authorization_code_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">reset_aws_managed_client_application_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">reset_user_managed_client_application_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_managed_client_application_reference` <a name="reset_aws_managed_client_application_reference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```python
def reset_aws_managed_client_application_reference() -> None
```

##### `reset_user_managed_client_application_client_id` <a name="reset_user_managed_client_application_client_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```python
def reset_user_managed_client_application_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">aws_managed_client_application_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">user_managed_client_application_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference_input`<sup>Optional</sup> <a name="aws_managed_client_application_reference_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```python
aws_managed_client_application_reference_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id_input`<sup>Optional</sup> <a name="user_managed_client_application_client_id_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```python
user_managed_client_application_client_id_input: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference`<sup>Required</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id`<sup>Required</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">reset_jwt_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">reset_refresh_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">reset_user_managed_client_application_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_jwt_token` <a name="reset_jwt_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```python
def reset_jwt_token() -> None
```

##### `reset_refresh_token` <a name="reset_refresh_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```python
def reset_refresh_token() -> None
```

##### `reset_user_managed_client_application_client_secret` <a name="reset_user_managed_client_application_client_secret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```python
def reset_user_managed_client_application_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">jwt_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">user_managed_client_application_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwt_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `jwt_token_input`<sup>Optional</sup> <a name="jwt_token_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```python
jwt_token_input: str
```

- *Type:* str

---

##### `refresh_token_input`<sup>Optional</sup> <a name="refresh_token_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```python
refresh_token_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret_input`<sup>Optional</sup> <a name="user_managed_client_application_client_secret_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```python
user_managed_client_application_client_secret_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `jwt_token`<sup>Required</sup> <a name="jwt_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret`<sup>Required</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">put_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">put_o_auth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">put_o_auth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">reset_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">reset_o_auth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">reset_o_auth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">reset_o_auth2_grant_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">reset_token_url_parameters_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_code_properties` <a name="put_authorization_code_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```python
def put_authorization_code_properties(
  authorization_code: str = None,
  redirect_uri: str = None
) -> None
```

###### `authorization_code`<sup>Optional</sup> <a name="authorization_code" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.authorizationCode"></a>

- *Type:* str

The authorization code used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}

---

###### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.redirectUri"></a>

- *Type:* str

The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}

---

##### `put_o_auth2_client_application` <a name="put_o_auth2_client_application" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```python
def put_o_auth2_client_application(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
) -> None
```

###### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.awsManagedClientApplicationReference"></a>

- *Type:* str

The reference to the SaaS-side client app that is AWS managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}

---

###### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.userManagedClientApplicationClientId"></a>

- *Type:* str

The client application clientID if the ClientAppType is USER_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}

---

##### `put_o_auth2_credentials` <a name="put_o_auth2_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```python
def put_o_auth2_credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.accessToken"></a>

- *Type:* str

The access token used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#access_token GlueConnection#access_token}

---

###### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.jwtToken"></a>

- *Type:* str

The JSON Web Token (JWT) used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}

---

###### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.refreshToken"></a>

- *Type:* str

The refresh token used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}

---

###### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.userManagedClientApplicationClientSecret"></a>

- *Type:* str

The client application client secret if the client application is user managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}

---

##### `reset_authorization_code_properties` <a name="reset_authorization_code_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```python
def reset_authorization_code_properties() -> None
```

##### `reset_o_auth2_client_application` <a name="reset_o_auth2_client_application" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```python
def reset_o_auth2_client_application() -> None
```

##### `reset_o_auth2_credentials` <a name="reset_o_auth2_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```python
def reset_o_auth2_credentials() -> None
```

##### `reset_o_auth2_grant_type` <a name="reset_o_auth2_grant_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```python
def reset_o_auth2_grant_type() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```

##### `reset_token_url_parameters_map` <a name="reset_token_url_parameters_map" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```python
def reset_token_url_parameters_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">o_auth2_client_application</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">o_auth2_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorization_code_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">o_auth2_client_application_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">o_auth2_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">o_auth2_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">token_url_parameters_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">o_auth2_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_properties`<sup>Required</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `o_auth2_client_application`<sup>Required</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```python
o_auth2_client_application: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `o_auth2_credentials`<sup>Required</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```python
o_auth2_credentials: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `authorization_code_properties_input`<sup>Optional</sup> <a name="authorization_code_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```python
authorization_code_properties_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `o_auth2_client_application_input`<sup>Optional</sup> <a name="o_auth2_client_application_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```python
o_auth2_client_application_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `o_auth2_credentials_input`<sup>Optional</sup> <a name="o_auth2_credentials_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```python
o_auth2_credentials_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `o_auth2_grant_type_input`<sup>Optional</sup> <a name="o_auth2_grant_type_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```python
o_auth2_grant_type_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `token_url_parameters_map_input`<sup>Optional</sup> <a name="token_url_parameters_map_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```python
token_url_parameters_map_input: str
```

- *Type:* str

---

##### `o_auth2_grant_type`<sup>Required</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```python
o_auth2_grant_type: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `token_url_parameters_map`<sup>Required</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">put_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">put_o_auth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">reset_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">reset_custom_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">reset_o_auth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_authentication_credentials` <a name="put_basic_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```python
def put_basic_authentication_credentials(
  password: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.password"></a>

- *Type:* str

The password used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#password GlueConnection#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.username"></a>

- *Type:* str

The username used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#username GlueConnection#username}

---

##### `put_o_auth2_properties` <a name="put_o_auth2_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```python
def put_o_auth2_properties(
  authorization_code_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = None,
  o_auth2_client_application: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = None,
  o_auth2_credentials: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = None,
  o_auth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: str = None
) -> None
```

###### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.authorizationCodeProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

###### `o_auth2_client_application`<sup>Optional</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2ClientApplication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

The OAuth2 client app used for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_client_application GlueConnection#o_auth_2_client_application}

---

###### `o_auth2_credentials`<sup>Optional</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2Credentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

A structure containing the OAuth2 credentials used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_credentials GlueConnection#o_auth_2_credentials}

---

###### `o_auth2_grant_type`<sup>Optional</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2GrantType"></a>

- *Type:* str

The grant type used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_grant_type GlueConnection#o_auth_2_grant_type}

---

###### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.tokenUrl"></a>

- *Type:* str

The URL used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url GlueConnection#token_url}

---

###### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.tokenUrlParametersMap"></a>

- *Type:* str

A map of key-value pairs used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_basic_authentication_credentials` <a name="reset_basic_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```python
def reset_basic_authentication_credentials() -> None
```

##### `reset_custom_authentication_credentials` <a name="reset_custom_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```python
def reset_custom_authentication_credentials() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_o_auth2_properties` <a name="reset_o_auth2_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```python
def reset_o_auth2_properties() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">o_auth2_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basic_authentication_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">custom_authentication_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">o_auth2_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_authentication_credentials`<sup>Required</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `o_auth2_properties`<sup>Required</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```python
o_auth2_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `basic_authentication_credentials_input`<sup>Optional</sup> <a name="basic_authentication_credentials_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```python
basic_authentication_credentials_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `custom_authentication_credentials_input`<sup>Optional</sup> <a name="custom_authentication_credentials_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```python
custom_authentication_credentials_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `o_auth2_properties_input`<sup>Optional</sup> <a name="o_auth2_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```python
o_auth2_properties_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `custom_authentication_credentials`<sup>Required</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---


### GlueConnectionConnectionInputOutputReference <a name="GlueConnectionConnectionInputOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements">put_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties">reset_athena_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties">reset_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria">reset_match_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements">reset_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties">reset_python_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties">reset_spark_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials">reset_validate_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments">reset_validate_for_compute_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  authentication_type: str = None,
  basic_authentication_credentials: GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: str = None,
  kms_key_arn: str = None,
  o_auth2_properties: GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties = None,
  secret_arn: str = None
) -> None
```

###### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.authenticationType"></a>

- *Type:* str

A structure containing the authentication configuration in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}

---

###### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.basicAuthenticationCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

For supplying basic auth credentials when not providing a SecretArn value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

###### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.customAuthenticationCredentials"></a>

- *Type:* str

A structure containing the authentication credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}

---

###### `o_auth2_properties`<sup>Optional</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.oAuth2Properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

A structure containing properties for OAuth2 in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_properties GlueConnection#o_auth_2_properties}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.secretArn"></a>

- *Type:* str

The secret manager ARN to store credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}

---

##### `put_physical_connection_requirements` <a name="put_physical_connection_requirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```python
def put_physical_connection_requirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.availabilityZone"></a>

- *Type:* str

The availability zone where the connection is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}

---

###### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.securityGroupIdList"></a>

- *Type:* typing.List[str]

The security group ID list used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.subnetId"></a>

- *Type:* str

The subnet ID used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}

---

##### `reset_athena_properties` <a name="reset_athena_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties"></a>

```python
def reset_athena_properties() -> None
```

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_connection_properties` <a name="reset_connection_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties"></a>

```python
def reset_connection_properties() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_match_criteria` <a name="reset_match_criteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria"></a>

```python
def reset_match_criteria() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_physical_connection_requirements` <a name="reset_physical_connection_requirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```python
def reset_physical_connection_requirements() -> None
```

##### `reset_python_properties` <a name="reset_python_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties"></a>

```python
def reset_python_properties() -> None
```

##### `reset_spark_properties` <a name="reset_spark_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties"></a>

```python
def reset_spark_properties() -> None
```

##### `reset_validate_credentials` <a name="reset_validate_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials"></a>

```python
def reset_validate_credentials() -> None
```

##### `reset_validate_for_compute_environments` <a name="reset_validate_for_compute_environments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```python
def reset_validate_for_compute_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput">athena_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput">connection_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput">match_criteria_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput">physical_connection_requirements_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput">python_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput">spark_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput">validate_credentials_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">validate_for_compute_environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties">athena_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties">connection_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria">match_criteria</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties">python_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties">spark_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials">validate_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments">validate_for_compute_environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration"></a>

```python
authentication_configuration: GlueConnectionConnectionInputAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `physical_connection_requirements`<sup>Required</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `athena_properties_input`<sup>Optional</sup> <a name="athena_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```python
athena_properties_input: str
```

- *Type:* str

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: IResolvable | GlueConnectionConnectionInputAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---

##### `connection_properties_input`<sup>Optional</sup> <a name="connection_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```python
connection_properties_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `match_criteria_input`<sup>Optional</sup> <a name="match_criteria_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput"></a>

```python
match_criteria_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_connection_requirements_input`<sup>Optional</sup> <a name="physical_connection_requirements_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```python
physical_connection_requirements_input: IResolvable | GlueConnectionConnectionInputPhysicalConnectionRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---

##### `python_properties_input`<sup>Optional</sup> <a name="python_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```python
python_properties_input: str
```

- *Type:* str

---

##### `spark_properties_input`<sup>Optional</sup> <a name="spark_properties_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```python
spark_properties_input: str
```

- *Type:* str

---

##### `validate_credentials_input`<sup>Optional</sup> <a name="validate_credentials_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput"></a>

```python
validate_credentials_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validate_for_compute_environments_input`<sup>Optional</sup> <a name="validate_for_compute_environments_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```python
validate_for_compute_environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties"></a>

```python
athena_properties: str
```

- *Type:* str

---

##### `connection_properties`<sup>Required</sup> <a name="connection_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties"></a>

```python
connection_properties: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria"></a>

```python
match_criteria: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_properties`<sup>Required</sup> <a name="python_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties"></a>

```python
python_properties: str
```

- *Type:* str

---

##### `spark_properties`<sup>Required</sup> <a name="spark_properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties"></a>

```python
spark_properties: str
```

- *Type:* str

---

##### `validate_credentials`<sup>Required</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials"></a>

```python
validate_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validate_for_compute_environments`<sup>Required</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```python
validate_for_compute_environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---


### GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_connection

glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">reset_security_group_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_security_group_id_list` <a name="reset_security_group_id_list" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```python
def reset_security_group_id_list() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueConnectionConnectionInputPhysicalConnectionRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---



