# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-awscc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsccProvider <a name="AwsccProvider" id="@cdktn/provider-awscc.provider.AwsccProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs awscc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProvider(Construct Scope, string Id, AwsccProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig">AwsccProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig">AwsccProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity">ResetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy">ResetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy">ResetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles">ResetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles">ResetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck">ResetSkipMedatadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck">ResetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.provider.AwsccProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.provider.AwsccProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.provider.AwsccProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetAssumeRoleWithWebIdentity` <a name="ResetAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity"></a>

```csharp
private void ResetAssumeRoleWithWebIdentity()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetHttpProxy` <a name="ResetHttpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy"></a>

```csharp
private void ResetHttpProxy()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy"></a>

```csharp
private void ResetHttpsProxy()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNoProxy` <a name="ResetNoProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy"></a>

```csharp
private void ResetNoProxy()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktn/provider-awscc.provider.AwsccProvider.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetSharedConfigFiles` <a name="ResetSharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles"></a>

```csharp
private void ResetSharedConfigFiles()
```

##### `ResetSharedCredentialsFiles` <a name="ResetSharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles"></a>

```csharp
private void ResetSharedCredentialsFiles()
```

##### `ResetSkipMedatadataApiCheck` <a name="ResetSkipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck"></a>

```csharp
private void ResetSkipMedatadataApiCheck()
```

##### `ResetSkipMetadataApiCheck` <a name="ResetSkipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck"></a>

```csharp
private void ResetSkipMetadataApiCheck()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-awscc.provider.AwsccProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent"></a>

```csharp
private void ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsccProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsccProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsccProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AwsccProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsccProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsccProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsccProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput">AssumeRoleInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput">AssumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput">HttpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput">InsecureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput">NoProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput">SharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput">SharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput">SkipMedatadataApiCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput">SkipMetadataApiCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput">UserAgentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy">HttpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy">NoProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck">SkipMedatadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent">UserAgent</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.provider.AwsccProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.provider.AwsccProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput"></a>

```csharp
public AwsccProviderAssumeRole AssumeRoleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `AssumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentityInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput"></a>

```csharp
public AwsccProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput"></a>

```csharp
public AwsccProviderEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `HttpProxyInput`<sup>Optional</sup> <a name="HttpProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput"></a>

```csharp
public string HttpProxyInput { get; }
```

- *Type:* string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput"></a>

```csharp
public string HttpsProxyInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput"></a>

```csharp
public bool|IResolvable InsecureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NoProxyInput`<sup>Optional</sup> <a name="NoProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput"></a>

```csharp
public string NoProxyInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `SharedConfigFilesInput`<sup>Optional</sup> <a name="SharedConfigFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput"></a>

```csharp
public string[] SharedConfigFilesInput { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFilesInput`<sup>Optional</sup> <a name="SharedCredentialsFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput"></a>

```csharp
public string[] SharedCredentialsFilesInput { get; }
```

- *Type:* string[]

---

##### `SkipMedatadataApiCheckInput`<sup>Optional</sup> <a name="SkipMedatadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput"></a>

```csharp
public bool|IResolvable SkipMedatadataApiCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipMetadataApiCheckInput`<sup>Optional</sup> <a name="SkipMetadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput"></a>

```csharp
public IResolvable|AwsccProviderUserAgent[] UserAgentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole"></a>

```csharp
public AwsccProviderAssumeRole AssumeRole { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity"></a>

```csharp
public AwsccProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints"></a>

```csharp
public AwsccProviderEndpoints Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy"></a>

```csharp
public string HttpProxy { get; }
```

- *Type:* string

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy"></a>

```csharp
public string NoProxy { get; }
```

- *Type:* string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.provider.AwsccProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; }
```

- *Type:* string[]

---

##### `SkipMedatadataApiCheck`<sup>Optional</sup> <a name="SkipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMedatadataApiCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-awscc.provider.AwsccProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent"></a>

```csharp
public IResolvable|AwsccProviderUserAgent[] UserAgent { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsccProviderAssumeRole <a name="AwsccProviderAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProviderAssumeRole {
    string RoleArn,
    string Duration = null,
    string ExternalId = null,
    string Policy = null,
    string[] PolicyArns = null,
    string SessionName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] TransitiveTagKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the IAM Role to assume. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration">Duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId">ExternalId</a></code> | <code>string</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy">Policy</a></code> | <code>string</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName">SessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys">TransitiveTagKeys</a></code> | <code>string[]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of the IAM Role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#duration AwsccProvider#duration}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#external_id AwsccProvider#external_id}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy AwsccProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#session_name AwsccProvider#session_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#tags AwsccProvider#tags}

---

##### `TransitiveTagKeys`<sup>Optional</sup> <a name="TransitiveTagKeys" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys"></a>

```csharp
public string[] TransitiveTagKeys { get; set; }
```

- *Type:* string[]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#transitive_tag_keys AwsccProvider#transitive_tag_keys}

---

### AwsccProviderAssumeRoleWithWebIdentity <a name="AwsccProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProviderAssumeRoleWithWebIdentity {
    string RoleArn,
    string Duration = null,
    string Policy = null,
    string[] PolicyArns = null,
    string SessionName = null,
    string WebIdentityToken = null,
    string WebIdentityTokenFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration">Duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy">Policy</a></code> | <code>string</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName">SessionName</a></code> | <code>string</code> | Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken">WebIdentityToken</a></code> | <code>string</code> | The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">WebIdentityTokenFile</a></code> | <code>string</code> | File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#duration AwsccProvider#duration}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy AwsccProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#session_name AwsccProvider#session_name}

---

##### `WebIdentityToken`<sup>Optional</sup> <a name="WebIdentityToken" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```csharp
public string WebIdentityToken { get; set; }
```

- *Type:* string

The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#web_identity_token AwsccProvider#web_identity_token}

---

##### `WebIdentityTokenFile`<sup>Optional</sup> <a name="WebIdentityTokenFile" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```csharp
public string WebIdentityTokenFile { get; set; }
```

- *Type:* string

File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.

Can also be set with the  environment variable`AWS_WEB_IDENTITY_TOKEN_FILE`. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#web_identity_token_file AwsccProvider#web_identity_token_file}

---

### AwsccProviderConfig <a name="AwsccProviderConfig" id="@cdktn/provider-awscc.provider.AwsccProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProviderConfig {
    string AccessKey = null,
    string Alias = null,
    AwsccProviderAssumeRole AssumeRole = null,
    AwsccProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity = null,
    AwsccProviderEndpoints Endpoints = null,
    string HttpProxy = null,
    string HttpsProxy = null,
    bool|IResolvable Insecure = null,
    double MaxRetries = null,
    string NoProxy = null,
    string Profile = null,
    string Region = null,
    string RoleArn = null,
    string SecretKey = null,
    string[] SharedConfigFiles = null,
    string[] SharedCredentialsFiles = null,
    bool|IResolvable SkipMedatadataApiCheck = null,
    bool|IResolvable SkipMetadataApiCheck = null,
    string Token = null,
    IResolvable|AwsccProviderUserAgent[] UserAgent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy">HttpProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy">NoProxy</a></code> | <code>string</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile">Profile</a></code> | <code>string</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region">Region</a></code> | <code>string</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck">SkipMedatadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token">Token</a></code> | <code>string</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent">UserAgent</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#access_key AwsccProvider#access_key}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#alias AwsccProvider#alias}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole"></a>

```csharp
public AwsccProviderAssumeRole AssumeRole { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role AwsccProvider#assume_role}

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity"></a>

```csharp
public AwsccProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints"></a>

```csharp
public AwsccProviderEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#endpoints AwsccProvider#endpoints}

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy"></a>

```csharp
public string HttpProxy { get; set; }
```

- *Type:* string

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; set; }
```

- *Type:* string

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#insecure AwsccProvider#insecure}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#max_retries AwsccProvider#max_retries}

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy"></a>

```csharp
public string NoProxy { get; set; }
```

- *Type:* string

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#profile AwsccProvider#profile}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#region AwsccProvider#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#secret_key AwsccProvider#secret_key}

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; set; }
```

- *Type:* string[]

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; set; }
```

- *Type:* string[]

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `SkipMedatadataApiCheck`<sup>Optional</sup> <a name="SkipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMedatadataApiCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#token AwsccProvider#token}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent"></a>

```csharp
public IResolvable|AwsccProviderUserAgent[] UserAgent { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#user_agent AwsccProvider#user_agent}

---

### AwsccProviderEndpoints <a name="AwsccProviderEndpoints" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProviderEndpoints {
    string Cloudcontrolapi = null,
    string Iam = null,
    string Sso = null,
    string Sts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi">Cloudcontrolapi</a></code> | <code>string</code> | Use this to override the default Cloud Control API service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam">Iam</a></code> | <code>string</code> | Use this to override the default IAM service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso">Sso</a></code> | <code>string</code> | Use this to override the default SSO service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts">Sts</a></code> | <code>string</code> | Use this to override the default STS service endpoint URL. |

---

##### `Cloudcontrolapi`<sup>Optional</sup> <a name="Cloudcontrolapi" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi"></a>

```csharp
public string Cloudcontrolapi { get; set; }
```

- *Type:* string

Use this to override the default Cloud Control API service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#cloudcontrolapi AwsccProvider#cloudcontrolapi}

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam"></a>

```csharp
public string Iam { get; set; }
```

- *Type:* string

Use this to override the default IAM service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#iam AwsccProvider#iam}

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso"></a>

```csharp
public string Sso { get; set; }
```

- *Type:* string

Use this to override the default SSO service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#sso AwsccProvider#sso}

---

##### `Sts`<sup>Optional</sup> <a name="Sts" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts"></a>

```csharp
public string Sts { get; set; }
```

- *Type:* string

Use this to override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#sts AwsccProvider#sts}

---

### AwsccProviderUserAgent <a name="AwsccProviderUserAgent" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AwsccProviderUserAgent {
    string ProductName,
    string Comment = null,
    string ProductVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName">ProductName</a></code> | <code>string</code> | Product name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment">Comment</a></code> | <code>string</code> | Comment describing any additional product details. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion">ProductVersion</a></code> | <code>string</code> | Product version. Optional, and should only be set when `product_name` is set. |

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName"></a>

```csharp
public string ProductName { get; set; }
```

- *Type:* string

Product name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#product_name AwsccProvider#product_name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comment describing any additional product details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#comment AwsccProvider#comment}

---

##### `ProductVersion`<sup>Optional</sup> <a name="ProductVersion" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion"></a>

```csharp
public string ProductVersion { get; set; }
```

- *Type:* string

Product version. Optional, and should only be set when `product_name` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#product_version AwsccProvider#product_version}

---



