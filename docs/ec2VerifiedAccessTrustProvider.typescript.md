# `ec2VerifiedAccessTrustProvider` Submodule <a name="`ec2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessTrustProvider <a name="Ec2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider(scope: Construct, id: string, config: Ec2VerifiedAccessTrustProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig">Ec2VerifiedAccessTrustProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig">Ec2VerifiedAccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions">putDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions">putNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions">putOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions">resetDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType">resetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions">resetNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions">resetOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType">resetUserTrustProviderType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeviceOptions` <a name="putDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions"></a>

```typescript
public putDeviceOptions(value: Ec2VerifiedAccessTrustProviderDeviceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---

##### `putNativeApplicationOidcOptions` <a name="putNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions"></a>

```typescript
public putNativeApplicationOidcOptions(value: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---

##### `putOidcOptions` <a name="putOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions"></a>

```typescript
public putOidcOptions(value: Ec2VerifiedAccessTrustProviderOidcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification"></a>

```typescript
public putSseSpecification(value: Ec2VerifiedAccessTrustProviderSseSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VerifiedAccessTrustProviderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceOptions` <a name="resetDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions"></a>

```typescript
public resetDeviceOptions(): void
```

##### `resetDeviceTrustProviderType` <a name="resetDeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType"></a>

```typescript
public resetDeviceTrustProviderType(): void
```

##### `resetNativeApplicationOidcOptions` <a name="resetNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions"></a>

```typescript
public resetNativeApplicationOidcOptions(): void
```

##### `resetOidcOptions` <a name="resetOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions"></a>

```typescript
public resetOidcOptions(): void
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification"></a>

```typescript
public resetSseSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserTrustProviderType` <a name="resetUserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType"></a>

```typescript
public resetUserTrustProviderType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">nativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput">deviceOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput">deviceTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput">nativeApplicationOidcOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput">oidcOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput">policyReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput">userTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deviceOptions`<sup>Required</sup> <a name="deviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```typescript
public readonly deviceOptions: Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `nativeApplicationOidcOptions`<sup>Required</sup> <a name="nativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```typescript
public readonly nativeApplicationOidcOptions: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `oidcOptions`<sup>Required</sup> <a name="oidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags"></a>

```typescript
public readonly tags: Ec2VerifiedAccessTrustProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a>

---

##### `verifiedAccessTrustProviderId`<sup>Required</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```typescript
public readonly verifiedAccessTrustProviderId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceOptionsInput`<sup>Optional</sup> <a name="deviceOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput"></a>

```typescript
public readonly deviceOptionsInput: IResolvable | Ec2VerifiedAccessTrustProviderDeviceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---

##### `deviceTrustProviderTypeInput`<sup>Optional</sup> <a name="deviceTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```typescript
public readonly deviceTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `nativeApplicationOidcOptionsInput`<sup>Optional</sup> <a name="nativeApplicationOidcOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput"></a>

```typescript
public readonly nativeApplicationOidcOptionsInput: IResolvable | Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---

##### `oidcOptionsInput`<sup>Optional</sup> <a name="oidcOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput"></a>

```typescript
public readonly oidcOptionsInput: IResolvable | Ec2VerifiedAccessTrustProviderOidcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---

##### `policyReferenceNameInput`<sup>Optional</sup> <a name="policyReferenceNameInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput"></a>

```typescript
public readonly policyReferenceNameInput: string;
```

- *Type:* string

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput"></a>

```typescript
public readonly sseSpecificationInput: IResolvable | Ec2VerifiedAccessTrustProviderSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VerifiedAccessTrustProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput"></a>

```typescript
public readonly trustProviderTypeInput: string;
```

- *Type:* string

---

##### `userTrustProviderTypeInput`<sup>Optional</sup> <a name="userTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput"></a>

```typescript
public readonly userTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessTrustProviderConfig <a name="Ec2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderConfig: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName">policyReferenceName</a></code> | <code>string</code> | The identifier to be used when working with policy rules. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | Type of trust provider. Possible values: user\|device. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description">description</a></code> | <code>string</code> | A description for the Amazon Web Services Verified Access trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | The options for device identity based trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | The type of device-based trust provider. Possible values: jamf\|crowdstrike. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions">nativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider for L4. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | The type of device-based trust provider. Possible values: oidc\|iam-identity-center. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName"></a>

```typescript
public readonly policyReferenceName: string;
```

- *Type:* string

The identifier to be used when working with policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#policy_reference_name Ec2VerifiedAccessTrustProvider#policy_reference_name}

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

Type of trust provider. Possible values: user|device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#trust_provider_type Ec2VerifiedAccessTrustProvider#trust_provider_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the Amazon Web Services Verified Access trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#description Ec2VerifiedAccessTrustProvider#description}

---

##### `deviceOptions`<sup>Optional</sup> <a name="deviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions"></a>

```typescript
public readonly deviceOptions: Ec2VerifiedAccessTrustProviderDeviceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

The options for device identity based trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_options Ec2VerifiedAccessTrustProvider#device_options}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

The type of device-based trust provider. Possible values: jamf|crowdstrike.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_trust_provider_type Ec2VerifiedAccessTrustProvider#device_trust_provider_type}

---

##### `nativeApplicationOidcOptions`<sup>Optional</sup> <a name="nativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions"></a>

```typescript
public readonly nativeApplicationOidcOptions: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#native_application_oidc_options Ec2VerifiedAccessTrustProvider#native_application_oidc_options}

---

##### `oidcOptions`<sup>Optional</sup> <a name="oidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions"></a>

```typescript
public readonly oidcOptions: Ec2VerifiedAccessTrustProviderOidcOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#oidc_options Ec2VerifiedAccessTrustProvider#oidc_options}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessTrustProviderSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#sse_specification Ec2VerifiedAccessTrustProvider#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VerifiedAccessTrustProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tags Ec2VerifiedAccessTrustProvider#tags}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

The type of device-based trust provider. Possible values: oidc|iam-identity-center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_trust_provider_type Ec2VerifiedAccessTrustProvider#user_trust_provider_type}

---

### Ec2VerifiedAccessTrustProviderDeviceOptions <a name="Ec2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderDeviceOptions: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl">publicSigningKeyUrl</a></code> | <code>string</code> | URL Verified Access will use to verify authenticity of the device tokens. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the tenant application with the device-identity provider. |

---

##### `publicSigningKeyUrl`<sup>Optional</sup> <a name="publicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl"></a>

```typescript
public readonly publicSigningKeyUrl: string;
```

- *Type:* string

URL Verified Access will use to verify authenticity of the device tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_url Ec2VerifiedAccessTrustProvider#public_signing_key_url}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the tenant application with the device-identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tenant_id Ec2VerifiedAccessTrustProvider#tenant_id}

---

### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId">clientId</a></code> | <code>string</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer">issuer</a></code> | <code>string</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint">publicSigningKeyEndpoint</a></code> | <code>string</code> | The public signing key for endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope">scope</a></code> | <code>string</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | The OIDC user info endpoint. |

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `publicSigningKeyEndpoint`<sup>Optional</sup> <a name="publicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint"></a>

```typescript
public readonly publicSigningKeyEndpoint: string;
```

- *Type:* string

The public signing key for endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_endpoint Ec2VerifiedAccessTrustProvider#public_signing_key_endpoint}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderOidcOptions <a name="Ec2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderOidcOptions: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId">clientId</a></code> | <code>string</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer">issuer</a></code> | <code>string</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope">scope</a></code> | <code>string</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | The OIDC user info endpoint. |

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderSseSpecification <a name="Ec2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderSseSpecification: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#customer_managed_key_enabled Ec2VerifiedAccessTrustProvider#customer_managed_key_enabled}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#kms_key_arn Ec2VerifiedAccessTrustProvider#kms_key_arn}

---

### Ec2VerifiedAccessTrustProviderTags <a name="Ec2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

const ec2VerifiedAccessTrustProviderTags: ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#key Ec2VerifiedAccessTrustProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#value Ec2VerifiedAccessTrustProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl">resetPublicSigningKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublicSigningKeyUrl` <a name="resetPublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl"></a>

```typescript
public resetPublicSigningKeyUrl(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput">publicSigningKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">publicSigningKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicSigningKeyUrlInput`<sup>Optional</sup> <a name="publicSigningKeyUrlInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput"></a>

```typescript
public readonly publicSigningKeyUrlInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `publicSigningKeyUrl`<sup>Required</sup> <a name="publicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```typescript
public readonly publicSigningKeyUrl: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderDeviceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---


### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint">resetPublicSigningKeyEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetPublicSigningKeyEndpoint` <a name="resetPublicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint"></a>

```typescript
public resetPublicSigningKeyEndpoint(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```typescript
public resetUserInfoEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput">publicSigningKeyEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">publicSigningKeyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `publicSigningKeyEndpointInput`<sup>Optional</sup> <a name="publicSigningKeyEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput"></a>

```typescript
public readonly publicSigningKeyEndpointInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `publicSigningKeyEndpoint`<sup>Required</sup> <a name="publicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```typescript
public readonly publicSigningKeyEndpoint: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---


### Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```typescript
public resetUserInfoEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderOidcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---


### Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---


### Ec2VerifiedAccessTrustProviderTagsList <a name="Ec2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessTrustProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>[]

---


### Ec2VerifiedAccessTrustProviderTagsOutputReference <a name="Ec2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessTrustProvider } from '@cdktn/provider-awscc'

new ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessTrustProviderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>

---



