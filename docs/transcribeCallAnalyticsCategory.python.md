# `transcribeCallAnalyticsCategory` Submodule <a name="`transcribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeCallAnalyticsCategory <a name="TranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category_name: str,
  rules: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules],
  input_type: str = None,
  tags: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.categoryName">category_name</a></code> | <code>str</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]</code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.inputType">input_type</a></code> | <code>str</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]</code> | Tags associated with the Call Analytics category. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category_name`<sup>Required</sup> <a name="category_name" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.categoryName"></a>

- *Type:* str

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `input_type`<sup>Optional</sup> <a name="input_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.inputType"></a>

- *Type:* str

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType">reset_input_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]

---

##### `reset_input_type` <a name="reset_input_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType"></a>

```python
def reset_input_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput">category_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput">input_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName">category_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType">input_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules"></a>

```python
rules: TranscribeCallAnalyticsCategoryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags"></a>

```python
tags: TranscribeCallAnalyticsCategoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a>

---

##### `category_name_input`<sup>Optional</sup> <a name="category_name_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput"></a>

```python
category_name_input: str
```

- *Type:* str

---

##### `input_type_input`<sup>Optional</sup> <a name="input_type_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput"></a>

```python
input_type_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]

---

##### `category_name`<sup>Required</sup> <a name="category_name" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName"></a>

```python
category_name: str
```

- *Type:* str

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallAnalyticsCategoryConfig <a name="TranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category_name: str,
  rules: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules],
  input_type: str = None,
  tags: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName">category_name</a></code> | <code>str</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]</code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType">input_type</a></code> | <code>str</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]</code> | Tags associated with the Call Analytics category. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category_name`<sup>Required</sup> <a name="category_name" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName"></a>

```python
category_name: str
```

- *Type:* str

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `input_type`<sup>Optional</sup> <a name="input_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

### TranscribeCallAnalyticsCategoryRules <a name="TranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules(
  interruption_filter: TranscribeCallAnalyticsCategoryRulesInterruptionFilter = None,
  non_talk_time_filter: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter = None,
  sentiment_filter: TranscribeCallAnalyticsCategoryRulesSentimentFilter = None,
  transcript_filter: TranscribeCallAnalyticsCategoryRulesTranscriptFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter">interruption_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter">non_talk_time_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter">sentiment_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter">transcript_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}. |

---

##### `interruption_filter`<sup>Optional</sup> <a name="interruption_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter"></a>

```python
interruption_filter: TranscribeCallAnalyticsCategoryRulesInterruptionFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}.

---

##### `non_talk_time_filter`<sup>Optional</sup> <a name="non_talk_time_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter"></a>

```python
non_talk_time_filter: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}.

---

##### `sentiment_filter`<sup>Optional</sup> <a name="sentiment_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter"></a>

```python
sentiment_filter: TranscribeCallAnalyticsCategoryRulesSentimentFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}.

---

##### `transcript_filter`<sup>Optional</sup> <a name="transcript_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter"></a>

```python
transcript_filter: TranscribeCallAnalyticsCategoryRulesTranscriptFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole">participant_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange = None,
  sentiments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole">participant_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments">sentiments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}. |

---

##### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `sentiments`<sup>Optional</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments"></a>

```python
sentiments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange = None,
  targets: typing.List[str] = None,
  transcript_filter_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole">participant_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType">transcript_filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}. |

---

##### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

##### `transcript_filter_type`<sup>Optional</sup> <a name="transcript_filter_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType"></a>

```python
transcript_filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first">first</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last">last</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryTags <a name="TranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```python
end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange">put_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange">put_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange">reset_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole">reset_participant_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange">reset_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_absolute_time_range` <a name="put_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange"></a>

```python
def put_absolute_time_range(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.endTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.startTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

##### `put_relative_time_range` <a name="put_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange"></a>

```python
def put_relative_time_range(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
) -> None
```

###### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.endPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.startPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

##### `reset_absolute_time_range` <a name="reset_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange"></a>

```python
def reset_absolute_time_range() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_participant_role` <a name="reset_participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole"></a>

```python
def reset_participant_role() -> None
```

##### `reset_relative_time_range` <a name="reset_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange"></a>

```python
def reset_relative_time_range() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput">absolute_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput">participant_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput">relative_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">participant_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_time_range`<sup>Required</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relative_time_range`<sup>Required</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `absolute_time_range_input`<sup>Optional</sup> <a name="absolute_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput"></a>

```python
absolute_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role_input`<sup>Optional</sup> <a name="participant_role_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput"></a>

```python
participant_role_input: str
```

- *Type:* str

---

##### `relative_time_range_input`<sup>Optional</sup> <a name="relative_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput"></a>

```python
relative_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role`<sup>Required</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage">reset_end_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage">reset_start_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_percentage` <a name="reset_end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```python
def reset_end_percentage() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_percentage` <a name="reset_start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```python
def reset_start_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput">end_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput">start_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_percentage_input`<sup>Optional</sup> <a name="end_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```python
end_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage_input`<sup>Optional</sup> <a name="start_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```python
start_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_percentage`<sup>Required</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage`<sup>Required</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesList <a name="TranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscribeCallAnalyticsCategoryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscribeCallAnalyticsCategoryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>]

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```python
end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange">put_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange">put_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange">reset_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange">reset_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_absolute_time_range` <a name="put_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange"></a>

```python
def put_absolute_time_range(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.endTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.startTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

##### `put_relative_time_range` <a name="put_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange"></a>

```python
def put_relative_time_range(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
) -> None
```

###### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.endPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.startPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

##### `reset_absolute_time_range` <a name="reset_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange"></a>

```python
def reset_absolute_time_range() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_relative_time_range` <a name="reset_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange"></a>

```python
def reset_relative_time_range() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput">absolute_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput">relative_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_time_range`<sup>Required</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relative_time_range`<sup>Required</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `absolute_time_range_input`<sup>Optional</sup> <a name="absolute_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput"></a>

```python
absolute_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `relative_time_range_input`<sup>Optional</sup> <a name="relative_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput"></a>

```python
relative_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage">reset_end_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage">reset_start_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_percentage` <a name="reset_end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```python
def reset_end_percentage() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_percentage` <a name="reset_start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```python
def reset_start_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput">end_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput">start_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_percentage_input`<sup>Optional</sup> <a name="end_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```python
end_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage_input`<sup>Optional</sup> <a name="start_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```python
start_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_percentage`<sup>Required</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage`<sup>Required</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesOutputReference <a name="TranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter">put_interruption_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter">put_non_talk_time_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter">put_sentiment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter">put_transcript_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter">reset_interruption_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter">reset_non_talk_time_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter">reset_sentiment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter">reset_transcript_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interruption_filter` <a name="put_interruption_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter"></a>

```python
def put_interruption_filter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.absoluteTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.negate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

###### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.participantRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

###### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.relativeTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

##### `put_non_talk_time_filter` <a name="put_non_talk_time_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter"></a>

```python
def put_non_talk_time_filter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.absoluteTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.negate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

###### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.relativeTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

##### `put_sentiment_filter` <a name="put_sentiment_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter"></a>

```python
def put_sentiment_filter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange = None,
  sentiments: typing.List[str] = None
) -> None
```

###### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.absoluteTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.negate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

###### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.participantRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

###### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.relativeTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

###### `sentiments`<sup>Optional</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.sentiments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

##### `put_transcript_filter` <a name="put_transcript_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter"></a>

```python
def put_transcript_filter(
  absolute_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange = None,
  negate: bool | IResolvable = None,
  participant_role: str = None,
  relative_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange = None,
  targets: typing.List[str] = None,
  transcript_filter_type: str = None
) -> None
```

###### `absolute_time_range`<sup>Optional</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.absoluteTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.negate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

###### `participant_role`<sup>Optional</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.participantRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

###### `relative_time_range`<sup>Optional</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.relativeTimeRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

###### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.targets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

###### `transcript_filter_type`<sup>Optional</sup> <a name="transcript_filter_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.transcriptFilterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

##### `reset_interruption_filter` <a name="reset_interruption_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter"></a>

```python
def reset_interruption_filter() -> None
```

##### `reset_non_talk_time_filter` <a name="reset_non_talk_time_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter"></a>

```python
def reset_non_talk_time_filter() -> None
```

##### `reset_sentiment_filter` <a name="reset_sentiment_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter"></a>

```python
def reset_sentiment_filter() -> None
```

##### `reset_transcript_filter` <a name="reset_transcript_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter"></a>

```python
def reset_transcript_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">interruption_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">non_talk_time_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">sentiment_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">transcript_filter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput">interruption_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput">non_talk_time_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput">sentiment_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput">transcript_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interruption_filter`<sup>Required</sup> <a name="interruption_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```python
interruption_filter: TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `non_talk_time_filter`<sup>Required</sup> <a name="non_talk_time_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```python
non_talk_time_filter: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `sentiment_filter`<sup>Required</sup> <a name="sentiment_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```python
sentiment_filter: TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `transcript_filter`<sup>Required</sup> <a name="transcript_filter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```python
transcript_filter: TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `interruption_filter_input`<sup>Optional</sup> <a name="interruption_filter_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput"></a>

```python
interruption_filter_input: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `non_talk_time_filter_input`<sup>Optional</sup> <a name="non_talk_time_filter_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput"></a>

```python
non_talk_time_filter_input: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `sentiment_filter_input`<sup>Optional</sup> <a name="sentiment_filter_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput"></a>

```python
sentiment_filter_input: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `transcript_filter_input`<sup>Optional</sup> <a name="transcript_filter_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput"></a>

```python
transcript_filter_input: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```python
end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange">put_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange">put_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange">reset_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole">reset_participant_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange">reset_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments">reset_sentiments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_absolute_time_range` <a name="put_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange"></a>

```python
def put_absolute_time_range(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.endTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.startTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

##### `put_relative_time_range` <a name="put_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange"></a>

```python
def put_relative_time_range(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
) -> None
```

###### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.endPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.startPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

##### `reset_absolute_time_range` <a name="reset_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange"></a>

```python
def reset_absolute_time_range() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_participant_role` <a name="reset_participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole"></a>

```python
def reset_participant_role() -> None
```

##### `reset_relative_time_range` <a name="reset_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange"></a>

```python
def reset_relative_time_range() -> None
```

##### `reset_sentiments` <a name="reset_sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments"></a>

```python
def reset_sentiments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput">absolute_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput">participant_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput">relative_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput">sentiments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">participant_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">sentiments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_time_range`<sup>Required</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relative_time_range`<sup>Required</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `absolute_time_range_input`<sup>Optional</sup> <a name="absolute_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput"></a>

```python
absolute_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role_input`<sup>Optional</sup> <a name="participant_role_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput"></a>

```python
participant_role_input: str
```

- *Type:* str

---

##### `relative_time_range_input`<sup>Optional</sup> <a name="relative_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput"></a>

```python
relative_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `sentiments_input`<sup>Optional</sup> <a name="sentiments_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput"></a>

```python
sentiments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role`<sup>Required</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

---

##### `sentiments`<sup>Required</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```python
sentiments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage">reset_end_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage">reset_start_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_percentage` <a name="reset_end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```python
def reset_end_percentage() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_percentage` <a name="reset_start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```python
def reset_start_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput">end_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput">start_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_percentage_input`<sup>Optional</sup> <a name="end_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```python
end_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage_input`<sup>Optional</sup> <a name="start_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```python
start_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_percentage`<sup>Required</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage`<sup>Required</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">end_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```python
end_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```python
end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange">put_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange">put_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange">reset_absolute_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole">reset_participant_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange">reset_relative_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType">reset_transcript_filter_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_absolute_time_range` <a name="put_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange"></a>

```python
def put_absolute_time_range(
  end_time: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_time: typing.Union[int, float] = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.endTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.startTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

##### `put_relative_time_range` <a name="put_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange"></a>

```python
def put_relative_time_range(
  end_percentage: typing.Union[int, float] = None,
  first: typing.Union[int, float] = None,
  last: typing.Union[int, float] = None,
  start_percentage: typing.Union[int, float] = None
) -> None
```

###### `end_percentage`<sup>Optional</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.endPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

###### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.first"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

###### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.last"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

###### `start_percentage`<sup>Optional</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.startPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

##### `reset_absolute_time_range` <a name="reset_absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange"></a>

```python
def reset_absolute_time_range() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_participant_role` <a name="reset_participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole"></a>

```python
def reset_participant_role() -> None
```

##### `reset_relative_time_range` <a name="reset_relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange"></a>

```python
def reset_relative_time_range() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_transcript_filter_type` <a name="reset_transcript_filter_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType"></a>

```python
def reset_transcript_filter_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">absolute_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">relative_time_range</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput">absolute_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput">participant_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput">relative_time_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput">transcript_filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">participant_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">transcript_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_time_range`<sup>Required</sup> <a name="absolute_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```python
absolute_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relative_time_range`<sup>Required</sup> <a name="relative_time_range" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```python
relative_time_range: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `absolute_time_range_input`<sup>Optional</sup> <a name="absolute_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput"></a>

```python
absolute_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role_input`<sup>Optional</sup> <a name="participant_role_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput"></a>

```python
participant_role_input: str
```

- *Type:* str

---

##### `relative_time_range_input`<sup>Optional</sup> <a name="relative_time_range_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput"></a>

```python
relative_time_range_input: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transcript_filter_type_input`<sup>Optional</sup> <a name="transcript_filter_type_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput"></a>

```python
transcript_filter_type_input: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `participant_role`<sup>Required</sup> <a name="participant_role" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```python
participant_role: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transcript_filter_type`<sup>Required</sup> <a name="transcript_filter_type" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```python
transcript_filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage">reset_end_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast">reset_last</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage">reset_start_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_percentage` <a name="reset_end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```python
def reset_end_percentage() -> None
```

##### `reset_first` <a name="reset_first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_last` <a name="reset_last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast"></a>

```python
def reset_last() -> None
```

##### `reset_start_percentage` <a name="reset_start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```python
def reset_start_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput">end_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput">last_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput">start_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">end_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">start_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_percentage_input`<sup>Optional</sup> <a name="end_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```python
end_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_input`<sup>Optional</sup> <a name="last_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```python
last_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage_input`<sup>Optional</sup> <a name="start_percentage_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```python
start_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_percentage`<sup>Required</sup> <a name="end_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```python
end_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```python
last: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_percentage`<sup>Required</sup> <a name="start_percentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```python
start_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryTagsList <a name="TranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscribeCallAnalyticsCategoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscribeCallAnalyticsCategoryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>]

---


### TranscribeCallAnalyticsCategoryTagsOutputReference <a name="TranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transcribe_call_analytics_category

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscribeCallAnalyticsCategoryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>

---



