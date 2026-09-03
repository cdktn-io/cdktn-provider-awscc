# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool awscc_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowUnauthenticatedIdentities(java.lang.Boolean|IResolvable)
//  .allowClassicFlow(java.lang.Boolean|IResolvable)
//  .cognitoEvents(java.lang.String)
//  .cognitoIdentityProviders(IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders>)
//  .cognitoStreams(CognitoIdentityPoolCognitoStreams)
//  .developerProviderName(java.lang.String)
//  .identityPoolName(java.lang.String)
//  .identityPoolTags(IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags>)
//  .openIdConnectProviderArNs(java.util.List<java.lang.String>)
//  .pushSync(CognitoIdentityPoolPushSync)
//  .samlProviderArNs(java.util.List<java.lang.String>)
//  .supportedLoginProviders(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoEvents">cognitoEvents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoStreams">cognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolTags">identityPoolTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openIdConnectProviderArNs">openIdConnectProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.pushSync">pushSync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArNs">samlProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `cognitoEvents`<sup>Optional</sup> <a name="cognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoEvents"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}.

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="cognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}.

---

##### `cognitoStreams`<sup>Optional</sup> <a name="cognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoStreams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}.

---

##### `developerProviderName`<sup>Optional</sup> <a name="developerProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `identityPoolTags`<sup>Optional</sup> <a name="identityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_tags CognitoIdentityPool#identity_pool_tags}

---

##### `openIdConnectProviderArNs`<sup>Optional</sup> <a name="openIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openIdConnectProviderArNs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}.

---

##### `pushSync`<sup>Optional</sup> <a name="pushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.pushSync"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}.

---

##### `samlProviderArNs`<sup>Optional</sup> <a name="samlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArNs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}.

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="supportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">putCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams">putCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags">putIdentityPoolTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync">putPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">resetAllowClassicFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents">resetCognitoEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">resetCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams">resetCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">resetDeveloperProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName">resetIdentityPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags">resetIdentityPoolTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs">resetOpenIdConnectProviderArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync">resetPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs">resetSamlProviderArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">resetSupportedLoginProviders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCognitoIdentityProviders` <a name="putCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```java
public void putCognitoIdentityProviders(IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---

##### `putCognitoStreams` <a name="putCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams"></a>

```java
public void putCognitoStreams(CognitoIdentityPoolCognitoStreams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putCognitoStreams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---

##### `putIdentityPoolTags` <a name="putIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags"></a>

```java
public void putIdentityPoolTags(IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putIdentityPoolTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>>

---

##### `putPushSync` <a name="putPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync"></a>

```java
public void putPushSync(CognitoIdentityPoolPushSync value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.putPushSync.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---

##### `resetAllowClassicFlow` <a name="resetAllowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```java
public void resetAllowClassicFlow()
```

##### `resetCognitoEvents` <a name="resetCognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoEvents"></a>

```java
public void resetCognitoEvents()
```

##### `resetCognitoIdentityProviders` <a name="resetCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```java
public void resetCognitoIdentityProviders()
```

##### `resetCognitoStreams` <a name="resetCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetCognitoStreams"></a>

```java
public void resetCognitoStreams()
```

##### `resetDeveloperProviderName` <a name="resetDeveloperProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```java
public void resetDeveloperProviderName()
```

##### `resetIdentityPoolName` <a name="resetIdentityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolName"></a>

```java
public void resetIdentityPoolName()
```

##### `resetIdentityPoolTags` <a name="resetIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetIdentityPoolTags"></a>

```java
public void resetIdentityPoolTags()
```

##### `resetOpenIdConnectProviderArNs` <a name="resetOpenIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetOpenIdConnectProviderArNs"></a>

```java
public void resetOpenIdConnectProviderArNs()
```

##### `resetPushSync` <a name="resetPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetPushSync"></a>

```java
public void resetPushSync()
```

##### `resetSamlProviderArNs` <a name="resetSamlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArNs"></a>

```java
public void resetSamlProviderArNs()
```

##### `resetSupportedLoginProviders` <a name="resetSupportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```java
public void resetSupportedLoginProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoIdentityPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams">cognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags">identityPoolTags</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync">pushSync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">allowClassicFlowInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">allowUnauthenticatedIdentitiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput">cognitoEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">cognitoIdentityProvidersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput">cognitoStreamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">developerProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput">identityPoolTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput">openIdConnectProviderArNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput">pushSyncInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput">samlProviderArNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">supportedLoginProvidersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents">cognitoEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs">openIdConnectProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs">samlProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="cognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```java
public CognitoIdentityPoolCognitoIdentityProvidersList getCognitoIdentityProviders();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `cognitoStreams`<sup>Required</sup> <a name="cognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreams"></a>

```java
public CognitoIdentityPoolCognitoStreamsOutputReference getCognitoStreams();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference">CognitoIdentityPoolCognitoStreamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `identityPoolTags`<sup>Required</sup> <a name="identityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTags"></a>

```java
public CognitoIdentityPoolIdentityPoolTagsList getIdentityPoolTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList">CognitoIdentityPoolIdentityPoolTagsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pushSync`<sup>Required</sup> <a name="pushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSync"></a>

```java
public CognitoIdentityPoolPushSyncOutputReference getPushSync();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference">CognitoIdentityPoolPushSyncOutputReference</a>

---

##### `allowClassicFlowInput`<sup>Optional</sup> <a name="allowClassicFlowInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowClassicFlowInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUnauthenticatedIdentitiesInput`<sup>Optional</sup> <a name="allowUnauthenticatedIdentitiesInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnauthenticatedIdentitiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cognitoEventsInput`<sup>Optional</sup> <a name="cognitoEventsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEventsInput"></a>

```java
public java.lang.String getCognitoEventsInput();
```

- *Type:* java.lang.String

---

##### `cognitoIdentityProvidersInput`<sup>Optional</sup> <a name="cognitoIdentityProvidersInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders> getCognitoIdentityProvidersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---

##### `cognitoStreamsInput`<sup>Optional</sup> <a name="cognitoStreamsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoStreamsInput"></a>

```java
public IResolvable|CognitoIdentityPoolCognitoStreams getCognitoStreamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---

##### `developerProviderNameInput`<sup>Optional</sup> <a name="developerProviderNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```java
public java.lang.String getDeveloperProviderNameInput();
```

- *Type:* java.lang.String

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```java
public java.lang.String getIdentityPoolNameInput();
```

- *Type:* java.lang.String

---

##### `identityPoolTagsInput`<sup>Optional</sup> <a name="identityPoolTagsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolTagsInput"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags> getIdentityPoolTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>>

---

##### `openIdConnectProviderArNsInput`<sup>Optional</sup> <a name="openIdConnectProviderArNsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNsInput"></a>

```java
public java.util.List<java.lang.String> getOpenIdConnectProviderArNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pushSyncInput`<sup>Optional</sup> <a name="pushSyncInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.pushSyncInput"></a>

```java
public IResolvable|CognitoIdentityPoolPushSync getPushSyncInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---

##### `samlProviderArNsInput`<sup>Optional</sup> <a name="samlProviderArNsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNsInput"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedLoginProvidersInput`<sup>Optional</sup> <a name="supportedLoginProvidersInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```java
public java.lang.String getSupportedLoginProvidersInput();
```

- *Type:* java.lang.String

---

##### `allowClassicFlow`<sup>Required</sup> <a name="allowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```java
public java.lang.Boolean|IResolvable getAllowClassicFlow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnauthenticatedIdentities();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cognitoEvents`<sup>Required</sup> <a name="cognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.cognitoEvents"></a>

```java
public java.lang.String getCognitoEvents();
```

- *Type:* java.lang.String

---

##### `developerProviderName`<sup>Required</sup> <a name="developerProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```java
public java.lang.String getDeveloperProviderName();
```

- *Type:* java.lang.String

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

---

##### `openIdConnectProviderArNs`<sup>Required</sup> <a name="openIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.openIdConnectProviderArNs"></a>

```java
public java.util.List<java.lang.String> getOpenIdConnectProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlProviderArNs`<sup>Required</sup> <a name="samlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArNs"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="supportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```java
public java.lang.String getSupportedLoginProviders();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProviders;

CognitoIdentityPoolCognitoIdentityProviders.builder()
//  .clientId(java.lang.String)
//  .providerName(java.lang.String)
//  .serverSideTokenCheck(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `serverSideTokenCheck`<sup>Optional</sup> <a name="serverSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```java
public java.lang.Boolean|IResolvable getServerSideTokenCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolCognitoStreams <a name="CognitoIdentityPoolCognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolCognitoStreams;

CognitoIdentityPoolCognitoStreams.builder()
//  .roleArn(java.lang.String)
//  .streamingStatus(java.lang.String)
//  .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus">streamingStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

##### `streamingStatus`<sup>Optional</sup> <a name="streamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamingStatus"></a>

```java
public java.lang.String getStreamingStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#streaming_status CognitoIdentityPool#streaming_status}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#stream_name CognitoIdentityPool#stream_name}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolConfig;

CognitoIdentityPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowUnauthenticatedIdentities(java.lang.Boolean|IResolvable)
//  .allowClassicFlow(java.lang.Boolean|IResolvable)
//  .cognitoEvents(java.lang.String)
//  .cognitoIdentityProviders(IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders>)
//  .cognitoStreams(CognitoIdentityPoolCognitoStreams)
//  .developerProviderName(java.lang.String)
//  .identityPoolName(java.lang.String)
//  .identityPoolTags(IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags>)
//  .openIdConnectProviderArNs(java.util.List<java.lang.String>)
//  .pushSync(CognitoIdentityPoolPushSync)
//  .samlProviderArNs(java.util.List<java.lang.String>)
//  .supportedLoginProviders(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents">cognitoEvents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams">cognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags">identityPoolTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs">openIdConnectProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync">pushSync</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs">samlProviderArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```java
public java.lang.Boolean|IResolvable getAllowUnauthenticatedIdentities();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```java
public java.lang.Boolean|IResolvable getAllowClassicFlow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `cognitoEvents`<sup>Optional</sup> <a name="cognitoEvents" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoEvents"></a>

```java
public java.lang.String getCognitoEvents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_events CognitoIdentityPool#cognito_events}.

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="cognitoIdentityProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders> getCognitoIdentityProviders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}.

---

##### `cognitoStreams`<sup>Optional</sup> <a name="cognitoStreams" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoStreams"></a>

```java
public CognitoIdentityPoolCognitoStreams getCognitoStreams();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#cognito_streams CognitoIdentityPool#cognito_streams}.

---

##### `developerProviderName`<sup>Optional</sup> <a name="developerProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```java
public java.lang.String getDeveloperProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `identityPoolTags`<sup>Optional</sup> <a name="identityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolTags"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags> getIdentityPoolTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#identity_pool_tags CognitoIdentityPool#identity_pool_tags}

---

##### `openIdConnectProviderArNs`<sup>Optional</sup> <a name="openIdConnectProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openIdConnectProviderArNs"></a>

```java
public java.util.List<java.lang.String> getOpenIdConnectProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#open_id_connect_provider_ar_ns CognitoIdentityPool#open_id_connect_provider_ar_ns}.

---

##### `pushSync`<sup>Optional</sup> <a name="pushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.pushSync"></a>

```java
public CognitoIdentityPoolPushSync getPushSync();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#push_sync CognitoIdentityPool#push_sync}.

---

##### `samlProviderArNs`<sup>Optional</sup> <a name="samlProviderArNs" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArNs"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#saml_provider_ar_ns CognitoIdentityPool#saml_provider_ar_ns}.

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="supportedLoginProviders" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```java
public java.lang.String getSupportedLoginProviders();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

### CognitoIdentityPoolIdentityPoolTags <a name="CognitoIdentityPoolIdentityPoolTags" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolIdentityPoolTags;

CognitoIdentityPoolIdentityPoolTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#key CognitoIdentityPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#value CognitoIdentityPool#value}

---

### CognitoIdentityPoolPushSync <a name="CognitoIdentityPoolPushSync" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolPushSync;

CognitoIdentityPoolPushSync.builder()
//  .applicationArns(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns">applicationArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}. |

---

##### `applicationArns`<sup>Optional</sup> <a name="applicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.applicationArns"></a>

```java
public java.util.List<java.lang.String> getApplicationArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#application_arns CognitoIdentityPool#application_arns}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_identity_pool#role_arn CognitoIdentityPool#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProvidersList;

new CognitoIdentityPoolCognitoIdentityProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```java
public CognitoIdentityPoolCognitoIdentityProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolCognitoIdentityProviders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference;

new CognitoIdentityPoolCognitoIdentityProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">resetServerSideTokenCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetServerSideTokenCheck` <a name="resetServerSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```java
public void resetServerSideTokenCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">serverSideTokenCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `serverSideTokenCheckInput`<sup>Optional</sup> <a name="serverSideTokenCheckInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getServerSideTokenCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `serverSideTokenCheck`<sup>Required</sup> <a name="serverSideTokenCheck" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```java
public java.lang.Boolean|IResolvable getServerSideTokenCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolCognitoIdentityProviders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>

---


### CognitoIdentityPoolCognitoStreamsOutputReference <a name="CognitoIdentityPoolCognitoStreamsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolCognitoStreamsOutputReference;

new CognitoIdentityPoolCognitoStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus">resetStreamingStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetStreamingStatus` <a name="resetStreamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamingStatus"></a>

```java
public void resetStreamingStatus()
```

##### `resetStreamName` <a name="resetStreamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.resetStreamName"></a>

```java
public void resetStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput">streamingStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus">streamingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamingStatusInput`<sup>Optional</sup> <a name="streamingStatusInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatusInput"></a>

```java
public java.lang.String getStreamingStatusInput();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `streamingStatus`<sup>Required</sup> <a name="streamingStatus" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus"></a>

```java
public java.lang.String getStreamingStatus();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolCognitoStreams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolCognitoStreams">CognitoIdentityPoolCognitoStreams</a>

---


### CognitoIdentityPoolIdentityPoolTagsList <a name="CognitoIdentityPoolIdentityPoolTagsList" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolIdentityPoolTagsList;

new CognitoIdentityPoolIdentityPoolTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get"></a>

```java
public CognitoIdentityPoolIdentityPoolTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoIdentityPoolIdentityPoolTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>>

---


### CognitoIdentityPoolIdentityPoolTagsOutputReference <a name="CognitoIdentityPoolIdentityPoolTagsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolIdentityPoolTagsOutputReference;

new CognitoIdentityPoolIdentityPoolTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolIdentityPoolTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolIdentityPoolTags">CognitoIdentityPoolIdentityPoolTags</a>

---


### CognitoIdentityPoolPushSyncOutputReference <a name="CognitoIdentityPoolPushSyncOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_identity_pool.CognitoIdentityPoolPushSyncOutputReference;

new CognitoIdentityPoolPushSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns">resetApplicationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArns` <a name="resetApplicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetApplicationArns"></a>

```java
public void resetApplicationArns()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput">applicationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns">applicationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArnsInput`<sup>Optional</sup> <a name="applicationArnsInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArnsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `applicationArns`<sup>Required</sup> <a name="applicationArns" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.applicationArns"></a>

```java
public java.util.List<java.lang.String> getApplicationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSyncOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoIdentityPoolPushSync getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoIdentityPool.CognitoIdentityPoolPushSync">CognitoIdentityPoolPushSync</a>

---



