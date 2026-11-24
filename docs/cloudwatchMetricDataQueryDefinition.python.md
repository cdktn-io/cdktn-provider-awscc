# `cloudwatchMetricDataQueryDefinition` Submodule <a name="`cloudwatchMetricDataQueryDefinition` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricDataQueryDefinition <a name="CloudwatchMetricDataQueryDefinition" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition awscc_cloudwatch_metric_data_query_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  expression: str,
  path: str,
  type: str,
  tags: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.expression">expression</a></code> | <code>str</code> | The metric query. It is stored as-is and is not validated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.path">path</a></code> | <code>str</code> | The name of the metric data query definition. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.type">type</a></code> | <code>str</code> | The query language of Expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]</code> | An array of key-value pairs to apply to the metric data query definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.expression"></a>

- *Type:* str

The metric query. It is stored as-is and is not validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#expression CloudwatchMetricDataQueryDefinition#expression}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.path"></a>

- *Type:* str

The name of the metric data query definition.

Use '/' to organize definitions into folders. Must be unique in the account and Region. Changing it renames the definition in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#path CloudwatchMetricDataQueryDefinition#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.type"></a>

- *Type:* str

The query language of Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#type CloudwatchMetricDataQueryDefinition#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]

An array of key-value pairs to apply to the metric data query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#tags CloudwatchMetricDataQueryDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchMetricDataQueryDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchMetricDataQueryDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricDataQueryDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId">metric_data_query_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_data_query_definition_id`<sup>Required</sup> <a name="metric_data_query_definition_id" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId"></a>

```python
metric_data_query_definition_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tags"></a>

```python
tags: CloudwatchMetricDataQueryDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList">CloudwatchMetricDataQueryDefinitionTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricDataQueryDefinitionConfig <a name="CloudwatchMetricDataQueryDefinitionConfig" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  expression: str,
  path: str,
  type: str,
  tags: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression">expression</a></code> | <code>str</code> | The metric query. It is stored as-is and is not validated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path">path</a></code> | <code>str</code> | The name of the metric data query definition. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type">type</a></code> | <code>str</code> | The query language of Expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]</code> | An array of key-value pairs to apply to the metric data query definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

The metric query. It is stored as-is and is not validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#expression CloudwatchMetricDataQueryDefinition#expression}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The name of the metric data query definition.

Use '/' to organize definitions into folders. Must be unique in the account and Region. Changing it renames the definition in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#path CloudwatchMetricDataQueryDefinition#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The query language of Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#type CloudwatchMetricDataQueryDefinition#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]

An array of key-value pairs to apply to the metric data query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#tags CloudwatchMetricDataQueryDefinition#tags}

---

### CloudwatchMetricDataQueryDefinitionTags <a name="CloudwatchMetricDataQueryDefinitionTags" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#key CloudwatchMetricDataQueryDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cloudwatch_metric_data_query_definition#value CloudwatchMetricDataQueryDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricDataQueryDefinitionTagsList <a name="CloudwatchMetricDataQueryDefinitionTagsList" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricDataQueryDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricDataQueryDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>]

---


### CloudwatchMetricDataQueryDefinitionTagsOutputReference <a name="CloudwatchMetricDataQueryDefinitionTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_data_query_definition

cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricDataQueryDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricDataQueryDefinition.CloudwatchMetricDataQueryDefinitionTags">CloudwatchMetricDataQueryDefinitionTags</a>

---



