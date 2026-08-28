# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-awscc.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2(
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
  provider_name: SecurityhubConnectorV2ProviderName,
  description: str = None,
  kms_key_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.providerName">provider_name</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | The third-party provider configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of KMS key used for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.name"></a>

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.providerName"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

The third-party provider configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#provider_name SecurityhubConnectorV2#provider_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.description"></a>

- *Type:* str

A description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of KMS key used for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName">put_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_name` <a name="put_provider_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName"></a>

```python
def put_provider_name(
  azure: SecurityhubConnectorV2ProviderNameAzure = None,
  jira_cloud: SecurityhubConnectorV2ProviderNameJiraCloud = None,
  service_now: SecurityhubConnectorV2ProviderNameServiceNow = None
) -> None
```

###### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName.parameter.azure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

The configuration settings required to establish an integration between AWS Security Hub and Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure SecurityhubConnectorV2#azure}

---

###### `jira_cloud`<sup>Optional</sup> <a name="jira_cloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName.parameter.jiraCloud"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus">connector_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus">enablement_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason">enablement_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt">last_checked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName">provider_name</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput">provider_name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `connector_status`<sup>Required</sup> <a name="connector_status" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus"></a>

```python
connector_status: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `enablement_status`<sup>Required</sup> <a name="enablement_status" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus"></a>

```python
enablement_status: str
```

- *Type:* str

---

##### `enablement_status_reason`<sup>Required</sup> <a name="enablement_status_reason" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason"></a>

```python
enablement_status_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues"></a>

```python
issues: SecurityhubConnectorV2IssuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a>

---

##### `last_checked_at`<sup>Required</sup> <a name="last_checked_at" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt"></a>

```python
last_checked_at: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName"></a>

```python
provider_name: SecurityhubConnectorV2ProviderNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput"></a>

```python
provider_name_input: IResolvable | SecurityhubConnectorV2ProviderName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_name: SecurityhubConnectorV2ProviderName,
  description: str = None,
  kms_key_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName">provider_name</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | The third-party provider configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">description</a></code> | <code>str</code> | A description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of KMS key used for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName"></a>

```python
provider_name: SecurityhubConnectorV2ProviderName
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

The third-party provider configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#provider_name SecurityhubConnectorV2#provider_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of KMS key used for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}

---

### SecurityhubConnectorV2Issues <a name="SecurityhubConnectorV2Issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2Issues()
```


### SecurityhubConnectorV2ProviderName <a name="SecurityhubConnectorV2ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderName(
  azure: SecurityhubConnectorV2ProviderNameAzure = None,
  jira_cloud: SecurityhubConnectorV2ProviderNameJiraCloud = None,
  service_now: SecurityhubConnectorV2ProviderNameServiceNow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | The configuration settings required to establish an integration between AWS Security Hub and Azure. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud">jira_cloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | The initial configuration settings required to establish an integration between Security Hub and Jira Cloud. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM. |

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure"></a>

```python
azure: SecurityhubConnectorV2ProviderNameAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

The configuration settings required to establish an integration between AWS Security Hub and Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure SecurityhubConnectorV2#azure}

---

##### `jira_cloud`<sup>Optional</sup> <a name="jira_cloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud"></a>

```python
jira_cloud: SecurityhubConnectorV2ProviderNameJiraCloud
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow"></a>

```python
service_now: SecurityhubConnectorV2ProviderNameServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ProviderNameAzure <a name="SecurityhubConnectorV2ProviderNameAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure(
  aws_config_connector_arn: str = None,
  azure_regions: typing.List[str] = None,
  scope_configuration: SecurityhubConnectorV2ProviderNameAzureScopeConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn">aws_config_connector_arn</a></code> | <code>str</code> | The ARN of the AWS Config connector used for the Azure integration. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions">azure_regions</a></code> | <code>typing.List[str]</code> | The list of Azure regions to include in the connector scope. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | The scope configuration for an Azure connector. |

---

##### `aws_config_connector_arn`<sup>Optional</sup> <a name="aws_config_connector_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn"></a>

```python
aws_config_connector_arn: str
```

- *Type:* str

The ARN of the AWS Config connector used for the Azure integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#aws_config_connector_arn SecurityhubConnectorV2#aws_config_connector_arn}

---

##### `azure_regions`<sup>Optional</sup> <a name="azure_regions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions"></a>

```python
azure_regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of Azure regions to include in the connector scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure_regions SecurityhubConnectorV2#azure_regions}

---

##### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration"></a>

```python
scope_configuration: SecurityhubConnectorV2ProviderNameAzureScopeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

The scope configuration for an Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_configuration SecurityhubConnectorV2#scope_configuration}

---

### SecurityhubConnectorV2ProviderNameAzureScopeConfiguration <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration(
  scope_type: str = None,
  scope_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType">scope_type</a></code> | <code>str</code> | The scope type for the Azure connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues">scope_values</a></code> | <code>typing.List[str]</code> | The list of scope values for the Azure connector. |

---

##### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

The scope type for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_type SecurityhubConnectorV2#scope_type}

---

##### `scope_values`<sup>Optional</sup> <a name="scope_values" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues"></a>

```python
scope_values: typing.List[str]
```

- *Type:* typing.List[str]

The list of scope values for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_values SecurityhubConnectorV2#scope_values}

---

### SecurityhubConnectorV2ProviderNameJiraCloud <a name="SecurityhubConnectorV2ProviderNameJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud(
  project_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey">project_key</a></code> | <code>str</code> | The project key for a Jira Cloud instance. |

---

##### `project_key`<sup>Optional</sup> <a name="project_key" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The project key for a Jira Cloud instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}

---

### SecurityhubConnectorV2ProviderNameServiceNow <a name="SecurityhubConnectorV2ProviderNameServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow(
  instance_name: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName">instance_name</a></code> | <code>str</code> | The instance name of ServiceNow ITSM. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials. |

---

##### `instance_name`<sup>Optional</sup> <a name="instance_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The instance name of ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2IssuesList <a name="SecurityhubConnectorV2IssuesList" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2IssuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConnectorV2IssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecurityhubConnectorV2IssuesOutputReference <a name="SecurityhubConnectorV2IssuesOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue"></a>

```python
internal_value: SecurityhubConnectorV2Issues
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a>

---


### SecurityhubConnectorV2ProviderNameAzureOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration">put_scope_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn">reset_aws_config_connector_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions">reset_azure_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration">reset_scope_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scope_configuration` <a name="put_scope_configuration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration"></a>

```python
def put_scope_configuration(
  scope_type: str = None,
  scope_values: typing.List[str] = None
) -> None
```

###### `scope_type`<sup>Optional</sup> <a name="scope_type" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration.parameter.scopeType"></a>

- *Type:* str

The scope type for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_type SecurityhubConnectorV2#scope_type}

---

###### `scope_values`<sup>Optional</sup> <a name="scope_values" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration.parameter.scopeValues"></a>

- *Type:* typing.List[str]

The list of scope values for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_values SecurityhubConnectorV2#scope_values}

---

##### `reset_aws_config_connector_arn` <a name="reset_aws_config_connector_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn"></a>

```python
def reset_aws_config_connector_arn() -> None
```

##### `reset_azure_regions` <a name="reset_azure_regions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions"></a>

```python
def reset_azure_regions() -> None
```

##### `reset_scope_configuration` <a name="reset_scope_configuration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration"></a>

```python
def reset_scope_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput">aws_config_connector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput">azure_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput">scope_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn">aws_config_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions">azure_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_configuration`<sup>Required</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```python
scope_configuration: SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `aws_config_connector_arn_input`<sup>Optional</sup> <a name="aws_config_connector_arn_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput"></a>

```python
aws_config_connector_arn_input: str
```

- *Type:* str

---

##### `azure_regions_input`<sup>Optional</sup> <a name="azure_regions_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput"></a>

```python
azure_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_configuration_input`<sup>Optional</sup> <a name="scope_configuration_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput"></a>

```python
scope_configuration_input: IResolvable | SecurityhubConnectorV2ProviderNameAzureScopeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---

##### `aws_config_connector_arn`<sup>Required</sup> <a name="aws_config_connector_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```python
aws_config_connector_arn: str
```

- *Type:* str

---

##### `azure_regions`<sup>Required</sup> <a name="azure_regions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions"></a>

```python
azure_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ProviderNameAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---


### SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType">reset_scope_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues">reset_scope_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope_type` <a name="reset_scope_type" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType"></a>

```python
def reset_scope_type() -> None
```

##### `reset_scope_values` <a name="reset_scope_values" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues"></a>

```python
def reset_scope_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput">scope_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput">scope_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">scope_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_type_input`<sup>Optional</sup> <a name="scope_type_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput"></a>

```python
scope_type_input: str
```

- *Type:* str

---

##### `scope_values_input`<sup>Optional</sup> <a name="scope_values_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput"></a>

```python
scope_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

##### `scope_values`<sup>Required</sup> <a name="scope_values" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```python
scope_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ProviderNameAzureScopeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---


### SecurityhubConnectorV2ProviderNameJiraCloudOutputReference <a name="SecurityhubConnectorV2ProviderNameJiraCloudOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey">reset_project_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_key` <a name="reset_project_key" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey"></a>

```python
def reset_project_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ProviderNameJiraCloud
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---


### SecurityhubConnectorV2ProviderNameOutputReference <a name="SecurityhubConnectorV2ProviderNameOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud">put_jira_cloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud">reset_jira_cloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure` <a name="put_azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure"></a>

```python
def put_azure(
  aws_config_connector_arn: str = None,
  azure_regions: typing.List[str] = None,
  scope_configuration: SecurityhubConnectorV2ProviderNameAzureScopeConfiguration = None
) -> None
```

###### `aws_config_connector_arn`<sup>Optional</sup> <a name="aws_config_connector_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure.parameter.awsConfigConnectorArn"></a>

- *Type:* str

The ARN of the AWS Config connector used for the Azure integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#aws_config_connector_arn SecurityhubConnectorV2#aws_config_connector_arn}

---

###### `azure_regions`<sup>Optional</sup> <a name="azure_regions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure.parameter.azureRegions"></a>

- *Type:* typing.List[str]

The list of Azure regions to include in the connector scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure_regions SecurityhubConnectorV2#azure_regions}

---

###### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure.parameter.scopeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

The scope configuration for an Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_configuration SecurityhubConnectorV2#scope_configuration}

---

##### `put_jira_cloud` <a name="put_jira_cloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud"></a>

```python
def put_jira_cloud(
  project_key: str = None
) -> None
```

###### `project_key`<sup>Optional</sup> <a name="project_key" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud.parameter.projectKey"></a>

- *Type:* str

The project key for a Jira Cloud instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow"></a>

```python
def put_service_now(
  instance_name: str = None,
  secret_arn: str = None
) -> None
```

###### `instance_name`<sup>Optional</sup> <a name="instance_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow.parameter.instanceName"></a>

- *Type:* str

The instance name of ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow.parameter.secretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}

---

##### `reset_azure` <a name="reset_azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_jira_cloud` <a name="reset_jira_cloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud"></a>

```python
def reset_jira_cloud() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud">jira_cloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput">azure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput">jira_cloud_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure"></a>

```python
azure: SecurityhubConnectorV2ProviderNameAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a>

---

##### `jira_cloud`<sup>Required</sup> <a name="jira_cloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud"></a>

```python
jira_cloud: SecurityhubConnectorV2ProviderNameJiraCloudOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow"></a>

```python
service_now: SecurityhubConnectorV2ProviderNameServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a>

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput"></a>

```python
azure_input: IResolvable | SecurityhubConnectorV2ProviderNameAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---

##### `jira_cloud_input`<sup>Optional</sup> <a name="jira_cloud_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput"></a>

```python
jira_cloud_input: IResolvable | SecurityhubConnectorV2ProviderNameJiraCloud
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | SecurityhubConnectorV2ProviderNameServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ProviderName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---


### SecurityhubConnectorV2ProviderNameServiceNowOutputReference <a name="SecurityhubConnectorV2ProviderNameServiceNowOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_connector_v2

securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName">reset_instance_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_name` <a name="reset_instance_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName"></a>

```python
def reset_instance_name() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConnectorV2ProviderNameServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---



