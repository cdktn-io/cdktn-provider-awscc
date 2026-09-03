# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool awscc_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allow_unauthenticated_identities: bool | IResolvable,
  allow_classic_flow: bool | IResolvable = None,
  cognito_events: str = None,
  cognito_identity_providers: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders] = None,
  cognito_streams: CognitoIdentityPoolCognitoStreams = None,
  developer_provider_name: str = None,
  identity_pool_name: str = None,
  identity_pool_tags: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags] = None,
  open_id_connect_provider_ar_ns: typing.List[str] = None,
  push_sync: CognitoIdentityPoolPushSync = None,
  saml_provider_ar_ns: typing.List[str] = None,
  supported_login_providers: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow">allow_classic_flow</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoEvents">cognito_events</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoStreams">cognito_streams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName">developer_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolTags">identity_pool_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openIdConnectProviderArNs">open_id_connect_provider_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.pushSync">push_sync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArNs">saml_provider_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders">supported_login_providers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `allow_classic_flow`<sup>Optional</sup> <a name="allow_classic_flow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `cognito_events`<sup>Optional</sup> <a name="cognito_events" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoEvents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}.

---

##### `cognito_identity_providers`<sup>Optional</sup> <a name="cognito_identity_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}.

---

##### `cognito_streams`<sup>Optional</sup> <a name="cognito_streams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoStreams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}.

---

##### `developer_provider_name`<sup>Optional</sup> <a name="developer_provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `identity_pool_name`<sup>Optional</sup> <a name="identity_pool_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `identity_pool_tags`<sup>Optional</sup> <a name="identity_pool_tags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_tags CognitoIdentityPool#identity_pool_tags}

---

##### `open_id_connect_provider_ar_ns`<sup>Optional</sup> <a name="open_id_connect_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openIdConnectProviderArNs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}.

---

##### `push_sync`<sup>Optional</sup> <a name="push_sync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.pushSync"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}.

---

##### `saml_provider_ar_ns`<sup>Optional</sup> <a name="saml_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArNs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}.

---

##### `supported_login_providers`<sup>Optional</sup> <a name="supported_login_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">put_cognito_identity_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams">put_cognito_streams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags">put_identity_pool_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync">put_push_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">reset_allow_classic_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents">reset_cognito_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">reset_cognito_identity_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams">reset_cognito_streams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">reset_developer_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName">reset_identity_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags">reset_identity_pool_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs">reset_open_id_connect_provider_ar_ns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync">reset_push_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs">reset_saml_provider_ar_ns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">reset_supported_login_providers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cognito_identity_providers` <a name="put_cognito_identity_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```python
def put_cognito_identity_providers(
  value: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]

---

##### `put_cognito_streams` <a name="put_cognito_streams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams"></a>

```python
def put_cognito_streams(
  role_arn: str = None,
  streaming_status: str = None,
  stream_name: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

###### `streaming_status`<sup>Optional</sup> <a name="streaming_status" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams.parameter.streamingStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}.

---

###### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}.

---

##### `put_identity_pool_tags` <a name="put_identity_pool_tags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags"></a>

```python
def put_identity_pool_tags(
  value: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]

---

##### `put_push_sync` <a name="put_push_sync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync"></a>

```python
def put_push_sync(
  application_arns: typing.List[str] = None,
  role_arn: str = None
) -> None
```

###### `application_arns`<sup>Optional</sup> <a name="application_arns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync.parameter.applicationArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

##### `reset_allow_classic_flow` <a name="reset_allow_classic_flow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```python
def reset_allow_classic_flow() -> None
```

##### `reset_cognito_events` <a name="reset_cognito_events" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents"></a>

```python
def reset_cognito_events() -> None
```

##### `reset_cognito_identity_providers` <a name="reset_cognito_identity_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```python
def reset_cognito_identity_providers() -> None
```

##### `reset_cognito_streams` <a name="reset_cognito_streams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams"></a>

```python
def reset_cognito_streams() -> None
```

##### `reset_developer_provider_name` <a name="reset_developer_provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```python
def reset_developer_provider_name() -> None
```

##### `reset_identity_pool_name` <a name="reset_identity_pool_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName"></a>

```python
def reset_identity_pool_name() -> None
```

##### `reset_identity_pool_tags` <a name="reset_identity_pool_tags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags"></a>

```python
def reset_identity_pool_tags() -> None
```

##### `reset_open_id_connect_provider_ar_ns` <a name="reset_open_id_connect_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs"></a>

```python
def reset_open_id_connect_provider_ar_ns() -> None
```

##### `reset_push_sync` <a name="reset_push_sync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync"></a>

```python
def reset_push_sync() -> None
```

##### `reset_saml_provider_ar_ns` <a name="reset_saml_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs"></a>

```python
def reset_saml_provider_ar_ns() -> None
```

##### `reset_supported_login_providers` <a name="reset_supported_login_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```python
def reset_supported_login_providers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoIdentityPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams">cognito_streams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags">identity_pool_tags</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync">push_sync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">allow_classic_flow_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">allow_unauthenticated_identities_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput">cognito_events_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">cognito_identity_providers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput">cognito_streams_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">developer_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">identity_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput">identity_pool_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput">open_id_connect_provider_ar_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput">push_sync_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput">saml_provider_ar_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">supported_login_providers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">allow_classic_flow</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents">cognito_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs">open_id_connect_provider_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs">saml_provider_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">supported_login_providers</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cognito_identity_providers`<sup>Required</sup> <a name="cognito_identity_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: CognitoIdentityPoolCognitoIdentityProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `cognito_streams`<sup>Required</sup> <a name="cognito_streams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams"></a>

```python
cognito_streams: CognitoIdentityPoolCognitoStreamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `identity_pool_tags`<sup>Required</sup> <a name="identity_pool_tags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags"></a>

```python
identity_pool_tags: CognitoIdentityPoolIdentityPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `push_sync`<sup>Required</sup> <a name="push_sync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync"></a>

```python
push_sync: CognitoIdentityPoolPushSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a>

---

##### `allow_classic_flow_input`<sup>Optional</sup> <a name="allow_classic_flow_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```python
allow_classic_flow_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_unauthenticated_identities_input`<sup>Optional</sup> <a name="allow_unauthenticated_identities_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```python
allow_unauthenticated_identities_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cognito_events_input`<sup>Optional</sup> <a name="cognito_events_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput"></a>

```python
cognito_events_input: str
```

- *Type:* str

---

##### `cognito_identity_providers_input`<sup>Optional</sup> <a name="cognito_identity_providers_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```python
cognito_identity_providers_input: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]

---

##### `cognito_streams_input`<sup>Optional</sup> <a name="cognito_streams_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput"></a>

```python
cognito_streams_input: IResolvable | CognitoIdentityPoolCognitoStreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---

##### `developer_provider_name_input`<sup>Optional</sup> <a name="developer_provider_name_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```python
developer_provider_name_input: str
```

- *Type:* str

---

##### `identity_pool_name_input`<sup>Optional</sup> <a name="identity_pool_name_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```python
identity_pool_name_input: str
```

- *Type:* str

---

##### `identity_pool_tags_input`<sup>Optional</sup> <a name="identity_pool_tags_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput"></a>

```python
identity_pool_tags_input: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]

---

##### `open_id_connect_provider_ar_ns_input`<sup>Optional</sup> <a name="open_id_connect_provider_ar_ns_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput"></a>

```python
open_id_connect_provider_ar_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `push_sync_input`<sup>Optional</sup> <a name="push_sync_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput"></a>

```python
push_sync_input: IResolvable | CognitoIdentityPoolPushSync
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---

##### `saml_provider_ar_ns_input`<sup>Optional</sup> <a name="saml_provider_ar_ns_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput"></a>

```python
saml_provider_ar_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers_input`<sup>Optional</sup> <a name="supported_login_providers_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```python
supported_login_providers_input: str
```

- *Type:* str

---

##### `allow_classic_flow`<sup>Required</sup> <a name="allow_classic_flow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```python
allow_classic_flow: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cognito_events`<sup>Required</sup> <a name="cognito_events" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents"></a>

```python
cognito_events: str
```

- *Type:* str

---

##### `developer_provider_name`<sup>Required</sup> <a name="developer_provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

---

##### `open_id_connect_provider_ar_ns`<sup>Required</sup> <a name="open_id_connect_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs"></a>

```python
open_id_connect_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `saml_provider_ar_ns`<sup>Required</sup> <a name="saml_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs"></a>

```python
saml_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers`<sup>Required</sup> <a name="supported_login_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```python
supported_login_providers: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders(
  client_id: str = None,
  provider_name: str = None,
  server_side_token_check: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `server_side_token_check`<sup>Optional</sup> <a name="server_side_token_check" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```python
server_side_token_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolCognitoStreams <a name="CognitoIdentityPoolCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoStreams(
  role_arn: str = None,
  streaming_status: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus">streaming_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

##### `streaming_status`<sup>Optional</sup> <a name="streaming_status" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus"></a>

```python
streaming_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allow_unauthenticated_identities: bool | IResolvable,
  allow_classic_flow: bool | IResolvable = None,
  cognito_events: str = None,
  cognito_identity_providers: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders] = None,
  cognito_streams: CognitoIdentityPoolCognitoStreams = None,
  developer_provider_name: str = None,
  identity_pool_name: str = None,
  identity_pool_tags: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags] = None,
  open_id_connect_provider_ar_ns: typing.List[str] = None,
  push_sync: CognitoIdentityPoolPushSync = None,
  saml_provider_ar_ns: typing.List[str] = None,
  supported_login_providers: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">allow_classic_flow</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents">cognito_events</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams">cognito_streams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags">identity_pool_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs">open_id_connect_provider_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync">push_sync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs">saml_provider_ar_ns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">supported_login_providers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `allow_classic_flow`<sup>Optional</sup> <a name="allow_classic_flow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```python
allow_classic_flow: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `cognito_events`<sup>Optional</sup> <a name="cognito_events" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents"></a>

```python
cognito_events: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}.

---

##### `cognito_identity_providers`<sup>Optional</sup> <a name="cognito_identity_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}.

---

##### `cognito_streams`<sup>Optional</sup> <a name="cognito_streams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams"></a>

```python
cognito_streams: CognitoIdentityPoolCognitoStreams
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}.

---

##### `developer_provider_name`<sup>Optional</sup> <a name="developer_provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `identity_pool_name`<sup>Optional</sup> <a name="identity_pool_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `identity_pool_tags`<sup>Optional</sup> <a name="identity_pool_tags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags"></a>

```python
identity_pool_tags: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_tags CognitoIdentityPool#identity_pool_tags}

---

##### `open_id_connect_provider_ar_ns`<sup>Optional</sup> <a name="open_id_connect_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs"></a>

```python
open_id_connect_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}.

---

##### `push_sync`<sup>Optional</sup> <a name="push_sync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync"></a>

```python
push_sync: CognitoIdentityPoolPushSync
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}.

---

##### `saml_provider_ar_ns`<sup>Optional</sup> <a name="saml_provider_ar_ns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs"></a>

```python
saml_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}.

---

##### `supported_login_providers`<sup>Optional</sup> <a name="supported_login_providers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```python
supported_login_providers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

### CognitoIdentityPoolIdentityPoolTags <a name="CognitoIdentityPoolIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#key CognitoIdentityPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#value CognitoIdentityPool#value}

---

### CognitoIdentityPoolPushSync <a name="CognitoIdentityPoolPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolPushSync(
  application_arns: typing.List[str] = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns">application_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |

---

##### `application_arns`<sup>Optional</sup> <a name="application_arns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns"></a>

```python
application_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoIdentityPoolCognitoIdentityProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">reset_server_side_token_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_server_side_token_check` <a name="reset_server_side_token_check" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```python
def reset_server_side_token_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">server_side_token_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `server_side_token_check_input`<sup>Optional</sup> <a name="server_side_token_check_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```python
server_side_token_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `server_side_token_check`<sup>Required</sup> <a name="server_side_token_check" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```python
server_side_token_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolCognitoIdentityProviders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>

---


### CognitoIdentityPoolCognitoStreamsOutputReference <a name="CognitoIdentityPoolCognitoStreamsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus">reset_streaming_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_streaming_status` <a name="reset_streaming_status" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus"></a>

```python
def reset_streaming_status() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName"></a>

```python
def reset_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput">streaming_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus">streaming_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `streaming_status_input`<sup>Optional</sup> <a name="streaming_status_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput"></a>

```python
streaming_status_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `streaming_status`<sup>Required</sup> <a name="streaming_status" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus"></a>

```python
streaming_status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolCognitoStreams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---


### CognitoIdentityPoolIdentityPoolTagsList <a name="CognitoIdentityPoolIdentityPoolTagsList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoIdentityPoolIdentityPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoIdentityPoolIdentityPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>]

---


### CognitoIdentityPoolIdentityPoolTagsOutputReference <a name="CognitoIdentityPoolIdentityPoolTagsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolIdentityPoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>

---


### CognitoIdentityPoolPushSyncOutputReference <a name="CognitoIdentityPoolPushSyncOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns">reset_application_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_arns` <a name="reset_application_arns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns"></a>

```python
def reset_application_arns() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput">application_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns">application_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arns_input`<sup>Optional</sup> <a name="application_arns_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput"></a>

```python
application_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `application_arns`<sup>Required</sup> <a name="application_arns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns"></a>

```python
application_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolPushSync
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---



