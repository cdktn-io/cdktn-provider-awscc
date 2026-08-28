# `ec2VerifiedAccessInstance` Submodule <a name="`ec2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessInstance <a name="Ec2VerifiedAccessInstance" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance(scope: Construct, id: string, config?: Ec2VerifiedAccessInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig">Ec2VerifiedAccessInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig">Ec2VerifiedAccessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations">putLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders">putVerifiedAccessTrustProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain">resetCidrEndpointsCustomSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations">resetLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds">resetVerifiedAccessTrustProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders">resetVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfigurations` <a name="putLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations"></a>

```typescript
public putLoggingConfigurations(value: Ec2VerifiedAccessInstanceLoggingConfigurations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VerifiedAccessInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---

##### `putVerifiedAccessTrustProviders` <a name="putVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders"></a>

```typescript
public putVerifiedAccessTrustProviders(value: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---

##### `resetCidrEndpointsCustomSubDomain` <a name="resetCidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain"></a>

```typescript
public resetCidrEndpointsCustomSubDomain(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled"></a>

```typescript
public resetFipsEnabled(): void
```

##### `resetLoggingConfigurations` <a name="resetLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations"></a>

```typescript
public resetLoggingConfigurations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVerifiedAccessTrustProviderIds` <a name="resetVerifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds"></a>

```typescript
public resetVerifiedAccessTrustProviderIds(): void
```

##### `resetVerifiedAccessTrustProviders` <a name="resetVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders"></a>

```typescript
public resetVerifiedAccessTrustProviders(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">cidrEndpointsCustomSubDomainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput">cidrEndpointsCustomSubDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput">loggingConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput">verifiedAccessTrustProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput">verifiedAccessTrustProvidersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidrEndpointsCustomSubDomainNameServers`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomainNameServers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```typescript
public readonly cidrEndpointsCustomSubDomainNameServers: string[];
```

- *Type:* string[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `loggingConfigurations`<sup>Required</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations"></a>

```typescript
public readonly loggingConfigurations: Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags"></a>

```typescript
public readonly tags: Ec2VerifiedAccessInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a>

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

---

##### `verifiedAccessTrustProviders`<sup>Required</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```typescript
public readonly verifiedAccessTrustProviders: Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `cidrEndpointsCustomSubDomainInput`<sup>Optional</sup> <a name="cidrEndpointsCustomSubDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput"></a>

```typescript
public readonly cidrEndpointsCustomSubDomainInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput"></a>

```typescript
public readonly fipsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingConfigurationsInput`<sup>Optional</sup> <a name="loggingConfigurationsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput"></a>

```typescript
public readonly loggingConfigurationsInput: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VerifiedAccessInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---

##### `verifiedAccessTrustProviderIdsInput`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput"></a>

```typescript
public readonly verifiedAccessTrustProviderIdsInput: string[];
```

- *Type:* string[]

---

##### `verifiedAccessTrustProvidersInput`<sup>Optional</sup> <a name="verifiedAccessTrustProvidersInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput"></a>

```typescript
public readonly verifiedAccessTrustProvidersInput: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---

##### `cidrEndpointsCustomSubDomain`<sup>Required</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```typescript
public readonly cidrEndpointsCustomSubDomain: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `verifiedAccessTrustProviderIds`<sup>Required</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```typescript
public readonly verifiedAccessTrustProviderIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessInstanceConfig <a name="Ec2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceConfig: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain">cidrEndpointsCustomSubDomain</a></code> | <code>string</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description">description</a></code> | <code>string</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled">fipsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations">loggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds">verifiedAccessTrustProviderIds</a></code> | <code>string[]</code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders">verifiedAccessTrustProviders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | AWS Verified Access trust providers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidrEndpointsCustomSubDomain`<sup>Optional</sup> <a name="cidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain"></a>

```typescript
public readonly cidrEndpointsCustomSubDomain: string;
```

- *Type:* string

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled"></a>

```typescript
public readonly fipsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `loggingConfigurations`<sup>Optional</sup> <a name="loggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations"></a>

```typescript
public readonly loggingConfigurations: Ec2VerifiedAccessInstanceLoggingConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VerifiedAccessInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `verifiedAccessTrustProviderIds`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds"></a>

```typescript
public readonly verifiedAccessTrustProviderIds: string[];
```

- *Type:* string[]

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `verifiedAccessTrustProviders`<sup>Optional</sup> <a name="verifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders"></a>

```typescript
public readonly verifiedAccessTrustProviders: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

### Ec2VerifiedAccessInstanceLoggingConfigurations <a name="Ec2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceLoggingConfigurations: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | Sends Verified Access logs to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext">includeTrustContext</a></code> | <code>boolean \| cdktn.IResolvable</code> | Include claims from trust providers in Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose">kinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | Sends Verified Access logs to Kinesis. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion">logVersion</a></code> | <code>string</code> | Select log version for Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | Sends Verified Access logs to Amazon S3. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

Sends Verified Access logs to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#cloudwatch_logs Ec2VerifiedAccessInstance#cloudwatch_logs}

---

##### `includeTrustContext`<sup>Optional</sup> <a name="includeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Include claims from trust providers in Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#include_trust_context Ec2VerifiedAccessInstance#include_trust_context}

---

##### `kinesisDataFirehose`<sup>Optional</sup> <a name="kinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose"></a>

```typescript
public readonly kinesisDataFirehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

Sends Verified Access logs to Kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#kinesis_data_firehose Ec2VerifiedAccessInstance#kinesis_data_firehose}

---

##### `logVersion`<sup>Optional</sup> <a name="logVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion"></a>

```typescript
public readonly logVersion: string;
```

- *Type:* string

Select log version for Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#log_version Ec2VerifiedAccessInstance#log_version}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3"></a>

```typescript
public readonly s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

Sends Verified Access logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#s3 Ec2VerifiedAccessInstance#s3}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | The ID of the CloudWatch Logs log group. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The ID of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#log_group Ec2VerifiedAccessInstance#log_group}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | The ID of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

The ID of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#delivery_stream Ec2VerifiedAccessInstance#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceLoggingConfigurationsS3: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName">bucketName</a></code> | <code>string</code> | The bucket name. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | The ID of the AWS account that owns the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix">prefix</a></code> | <code>string</code> | The bucket prefix. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#bucket_name Ec2VerifiedAccessInstance#bucket_name}

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

The ID of the AWS account that owns the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#bucket_owner Ec2VerifiedAccessInstance#bucket_owner}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The bucket prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#prefix Ec2VerifiedAccessInstance#prefix}

---

### Ec2VerifiedAccessInstanceTags <a name="Ec2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceTags: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#key Ec2VerifiedAccessInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#value Ec2VerifiedAccessInstance#value}

---

### Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

const ec2VerifiedAccessInstanceVerifiedAccessTrustProviders: ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description">description</a></code> | <code>string</code> | The description of trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | The type of device-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | The type of trust provider (user- or device-based). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | The type of user-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>string</code> | The ID of the trust provider. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

The type of device-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#device_trust_provider_type Ec2VerifiedAccessInstance#device_trust_provider_type}

---

##### `trustProviderType`<sup>Optional</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

The type of trust provider (user- or device-based).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#trust_provider_type Ec2VerifiedAccessInstance#trust_provider_type}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

The type of user-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#user_trust_provider_type Ec2VerifiedAccessInstance#user_trust_provider_type}

---

##### `verifiedAccessTrustProviderId`<sup>Optional</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId"></a>

```typescript
public readonly verifiedAccessTrustProviderId: string;
```

- *Type:* string

The ID of the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_id Ec2VerifiedAccessInstance#verified_access_trust_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose">putKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext">resetIncludeTrustContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose">resetKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion">resetLogVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `putKinesisDataFirehose` <a name="putKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose"></a>

```typescript
public putKinesisDataFirehose(value: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3"></a>

```typescript
public putS3(value: Ec2VerifiedAccessInstanceLoggingConfigurationsS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetIncludeTrustContext` <a name="resetIncludeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext"></a>

```typescript
public resetIncludeTrustContext(): void
```

##### `resetKinesisDataFirehose` <a name="resetKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose"></a>

```typescript
public resetKinesisDataFirehose(): void
```

##### `resetLogVersion` <a name="resetLogVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion"></a>

```typescript
public resetLogVersion(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">kinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput">includeTrustContextInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput">kinesisDataFirehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput">logVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">includeTrustContext</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">logVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `kinesisDataFirehose`<sup>Required</sup> <a name="kinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```typescript
public readonly kinesisDataFirehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```typescript
public readonly s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `includeTrustContextInput`<sup>Optional</sup> <a name="includeTrustContextInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput"></a>

```typescript
public readonly includeTrustContextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kinesisDataFirehoseInput`<sup>Optional</sup> <a name="kinesisDataFirehoseInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput"></a>

```typescript
public readonly kinesisDataFirehoseInput: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `logVersionInput`<sup>Optional</sup> <a name="logVersionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput"></a>

```typescript
public readonly logVersionInput: string;
```

- *Type:* string

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `includeTrustContext`<sup>Required</sup> <a name="includeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```typescript
public readonly includeTrustContext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logVersion`<sup>Required</sup> <a name="logVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```typescript
public readonly logVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### Ec2VerifiedAccessInstanceTagsList <a name="Ec2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---


### Ec2VerifiedAccessInstanceTagsOutputReference <a name="Ec2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessInstance } from '@cdktn/provider-awscc'

new ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType">resetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType">resetTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType">resetUserTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId">resetVerifiedAccessTrustProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceTrustProviderType` <a name="resetDeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType"></a>

```typescript
public resetDeviceTrustProviderType(): void
```

##### `resetTrustProviderType` <a name="resetTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType"></a>

```typescript
public resetTrustProviderType(): void
```

##### `resetUserTrustProviderType` <a name="resetUserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType"></a>

```typescript
public resetUserTrustProviderType(): void
```

##### `resetVerifiedAccessTrustProviderId` <a name="resetVerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId"></a>

```typescript
public resetVerifiedAccessTrustProviderId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput">deviceTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput">userTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput">verifiedAccessTrustProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">userTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceTrustProviderTypeInput`<sup>Optional</sup> <a name="deviceTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput"></a>

```typescript
public readonly deviceTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```typescript
public readonly trustProviderTypeInput: string;
```

- *Type:* string

---

##### `userTrustProviderTypeInput`<sup>Optional</sup> <a name="userTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput"></a>

```typescript
public readonly userTrustProviderTypeInput: string;
```

- *Type:* string

---

##### `verifiedAccessTrustProviderIdInput`<sup>Optional</sup> <a name="verifiedAccessTrustProviderIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput"></a>

```typescript
public readonly verifiedAccessTrustProviderIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```typescript
public readonly deviceTrustProviderType: string;
```

- *Type:* string

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```typescript
public readonly userTrustProviderType: string;
```

- *Type:* string

---

##### `verifiedAccessTrustProviderId`<sup>Required</sup> <a name="verifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```typescript
public readonly verifiedAccessTrustProviderId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



