# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-awscc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsccProvider <a name="AwsccProvider" id="@cdktn/provider-awscc.provider.AwsccProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs awscc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

new provider.AwsccProvider(scope: Construct, id: string, config?: AwsccProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig">AwsccProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig">AwsccProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy">resetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy">resetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck">resetSkipMedatadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.provider.AwsccProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.provider.AwsccProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.provider.AwsccProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity"></a>

```typescript
public resetAssumeRoleWithWebIdentity(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy"></a>

```typescript
public resetHttpsProxy(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-awscc.provider.AwsccProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles"></a>

```typescript
public resetSharedConfigFiles(): void
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles"></a>

```typescript
public resetSharedCredentialsFiles(): void
```

##### `resetSkipMedatadataApiCheck` <a name="resetSkipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck"></a>

```typescript
public resetSkipMedatadataApiCheck(): void
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck"></a>

```typescript
public resetSkipMetadataApiCheck(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-awscc.provider.AwsccProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent"></a>

```typescript
public resetUserAgent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

provider.AwsccProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

provider.AwsccProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

provider.AwsccProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

provider.AwsccProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsccProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsccProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsccProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput">endpointsInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput">httpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput">noProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput">skipMedatadataApiCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput">userAgentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy">noProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck">skipMedatadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent">userAgent</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.provider.AwsccProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: AwsccProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput"></a>

```typescript
public readonly assumeRoleWithWebIdentityInput: AwsccProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: AwsccProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput"></a>

```typescript
public readonly httpsProxyInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput"></a>

```typescript
public readonly sharedConfigFilesInput: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput"></a>

```typescript
public readonly sharedCredentialsFilesInput: string[];
```

- *Type:* string[]

---

##### `skipMedatadataApiCheckInput`<sup>Optional</sup> <a name="skipMedatadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput"></a>

```typescript
public readonly skipMedatadataApiCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput"></a>

```typescript
public readonly skipMetadataApiCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput"></a>

```typescript
public readonly userAgentInput: IResolvable | AwsccProviderUserAgent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsccProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: AwsccProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints"></a>

```typescript
public readonly endpoints: AwsccProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

---

##### `skipMedatadataApiCheck`<sup>Optional</sup> <a name="skipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck"></a>

```typescript
public readonly skipMedatadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent"></a>

```typescript
public readonly userAgent: IResolvable | AwsccProviderUserAgent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsccProviderAssumeRole <a name="AwsccProviderAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

const awsccProviderAssumeRole: provider.AwsccProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the IAM Role to assume. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the IAM Role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#duration AwsccProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#external_id AwsccProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy AwsccProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#session_name AwsccProvider#session_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#tags AwsccProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#transitive_tag_keys AwsccProvider#transitive_tag_keys}

---

### AwsccProviderAssumeRoleWithWebIdentity <a name="AwsccProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

const awsccProviderAssumeRoleWithWebIdentity: provider.AwsccProviderAssumeRoleWithWebIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>string</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>string</code> | Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>string</code> | The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>string</code> | File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#duration AwsccProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy AwsccProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#session_name AwsccProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```typescript
public readonly webIdentityToken: string;
```

- *Type:* string

The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#web_identity_token AwsccProvider#web_identity_token}

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```typescript
public readonly webIdentityTokenFile: string;
```

- *Type:* string

File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.

Can also be set with the  environment variable`AWS_WEB_IDENTITY_TOKEN_FILE`. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#web_identity_token_file AwsccProvider#web_identity_token_file}

---

### AwsccProviderConfig <a name="AwsccProviderConfig" id="@cdktn/provider-awscc.provider.AwsccProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

const awsccProviderConfig: provider.AwsccProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy">httpProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy">noProxy</a></code> | <code>string</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile">profile</a></code> | <code>string</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region">region</a></code> | <code>string</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck">skipMedatadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token">token</a></code> | <code>string</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent">userAgent</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]</code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#access_key AwsccProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#alias AwsccProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsccProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role AwsccProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: AwsccProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints"></a>

```typescript
public readonly endpoints: AwsccProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#endpoints AwsccProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#insecure AwsccProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#max_retries AwsccProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#profile AwsccProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#region AwsccProvider#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#secret_key AwsccProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `skipMedatadataApiCheck`<sup>Optional</sup> <a name="skipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck"></a>

```typescript
public readonly skipMedatadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#token AwsccProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent"></a>

```typescript
public readonly userAgent: IResolvable | AwsccProviderUserAgent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>[]

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#user_agent AwsccProvider#user_agent}

---

### AwsccProviderEndpoints <a name="AwsccProviderEndpoints" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

const awsccProviderEndpoints: provider.AwsccProviderEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>string</code> | Use this to override the default Cloud Control API service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam">iam</a></code> | <code>string</code> | Use this to override the default IAM service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso">sso</a></code> | <code>string</code> | Use this to override the default SSO service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts">sts</a></code> | <code>string</code> | Use this to override the default STS service endpoint URL. |

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi"></a>

```typescript
public readonly cloudcontrolapi: string;
```

- *Type:* string

Use this to override the default Cloud Control API service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#cloudcontrolapi AwsccProvider#cloudcontrolapi}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

Use this to override the default IAM service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#iam AwsccProvider#iam}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso"></a>

```typescript
public readonly sso: string;
```

- *Type:* string

Use this to override the default SSO service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#sso AwsccProvider#sso}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts"></a>

```typescript
public readonly sts: string;
```

- *Type:* string

Use this to override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#sts AwsccProvider#sts}

---

### AwsccProviderUserAgent <a name="AwsccProviderUserAgent" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-awscc'

const awsccProviderUserAgent: provider.AwsccProviderUserAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName">productName</a></code> | <code>string</code> | Product name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment">comment</a></code> | <code>string</code> | Comment describing any additional product details. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion">productVersion</a></code> | <code>string</code> | Product version. Optional, and should only be set when `product_name` is set. |

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

Product name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#product_name AwsccProvider#product_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment describing any additional product details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#comment AwsccProvider#comment}

---

##### `productVersion`<sup>Optional</sup> <a name="productVersion" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion"></a>

```typescript
public readonly productVersion: string;
```

- *Type:* string

Product version. Optional, and should only be set when `product_name` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#product_version AwsccProvider#product_version}

---



