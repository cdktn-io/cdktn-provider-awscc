# `logsQueryDefinition` Submodule <a name="`logsQueryDefinition` Submodule" id="@cdktn/provider-awscc.logsQueryDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsQueryDefinition <a name="LogsQueryDefinition" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition awscc_logs_query_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  query_string: str,
  log_group_names: typing.List[str] = None,
  parameters: IResolvable | typing.List[LogsQueryDefinitionParameters] = None,
  query_language: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the saved query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.queryString">query_string</a></code> | <code>str</code> | The query string to use for this definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | Optionally define specific log groups as part of your query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]</code> | Use this parameter to include specific query parameters as part of your query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.queryLanguage">query_language</a></code> | <code>str</code> | Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.name"></a>

- *Type:* str

A name for the saved query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#name LogsQueryDefinition#name}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.queryString"></a>

- *Type:* str

The query string to use for this definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#query_string LogsQueryDefinition#query_string}

---

##### `log_group_names`<sup>Optional</sup> <a name="log_group_names" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.logGroupNames"></a>

- *Type:* typing.List[str]

Optionally define specific log groups as part of your query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#log_group_names LogsQueryDefinition#log_group_names}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]

Use this parameter to include specific query parameters as part of your query definition.

Query parameters are supported only for Logs Insights QL queries. Query parameters allow you to use placeholder variables in your query string that are substituted with values at execution time. Use the {{parameterName}} syntax in your query string to reference a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#parameters LogsQueryDefinition#parameters}

---

##### `query_language`<sup>Optional</sup> <a name="query_language" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.Initializer.parameter.queryLanguage"></a>

- *Type:* str

Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#query_language LogsQueryDefinition#query_language}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetLogGroupNames">reset_log_group_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetQueryLanguage">reset_query_language</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[LogsQueryDefinitionParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]

---

##### `reset_log_group_names` <a name="reset_log_group_names" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetLogGroupNames"></a>

```python
def reset_log_group_names() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_query_language` <a name="reset_query_language" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.resetQueryLanguage"></a>

```python
def reset_query_language() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsQueryDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsQueryDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsQueryDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsQueryDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsQueryDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList">LogsQueryDefinitionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryDefinitionId">query_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.logGroupNamesInput">log_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryLanguageInput">query_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryLanguage">query_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.parameters"></a>

```python
parameters: LogsQueryDefinitionParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList">LogsQueryDefinitionParametersList</a>

---

##### `query_definition_id`<sup>Required</sup> <a name="query_definition_id" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryDefinitionId"></a>

```python
query_definition_id: str
```

- *Type:* str

---

##### `log_group_names_input`<sup>Optional</sup> <a name="log_group_names_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.logGroupNamesInput"></a>

```python
log_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[LogsQueryDefinitionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]

---

##### `query_language_input`<sup>Optional</sup> <a name="query_language_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryLanguageInput"></a>

```python
query_language_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `log_group_names`<sup>Required</sup> <a name="log_group_names" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.logGroupNames"></a>

```python
log_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_language`<sup>Required</sup> <a name="query_language" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryLanguage"></a>

```python
query_language: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsQueryDefinitionConfig <a name="LogsQueryDefinitionConfig" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  query_string: str,
  log_group_names: typing.List[str] = None,
  parameters: IResolvable | typing.List[LogsQueryDefinitionParameters] = None,
  query_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.name">name</a></code> | <code>str</code> | A name for the saved query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.queryString">query_string</a></code> | <code>str</code> | The query string to use for this definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.logGroupNames">log_group_names</a></code> | <code>typing.List[str]</code> | Optionally define specific log groups as part of your query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]</code> | Use this parameter to include specific query parameters as part of your query definition. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.queryLanguage">query_language</a></code> | <code>str</code> | Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the saved query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#name LogsQueryDefinition#name}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

The query string to use for this definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#query_string LogsQueryDefinition#query_string}

---

##### `log_group_names`<sup>Optional</sup> <a name="log_group_names" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.logGroupNames"></a>

```python
log_group_names: typing.List[str]
```

- *Type:* typing.List[str]

Optionally define specific log groups as part of your query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#log_group_names LogsQueryDefinition#log_group_names}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.List[LogsQueryDefinitionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]

Use this parameter to include specific query parameters as part of your query definition.

Query parameters are supported only for Logs Insights QL queries. Query parameters allow you to use placeholder variables in your query string that are substituted with values at execution time. Use the {{parameterName}} syntax in your query string to reference a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#parameters LogsQueryDefinition#parameters}

---

##### `query_language`<sup>Optional</sup> <a name="query_language" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionConfig.property.queryLanguage"></a>

```python
query_language: str
```

- *Type:* str

Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#query_language LogsQueryDefinition#query_language}

---

### LogsQueryDefinitionParameters <a name="LogsQueryDefinitionParameters" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.Initializer"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinitionParameters(
  default_value: str = None,
  description: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.defaultValue">default_value</a></code> | <code>str</code> | The default value to use for this query parameter if no value is supplied at execution time. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.description">description</a></code> | <code>str</code> | A description of the query parameter that explains its purpose or expected values. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.name">name</a></code> | <code>str</code> | The name of the query parameter. |

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

The default value to use for this query parameter if no value is supplied at execution time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#default_value LogsQueryDefinition#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the query parameter that explains its purpose or expected values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#description LogsQueryDefinition#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the query parameter.

A query parameter name must start with a letter or underscore, and contain only letters, digits, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_query_definition#name LogsQueryDefinition#name}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsQueryDefinitionParametersList <a name="LogsQueryDefinitionParametersList" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinitionParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsQueryDefinitionParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsQueryDefinitionParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>]

---


### LogsQueryDefinitionParametersOutputReference <a name="LogsQueryDefinitionParametersOutputReference" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_query_definition

logsQueryDefinition.LogsQueryDefinitionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsQueryDefinitionParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsQueryDefinition.LogsQueryDefinitionParameters">LogsQueryDefinitionParameters</a>

---



