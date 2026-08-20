# `cleanroomsPrivacyBudgetTemplate` Submodule <a name="`cleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsPrivacyBudgetTemplate <a name="CleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_refresh: str,
  membership_identifier: str,
  parameters: CleanroomsPrivacyBudgetTemplateParameters,
  privacy_budget_type: str,
  tags: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.autoRefresh">auto_refresh</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.privacyBudgetType">privacy_budget_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.autoRefresh"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.membershipIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `privacy_budget_type`<sup>Required</sup> <a name="privacy_budget_type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.privacyBudgetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters"></a>

```python
def put_parameters(
  budget_parameters: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters] = None,
  epsilon: typing.Union[int, float] = None,
  resource_arn: str = None,
  users_noise_per_query: typing.Union[int, float] = None
) -> None
```

###### `budget_parameters`<sup>Optional</sup> <a name="budget_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.budgetParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

###### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.epsilon"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

###### `users_noise_per_query`<sup>Optional</sup> <a name="users_noise_per_query" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.usersNoisePerQuery"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsPrivacyBudgetTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">privacy_budget_template_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput">membership_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput">privacy_budget_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">privacy_budget_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```python
parameters: CleanroomsPrivacyBudgetTemplateParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `privacy_budget_template_identifier`<sup>Required</sup> <a name="privacy_budget_template_identifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```python
privacy_budget_template_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags"></a>

```python
tags: CleanroomsPrivacyBudgetTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `membership_identifier_input`<sup>Optional</sup> <a name="membership_identifier_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput"></a>

```python
membership_identifier_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput"></a>

```python
parameters_input: IResolvable | CleanroomsPrivacyBudgetTemplateParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `privacy_budget_type_input`<sup>Optional</sup> <a name="privacy_budget_type_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput"></a>

```python
privacy_budget_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `privacy_budget_type`<sup>Required</sup> <a name="privacy_budget_type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```python
privacy_budget_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsPrivacyBudgetTemplateConfig <a name="CleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_refresh: str,
  membership_identifier: str,
  parameters: CleanroomsPrivacyBudgetTemplateParameters,
  privacy_budget_type: str,
  tags: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType">privacy_budget_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters"></a>

```python
parameters: CleanroomsPrivacyBudgetTemplateParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `privacy_budget_type`<sup>Required</sup> <a name="privacy_budget_type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType"></a>

```python
privacy_budget_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

### CleanroomsPrivacyBudgetTemplateParameters <a name="CleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters(
  budget_parameters: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters] = None,
  epsilon: typing.Union[int, float] = None,
  resource_arn: str = None,
  users_noise_per_query: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters">budget_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery">users_noise_per_query</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}. |

---

##### `budget_parameters`<sup>Optional</sup> <a name="budget_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters"></a>

```python
budget_parameters: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

##### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

##### `users_noise_per_query`<sup>Optional</sup> <a name="users_noise_per_query" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery"></a>

```python
users_noise_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

### CleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters(
  auto_refresh: str = None,
  budget: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget">budget</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}. |

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `budget`<sup>Optional</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget"></a>

```python
budget: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}.

---

### CleanroomsPrivacyBudgetTemplateTags <a name="CleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]

---


### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget">reset_budget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_budget` <a name="reset_budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget"></a>

```python
def reset_budget() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput">budget_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">budget</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `budget_input`<sup>Optional</sup> <a name="budget_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput"></a>

```python
budget_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `budget`<sup>Required</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```python
budget: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### CleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters">put_budget_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters">reset_budget_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon">reset_epsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery">reset_users_noise_per_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_budget_parameters` <a name="put_budget_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters"></a>

```python
def put_budget_parameters(
  value: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]

---

##### `reset_budget_parameters` <a name="reset_budget_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters"></a>

```python
def reset_budget_parameters() -> None
```

##### `reset_epsilon` <a name="reset_epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon"></a>

```python
def reset_epsilon() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_users_noise_per_query` <a name="reset_users_noise_per_query" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery"></a>

```python
def reset_users_noise_per_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">budget_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput">budget_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput">epsilon_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput">users_noise_per_query_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">users_noise_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `budget_parameters`<sup>Required</sup> <a name="budget_parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```python
budget_parameters: CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `budget_parameters_input`<sup>Optional</sup> <a name="budget_parameters_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput"></a>

```python
budget_parameters_input: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateParametersBudgetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>]

---

##### `epsilon_input`<sup>Optional</sup> <a name="epsilon_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput"></a>

```python
epsilon_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `users_noise_per_query_input`<sup>Optional</sup> <a name="users_noise_per_query_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput"></a>

```python
users_noise_per_query_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `users_noise_per_query`<sup>Required</sup> <a name="users_noise_per_query" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```python
users_noise_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsPrivacyBudgetTemplateParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---


### CleanroomsPrivacyBudgetTemplateTagsList <a name="CleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsPrivacyBudgetTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsPrivacyBudgetTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>]

---


### CleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="CleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_privacy_budget_template

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsPrivacyBudgetTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>

---



