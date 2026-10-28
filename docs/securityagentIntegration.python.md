# `securityagentIntegration` Submodule <a name="`securityagentIntegration` Submodule" id="@cdktn/provider-awscc.securityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentIntegration <a name="SecurityagentIntegration" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  provider_name: str,
  kms_key_id: str = None,
  private_connection_name: str = None,
  provider_input: SecurityagentIntegrationProviderInput = None,
  tags: IResolvable | typing.List[SecurityagentIntegrationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | The integration provider. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier of the AWS KMS key to use for encrypting data associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.privateConnectionName">private_connection_name</a></code> | <code>str</code> | The name of an active private connection used to reach a self-hosted provider instance over private networking. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.providerInput">provider_input</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]</code> | The tags to associate with the integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#display_name SecurityagentIntegration#display_name}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.providerName"></a>

- *Type:* str

The integration provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_name SecurityagentIntegration#provider_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The identifier of the AWS KMS key to use for encrypting data associated with the integration.

Can be a key ID, key ARN, alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#kms_key_id SecurityagentIntegration#kms_key_id}

---

##### `private_connection_name`<sup>Optional</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.privateConnectionName"></a>

- *Type:* str

The name of an active private connection used to reach a self-hosted provider instance over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#private_connection_name SecurityagentIntegration#private_connection_name}

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.providerInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_input SecurityagentIntegration#provider_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]

The tags to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#tags SecurityagentIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput">put_provider_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName">reset_private_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput">reset_provider_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_input` <a name="put_provider_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput"></a>

```python
def put_provider_input(
  bitbucket: SecurityagentIntegrationProviderInputBitbucket = None,
  confluence: SecurityagentIntegrationProviderInputConfluence = None,
  github: SecurityagentIntegrationProviderInputGithub = None,
  gitlab: SecurityagentIntegrationProviderInputGitlab = None
) -> None
```

###### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.bitbucket"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

The input required to create a Bitbucket integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#bitbucket SecurityagentIntegration#bitbucket}

---

###### `confluence`<sup>Optional</sup> <a name="confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.confluence"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

The input required to create a Confluence integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#confluence SecurityagentIntegration#confluence}

---

###### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.github"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

The input required to create a GitHub integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#github SecurityagentIntegration#github}

---

###### `gitlab`<sup>Optional</sup> <a name="gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.gitlab"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

The input required to create a GitLab integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#gitlab SecurityagentIntegration#gitlab}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SecurityagentIntegrationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_private_connection_name` <a name="reset_private_connection_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName"></a>

```python
def reset_private_connection_name() -> None
```

##### `reset_provider_input` <a name="reset_provider_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput"></a>

```python
def reset_provider_input() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityagentIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput">provider_input</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput">private_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput">provider_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `provider_input`<sup>Required</sup> <a name="provider_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput"></a>

```python
provider_input: SecurityagentIntegrationProviderInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a>

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags"></a>

```python
tags: SecurityagentIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a>

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `private_connection_name_input`<sup>Optional</sup> <a name="private_connection_name_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput"></a>

```python
private_connection_name_input: str
```

- *Type:* str

---

##### `provider_input_input`<sup>Optional</sup> <a name="provider_input_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput"></a>

```python
provider_input_input: IResolvable | SecurityagentIntegrationProviderInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SecurityagentIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentIntegrationConfig <a name="SecurityagentIntegrationConfig" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  provider_name: str,
  kms_key_id: str = None,
  private_connection_name: str = None,
  provider_input: SecurityagentIntegrationProviderInput = None,
  tags: IResolvable | typing.List[SecurityagentIntegrationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName">provider_name</a></code> | <code>str</code> | The integration provider. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier of the AWS KMS key to use for encrypting data associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | The name of an active private connection used to reach a self-hosted provider instance over private networking. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput">provider_input</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]</code> | The tags to associate with the integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#display_name SecurityagentIntegration#display_name}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

The integration provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_name SecurityagentIntegration#provider_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The identifier of the AWS KMS key to use for encrypting data associated with the integration.

Can be a key ID, key ARN, alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#kms_key_id SecurityagentIntegration#kms_key_id}

---

##### `private_connection_name`<sup>Optional</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

The name of an active private connection used to reach a self-hosted provider instance over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#private_connection_name SecurityagentIntegration#private_connection_name}

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput"></a>

```python
provider_input: SecurityagentIntegrationProviderInput
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_input SecurityagentIntegration#provider_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SecurityagentIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]

The tags to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#tags SecurityagentIntegration#tags}

---

### SecurityagentIntegrationProviderInput <a name="SecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInput(
  bitbucket: SecurityagentIntegrationProviderInputBitbucket = None,
  confluence: SecurityagentIntegrationProviderInputConfluence = None,
  github: SecurityagentIntegrationProviderInputGithub = None,
  gitlab: SecurityagentIntegrationProviderInputGitlab = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | The input required to create a Bitbucket integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence">confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | The input required to create a Confluence integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | The input required to create a GitHub integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | The input required to create a GitLab integration. |

---

##### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket"></a>

```python
bitbucket: SecurityagentIntegrationProviderInputBitbucket
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

The input required to create a Bitbucket integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#bitbucket SecurityagentIntegration#bitbucket}

---

##### `confluence`<sup>Optional</sup> <a name="confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence"></a>

```python
confluence: SecurityagentIntegrationProviderInputConfluence
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

The input required to create a Confluence integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#confluence SecurityagentIntegration#confluence}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github"></a>

```python
github: SecurityagentIntegrationProviderInputGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

The input required to create a GitHub integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#github SecurityagentIntegration#github}

---

##### `gitlab`<sup>Optional</sup> <a name="gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab"></a>

```python
gitlab: SecurityagentIntegrationProviderInputGitlab
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

The input required to create a GitLab integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#gitlab SecurityagentIntegration#gitlab}

---

### SecurityagentIntegrationProviderInputBitbucket <a name="SecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket(
  code: str = None,
  installation_id: str = None,
  state: str = None,
  workspace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code">code</a></code> | <code>str</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId">installation_id</a></code> | <code>str</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state">state</a></code> | <code>str</code> | The CSRF state token echoed back from the OAuth redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace">workspace</a></code> | <code>str</code> | The Bitbucket workspace slug that identifies the workspace to integrate. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code"></a>

```python
code: str
```

- *Type:* str

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state"></a>

```python
state: str
```

- *Type:* str

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

The Bitbucket workspace slug that identifies the workspace to integrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#workspace SecurityagentIntegration#workspace}

---

### SecurityagentIntegrationProviderInputConfluence <a name="SecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputConfluence(
  code: str = None,
  installation_id: str = None,
  site_url: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code">code</a></code> | <code>str</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId">installation_id</a></code> | <code>str</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl">site_url</a></code> | <code>str</code> | The Confluence Cloud site URL, for example https://mysite.atlassian.net. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state">state</a></code> | <code>str</code> | The CSRF state token echoed back from the OAuth redirect. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code"></a>

```python
code: str
```

- *Type:* str

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `site_url`<sup>Optional</sup> <a name="site_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl"></a>

```python
site_url: str
```

- *Type:* str

The Confluence Cloud site URL, for example https://mysite.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#site_url SecurityagentIntegration#site_url}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state"></a>

```python
state: str
```

- *Type:* str

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

### SecurityagentIntegrationProviderInputGithub <a name="SecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputGithub(
  code: str = None,
  installation_id: str = None,
  organization_name: str = None,
  state: str = None,
  target_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code">code</a></code> | <code>str</code> | The OAuth authorization code received from GitHub. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId">installation_id</a></code> | <code>str</code> | The installation identifier provided by GitHub Enterprise Server on the install callback. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName">organization_name</a></code> | <code>str</code> | The name of the GitHub organization to integrate with. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state">state</a></code> | <code>str</code> | The CSRF state token for validating the OAuth flow. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl">target_url</a></code> | <code>str</code> | The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code"></a>

```python
code: str
```

- *Type:* str

The OAuth authorization code received from GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

The installation identifier provided by GitHub Enterprise Server on the install callback.

Required for GitHub Enterprise Server integrations and ignored for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

The name of the GitHub organization to integrate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#organization_name SecurityagentIntegration#organization_name}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state"></a>

```python
state: str
```

- *Type:* str

The CSRF state token for validating the OAuth flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

### SecurityagentIntegrationProviderInputGitlab <a name="SecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputGitlab(
  access_token: str = None,
  group_id: str = None,
  target_url: str = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken">access_token</a></code> | <code>str</code> | The GitLab access token used to authenticate. This can be a personal access token or a group access token. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId">group_id</a></code> | <code>str</code> | The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl">target_url</a></code> | <code>str</code> | The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com). |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType">token_type</a></code> | <code>str</code> | The type of GitLab access token. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

The GitLab access token used to authenticate. This can be a personal access token or a group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#access_token SecurityagentIntegration#access_token}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#group_id SecurityagentIntegration#group_id}

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#token_type SecurityagentIntegration#token_type}

---

### SecurityagentIntegrationTags <a name="SecurityagentIntegrationTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#key SecurityagentIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#value SecurityagentIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentIntegrationProviderInputBitbucketOutputReference <a name="SecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId">reset_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_installation_id` <a name="reset_installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId"></a>

```python
def reset_installation_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput">installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput"></a>

```python
installation_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationProviderInputBitbucket
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---


### SecurityagentIntegrationProviderInputConfluenceOutputReference <a name="SecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId">reset_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl">reset_site_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_installation_id` <a name="reset_installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId"></a>

```python
def reset_installation_id() -> None
```

##### `reset_site_url` <a name="reset_site_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl"></a>

```python
def reset_site_url() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput">installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput">site_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">site_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput"></a>

```python
installation_id_input: str
```

- *Type:* str

---

##### `site_url_input`<sup>Optional</sup> <a name="site_url_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput"></a>

```python
site_url_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `site_url`<sup>Required</sup> <a name="site_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```python
site_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationProviderInputConfluence
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---


### SecurityagentIntegrationProviderInputGithubOutputReference <a name="SecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId">reset_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_installation_id` <a name="reset_installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId"></a>

```python
def reset_installation_id() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput">installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput">target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput"></a>

```python
installation_id_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput"></a>

```python
target_url_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationProviderInputGithub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---


### SecurityagentIntegrationProviderInputGitlabOutputReference <a name="SecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType"></a>

```python
def reset_token_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput">target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput"></a>

```python
target_url_input: str
```

- *Type:* str

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationProviderInputGitlab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---


### SecurityagentIntegrationProviderInputOutputReference <a name="SecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket">put_bitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence">put_confluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab">put_gitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket">reset_bitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence">reset_confluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab">reset_gitlab</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bitbucket` <a name="put_bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket"></a>

```python
def put_bitbucket(
  code: str = None,
  installation_id: str = None,
  state: str = None,
  workspace: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.code"></a>

- *Type:* str

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

###### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.installationId"></a>

- *Type:* str

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.state"></a>

- *Type:* str

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

###### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.workspace"></a>

- *Type:* str

The Bitbucket workspace slug that identifies the workspace to integrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#workspace SecurityagentIntegration#workspace}

---

##### `put_confluence` <a name="put_confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence"></a>

```python
def put_confluence(
  code: str = None,
  installation_id: str = None,
  site_url: str = None,
  state: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.code"></a>

- *Type:* str

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

###### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.installationId"></a>

- *Type:* str

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

###### `site_url`<sup>Optional</sup> <a name="site_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.siteUrl"></a>

- *Type:* str

The Confluence Cloud site URL, for example https://mysite.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#site_url SecurityagentIntegration#site_url}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.state"></a>

- *Type:* str

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `put_github` <a name="put_github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub"></a>

```python
def put_github(
  code: str = None,
  installation_id: str = None,
  organization_name: str = None,
  state: str = None,
  target_url: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.code"></a>

- *Type:* str

The OAuth authorization code received from GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

###### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.installationId"></a>

- *Type:* str

The installation identifier provided by GitHub Enterprise Server on the install callback.

Required for GitHub Enterprise Server integrations and ignored for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.organizationName"></a>

- *Type:* str

The name of the GitHub organization to integrate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#organization_name SecurityagentIntegration#organization_name}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.state"></a>

- *Type:* str

The CSRF state token for validating the OAuth flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.targetUrl"></a>

- *Type:* str

The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

##### `put_gitlab` <a name="put_gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab"></a>

```python
def put_gitlab(
  access_token: str = None,
  group_id: str = None,
  target_url: str = None,
  token_type: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.accessToken"></a>

- *Type:* str

The GitLab access token used to authenticate. This can be a personal access token or a group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#access_token SecurityagentIntegration#access_token}

---

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.groupId"></a>

- *Type:* str

The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#group_id SecurityagentIntegration#group_id}

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.targetUrl"></a>

- *Type:* str

The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

###### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.tokenType"></a>

- *Type:* str

The type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#token_type SecurityagentIntegration#token_type}

---

##### `reset_bitbucket` <a name="reset_bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket"></a>

```python
def reset_bitbucket() -> None
```

##### `reset_confluence` <a name="reset_confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence"></a>

```python
def reset_confluence() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_gitlab` <a name="reset_gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab"></a>

```python
def reset_gitlab() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence">confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput">bitbucket_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput">confluence_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput">github_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput">gitlab_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitbucket`<sup>Required</sup> <a name="bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```python
bitbucket: SecurityagentIntegrationProviderInputBitbucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `confluence`<sup>Required</sup> <a name="confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```python
confluence: SecurityagentIntegrationProviderInputConfluenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```python
github: SecurityagentIntegrationProviderInputGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `gitlab`<sup>Required</sup> <a name="gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```python
gitlab: SecurityagentIntegrationProviderInputGitlabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `bitbucket_input`<sup>Optional</sup> <a name="bitbucket_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput"></a>

```python
bitbucket_input: IResolvable | SecurityagentIntegrationProviderInputBitbucket
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `confluence_input`<sup>Optional</sup> <a name="confluence_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput"></a>

```python
confluence_input: IResolvable | SecurityagentIntegrationProviderInputConfluence
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput"></a>

```python
github_input: IResolvable | SecurityagentIntegrationProviderInputGithub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `gitlab_input`<sup>Optional</sup> <a name="gitlab_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput"></a>

```python
gitlab_input: IResolvable | SecurityagentIntegrationProviderInputGitlab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationProviderInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---


### SecurityagentIntegrationTagsList <a name="SecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityagentIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityagentIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>]

---


### SecurityagentIntegrationTagsOutputReference <a name="SecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_integration

securityagentIntegration.SecurityagentIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentIntegrationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>

---



