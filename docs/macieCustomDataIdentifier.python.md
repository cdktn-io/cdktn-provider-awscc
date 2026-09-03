# `macieCustomDataIdentifier` Submodule <a name="`macieCustomDataIdentifier` Submodule" id="@cdktn/provider-awscc.macieCustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieCustomDataIdentifier <a name="MacieCustomDataIdentifier" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier awscc_macie_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifier(
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
  regex: str,
  description: str = None,
  ignore_words: typing.List[str] = None,
  keywords: typing.List[str] = None,
  maximum_match_distance: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MacieCustomDataIdentifierTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.regex">regex</a></code> | <code>str</code> | Regular expression for custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.ignoreWords">ignore_words</a></code> | <code>typing.List[str]</code> | Words to be ignored. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.keywords">keywords</a></code> | <code>typing.List[str]</code> | Keywords to be matched against. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.maximumMatchDistance">maximum_match_distance</a></code> | <code>typing.Union[int, float]</code> | Maximum match distance. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.name"></a>

- *Type:* str

Name of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#name MacieCustomDataIdentifier#name}

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.regex"></a>

- *Type:* str

Regular expression for custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#regex MacieCustomDataIdentifier#regex}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.description"></a>

- *Type:* str

Description of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#description MacieCustomDataIdentifier#description}

---

##### `ignore_words`<sup>Optional</sup> <a name="ignore_words" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.ignoreWords"></a>

- *Type:* typing.List[str]

Words to be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#ignore_words MacieCustomDataIdentifier#ignore_words}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.keywords"></a>

- *Type:* typing.List[str]

Keywords to be matched against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#keywords MacieCustomDataIdentifier#keywords}

---

##### `maximum_match_distance`<sup>Optional</sup> <a name="maximum_match_distance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.maximumMatchDistance"></a>

- *Type:* typing.Union[int, float]

Maximum match distance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#maximum_match_distance MacieCustomDataIdentifier#maximum_match_distance}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#tags MacieCustomDataIdentifier#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetIgnoreWords">reset_ignore_words</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetKeywords">reset_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetMaximumMatchDistance">reset_maximum_match_distance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MacieCustomDataIdentifierTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ignore_words` <a name="reset_ignore_words" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetIgnoreWords"></a>

```python
def reset_ignore_words() -> None
```

##### `reset_keywords` <a name="reset_keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetKeywords"></a>

```python
def reset_keywords() -> None
```

##### `reset_maximum_match_distance` <a name="reset_maximum_match_distance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetMaximumMatchDistance"></a>

```python
def reset_maximum_match_distance() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifier.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MacieCustomDataIdentifier to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MacieCustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MacieCustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.customDataIdentifierId">custom_data_identifier_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList">MacieCustomDataIdentifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWordsInput">ignore_words_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywordsInput">keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistanceInput">maximum_match_distance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWords">ignore_words</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywords">keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistance">maximum_match_distance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regex">regex</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_data_identifier_id`<sup>Required</sup> <a name="custom_data_identifier_id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.customDataIdentifierId"></a>

```python
custom_data_identifier_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tags"></a>

```python
tags: MacieCustomDataIdentifierTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList">MacieCustomDataIdentifierTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ignore_words_input`<sup>Optional</sup> <a name="ignore_words_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWordsInput"></a>

```python
ignore_words_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keywords_input`<sup>Optional</sup> <a name="keywords_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywordsInput"></a>

```python
keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_match_distance_input`<sup>Optional</sup> <a name="maximum_match_distance_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```python
maximum_match_distance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MacieCustomDataIdentifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ignore_words`<sup>Required</sup> <a name="ignore_words" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWords"></a>

```python
ignore_words: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywords"></a>

```python
keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_match_distance`<sup>Required</sup> <a name="maximum_match_distance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistance"></a>

```python
maximum_match_distance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MacieCustomDataIdentifierConfig <a name="MacieCustomDataIdentifierConfig" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.Initializer"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifierConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  regex: str,
  description: str = None,
  ignore_words: typing.List[str] = None,
  keywords: typing.List[str] = None,
  maximum_match_distance: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MacieCustomDataIdentifierTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.name">name</a></code> | <code>str</code> | Name of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.regex">regex</a></code> | <code>str</code> | Regular expression for custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.description">description</a></code> | <code>str</code> | Description of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.ignoreWords">ignore_words</a></code> | <code>typing.List[str]</code> | Words to be ignored. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.keywords">keywords</a></code> | <code>typing.List[str]</code> | Keywords to be matched against. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.maximumMatchDistance">maximum_match_distance</a></code> | <code>typing.Union[int, float]</code> | Maximum match distance. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#name MacieCustomDataIdentifier#name}

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.regex"></a>

```python
regex: str
```

- *Type:* str

Regular expression for custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#regex MacieCustomDataIdentifier#regex}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#description MacieCustomDataIdentifier#description}

---

##### `ignore_words`<sup>Optional</sup> <a name="ignore_words" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.ignoreWords"></a>

```python
ignore_words: typing.List[str]
```

- *Type:* typing.List[str]

Words to be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#ignore_words MacieCustomDataIdentifier#ignore_words}

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.keywords"></a>

```python
keywords: typing.List[str]
```

- *Type:* typing.List[str]

Keywords to be matched against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#keywords MacieCustomDataIdentifier#keywords}

---

##### `maximum_match_distance`<sup>Optional</sup> <a name="maximum_match_distance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```python
maximum_match_distance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum match distance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#maximum_match_distance MacieCustomDataIdentifier#maximum_match_distance}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MacieCustomDataIdentifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#tags MacieCustomDataIdentifier#tags}

---

### MacieCustomDataIdentifierTags <a name="MacieCustomDataIdentifierTags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.Initializer"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifierTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#key MacieCustomDataIdentifier#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#value MacieCustomDataIdentifier#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieCustomDataIdentifierTagsList <a name="MacieCustomDataIdentifierTagsList" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MacieCustomDataIdentifierTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MacieCustomDataIdentifierTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>]

---


### MacieCustomDataIdentifierTagsOutputReference <a name="MacieCustomDataIdentifierTagsOutputReference" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import macie_custom_data_identifier

macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MacieCustomDataIdentifierTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>

---



