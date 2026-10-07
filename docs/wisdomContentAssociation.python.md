# `wisdomContentAssociation` Submodule <a name="`wisdomContentAssociation` Submodule" id="@cdktn/provider-awscc.wisdomContentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomContentAssociation <a name="WisdomContentAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association awscc_wisdom_content_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  association: WisdomContentAssociationAssociation,
  association_type: str,
  content_id: str,
  knowledge_base_id: str,
  tags: IResolvable | typing.List[WisdomContentAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | The identifier of the associated resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.associationType">association_type</a></code> | <code>str</code> | The type of association. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.contentId">content_id</a></code> | <code>str</code> | The identifier of the content. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | The identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.association"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

The identifier of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association WisdomContentAssociation#association}

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.associationType"></a>

- *Type:* str

The type of association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association_type WisdomContentAssociation#association_type}

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.contentId"></a>

- *Type:* str

The identifier of the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#content_id WisdomContentAssociation#content_id}

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

The identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#knowledge_base_id WisdomContentAssociation#knowledge_base_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#tags WisdomContentAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation">put_association</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_association` <a name="put_association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation"></a>

```python
def put_association(
  amazon_connect_guide_association: WisdomContentAssociationAssociationAmazonConnectGuideAssociation
) -> None
```

###### `amazon_connect_guide_association`<sup>Required</sup> <a name="amazon_connect_guide_association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putAssociation.parameter.amazonConnectGuideAssociation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association WisdomContentAssociation#amazon_connect_guide_association}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WisdomContentAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WisdomContentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WisdomContentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WisdomContentAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WisdomContentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomContentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference">WisdomContentAssociationAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentArn">content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationArn">content_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationId">content_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList">WisdomContentAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationInput">association_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationTypeInput">association_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentIdInput">content_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentId">content_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.association"></a>

```python
association: WisdomContentAssociationAssociationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference">WisdomContentAssociationAssociationOutputReference</a>

---

##### `content_arn`<sup>Required</sup> <a name="content_arn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentArn"></a>

```python
content_arn: str
```

- *Type:* str

---

##### `content_association_arn`<sup>Required</sup> <a name="content_association_arn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationArn"></a>

```python
content_association_arn: str
```

- *Type:* str

---

##### `content_association_id`<sup>Required</sup> <a name="content_association_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentAssociationId"></a>

```python
content_association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tags"></a>

```python
tags: WisdomContentAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList">WisdomContentAssociationTagsList</a>

---

##### `association_input`<sup>Optional</sup> <a name="association_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationInput"></a>

```python
association_input: IResolvable | WisdomContentAssociationAssociation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

---

##### `association_type_input`<sup>Optional</sup> <a name="association_type_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationTypeInput"></a>

```python
association_type_input: str
```

- *Type:* str

---

##### `content_id_input`<sup>Optional</sup> <a name="content_id_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentIdInput"></a>

```python
content_id_input: str
```

- *Type:* str

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WisdomContentAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.contentId"></a>

```python
content_id: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomContentAssociationAssociation <a name="WisdomContentAssociationAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationAssociation(
  amazon_connect_guide_association: WisdomContentAssociationAssociationAmazonConnectGuideAssociation
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.property.amazonConnectGuideAssociation">amazon_connect_guide_association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association WisdomContentAssociation#amazon_connect_guide_association}. |

---

##### `amazon_connect_guide_association`<sup>Required</sup> <a name="amazon_connect_guide_association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation.property.amazonConnectGuideAssociation"></a>

```python
amazon_connect_guide_association: WisdomContentAssociationAssociationAmazonConnectGuideAssociation
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#amazon_connect_guide_association WisdomContentAssociation#amazon_connect_guide_association}.

---

### WisdomContentAssociationAssociationAmazonConnectGuideAssociation <a name="WisdomContentAssociationAssociationAmazonConnectGuideAssociation" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation(
  flow_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.property.flowId">flow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id WisdomContentAssociation#flow_id}. |

---

##### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id WisdomContentAssociation#flow_id}.

---

### WisdomContentAssociationConfig <a name="WisdomContentAssociationConfig" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  association: WisdomContentAssociationAssociation,
  association_type: str,
  content_id: str,
  knowledge_base_id: str,
  tags: IResolvable | typing.List[WisdomContentAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.association">association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | The identifier of the associated resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.associationType">association_type</a></code> | <code>str</code> | The type of association. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.contentId">content_id</a></code> | <code>str</code> | The identifier of the content. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | The identifier of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.association"></a>

```python
association: WisdomContentAssociationAssociation
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

The identifier of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association WisdomContentAssociation#association}

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

The type of association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#association_type WisdomContentAssociation#association_type}

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.contentId"></a>

```python
content_id: str
```

- *Type:* str

The identifier of the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#content_id WisdomContentAssociation#content_id}

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

The identifier of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#knowledge_base_id WisdomContentAssociation#knowledge_base_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WisdomContentAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#tags WisdomContentAssociation#tags}

---

### WisdomContentAssociationTags <a name="WisdomContentAssociationTags" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#key WisdomContentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#value WisdomContentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#key WisdomContentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#value WisdomContentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference <a name="WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resetFlowId">reset_flow_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow_id` <a name="reset_flow_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.resetFlowId"></a>

```python
def reset_flow_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowIdInput">flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_id_input`<sup>Optional</sup> <a name="flow_id_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowIdInput"></a>

```python
flow_id_input: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomContentAssociationAssociationAmazonConnectGuideAssociation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---


### WisdomContentAssociationAssociationOutputReference <a name="WisdomContentAssociationAssociationOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation">put_amazon_connect_guide_association</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_connect_guide_association` <a name="put_amazon_connect_guide_association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation"></a>

```python
def put_amazon_connect_guide_association(
  flow_id: str = None
) -> None
```

###### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.putAmazonConnectGuideAssociation.parameter.flowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wisdom_content_association#flow_id WisdomContentAssociation#flow_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation">amazon_connect_guide_association</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociationInput">amazon_connect_guide_association_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_connect_guide_association`<sup>Required</sup> <a name="amazon_connect_guide_association" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociation"></a>

```python
amazon_connect_guide_association: WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference">WisdomContentAssociationAssociationAmazonConnectGuideAssociationOutputReference</a>

---

##### `amazon_connect_guide_association_input`<sup>Optional</sup> <a name="amazon_connect_guide_association_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.amazonConnectGuideAssociationInput"></a>

```python
amazon_connect_guide_association_input: IResolvable | WisdomContentAssociationAssociationAmazonConnectGuideAssociation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationAmazonConnectGuideAssociation">WisdomContentAssociationAssociationAmazonConnectGuideAssociation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomContentAssociationAssociation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationAssociation">WisdomContentAssociationAssociation</a>

---


### WisdomContentAssociationTagsList <a name="WisdomContentAssociationTagsList" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WisdomContentAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WisdomContentAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>]

---


### WisdomContentAssociationTagsOutputReference <a name="WisdomContentAssociationTagsOutputReference" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wisdom_content_association

wisdomContentAssociation.WisdomContentAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WisdomContentAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomContentAssociation.WisdomContentAssociationTags">WisdomContentAssociationTags</a>

---



