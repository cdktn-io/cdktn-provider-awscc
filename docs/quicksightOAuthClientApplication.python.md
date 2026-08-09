# `quicksightOAuthClientApplication` Submodule <a name="`quicksightOAuthClientApplication` Submodule" id="@cdktn/provider-awscc.quicksightOAuthClientApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightOAuthClientApplication <a name="QuicksightOAuthClientApplication" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplication(
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
  o_auth_client_application_id: str,
  o_auth_client_authentication_type: str,
  o_auth_token_endpoint_url: str,
  client_id: str = None,
  client_secret: str = None,
  data_source_type: str = None,
  identity_provider_vpc_connection_properties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties = None,
  o_auth_authorization_endpoint_url: str = None,
  o_auth_scopes: str = None,
  tags: IResolvable | typing.List[QuicksightOAuthClientApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthClientApplicationId">o_auth_client_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthClientAuthenticationType">o_auth_client_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthTokenEndpointUrl">o_auth_token_endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.dataSourceType">data_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.identityProviderVpcConnectionProperties">identity_provider_vpc_connection_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthAuthorizationEndpointUrl">o_auth_authorization_endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthScopes">o_auth_scopes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}.

---

##### `o_auth_client_application_id`<sup>Required</sup> <a name="o_auth_client_application_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthClientApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}.

---

##### `o_auth_client_authentication_type`<sup>Required</sup> <a name="o_auth_client_authentication_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthClientAuthenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}.

---

##### `o_auth_token_endpoint_url`<sup>Required</sup> <a name="o_auth_token_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthTokenEndpointUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}.

---

##### `data_source_type`<sup>Optional</sup> <a name="data_source_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.dataSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}.

---

##### `identity_provider_vpc_connection_properties`<sup>Optional</sup> <a name="identity_provider_vpc_connection_properties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.identityProviderVpcConnectionProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}.

---

##### `o_auth_authorization_endpoint_url`<sup>Optional</sup> <a name="o_auth_authorization_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthAuthorizationEndpointUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}.

---

##### `o_auth_scopes`<sup>Optional</sup> <a name="o_auth_scopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.oAuthScopes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties">put_identity_provider_vpc_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType">reset_data_source_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties">reset_identity_provider_vpc_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl">reset_o_auth_authorization_endpoint_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes">reset_o_auth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_provider_vpc_connection_properties` <a name="put_identity_provider_vpc_connection_properties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties"></a>

```python
def put_identity_provider_vpc_connection_properties(
  vpc_connection_arn: str = None
) -> None
```

###### `vpc_connection_arn`<sup>Optional</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties.parameter.vpcConnectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightOAuthClientApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_data_source_type` <a name="reset_data_source_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType"></a>

```python
def reset_data_source_type() -> None
```

##### `reset_identity_provider_vpc_connection_properties` <a name="reset_identity_provider_vpc_connection_properties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties"></a>

```python
def reset_identity_provider_vpc_connection_properties() -> None
```

##### `reset_o_auth_authorization_endpoint_url` <a name="reset_o_auth_authorization_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl"></a>

```python
def reset_o_auth_authorization_endpoint_url() -> None
```

##### `reset_o_auth_scopes` <a name="reset_o_auth_scopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes"></a>

```python
def reset_o_auth_scopes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightOAuthClientApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightOAuthClientApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightOAuthClientApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties">identity_provider_vpc_connection_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput">data_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput">identity_provider_vpc_connection_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput">o_auth_authorization_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput">o_auth_client_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput">o_auth_client_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput">o_auth_scopes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput">o_auth_token_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType">data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl">o_auth_authorization_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId">o_auth_client_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType">o_auth_client_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes">o_auth_scopes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl">o_auth_token_endpoint_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_vpc_connection_properties`<sup>Required</sup> <a name="identity_provider_vpc_connection_properties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties"></a>

```python
identity_provider_vpc_connection_properties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags"></a>

```python
tags: QuicksightOAuthClientApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `data_source_type_input`<sup>Optional</sup> <a name="data_source_type_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput"></a>

```python
data_source_type_input: str
```

- *Type:* str

---

##### `identity_provider_vpc_connection_properties_input`<sup>Optional</sup> <a name="identity_provider_vpc_connection_properties_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput"></a>

```python
identity_provider_vpc_connection_properties_input: IResolvable | QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `o_auth_authorization_endpoint_url_input`<sup>Optional</sup> <a name="o_auth_authorization_endpoint_url_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput"></a>

```python
o_auth_authorization_endpoint_url_input: str
```

- *Type:* str

---

##### `o_auth_client_application_id_input`<sup>Optional</sup> <a name="o_auth_client_application_id_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput"></a>

```python
o_auth_client_application_id_input: str
```

- *Type:* str

---

##### `o_auth_client_authentication_type_input`<sup>Optional</sup> <a name="o_auth_client_authentication_type_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput"></a>

```python
o_auth_client_authentication_type_input: str
```

- *Type:* str

---

##### `o_auth_scopes_input`<sup>Optional</sup> <a name="o_auth_scopes_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput"></a>

```python
o_auth_scopes_input: str
```

- *Type:* str

---

##### `o_auth_token_endpoint_url_input`<sup>Optional</sup> <a name="o_auth_token_endpoint_url_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput"></a>

```python
o_auth_token_endpoint_url_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightOAuthClientApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `o_auth_authorization_endpoint_url`<sup>Required</sup> <a name="o_auth_authorization_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl"></a>

```python
o_auth_authorization_endpoint_url: str
```

- *Type:* str

---

##### `o_auth_client_application_id`<sup>Required</sup> <a name="o_auth_client_application_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId"></a>

```python
o_auth_client_application_id: str
```

- *Type:* str

---

##### `o_auth_client_authentication_type`<sup>Required</sup> <a name="o_auth_client_authentication_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType"></a>

```python
o_auth_client_authentication_type: str
```

- *Type:* str

---

##### `o_auth_scopes`<sup>Required</sup> <a name="o_auth_scopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes"></a>

```python
o_auth_scopes: str
```

- *Type:* str

---

##### `o_auth_token_endpoint_url`<sup>Required</sup> <a name="o_auth_token_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl"></a>

```python
o_auth_token_endpoint_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightOAuthClientApplicationConfig <a name="QuicksightOAuthClientApplicationConfig" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  o_auth_client_application_id: str,
  o_auth_client_authentication_type: str,
  o_auth_token_endpoint_url: str,
  client_id: str = None,
  client_secret: str = None,
  data_source_type: str = None,
  identity_provider_vpc_connection_properties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties = None,
  o_auth_authorization_endpoint_url: str = None,
  o_auth_scopes: str = None,
  tags: IResolvable | typing.List[QuicksightOAuthClientApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId">o_auth_client_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType">o_auth_client_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl">o_auth_token_endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType">data_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties">identity_provider_vpc_connection_properties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl">o_auth_authorization_endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes">o_auth_scopes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}.

---

##### `o_auth_client_application_id`<sup>Required</sup> <a name="o_auth_client_application_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId"></a>

```python
o_auth_client_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}.

---

##### `o_auth_client_authentication_type`<sup>Required</sup> <a name="o_auth_client_authentication_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType"></a>

```python
o_auth_client_authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}.

---

##### `o_auth_token_endpoint_url`<sup>Required</sup> <a name="o_auth_token_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl"></a>

```python
o_auth_token_endpoint_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}.

---

##### `data_source_type`<sup>Optional</sup> <a name="data_source_type" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}.

---

##### `identity_provider_vpc_connection_properties`<sup>Optional</sup> <a name="identity_provider_vpc_connection_properties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties"></a>

```python
identity_provider_vpc_connection_properties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}.

---

##### `o_auth_authorization_endpoint_url`<sup>Optional</sup> <a name="o_auth_authorization_endpoint_url" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl"></a>

```python
o_auth_authorization_endpoint_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}.

---

##### `o_auth_scopes`<sup>Optional</sup> <a name="o_auth_scopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes"></a>

```python
o_auth_scopes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightOAuthClientApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}.

---

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties(
  vpc_connection_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}. |

---

##### `vpc_connection_arn`<sup>Optional</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}.

---

### QuicksightOAuthClientApplicationTags <a name="QuicksightOAuthClientApplicationTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn">reset_vpc_connection_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_connection_arn` <a name="reset_vpc_connection_arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn"></a>

```python
def reset_vpc_connection_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">vpc_connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_connection_arn_input`<sup>Optional</sup> <a name="vpc_connection_arn_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```python
vpc_connection_arn_input: str
```

- *Type:* str

---

##### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---


### QuicksightOAuthClientApplicationTagsList <a name="QuicksightOAuthClientApplicationTagsList" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightOAuthClientApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightOAuthClientApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>]

---


### QuicksightOAuthClientApplicationTagsOutputReference <a name="QuicksightOAuthClientApplicationTagsOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_o_auth_client_application

quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightOAuthClientApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>

---



