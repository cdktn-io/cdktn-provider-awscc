# `lexBotVersion` Submodule <a name="`lexBotVersion` Submodule" id="@cdktn/provider-awscc.lexBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotVersion <a name="LexBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version awscc_lex_bot_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bot_id: str,
  bot_version_locale_specification: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification],
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botId">bot_id</a></code> | <code>str</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botVersionLocaleSpecification">bot_version_locale_specification</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]</code> | Specifies the locales that Amazon Lex adds to this version. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the version. Use the description to help identify the version in lists. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botId"></a>

- *Type:* str

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_id LexBotVersion#bot_id}

---

##### `bot_version_locale_specification`<sup>Required</sup> <a name="bot_version_locale_specification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botVersionLocaleSpecification"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]

Specifies the locales that Amazon Lex adds to this version.

You can choose the Draft version or any other previously published version for each locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_version_locale_specification LexBotVersion#bot_version_locale_specification}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.description"></a>

- *Type:* str

A description of the version. Use the description to help identify the version in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#description LexBotVersion#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification">put_bot_version_locale_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bot_version_locale_specification` <a name="put_bot_version_locale_specification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification"></a>

```python
def put_bot_version_locale_specification(
  value: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LexBotVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LexBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LexBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification">bot_version_locale_specification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput">bot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput">bot_version_locale_specification_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId">bot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `bot_version_locale_specification`<sup>Required</sup> <a name="bot_version_locale_specification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification"></a>

```python
bot_version_locale_specification: LexBotVersionBotVersionLocaleSpecificationList
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `bot_id_input`<sup>Optional</sup> <a name="bot_id_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput"></a>

```python
bot_id_input: str
```

- *Type:* str

---

##### `bot_version_locale_specification_input`<sup>Optional</sup> <a name="bot_version_locale_specification_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput"></a>

```python
bot_version_locale_specification_input: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotVersionBotVersionLocaleSpecification <a name="LexBotVersionBotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionBotVersionLocaleSpecification(
  bot_version_locale_details: LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails,
  locale_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails">bot_version_locale_details</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | The version of a bot used for a bot locale. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId">locale_id</a></code> | <code>str</code> | The identifier of the language and locale that the bot will be used in. |

---

##### `bot_version_locale_details`<sup>Required</sup> <a name="bot_version_locale_details" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails"></a>

```python
bot_version_locale_details: LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

The version of a bot used for a bot locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_version_locale_details LexBotVersion#bot_version_locale_details}

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

The identifier of the language and locale that the bot will be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#locale_id LexBotVersion#locale_id}

---

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails(
  source_bot_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion">source_bot_version</a></code> | <code>str</code> | The version of a bot. |

---

##### `source_bot_version`<sup>Required</sup> <a name="source_bot_version" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion"></a>

```python
source_bot_version: str
```

- *Type:* str

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#source_bot_version LexBotVersion#source_bot_version}

---

### LexBotVersionConfig <a name="LexBotVersionConfig" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bot_id: str,
  bot_version_locale_specification: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId">bot_id</a></code> | <code>str</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification">bot_version_locale_specification</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]</code> | Specifies the locales that Amazon Lex adds to this version. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description">description</a></code> | <code>str</code> | A description of the version. Use the description to help identify the version in lists. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_id LexBotVersion#bot_id}

---

##### `bot_version_locale_specification`<sup>Required</sup> <a name="bot_version_locale_specification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification"></a>

```python
bot_version_locale_specification: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]

Specifies the locales that Amazon Lex adds to this version.

You can choose the Draft version or any other previously published version for each locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#bot_version_locale_specification LexBotVersion#bot_version_locale_specification}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the version. Use the description to help identify the version in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#description LexBotVersion#description}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput">source_bot_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion">source_bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_bot_version_input`<sup>Optional</sup> <a name="source_bot_version_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput"></a>

```python
source_bot_version_input: str
```

- *Type:* str

---

##### `source_bot_version`<sup>Required</sup> <a name="source_bot_version" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion"></a>

```python
source_bot_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---


### LexBotVersionBotVersionLocaleSpecificationList <a name="LexBotVersionBotVersionLocaleSpecificationList" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LexBotVersionBotVersionLocaleSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LexBotVersionBotVersionLocaleSpecification]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>]

---


### LexBotVersionBotVersionLocaleSpecificationOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lex_bot_version

lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails">put_bot_version_locale_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bot_version_locale_details` <a name="put_bot_version_locale_details" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails"></a>

```python
def put_bot_version_locale_details(
  source_bot_version: str
) -> None
```

###### `source_bot_version`<sup>Required</sup> <a name="source_bot_version" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails.parameter.sourceBotVersion"></a>

- *Type:* str

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lex_bot_version#source_bot_version LexBotVersion#source_bot_version}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails">bot_version_locale_details</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput">bot_version_locale_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput">locale_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_version_locale_details`<sup>Required</sup> <a name="bot_version_locale_details" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails"></a>

```python
bot_version_locale_details: LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a>

---

##### `bot_version_locale_details_input`<sup>Optional</sup> <a name="bot_version_locale_details_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput"></a>

```python
bot_version_locale_details_input: IResolvable | LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---

##### `locale_id_input`<sup>Optional</sup> <a name="locale_id_input" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput"></a>

```python
locale_id_input: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LexBotVersionBotVersionLocaleSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>

---



