# `bedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`bedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreApiKeyCredentialProvider <a name="BedrockagentcoreApiKeyCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider(
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
  api_key: str = None,
  api_key_secret_config: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig = None,
  api_key_secret_source: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the API key credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | The API key to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretConfig">api_key_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | Configuration for a customer-provided secret containing the API key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretSource">api_key_secret_source</a></code> | <code>str</code> | The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]</code> | Tags to assign to the API key credential provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.name"></a>

- *Type:* str

The name of the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKey"></a>

- *Type:* str

The API key to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}

---

##### `api_key_secret_config`<sup>Optional</sup> <a name="api_key_secret_config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

Configuration for a customer-provided secret containing the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}

---

##### `api_key_secret_source`<sup>Optional</sup> <a name="api_key_secret_source" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretSource"></a>

- *Type:* str

The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]

Tags to assign to the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig">put_api_key_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretConfig">reset_api_key_secret_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretSource">reset_api_key_secret_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_key_secret_config` <a name="put_api_key_secret_config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig"></a>

```python
def put_api_key_secret_config(
  json_key: str = None,
  secret_id: str = None
) -> None
```

###### `json_key`<sup>Optional</sup> <a name="json_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig.parameter.jsonKey"></a>

- *Type:* str

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key BedrockagentcoreApiKeyCredentialProvider#json_key}

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig.parameter.secretId"></a>

- *Type:* str

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id BedrockagentcoreApiKeyCredentialProvider#secret_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_api_key_secret_config` <a name="reset_api_key_secret_config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretConfig"></a>

```python
def reset_api_key_secret_config() -> None
```

##### `reset_api_key_secret_source` <a name="reset_api_key_secret_source" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretSource"></a>

```python
def reset_api_key_secret_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">api_key_secret_arn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig">api_key_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey">api_key_secret_json_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput">api_key_secret_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput">api_key_secret_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource">api_key_secret_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_key_secret_arn`<sup>Required</sup> <a name="api_key_secret_arn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```python
api_key_secret_arn: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a>

---

##### `api_key_secret_config`<sup>Required</sup> <a name="api_key_secret_config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig"></a>

```python
api_key_secret_config: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a>

---

##### `api_key_secret_json_key`<sup>Required</sup> <a name="api_key_secret_json_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey"></a>

```python
api_key_secret_json_key: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags"></a>

```python
tags: BedrockagentcoreApiKeyCredentialProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key_secret_config_input`<sup>Optional</sup> <a name="api_key_secret_config_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput"></a>

```python
api_key_secret_config_input: IResolvable | BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---

##### `api_key_secret_source_input`<sup>Optional</sup> <a name="api_key_secret_source_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput"></a>

```python
api_key_secret_source_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_key_secret_source`<sup>Required</sup> <a name="api_key_secret_source" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource"></a>

```python
api_key_secret_source: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn()
```


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig(
  json_key: str = None,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey">json_key</a></code> | <code>str</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `json_key`<sup>Optional</sup> <a name="json_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey"></a>

```python
json_key: str
```

- *Type:* str

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key BedrockagentcoreApiKeyCredentialProvider#json_key}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id BedrockagentcoreApiKeyCredentialProvider#secret_id}

---

### BedrockagentcoreApiKeyCredentialProviderConfig <a name="BedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  api_key: str = None,
  api_key_secret_config: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig = None,
  api_key_secret_source: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name">name</a></code> | <code>str</code> | The name of the API key credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey">api_key</a></code> | <code>str</code> | The API key to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig">api_key_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | Configuration for a customer-provided secret containing the API key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource">api_key_secret_source</a></code> | <code>str</code> | The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]</code> | Tags to assign to the API key credential provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The API key to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}

---

##### `api_key_secret_config`<sup>Optional</sup> <a name="api_key_secret_config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig"></a>

```python
api_key_secret_config: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

Configuration for a customer-provided secret containing the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}

---

##### `api_key_secret_source`<sup>Optional</sup> <a name="api_key_secret_source" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource"></a>

```python
api_key_secret_source: str
```

- *Type:* str

The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]

Tags to assign to the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}

---

### BedrockagentcoreApiKeyCredentialProviderTags <a name="BedrockagentcoreApiKeyCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetJsonKey">reset_json_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_key` <a name="reset_json_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetJsonKey"></a>

```python
def reset_json_key() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput">json_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey">json_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_key_input`<sup>Optional</sup> <a name="json_key_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```python
json_key_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `json_key`<sup>Required</sup> <a name="json_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey"></a>

```python
json_key: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---


### BedrockagentcoreApiKeyCredentialProviderTagsList <a name="BedrockagentcoreApiKeyCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreApiKeyCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreApiKeyCredentialProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>]

---


### BedrockagentcoreApiKeyCredentialProviderTagsOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_api_key_credential_provider

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>

---



