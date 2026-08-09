# `bedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`bedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreApiKeyCredentialProvider <a name="BedrockagentcoreApiKeyCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProvider;

BedrockagentcoreApiKeyCredentialProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiKeySecretConfig(BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig)
//  .apiKeySecretSource(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the API key credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | Configuration for a customer-provided secret containing the API key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretSource">apiKeySecretSource</a></code> | <code>java.lang.String</code> | The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>></code> | Tags to assign to the API key credential provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

The API key to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}

---

##### `apiKeySecretConfig`<sup>Optional</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

Configuration for a customer-provided secret containing the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}

---

##### `apiKeySecretSource`<sup>Optional</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.apiKeySecretSource"></a>

- *Type:* java.lang.String

The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>>

Tags to assign to the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig">putApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretConfig">resetApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretSource">resetApiKeySecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiKeySecretConfig` <a name="putApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig"></a>

```java
public void putApiKeySecretConfig(BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetApiKeySecretConfig` <a name="resetApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretConfig"></a>

```java
public void resetApiKeySecretConfig()
```

##### `resetApiKeySecretSource` <a name="resetApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretSource"></a>

```java
public void resetApiKeySecretSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProvider;

BedrockagentcoreApiKeyCredentialProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProvider;

BedrockagentcoreApiKeyCredentialProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProvider;

BedrockagentcoreApiKeyCredentialProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProvider;

BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">apiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey">apiKeySecretJsonKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">credentialProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput">apiKeySecretConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput">apiKeySecretSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiKeySecretArn`<sup>Required</sup> <a name="apiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference getApiKeySecretArn();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a>

---

##### `apiKeySecretConfig`<sup>Required</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference getApiKeySecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a>

---

##### `apiKeySecretJsonKey`<sup>Required</sup> <a name="apiKeySecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey"></a>

```java
public java.lang.String getApiKeySecretJsonKey();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```java
public java.lang.String getCredentialProviderArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretConfigInput`<sup>Optional</sup> <a name="apiKeySecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput"></a>

```java
public IResolvable|BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig getApiKeySecretConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---

##### `apiKeySecretSourceInput`<sup>Optional</sup> <a name="apiKeySecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput"></a>

```java
public java.lang.String getApiKeySecretSourceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource"></a>

```java
public java.lang.String getApiKeySecretSource();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn;

BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.builder()
    .build();
```


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig;

BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.builder()
//  .jsonKey(java.lang.String)
//  .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey">jsonKey</a></code> | <code>java.lang.String</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey"></a>

```java
public java.lang.String getJsonKey();
```

- *Type:* java.lang.String

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key BedrockagentcoreApiKeyCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id BedrockagentcoreApiKeyCredentialProvider#secret_id}

---

### BedrockagentcoreApiKeyCredentialProviderConfig <a name="BedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderConfig;

BedrockagentcoreApiKeyCredentialProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .apiKey(java.lang.String)
//  .apiKeySecretConfig(BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig)
//  .apiKeySecretSource(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the API key credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | Configuration for a customer-provided secret containing the API key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>java.lang.String</code> | The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>></code> | Tags to assign to the API key credential provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The API key to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}

---

##### `apiKeySecretConfig`<sup>Optional</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig getApiKeySecretConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

Configuration for a customer-provided secret containing the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}

---

##### `apiKeySecretSource`<sup>Optional</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource"></a>

```java
public java.lang.String getApiKeySecretSource();
```

- *Type:* java.lang.String

The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>>

Tags to assign to the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}

---

### BedrockagentcoreApiKeyCredentialProviderTags <a name="BedrockagentcoreApiKeyCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderTags;

BedrockagentcoreApiKeyCredentialProviderTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference;

new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference;

new BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetJsonKey">resetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetJsonKey"></a>

```java
public void resetJsonKey()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```java
public java.lang.String getJsonKeyInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey"></a>

```java
public java.lang.String getJsonKey();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---


### BedrockagentcoreApiKeyCredentialProviderTagsList <a name="BedrockagentcoreApiKeyCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderTagsList;

new BedrockagentcoreApiKeyCredentialProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get"></a>

```java
public BedrockagentcoreApiKeyCredentialProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreApiKeyCredentialProviderTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>>

---


### BedrockagentcoreApiKeyCredentialProviderTagsOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_api_key_credential_provider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference;

new BedrockagentcoreApiKeyCredentialProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreApiKeyCredentialProviderTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>

---



