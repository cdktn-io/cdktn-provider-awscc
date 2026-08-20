# `accessanalyzerArchiveRule` Submodule <a name="`accessanalyzerArchiveRule` Submodule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerArchiveRule <a name="AccessanalyzerArchiveRule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  analyzer_name: str,
  filter: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter],
  rule_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.analyzerName">analyzer_name</a></code> | <code>str</code> | The name of the analyzer for the archive rule. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]</code> | The criteria for the archive rule. A map of filter criteria property names to their criterion values. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | The name of the archive rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.analyzerName"></a>

- *Type:* str

The name of the analyzer for the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]

The criteria for the archive rule. A map of filter criteria property names to their criterion values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.ruleName"></a>

- *Type:* str

The name of the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter">put_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessanalyzerArchiveRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput">analyzer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName">analyzer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter"></a>

```python
filter: AccessanalyzerArchiveRuleFilterMap
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `analyzer_name_input`<sup>Optional</sup> <a name="analyzer_name_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput"></a>

```python
analyzer_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput"></a>

```python
filter_input: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName"></a>

```python
analyzer_name: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerArchiveRuleConfig <a name="AccessanalyzerArchiveRuleConfig" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  analyzer_name: str,
  filter: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter],
  rule_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName">analyzer_name</a></code> | <code>str</code> | The name of the analyzer for the archive rule. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]</code> | The criteria for the archive rule. A map of filter criteria property names to their criterion values. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the archive rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName"></a>

```python
analyzer_name: str
```

- *Type:* str

The name of the analyzer for the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter"></a>

```python
filter: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]

The criteria for the archive rule. A map of filter criteria property names to their criterion values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}

---

### AccessanalyzerArchiveRuleFilter <a name="AccessanalyzerArchiveRuleFilter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.Initializer"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter(
  contains: typing.List[str] = None,
  eq: typing.List[str] = None,
  exists: bool | IResolvable = None,
  neq: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains">contains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq">eq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists">exists</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq">neq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains"></a>

```python
contains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}.

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists"></a>

```python
exists: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerArchiveRuleFilterMap <a name="AccessanalyzerArchiveRuleFilterMap" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get"></a>

```python
def get(
  key: str
) -> AccessanalyzerArchiveRuleFilterOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AccessanalyzerArchiveRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>]

---


### AccessanalyzerArchiveRuleFilterOutputReference <a name="AccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import accessanalyzer_archive_rule

accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq">reset_eq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists">reset_exists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq">reset_neq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_eq` <a name="reset_eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq"></a>

```python
def reset_eq() -> None
```

##### `reset_exists` <a name="reset_exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists"></a>

```python
def reset_exists() -> None
```

##### `reset_neq` <a name="reset_neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq"></a>

```python
def reset_neq() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput">contains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput">eq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput">exists_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput">neq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains">contains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists">exists</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput"></a>

```python
contains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq_input`<sup>Optional</sup> <a name="eq_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput"></a>

```python
eq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exists_input`<sup>Optional</sup> <a name="exists_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput"></a>

```python
exists_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `neq_input`<sup>Optional</sup> <a name="neq_input" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput"></a>

```python
neq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```python
contains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```python
exists: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccessanalyzerArchiveRuleFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>

---



