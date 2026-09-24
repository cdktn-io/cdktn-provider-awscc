# `casesRelatedItem` Submodule <a name="`casesRelatedItem` Submodule" id="@cdktn/provider-awscc.casesRelatedItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesRelatedItem <a name="CasesRelatedItem" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item awscc_cases_related_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  case_id: str,
  content: CasesRelatedItemContent,
  domain_id: str,
  type: str,
  tags: IResolvable | typing.List[CasesRelatedItemTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.caseId">case_id</a></code> | <code>str</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]</code> | A list of tags on the related item. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `case_id`<sup>Required</sup> <a name="case_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.caseId"></a>

- *Type:* str

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.domainId"></a>

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.type"></a>

- *Type:* str

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent"></a>

```python
def put_content(
  comment: CasesRelatedItemContentComment = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent.parameter.comment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

Represents a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#comment CasesRelatedItem#comment}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CasesRelatedItemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CasesRelatedItem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CasesRelatedItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesRelatedItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn">related_item_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId">related_item_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput">case_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId">case_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content"></a>

```python
content: CasesRelatedItemContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `related_item_arn`<sup>Required</sup> <a name="related_item_arn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn"></a>

```python
related_item_arn: str
```

- *Type:* str

---

##### `related_item_id`<sup>Required</sup> <a name="related_item_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId"></a>

```python
related_item_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags"></a>

```python
tags: CasesRelatedItemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a>

---

##### `case_id_input`<sup>Optional</sup> <a name="case_id_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput"></a>

```python
case_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput"></a>

```python
content_input: IResolvable | CasesRelatedItemContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CasesRelatedItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `case_id`<sup>Required</sup> <a name="case_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId"></a>

```python
case_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CasesRelatedItemConfig <a name="CasesRelatedItemConfig" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  case_id: str,
  content: CasesRelatedItemContent,
  domain_id: str,
  type: str,
  tags: IResolvable | typing.List[CasesRelatedItemTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId">case_id</a></code> | <code>str</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type">type</a></code> | <code>str</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]</code> | A list of tags on the related item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `case_id`<sup>Required</sup> <a name="case_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId"></a>

```python
case_id: str
```

- *Type:* str

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content"></a>

```python
content: CasesRelatedItemContent
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CasesRelatedItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

### CasesRelatedItemContent <a name="CasesRelatedItemContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemContent(
  comment: CasesRelatedItemContentComment = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | Represents a comment. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment"></a>

```python
comment: CasesRelatedItemContentComment
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

Represents a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#comment CasesRelatedItem#comment}

---

### CasesRelatedItemContentComment <a name="CasesRelatedItemContentComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemContentComment(
  body: str = None,
  content_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body">body</a></code> | <code>str</code> | Text in the body of a comment. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType">content_type</a></code> | <code>str</code> | Type of the text in the comment. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body"></a>

```python
body: str
```

- *Type:* str

Text in the body of a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#body CasesRelatedItem#body}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Type of the text in the comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content_type CasesRelatedItem#content_type}

---

### CasesRelatedItemTags <a name="CasesRelatedItemTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#key CasesRelatedItem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#value CasesRelatedItem#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesRelatedItemContentCommentOutputReference <a name="CasesRelatedItemContentCommentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemContentCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesRelatedItemContentComment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---


### CasesRelatedItemContentOutputReference <a name="CasesRelatedItemContentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment">put_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_comment` <a name="put_comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment"></a>

```python
def put_comment(
  body: str = None,
  content_type: str = None
) -> None
```

###### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment.parameter.body"></a>

- *Type:* str

Text in the body of a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#body CasesRelatedItem#body}

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment.parameter.contentType"></a>

- *Type:* str

Type of the text in the comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content_type CasesRelatedItem#content_type}

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput">comment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment"></a>

```python
comment: CasesRelatedItemContentCommentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput"></a>

```python
comment_input: IResolvable | CasesRelatedItemContentComment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesRelatedItemContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---


### CasesRelatedItemTagsList <a name="CasesRelatedItemTagsList" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesRelatedItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesRelatedItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>]

---


### CasesRelatedItemTagsOutputReference <a name="CasesRelatedItemTagsOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_related_item

casesRelatedItem.CasesRelatedItemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesRelatedItemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>

---



