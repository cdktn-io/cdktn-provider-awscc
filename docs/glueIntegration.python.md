# `glueIntegration` Submodule <a name="`glueIntegration` Submodule" id="@cdktn/provider-awscc.glueIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegration <a name="GlueIntegration" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration awscc_glue_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  integration_name: str,
  source_arn: str,
  target_arn: str,
  additional_encryption_context: typing.Mapping[str] = None,
  data_filter: str = None,
  description: str = None,
  integration_config: GlueIntegrationIntegrationConfig = None,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[GlueIntegrationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationName">integration_name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.sourceArn">source_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.targetArn">target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dataFilter">data_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationConfig">integration_config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationName"></a>

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.sourceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.targetArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `data_filter`<sup>Optional</sup> <a name="data_filter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.dataFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.integrationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig">put_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter">reset_data_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig">reset_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_integration_config` <a name="put_integration_config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig"></a>

```python
def put_integration_config(
  continuous_sync: bool | IResolvable = None,
  refresh_interval: str = None,
  source_properties: typing.Mapping[str] = None
) -> None
```

###### `continuous_sync`<sup>Optional</sup> <a name="continuous_sync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.continuousSync"></a>

- *Type:* bool | cdktn.IResolvable

Enables continuous synchronization for on-demand data extractions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#continuous_sync GlueIntegration#continuous_sync}

---

###### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.refreshInterval"></a>

- *Type:* str

Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#refresh_interval GlueIntegration#refresh_interval}

---

###### `source_properties`<sup>Optional</sup> <a name="source_properties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.sourceProperties"></a>

- *Type:* typing.Mapping[str]

A collection of key-value pairs that specify additional properties for the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_properties GlueIntegration#source_properties}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GlueIntegrationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_data_filter` <a name="reset_data_filter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter"></a>

```python
def reset_data_filter() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_integration_config` <a name="reset_integration_config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig"></a>

```python
def reset_integration_config() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn">integration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput">data_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput">integration_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput">integration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter">data_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName">integration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_arn`<sup>Required</sup> <a name="integration_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn"></a>

```python
integration_arn: str
```

- *Type:* str

---

##### `integration_config`<sup>Required</sup> <a name="integration_config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig"></a>

```python
integration_config: GlueIntegrationIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags"></a>

```python
tags: GlueIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a>

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_filter_input`<sup>Optional</sup> <a name="data_filter_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput"></a>

```python
data_filter_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `integration_config_input`<sup>Optional</sup> <a name="integration_config_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput"></a>

```python
integration_config_input: IResolvable | GlueIntegrationIntegrationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `integration_name_input`<sup>Optional</sup> <a name="integration_name_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput"></a>

```python
integration_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GlueIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_filter`<sup>Required</sup> <a name="data_filter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter"></a>

```python
data_filter: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationConfig <a name="GlueIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  integration_name: str,
  source_arn: str,
  target_arn: str,
  additional_encryption_context: typing.Mapping[str] = None,
  data_filter: str = None,
  description: str = None,
  integration_config: GlueIntegrationIntegrationConfig = None,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[GlueIntegrationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName">integration_name</a></code> | <code>str</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn">source_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn">target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter">data_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `data_filter`<sup>Optional</sup> <a name="data_filter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter"></a>

```python
data_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig"></a>

```python
integration_config: GlueIntegrationIntegrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GlueIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

### GlueIntegrationIntegrationConfig <a name="GlueIntegrationIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationIntegrationConfig(
  continuous_sync: bool | IResolvable = None,
  refresh_interval: str = None,
  source_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync">continuous_sync</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables continuous synchronization for on-demand data extractions. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties">source_properties</a></code> | <code>typing.Mapping[str]</code> | A collection of key-value pairs that specify additional properties for the integration source. |

---

##### `continuous_sync`<sup>Optional</sup> <a name="continuous_sync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync"></a>

```python
continuous_sync: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables continuous synchronization for on-demand data extractions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#continuous_sync GlueIntegration#continuous_sync}

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#refresh_interval GlueIntegration#refresh_interval}

---

##### `source_properties`<sup>Optional</sup> <a name="source_properties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties"></a>

```python
source_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A collection of key-value pairs that specify additional properties for the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#source_properties GlueIntegration#source_properties}

---

### GlueIntegrationTags <a name="GlueIntegrationTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#key GlueIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration#value GlueIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationIntegrationConfigOutputReference <a name="GlueIntegrationIntegrationConfigOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationIntegrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync">reset_continuous_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval">reset_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties">reset_source_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continuous_sync` <a name="reset_continuous_sync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync"></a>

```python
def reset_continuous_sync() -> None
```

##### `reset_refresh_interval` <a name="reset_refresh_interval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval"></a>

```python
def reset_refresh_interval() -> None
```

##### `reset_source_properties` <a name="reset_source_properties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties"></a>

```python
def reset_source_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput">continuous_sync_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput">source_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync">continuous_sync</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties">source_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous_sync_input`<sup>Optional</sup> <a name="continuous_sync_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput"></a>

```python
continuous_sync_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput"></a>

```python
refresh_interval_input: str
```

- *Type:* str

---

##### `source_properties_input`<sup>Optional</sup> <a name="source_properties_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput"></a>

```python
source_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continuous_sync`<sup>Required</sup> <a name="continuous_sync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync"></a>

```python
continuous_sync: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `source_properties`<sup>Required</sup> <a name="source_properties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties"></a>

```python
source_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueIntegrationIntegrationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---


### GlueIntegrationTagsList <a name="GlueIntegrationTagsList" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>]

---


### GlueIntegrationTagsOutputReference <a name="GlueIntegrationTagsOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration

glueIntegration.GlueIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueIntegrationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags">GlueIntegrationTags</a>

---



