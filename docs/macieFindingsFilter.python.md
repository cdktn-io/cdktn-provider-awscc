# `macieFindingsFilter` Submodule <a name="`macieFindingsFilter` Submodule" id="@cdktn/provider-awscc.macieFindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieFindingsFilter <a name="MacieFindingsFilter" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter awscc_macie_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_criteria: MacieFindingsFilterFindingCriteria,
  name: str,
  action: str = None,
  description: str = None,
  position: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MacieFindingsFilterTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.action">action</a></code> | <code>str</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.description">description</a></code> | <code>str</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.name"></a>

- *Type:* str

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.action"></a>

- *Type:* str

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.description"></a>

- *Type:* str

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria">put_finding_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_finding_criteria` <a name="put_finding_criteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria"></a>

```python
def put_finding_criteria(
  criterion: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion] = None
) -> None
```

###### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria.parameter.criterion"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]

Map of filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#criterion MacieFindingsFilter#criterion}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MacieFindingsFilterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MacieFindingsFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MacieFindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MacieFindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId">findings_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput">finding_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria"></a>

```python
finding_criteria: MacieFindingsFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a>

---

##### `findings_filter_id`<sup>Required</sup> <a name="findings_filter_id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId"></a>

```python
findings_filter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags"></a>

```python
tags: MacieFindingsFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `finding_criteria_input`<sup>Optional</sup> <a name="finding_criteria_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput"></a>

```python
finding_criteria_input: IResolvable | MacieFindingsFilterFindingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MacieFindingsFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MacieFindingsFilterConfig <a name="MacieFindingsFilterConfig" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  finding_criteria: MacieFindingsFilterFindingCriteria,
  name: str,
  action: str = None,
  description: str = None,
  position: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[MacieFindingsFilterTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name">name</a></code> | <code>str</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action">action</a></code> | <code>str</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description">description</a></code> | <code>str</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria"></a>

```python
finding_criteria: MacieFindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MacieFindingsFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

### MacieFindingsFilterFindingCriteria <a name="MacieFindingsFilterFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterFindingCriteria(
  criterion: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion">criterion</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]</code> | Map of filter criteria. |

---

##### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion"></a>

```python
criterion: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]

Map of filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#criterion MacieFindingsFilter#criterion}

---

### MacieFindingsFilterFindingCriteriaCriterion <a name="MacieFindingsFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion(
  eq: typing.List[str] = None,
  gt: typing.Union[int, float] = None,
  gte: typing.Union[int, float] = None,
  lt: typing.Union[int, float] = None,
  lte: typing.Union[int, float] = None,
  neq: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq">eq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt">gt</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt">lt</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq">neq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}. |

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}.

---

##### `gt`<sup>Optional</sup> <a name="gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt"></a>

```python
gt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}.

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}.

---

##### `lt`<sup>Optional</sup> <a name="lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt"></a>

```python
lt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}.

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}.

---

### MacieFindingsFilterTags <a name="MacieFindingsFilterTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#key MacieFindingsFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/macie_findings_filter#value MacieFindingsFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieFindingsFilterFindingCriteriaCriterionMap <a name="MacieFindingsFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get"></a>

```python
def get(
  key: str
) -> MacieFindingsFilterFindingCriteriaCriterionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]

---


### MacieFindingsFilterFindingCriteriaCriterionOutputReference <a name="MacieFindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq">reset_eq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt">reset_gt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte">reset_gte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt">reset_lt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte">reset_lte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">reset_neq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eq` <a name="reset_eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```python
def reset_eq() -> None
```

##### `reset_gt` <a name="reset_gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```python
def reset_gt() -> None
```

##### `reset_gte` <a name="reset_gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```python
def reset_gte() -> None
```

##### `reset_lt` <a name="reset_lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```python
def reset_lt() -> None
```

##### `reset_lte` <a name="reset_lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```python
def reset_lte() -> None
```

##### `reset_neq` <a name="reset_neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```python
def reset_neq() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">eq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">gte_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">gt_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">lte_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">lt_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">neq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eq_input`<sup>Optional</sup> <a name="eq_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```python
eq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gte_input`<sup>Optional</sup> <a name="gte_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```python
gte_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gt_input`<sup>Optional</sup> <a name="gt_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```python
gt_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte_input`<sup>Optional</sup> <a name="lte_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```python
lte_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lt_input`<sup>Optional</sup> <a name="lt_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```python
lt_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `neq_input`<sup>Optional</sup> <a name="neq_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```python
neq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```python
gt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```python
lt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MacieFindingsFilterFindingCriteriaCriterion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>

---


### MacieFindingsFilterFindingCriteriaOutputReference <a name="MacieFindingsFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion">put_criterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion">reset_criterion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criterion` <a name="put_criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```python
def put_criterion(
  value: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]

---

##### `reset_criterion` <a name="reset_criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```python
def reset_criterion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput">criterion_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```python
criterion: MacieFindingsFilterFindingCriteriaCriterionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a>

---

##### `criterion_input`<sup>Optional</sup> <a name="criterion_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```python
criterion_input: IResolvable | typing.Mapping[MacieFindingsFilterFindingCriteriaCriterion]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MacieFindingsFilterFindingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---


### MacieFindingsFilterTagsList <a name="MacieFindingsFilterTagsList" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MacieFindingsFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MacieFindingsFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>]

---


### MacieFindingsFilterTagsOutputReference <a name="MacieFindingsFilterTagsOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import macie_findings_filter

macieFindingsFilter.MacieFindingsFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MacieFindingsFilterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>

---



