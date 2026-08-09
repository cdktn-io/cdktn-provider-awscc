# `bedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`bedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreApiKeyCredentialProvider <a name="BedrockagentcoreApiKeyCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider(scope: Construct, id: string, config: BedrockagentcoreApiKeyCredentialProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiKeySecretConfig` <a name="putApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig"></a>

```typescript
public putApiKeySecretConfig(value: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putApiKeySecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiKeySecretConfig` <a name="resetApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretConfig"></a>

```typescript
public resetApiKeySecretConfig(): void
```

##### `resetApiKeySecretSource` <a name="resetApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeySecretSource"></a>

```typescript
public resetApiKeySecretSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetTags"></a>

```typescript
public resetTags(): void
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

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">apiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey">apiKeySecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput">apiKeySecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput">apiKeySecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiKeySecretArn`<sup>Required</sup> <a name="apiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```typescript
public readonly apiKeySecretArn: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a>

---

##### `apiKeySecretConfig`<sup>Required</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig"></a>

```typescript
public readonly apiKeySecretConfig: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a>

---

##### `apiKeySecretJsonKey`<sup>Required</sup> <a name="apiKeySecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey"></a>

```typescript
public readonly apiKeySecretJsonKey: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tags"></a>

```typescript
public readonly tags: BedrockagentcoreApiKeyCredentialProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList">BedrockagentcoreApiKeyCredentialProviderTagsList</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKeySecretConfigInput`<sup>Optional</sup> <a name="apiKeySecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfigInput"></a>

```typescript
public readonly apiKeySecretConfigInput: IResolvable | BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---

##### `apiKeySecretSourceInput`<sup>Optional</sup> <a name="apiKeySecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSourceInput"></a>

```typescript
public readonly apiKeySecretSourceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcoreApiKeyCredentialProviderApiKeySecretArn: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn = { ... }
```


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey">jsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key BedrockagentcoreApiKeyCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id BedrockagentcoreApiKeyCredentialProvider#secret_id}

---

### BedrockagentcoreApiKeyCredentialProviderConfig <a name="BedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcoreApiKeyCredentialProviderConfig: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name">name</a></code> | <code>string</code> | The name of the API key credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | The API key to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | Configuration for a customer-provided secret containing the API key. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]</code> | Tags to assign to the API key credential provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The API key to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}

---

##### `apiKeySecretConfig`<sup>Optional</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretConfig"></a>

```typescript
public readonly apiKeySecretConfig: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

Configuration for a customer-provided secret containing the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}

---

##### `apiKeySecretSource`<sup>Optional</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]

Tags to assign to the API key credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}

---

### BedrockagentcoreApiKeyCredentialProviderTags <a name="BedrockagentcoreApiKeyCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcoreApiKeyCredentialProviderTags: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#key BedrockagentcoreApiKeyCredentialProvider#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_api_key_credential_provider#value BedrockagentcoreApiKeyCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetJsonKey"></a>

```typescript
public resetJsonKey(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```typescript
public readonly jsonKeyInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---


### BedrockagentcoreApiKeyCredentialProviderTagsList <a name="BedrockagentcoreApiKeyCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreApiKeyCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>[]

---


### BedrockagentcoreApiKeyCredentialProviderTagsOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreApiKeyCredentialProviderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderTags">BedrockagentcoreApiKeyCredentialProviderTags</a>

---



