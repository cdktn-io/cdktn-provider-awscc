# `omicsVariantStore` Submodule <a name="`omicsVariantStore` Submodule" id="@cdktn/provider-awscc.omicsVariantStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsVariantStore <a name="OmicsVariantStore" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store awscc_omics_variant_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStore(
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
  reference: OmicsVariantStoreReference,
  description: str = None,
  sse_config: OmicsVariantStoreSseConfig = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}.

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}.

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.sseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference">put_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig">put_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetSseConfig">reset_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_reference` <a name="put_reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference"></a>

```python
def put_reference(
  reference_arn: str
) -> None
```

###### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference.parameter.referenceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference_arn OmicsVariantStore#reference_arn}.

---

##### `put_sse_config` <a name="put_sse_config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig"></a>

```python
def put_sse_config(
  key_arn: str = None,
  type: str = None
) -> None
```

###### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig.parameter.keyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#key_arn OmicsVariantStore#key_arn}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#type OmicsVariantStore#type}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_sse_config` <a name="reset_sse_config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetSseConfig"></a>

```python
def reset_sse_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OmicsVariantStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OmicsVariantStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OmicsVariantStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OmicsVariantStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsVariantStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference">OmicsVariantStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference">OmicsVariantStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeArn">store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeSizeBytes">store_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.variantStoreId">variant_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.referenceInput">reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfigInput">sse_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.reference"></a>

```python
reference: OmicsVariantStoreReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference">OmicsVariantStoreReferenceOutputReference</a>

---

##### `sse_config`<sup>Required</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfig"></a>

```python
sse_config: OmicsVariantStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference">OmicsVariantStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `store_arn`<sup>Required</sup> <a name="store_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeArn"></a>

```python
store_arn: str
```

- *Type:* str

---

##### `store_size_bytes`<sup>Required</sup> <a name="store_size_bytes" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeSizeBytes"></a>

```python
store_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `variant_store_id`<sup>Required</sup> <a name="variant_store_id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.variantStoreId"></a>

```python
variant_store_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.referenceInput"></a>

```python
reference_input: IResolvable | OmicsVariantStoreReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

---

##### `sse_config_input`<sup>Optional</sup> <a name="sse_config_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfigInput"></a>

```python
sse_config_input: IResolvable | OmicsVariantStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsVariantStoreConfig <a name="OmicsVariantStoreConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  reference: OmicsVariantStoreReference,
  description: str = None,
  sse_config: OmicsVariantStoreSseConfig = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}.

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.reference"></a>

```python
reference: OmicsVariantStoreReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}.

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.sseConfig"></a>

```python
sse_config: OmicsVariantStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}.

---

### OmicsVariantStoreReference <a name="OmicsVariantStoreReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStoreReference(
  reference_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference_arn OmicsVariantStore#reference_arn}. |

---

##### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference_arn OmicsVariantStore#reference_arn}.

---

### OmicsVariantStoreSseConfig <a name="OmicsVariantStoreSseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStoreSseConfig(
  key_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.keyArn">key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#key_arn OmicsVariantStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#type OmicsVariantStore#type}. |

---

##### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#key_arn OmicsVariantStore#key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#type OmicsVariantStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsVariantStoreReferenceOutputReference <a name="OmicsVariantStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStoreReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArnInput">reference_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_arn_input`<sup>Optional</sup> <a name="reference_arn_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArnInput"></a>

```python
reference_arn_input: str
```

- *Type:* str

---

##### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsVariantStoreReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

---


### OmicsVariantStoreSseConfigOutputReference <a name="OmicsVariantStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_variant_store

omicsVariantStore.OmicsVariantStoreSseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetKeyArn">reset_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_arn` <a name="reset_key_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetKeyArn"></a>

```python
def reset_key_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsVariantStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

---



