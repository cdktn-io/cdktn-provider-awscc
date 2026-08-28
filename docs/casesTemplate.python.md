# `casesTemplate` Submodule <a name="`casesTemplate` Submodule" id="@cdktn/provider-awscc.casesTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesTemplate <a name="CasesTemplate" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template awscc_cases_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplate(
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
  description: str = None,
  domain_id: str = None,
  layout_configuration: CasesTemplateLayoutConfiguration = None,
  required_fields: IResolvable | typing.List[CasesTemplateRequiredFields] = None,
  rules: IResolvable | typing.List[CasesTemplateRules] = None,
  status: str = None,
  tags: IResolvable | typing.List[CasesTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the template. It must be unique per domain. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A description explaining the purpose and use case for this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.layoutConfiguration">layout_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a></code> | Specifies the default layout to use when displaying cases created from this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.requiredFields">required_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]</code> | A list of fields that must contain a value for a case to be successfully created with this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]</code> | A list of case rules (also known as case field conditions) on a template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.status">status</a></code> | <code>str</code> | The current status of the template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]</code> | The tags that you attach to this template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.name"></a>

- *Type:* str

A name for the template. It must be unique per domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#name CasesTemplate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.description"></a>

- *Type:* str

A description explaining the purpose and use case for this template.

Should indicate what types of cases this template is designed for and any specific workflow it supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#description CasesTemplate#description}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.domainId"></a>

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#domain_id CasesTemplate#domain_id}

---

##### `layout_configuration`<sup>Optional</sup> <a name="layout_configuration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.layoutConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a>

Specifies the default layout to use when displaying cases created from this template.

The layout determines which fields are visible and their arrangement in the agent interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#layout_configuration CasesTemplate#layout_configuration}

---

##### `required_fields`<sup>Optional</sup> <a name="required_fields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.requiredFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]

A list of fields that must contain a value for a case to be successfully created with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#required_fields CasesTemplate#required_fields}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]

A list of case rules (also known as case field conditions) on a template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#rules CasesTemplate#rules}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.status"></a>

- *Type:* str

The current status of the template.

Active templates can be used to create new cases, while Inactive templates are disabled but preserved for existing cases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#status CasesTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]

The tags that you attach to this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#tags CasesTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.putLayoutConfiguration">put_layout_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRequiredFields">put_required_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetLayoutConfiguration">reset_layout_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetRequiredFields">reset_required_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_layout_configuration` <a name="put_layout_configuration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putLayoutConfiguration"></a>

```python
def put_layout_configuration(
  default_layout: str = None
) -> None
```

###### `default_layout`<sup>Optional</sup> <a name="default_layout" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putLayoutConfiguration.parameter.defaultLayout"></a>

- *Type:* str

The unique identifier of a layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#default_layout CasesTemplate#default_layout}

---

##### `put_required_fields` <a name="put_required_fields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRequiredFields"></a>

```python
def put_required_fields(
  value: IResolvable | typing.List[CasesTemplateRequiredFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRequiredFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[CasesTemplateRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CasesTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_layout_configuration` <a name="reset_layout_configuration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetLayoutConfiguration"></a>

```python
def reset_layout_configuration() -> None
```

##### `reset_required_fields` <a name="reset_required_fields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetRequiredFields"></a>

```python
def reset_required_fields() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CasesTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CasesTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CasesTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CasesTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.layoutConfiguration">layout_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference">CasesTemplateLayoutConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.requiredFields">required_fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList">CasesTemplateRequiredFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList">CasesTemplateRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList">CasesTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.layoutConfigurationInput">layout_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.requiredFieldsInput">required_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `layout_configuration`<sup>Required</sup> <a name="layout_configuration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.layoutConfiguration"></a>

```python
layout_configuration: CasesTemplateLayoutConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference">CasesTemplateLayoutConfigurationOutputReference</a>

---

##### `required_fields`<sup>Required</sup> <a name="required_fields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.requiredFields"></a>

```python
required_fields: CasesTemplateRequiredFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList">CasesTemplateRequiredFieldsList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.rules"></a>

```python
rules: CasesTemplateRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList">CasesTemplateRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tags"></a>

```python
tags: CasesTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList">CasesTemplateTagsList</a>

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `layout_configuration_input`<sup>Optional</sup> <a name="layout_configuration_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.layoutConfigurationInput"></a>

```python
layout_configuration_input: IResolvable | CasesTemplateLayoutConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_fields_input`<sup>Optional</sup> <a name="required_fields_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.requiredFieldsInput"></a>

```python
required_fields_input: IResolvable | typing.List[CasesTemplateRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[CasesTemplateRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CasesTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesTemplate.CasesTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CasesTemplateConfig <a name="CasesTemplateConfig" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  domain_id: str = None,
  layout_configuration: CasesTemplateLayoutConfiguration = None,
  required_fields: IResolvable | typing.List[CasesTemplateRequiredFields] = None,
  rules: IResolvable | typing.List[CasesTemplateRules] = None,
  status: str = None,
  tags: IResolvable | typing.List[CasesTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.name">name</a></code> | <code>str</code> | A name for the template. It must be unique per domain. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.description">description</a></code> | <code>str</code> | A description explaining the purpose and use case for this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.layoutConfiguration">layout_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a></code> | Specifies the default layout to use when displaying cases created from this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.requiredFields">required_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]</code> | A list of fields that must contain a value for a case to be successfully created with this template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]</code> | A list of case rules (also known as case field conditions) on a template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.status">status</a></code> | <code>str</code> | The current status of the template. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]</code> | The tags that you attach to this template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the template. It must be unique per domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#name CasesTemplate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description explaining the purpose and use case for this template.

Should indicate what types of cases this template is designed for and any specific workflow it supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#description CasesTemplate#description}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#domain_id CasesTemplate#domain_id}

---

##### `layout_configuration`<sup>Optional</sup> <a name="layout_configuration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.layoutConfiguration"></a>

```python
layout_configuration: CasesTemplateLayoutConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a>

Specifies the default layout to use when displaying cases created from this template.

The layout determines which fields are visible and their arrangement in the agent interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#layout_configuration CasesTemplate#layout_configuration}

---

##### `required_fields`<sup>Optional</sup> <a name="required_fields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.requiredFields"></a>

```python
required_fields: IResolvable | typing.List[CasesTemplateRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]

A list of fields that must contain a value for a case to be successfully created with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#required_fields CasesTemplate#required_fields}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[CasesTemplateRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]

A list of case rules (also known as case field conditions) on a template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#rules CasesTemplate#rules}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The current status of the template.

Active templates can be used to create new cases, while Inactive templates are disabled but preserved for existing cases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#status CasesTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CasesTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]

The tags that you attach to this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#tags CasesTemplate#tags}

---

### CasesTemplateLayoutConfiguration <a name="CasesTemplateLayoutConfiguration" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateLayoutConfiguration(
  default_layout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration.property.defaultLayout">default_layout</a></code> | <code>str</code> | The unique identifier of a layout. |

---

##### `default_layout`<sup>Optional</sup> <a name="default_layout" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration.property.defaultLayout"></a>

```python
default_layout: str
```

- *Type:* str

The unique identifier of a layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#default_layout CasesTemplate#default_layout}

---

### CasesTemplateRequiredFields <a name="CasesTemplateRequiredFields" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRequiredFields(
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields.property.fieldId">field_id</a></code> | <code>str</code> | The unique identifier of a field. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#field_id CasesTemplate#field_id}

---

### CasesTemplateRules <a name="CasesTemplateRules" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRules.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRules(
  case_rule_id: str = None,
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules.property.caseRuleId">case_rule_id</a></code> | <code>str</code> | The unique identifier of a case rule. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules.property.fieldId">field_id</a></code> | <code>str</code> | The ID of the field that this rule applies to. |

---

##### `case_rule_id`<sup>Optional</sup> <a name="case_rule_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRules.property.caseRuleId"></a>

```python
case_rule_id: str
```

- *Type:* str

The unique identifier of a case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#case_rule_id CasesTemplate#case_rule_id}

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRules.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The ID of the field that this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#field_id CasesTemplate#field_id}

---

### CasesTemplateTags <a name="CasesTemplateTags" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#key CasesTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_template#value CasesTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesTemplateLayoutConfigurationOutputReference <a name="CasesTemplateLayoutConfigurationOutputReference" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateLayoutConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.resetDefaultLayout">reset_default_layout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_layout` <a name="reset_default_layout" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.resetDefaultLayout"></a>

```python
def reset_default_layout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.defaultLayoutInput">default_layout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.defaultLayout">default_layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_layout_input`<sup>Optional</sup> <a name="default_layout_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.defaultLayoutInput"></a>

```python
default_layout_input: str
```

- *Type:* str

---

##### `default_layout`<sup>Required</sup> <a name="default_layout" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.defaultLayout"></a>

```python
default_layout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesTemplateLayoutConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateLayoutConfiguration">CasesTemplateLayoutConfiguration</a>

---


### CasesTemplateRequiredFieldsList <a name="CasesTemplateRequiredFieldsList" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRequiredFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesTemplateRequiredFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesTemplateRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>]

---


### CasesTemplateRequiredFieldsOutputReference <a name="CasesTemplateRequiredFieldsOutputReference" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRequiredFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesTemplateRequiredFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRequiredFields">CasesTemplateRequiredFields</a>

---


### CasesTemplateRulesList <a name="CasesTemplateRulesList" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesTemplateRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesTemplateRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>]

---


### CasesTemplateRulesOutputReference <a name="CasesTemplateRulesOutputReference" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resetCaseRuleId">reset_case_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_case_rule_id` <a name="reset_case_rule_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resetCaseRuleId"></a>

```python
def reset_case_rule_id() -> None
```

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.caseRuleIdInput">case_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.caseRuleId">case_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_rule_id_input`<sup>Optional</sup> <a name="case_rule_id_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.caseRuleIdInput"></a>

```python
case_rule_id_input: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `case_rule_id`<sup>Required</sup> <a name="case_rule_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.caseRuleId"></a>

```python
case_rule_id: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesTemplateRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateRules">CasesTemplateRules</a>

---


### CasesTemplateTagsList <a name="CasesTemplateTagsList" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>]

---


### CasesTemplateTagsOutputReference <a name="CasesTemplateTagsOutputReference" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_template

casesTemplate.CasesTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesTemplate.CasesTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesTemplate.CasesTemplateTags">CasesTemplateTags</a>

---



