# `casesLayout` Submodule <a name="`casesLayout` Submodule" id="@cdktn/provider-awscc.casesLayout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesLayout <a name="CasesLayout" id="@cdktn/provider-awscc.casesLayout.CasesLayout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout awscc_cases_layout}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayout(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: CasesLayoutContent,
  name: str,
  domain_id: str = None,
  tags: IResolvable | typing.List[CasesLayoutTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]</code> | The tags that you attach to this layout. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.name"></a>

- *Type:* str

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.domainId"></a>

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent"></a>

```python
def put_content(
  basic: CasesLayoutContentBasic = None
) -> None
```

###### `basic`<sup>Optional</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent.parameter.basic"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

Defines the field layout for the agent's case interface.

Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#basic CasesLayout#basic}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CasesLayoutTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]

---

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayout.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayout.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayout.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayout.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CasesLayout to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CasesLayout that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesLayout to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn">layout_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId">layout_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.content"></a>

```python
content: CasesLayoutContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `layout_arn`<sup>Required</sup> <a name="layout_arn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn"></a>

```python
layout_arn: str
```

- *Type:* str

---

##### `layout_id`<sup>Required</sup> <a name="layout_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId"></a>

```python
layout_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags"></a>

```python
tags: CasesLayoutTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput"></a>

```python
content_input: IResolvable | CasesLayoutContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CasesLayoutTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CasesLayoutConfig <a name="CasesLayoutConfig" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: CasesLayoutContent,
  name: str,
  domain_id: str = None,
  tags: IResolvable | typing.List[CasesLayoutTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name">name</a></code> | <code>str</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]</code> | The tags that you attach to this layout. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content"></a>

```python
content: CasesLayoutContent
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CasesLayoutTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

### CasesLayoutContent <a name="CasesLayoutContent" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContent(
  basic: CasesLayoutContentBasic = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | Defines the field layout for the agent's case interface. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic"></a>

```python
basic: CasesLayoutContentBasic
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

Defines the field layout for the agent's case interface.

Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#basic CasesLayout#basic}

---

### CasesLayoutContentBasic <a name="CasesLayoutContentBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasic(
  more_info: CasesLayoutContentBasicMoreInfo = None,
  top_panel: CasesLayoutContentBasicTopPanel = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo">more_info</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | Sections within a panel or tab of the page layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel">top_panel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | Sections within a panel or tab of the page layout. |

---

##### `more_info`<sup>Optional</sup> <a name="more_info" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo"></a>

```python
more_info: CasesLayoutContentBasicMoreInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#more_info CasesLayout#more_info}

---

##### `top_panel`<sup>Optional</sup> <a name="top_panel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel"></a>

```python
top_panel: CasesLayoutContentBasicTopPanel
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}

---

### CasesLayoutContentBasicMoreInfo <a name="CasesLayoutContentBasicMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfo(
  sections: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections">sections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections"></a>

```python
sections: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicMoreInfoSections <a name="CasesLayoutContentBasicMoreInfoSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSections(
  field_group: CasesLayoutContentBasicMoreInfoSectionsFieldGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `field_group`<sup>Optional</sup> <a name="field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup"></a>

```python
field_group: CasesLayoutContentBasicMoreInfoSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroup <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup(
  fields: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name">name</a></code> | <code>str</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields"></a>

```python
fields: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id">id</a></code> | <code>str</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutContentBasicTopPanel <a name="CasesLayoutContentBasicTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanel(
  sections: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections">sections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections"></a>

```python
sections: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicTopPanelSections <a name="CasesLayoutContentBasicTopPanelSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSections(
  field_group: CasesLayoutContentBasicTopPanelSectionsFieldGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `field_group`<sup>Optional</sup> <a name="field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup"></a>

```python
field_group: CasesLayoutContentBasicTopPanelSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroup <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup(
  fields: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name">name</a></code> | <code>str</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields"></a>

```python
fields: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroupFields <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id">id</a></code> | <code>str</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutTags <a name="CasesLayoutTags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#key CasesLayout#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#value CasesLayout#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesLayoutContentBasicMoreInfoOutputReference <a name="CasesLayoutContentBasicMoreInfoOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections">put_sections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections">reset_sections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sections` <a name="put_sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections"></a>

```python
def put_sections(
  value: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]

---

##### `reset_sections` <a name="reset_sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections"></a>

```python
def reset_sections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput">sections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections"></a>

```python
sections: CasesLayoutContentBasicMoreInfoSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a>

---

##### `sections_input`<sup>Optional</sup> <a name="sections_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput"></a>

```python
sections_input: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicMoreInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields"></a>

```python
fields: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---


### CasesLayoutContentBasicMoreInfoSectionsList <a name="CasesLayoutContentBasicMoreInfoSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesLayoutContentBasicMoreInfoSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]

---


### CasesLayoutContentBasicMoreInfoSectionsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup">put_field_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup">reset_field_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_group` <a name="put_field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup"></a>

```python
def put_field_group(
  fields: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields] = None,
  name: str = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup.parameter.name"></a>

- *Type:* str

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `reset_field_group` <a name="reset_field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup"></a>

```python
def reset_field_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput">field_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_group`<sup>Required</sup> <a name="field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup"></a>

```python
field_group: CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a>

---

##### `field_group_input`<sup>Optional</sup> <a name="field_group_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput"></a>

```python
field_group_input: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicMoreInfoSections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>

---


### CasesLayoutContentBasicOutputReference <a name="CasesLayoutContentBasicOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo">put_more_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel">put_top_panel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo">reset_more_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel">reset_top_panel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_more_info` <a name="put_more_info" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo"></a>

```python
def put_more_info(
  sections: IResolvable | typing.List[CasesLayoutContentBasicMoreInfoSections] = None
) -> None
```

###### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo.parameter.sections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

##### `put_top_panel` <a name="put_top_panel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel"></a>

```python
def put_top_panel(
  sections: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections] = None
) -> None
```

###### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel.parameter.sections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

##### `reset_more_info` <a name="reset_more_info" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo"></a>

```python
def reset_more_info() -> None
```

##### `reset_top_panel` <a name="reset_top_panel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel"></a>

```python
def reset_top_panel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo">more_info</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel">top_panel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput">more_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput">top_panel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `more_info`<sup>Required</sup> <a name="more_info" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo"></a>

```python
more_info: CasesLayoutContentBasicMoreInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a>

---

##### `top_panel`<sup>Required</sup> <a name="top_panel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel"></a>

```python
top_panel: CasesLayoutContentBasicTopPanelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a>

---

##### `more_info_input`<sup>Optional</sup> <a name="more_info_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput"></a>

```python
more_info_input: IResolvable | CasesLayoutContentBasicMoreInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `top_panel_input`<sup>Optional</sup> <a name="top_panel_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput"></a>

```python
top_panel_input: IResolvable | CasesLayoutContentBasicTopPanel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---


### CasesLayoutContentBasicTopPanelOutputReference <a name="CasesLayoutContentBasicTopPanelOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections">put_sections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections">reset_sections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sections` <a name="put_sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections"></a>

```python
def put_sections(
  value: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]

---

##### `reset_sections` <a name="reset_sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections"></a>

```python
def reset_sections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput">sections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections"></a>

```python
sections: CasesLayoutContentBasicTopPanelSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a>

---

##### `sections_input`<sup>Optional</sup> <a name="sections_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput"></a>

```python
sections_input: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicTopPanel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields"></a>

```python
fields: CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---


### CasesLayoutContentBasicTopPanelSectionsList <a name="CasesLayoutContentBasicTopPanelSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesLayoutContentBasicTopPanelSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>]

---


### CasesLayoutContentBasicTopPanelSectionsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup">put_field_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup">reset_field_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_group` <a name="put_field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup"></a>

```python
def put_field_group(
  fields: IResolvable | typing.List[CasesLayoutContentBasicTopPanelSectionsFieldGroupFields] = None,
  name: str = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup.parameter.name"></a>

- *Type:* str

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `reset_field_group` <a name="reset_field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup"></a>

```python
def reset_field_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput">field_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_group`<sup>Required</sup> <a name="field_group" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup"></a>

```python
field_group: CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a>

---

##### `field_group_input`<sup>Optional</sup> <a name="field_group_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput"></a>

```python
field_group_input: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContentBasicTopPanelSections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>

---


### CasesLayoutContentOutputReference <a name="CasesLayoutContentOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic">reset_basic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic` <a name="put_basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic"></a>

```python
def put_basic(
  more_info: CasesLayoutContentBasicMoreInfo = None,
  top_panel: CasesLayoutContentBasicTopPanel = None
) -> None
```

###### `more_info`<sup>Optional</sup> <a name="more_info" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic.parameter.moreInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#more_info CasesLayout#more_info}

---

###### `top_panel`<sup>Optional</sup> <a name="top_panel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic.parameter.topPanel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}

---

##### `reset_basic` <a name="reset_basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic"></a>

```python
def reset_basic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput">basic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic"></a>

```python
basic: CasesLayoutContentBasicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput"></a>

```python
basic_input: IResolvable | CasesLayoutContentBasic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---


### CasesLayoutTagsList <a name="CasesLayoutTagsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesLayoutTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesLayoutTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>]

---


### CasesLayoutTagsOutputReference <a name="CasesLayoutTagsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_layout

casesLayout.CasesLayoutTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesLayoutTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>

---



