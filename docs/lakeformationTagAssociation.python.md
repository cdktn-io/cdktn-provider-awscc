# `lakeformationTagAssociation` Submodule <a name="`lakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.lakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationTagAssociation <a name="LakeformationTagAssociation" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  lf_tags: IResolvable | typing.List[LakeformationTagAssociationLfTags],
  resource: LakeformationTagAssociationResource
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lfTags">lf_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]</code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `lf_tags`<sup>Required</sup> <a name="lf_tags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lfTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.resource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags">put_lf_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource">put_resource</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lf_tags` <a name="put_lf_tags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags"></a>

```python
def put_lf_tags(
  value: IResolvable | typing.List[LakeformationTagAssociationLfTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]

---

##### `put_resource` <a name="put_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource"></a>

```python
def put_resource(
  catalog: str = None,
  database: LakeformationTagAssociationResourceDatabase = None,
  table: LakeformationTagAssociationResourceTable = None,
  table_with_columns: LakeformationTagAssociationResourceTableWithColumns = None
) -> None
```

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}.

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.database"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}.

---

###### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.table"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}.

---

###### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationTagAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags">lf_tags</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier">tags_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput">lf_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput">resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lf_tags`<sup>Required</sup> <a name="lf_tags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags"></a>

```python
lf_tags: LakeformationTagAssociationLfTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource"></a>

```python
resource: LakeformationTagAssociationResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a>

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `tags_identifier`<sup>Required</sup> <a name="tags_identifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier"></a>

```python
tags_identifier: str
```

- *Type:* str

---

##### `lf_tags_input`<sup>Optional</sup> <a name="lf_tags_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput"></a>

```python
lf_tags_input: IResolvable | typing.List[LakeformationTagAssociationLfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput"></a>

```python
resource_input: IResolvable | LakeformationTagAssociationResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationTagAssociationConfig <a name="LakeformationTagAssociationConfig" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  lf_tags: IResolvable | typing.List[LakeformationTagAssociationLfTags],
  resource: LakeformationTagAssociationResource
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags">lf_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]</code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `lf_tags`<sup>Required</sup> <a name="lf_tags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags"></a>

```python
lf_tags: IResolvable | typing.List[LakeformationTagAssociationLfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource"></a>

```python
resource: LakeformationTagAssociationResource
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

### LakeformationTagAssociationLfTags <a name="LakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationLfTags(
  catalog_id: str,
  tag_key: str,
  tag_values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}. |

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}.

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}.

---

### LakeformationTagAssociationResource <a name="LakeformationTagAssociationResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResource(
  catalog: str = None,
  database: LakeformationTagAssociationResourceDatabase = None,
  table: LakeformationTagAssociationResourceTable = None,
  table_with_columns: LakeformationTagAssociationResourceTableWithColumns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database"></a>

```python
database: LakeformationTagAssociationResourceDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table"></a>

```python
table: LakeformationTagAssociationResourceTable
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}.

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationTagAssociationResourceTableWithColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}.

---

### LakeformationTagAssociationResourceDatabase <a name="LakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase(
  catalog_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

### LakeformationTagAssociationResourceTable <a name="LakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceTable(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  table_wildcard: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard">table_wildcard</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `table_wildcard`<sup>Optional</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard"></a>

```python
table_wildcard: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}.

---

### LakeformationTagAssociationResourceTableWithColumns <a name="LakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns(
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  database_name: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationTagAssociationLfTagsList <a name="LakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationLfTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationTagAssociationLfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LakeformationTagAssociationLfTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>]

---


### LakeformationTagAssociationLfTagsOutputReference <a name="LakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput">tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_values_input`<sup>Optional</sup> <a name="tag_values_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput"></a>

```python
tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationTagAssociationLfTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>

---


### LakeformationTagAssociationResourceDatabaseOutputReference <a name="LakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationTagAssociationResourceDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---


### LakeformationTagAssociationResourceOutputReference <a name="LakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns">put_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns">reset_table_with_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database` <a name="put_database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase"></a>

```python
def put_database(
  catalog_id: str = None,
  name: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `put_table` <a name="put_table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable"></a>

```python
def put_table(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  table_wildcard: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

###### `table_wildcard`<sup>Optional</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.tableWildcard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}.

---

##### `put_table_with_columns` <a name="put_table_with_columns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns"></a>

```python
def put_table_with_columns(
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  database_name: str = None,
  name: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_with_columns` <a name="reset_table_with_columns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns"></a>

```python
def reset_table_with_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput">table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput">table_with_columns_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database"></a>

```python
database: LakeformationTagAssociationResourceDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table"></a>

```python
table: LakeformationTagAssociationResourceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationTagAssociationResourceTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | LakeformationTagAssociationResourceDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput"></a>

```python
table_input: IResolvable | LakeformationTagAssociationResourceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `table_with_columns_input`<sup>Optional</sup> <a name="table_with_columns_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput"></a>

```python
table_with_columns_input: IResolvable | LakeformationTagAssociationResourceTableWithColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationTagAssociationResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---


### LakeformationTagAssociationResourceTableOutputReference <a name="LakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard">reset_table_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_table_wildcard` <a name="reset_table_wildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard"></a>

```python
def reset_table_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput">table_wildcard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">table_wildcard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `table_wildcard_input`<sup>Optional</sup> <a name="table_wildcard_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput"></a>

```python
table_wildcard_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_wildcard`<sup>Required</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```python
table_wildcard: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationTagAssociationResourceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---


### LakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="LakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_tag_association

lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationTagAssociationResourceTableWithColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---



