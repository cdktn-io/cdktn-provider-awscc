# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktn/provider-awscc.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection awscc_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollection(
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
  collection_group_name: str = None,
  deletion_protection: str = None,
  description: str = None,
  encryption_config: OpensearchserverlessCollectionEncryptionConfig = None,
  standby_replicas: str = None,
  tags: IResolvable | typing.List[OpensearchserverlessCollectionTags] = None,
  type: str = None,
  vector_options: OpensearchserverlessCollectionVectorOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName">collection_group_name</a></code> | <code>str</code> | The name of the collection group to associate with the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>str</code> | The deletion protection state of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | Encryption settings for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas">standby_replicas</a></code> | <code>str</code> | The possible standby replicas for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]</code> | List of tags to be added to the resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type">type</a></code> | <code>str</code> | The possible types for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions">vector_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | Vector search configuration options for the collection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.name"></a>

- *Type:* str

The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collection_group_name`<sup>Optional</sup> <a name="collection_group_name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.collectionGroupName"></a>

- *Type:* str

The name of the collection group to associate with the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.deletionProtection"></a>

- *Type:* str

The deletion protection state of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#deletion_protection OpensearchserverlessCollection#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.description"></a>

- *Type:* str

The description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

Encryption settings for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}

---

##### `standby_replicas`<sup>Optional</sup> <a name="standby_replicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.standbyReplicas"></a>

- *Type:* str

The possible standby replicas for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]

List of tags to be added to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.type"></a>

- *Type:* str

The possible types for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vector_options`<sup>Optional</sup> <a name="vector_options" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.vectorOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

Vector search configuration options for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions">put_vector_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName">reset_collection_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">reset_standby_replicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions">reset_vector_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig"></a>

```python
def put_encryption_config(
  aws_owned_key: bool | IResolvable = None,
  kms_key_arn: str = None
) -> None
```

###### `aws_owned_key`<sup>Optional</sup> <a name="aws_owned_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.awsOwnedKey"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to use an AWS owned key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.kmsKeyArn"></a>

- *Type:* str

Key Management Service key used to encrypt the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OpensearchserverlessCollectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]

---

##### `put_vector_options` <a name="put_vector_options" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions"></a>

```python
def put_vector_options(
  serverless_vector_acceleration: str = None
) -> None
```

###### `serverless_vector_acceleration`<sup>Optional</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions.parameter.serverlessVectorAcceleration"></a>

- *Type:* str

Indicates whether GPU acceleration is enabled for vector indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}

---

##### `reset_collection_group_name` <a name="reset_collection_group_name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName"></a>

```python
def reset_collection_group_name() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_standby_replicas` <a name="reset_standby_replicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```python
def reset_standby_replicas() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vector_options` <a name="reset_vector_options" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions"></a>

```python
def reset_vector_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">collection_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">dashboard_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints">fips_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions">vector_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput">collection_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput">encryption_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">standby_replicas_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput">vector_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName">collection_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">standby_replicas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collection_endpoint`<sup>Required</sup> <a name="collection_endpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```python
collection_endpoint: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `dashboard_endpoint`<sup>Required</sup> <a name="dashboard_endpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```python
dashboard_endpoint: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig"></a>

```python
encryption_config: OpensearchserverlessCollectionEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference">OpensearchserverlessCollectionEncryptionConfigOutputReference</a>

---

##### `fips_endpoints`<sup>Required</sup> <a name="fips_endpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.fipsEndpoints"></a>

```python
fips_endpoints: OpensearchserverlessCollectionFipsEndpointsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference">OpensearchserverlessCollectionFipsEndpointsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```python
tags: OpensearchserverlessCollectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList">OpensearchserverlessCollectionTagsList</a>

---

##### `vector_options`<sup>Required</sup> <a name="vector_options" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions"></a>

```python
vector_options: OpensearchserverlessCollectionVectorOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference">OpensearchserverlessCollectionVectorOptionsOutputReference</a>

---

##### `collection_group_name_input`<sup>Optional</sup> <a name="collection_group_name_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput"></a>

```python
collection_group_name_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtectionInput"></a>

```python
deletion_protection_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput"></a>

```python
encryption_config_input: IResolvable | OpensearchserverlessCollectionEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `standby_replicas_input`<sup>Optional</sup> <a name="standby_replicas_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```python
standby_replicas_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OpensearchserverlessCollectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vector_options_input`<sup>Optional</sup> <a name="vector_options_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput"></a>

```python
vector_options_input: IResolvable | OpensearchserverlessCollectionVectorOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---

##### `collection_group_name`<sup>Required</sup> <a name="collection_group_name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName"></a>

```python
collection_group_name: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `standby_replicas`<sup>Required</sup> <a name="standby_replicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```python
standby_replicas: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  collection_group_name: str = None,
  deletion_protection: str = None,
  description: str = None,
  encryption_config: OpensearchserverlessCollectionEncryptionConfig = None,
  standby_replicas: str = None,
  tags: IResolvable | typing.List[OpensearchserverlessCollectionTags] = None,
  type: str = None,
  vector_options: OpensearchserverlessCollectionVectorOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">name</a></code> | <code>str</code> | The name of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName">collection_group_name</a></code> | <code>str</code> | The name of the collection group to associate with the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | The deletion protection state of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">description</a></code> | <code>str</code> | The description of the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | Encryption settings for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">standby_replicas</a></code> | <code>str</code> | The possible standby replicas for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]</code> | List of tags to be added to the resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">type</a></code> | <code>str</code> | The possible types for the collection. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions">vector_options</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | Vector search configuration options for the collection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `collection_group_name`<sup>Optional</sup> <a name="collection_group_name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName"></a>

```python
collection_group_name: str
```

- *Type:* str

The name of the collection group to associate with the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

The deletion protection state of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#deletion_protection OpensearchserverlessCollection#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig"></a>

```python
encryption_config: OpensearchserverlessCollectionEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

Encryption settings for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}

---

##### `standby_replicas`<sup>Optional</sup> <a name="standby_replicas" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```python
standby_replicas: str
```

- *Type:* str

The possible standby replicas for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OpensearchserverlessCollectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]

List of tags to be added to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The possible types for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `vector_options`<sup>Optional</sup> <a name="vector_options" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions"></a>

```python
vector_options: OpensearchserverlessCollectionVectorOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

Vector search configuration options for the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}

---

### OpensearchserverlessCollectionEncryptionConfig <a name="OpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig(
  aws_owned_key: bool | IResolvable = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey">aws_owned_key</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to use an AWS owned key for encryption. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Key Management Service key used to encrypt the collection. |

---

##### `aws_owned_key`<sup>Optional</sup> <a name="aws_owned_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey"></a>

```python
aws_owned_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to use an AWS owned key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Key Management Service key used to encrypt the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}

---

### OpensearchserverlessCollectionFipsEndpoints <a name="OpensearchserverlessCollectionFipsEndpoints" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints()
```


### OpensearchserverlessCollectionTags <a name="OpensearchserverlessCollectionTags" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key">key</a></code> | <code>str</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value">value</a></code> | <code>str</code> | The value in the key-value pair. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#key OpensearchserverlessCollection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#value OpensearchserverlessCollection#value}

---

### OpensearchserverlessCollectionVectorOptions <a name="OpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions(
  serverless_vector_acceleration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration">serverless_vector_acceleration</a></code> | <code>str</code> | Indicates whether GPU acceleration is enabled for vector indexing. |

---

##### `serverless_vector_acceleration`<sup>Optional</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration"></a>

```python
serverless_vector_acceleration: str
```

- *Type:* str

Indicates whether GPU acceleration is enabled for vector indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionEncryptionConfigOutputReference <a name="OpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey">reset_aws_owned_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_owned_key` <a name="reset_aws_owned_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey"></a>

```python
def reset_aws_owned_key() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput">aws_owned_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">aws_owned_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_owned_key_input`<sup>Optional</sup> <a name="aws_owned_key_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput"></a>

```python
aws_owned_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `aws_owned_key`<sup>Required</sup> <a name="aws_owned_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```python
aws_owned_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessCollectionEncryptionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig">OpensearchserverlessCollectionEncryptionConfig</a>

---


### OpensearchserverlessCollectionFipsEndpointsOutputReference <a name="OpensearchserverlessCollectionFipsEndpointsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint">collection_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint">dashboard_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_endpoint`<sup>Required</sup> <a name="collection_endpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint"></a>

```python
collection_endpoint: str
```

- *Type:* str

---

##### `dashboard_endpoint`<sup>Required</sup> <a name="dashboard_endpoint" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint"></a>

```python
dashboard_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchserverlessCollectionFipsEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionFipsEndpoints">OpensearchserverlessCollectionFipsEndpoints</a>

---


### OpensearchserverlessCollectionTagsList <a name="OpensearchserverlessCollectionTagsList" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserverlessCollectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserverlessCollectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>]

---


### OpensearchserverlessCollectionTagsOutputReference <a name="OpensearchserverlessCollectionTagsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessCollectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionTags">OpensearchserverlessCollectionTags</a>

---


### OpensearchserverlessCollectionVectorOptionsOutputReference <a name="OpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchserverless_collection

opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration">reset_serverless_vector_acceleration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_serverless_vector_acceleration` <a name="reset_serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```python
def reset_serverless_vector_acceleration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput">serverless_vector_acceleration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">serverless_vector_acceleration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `serverless_vector_acceleration_input`<sup>Optional</sup> <a name="serverless_vector_acceleration_input" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```python
serverless_vector_acceleration_input: str
```

- *Type:* str

---

##### `serverless_vector_acceleration`<sup>Required</sup> <a name="serverless_vector_acceleration" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```python
serverless_vector_acceleration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessCollectionVectorOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions">OpensearchserverlessCollectionVectorOptions</a>

---



