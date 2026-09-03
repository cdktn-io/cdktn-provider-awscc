# `resiliencehubv2Policy` Submodule <a name="`resiliencehubv2Policy` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Policy <a name="Resiliencehubv2Policy" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy awscc_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2Policy(scope: Construct, id: string, config: Resiliencehubv2PolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo">putAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery">putDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz">putMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion">putMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo">resetAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery">resetDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion">resetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilitySlo` <a name="putAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo"></a>

```typescript
public putAvailabilitySlo(value: Resiliencehubv2PolicyAvailabilitySlo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---

##### `putDataRecovery` <a name="putDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery"></a>

```typescript
public putDataRecovery(value: Resiliencehubv2PolicyDataRecovery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---

##### `putMultiAz` <a name="putMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz"></a>

```typescript
public putMultiAz(value: Resiliencehubv2PolicyMultiAz): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---

##### `putMultiRegion` <a name="putMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion"></a>

```typescript
public putMultiRegion(value: Resiliencehubv2PolicyMultiRegion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags"></a>

```typescript
public putTags(value: IResolvable | Resiliencehubv2PolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---

##### `resetAvailabilitySlo` <a name="resetAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo"></a>

```typescript
public resetAvailabilitySlo(): void
```

##### `resetDataRecovery` <a name="resetDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery"></a>

```typescript
public resetDataRecovery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetMultiRegion` <a name="resetMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion"></a>

```typescript
public resetMultiRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Policy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount">associatedServiceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery">dataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz">multiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion">multiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput">availabilitySloInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput">dataRecoveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput">multiAzInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput">multiRegionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedServiceCount`<sup>Required</sup> <a name="associatedServiceCount" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount"></a>

```typescript
public readonly associatedServiceCount: number;
```

- *Type:* number

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo"></a>

```typescript
public readonly availabilitySlo: Resiliencehubv2PolicyAvailabilitySloOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataRecovery`<sup>Required</sup> <a name="dataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery"></a>

```typescript
public readonly dataRecovery: Resiliencehubv2PolicyDataRecoveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz"></a>

```typescript
public readonly multiAz: Resiliencehubv2PolicyMultiAzOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a>

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion"></a>

```typescript
public readonly multiRegion: Resiliencehubv2PolicyMultiRegionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags"></a>

```typescript
public readonly tags: Resiliencehubv2PolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `availabilitySloInput`<sup>Optional</sup> <a name="availabilitySloInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput"></a>

```typescript
public readonly availabilitySloInput: IResolvable | Resiliencehubv2PolicyAvailabilitySlo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---

##### `dataRecoveryInput`<sup>Optional</sup> <a name="dataRecoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput"></a>

```typescript
public readonly dataRecoveryInput: IResolvable | Resiliencehubv2PolicyDataRecovery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: IResolvable | Resiliencehubv2PolicyMultiAz;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---

##### `multiRegionInput`<sup>Optional</sup> <a name="multiRegionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput"></a>

```typescript
public readonly multiRegionInput: IResolvable | Resiliencehubv2PolicyMultiRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Resiliencehubv2PolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2PolicyAvailabilitySlo <a name="Resiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyAvailabilitySlo: resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target">target</a></code> | <code>number</code> | Availability target percentage. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

Availability target percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}

---

### Resiliencehubv2PolicyConfig <a name="Resiliencehubv2PolicyConfig" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyConfig: resiliencehubv2Policy.Resiliencehubv2PolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery">dataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The KMS key ID for encrypting policy data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz">multiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion">multiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | Tags assigned to the policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}

---

##### `availabilitySlo`<sup>Optional</sup> <a name="availabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo"></a>

```typescript
public readonly availabilitySlo: Resiliencehubv2PolicyAvailabilitySlo;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}.

---

##### `dataRecovery`<sup>Optional</sup> <a name="dataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery"></a>

```typescript
public readonly dataRecovery: Resiliencehubv2PolicyDataRecovery;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The KMS key ID for encrypting policy data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz"></a>

```typescript
public readonly multiAz: Resiliencehubv2PolicyMultiAz;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}.

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion"></a>

```typescript
public readonly multiRegion: Resiliencehubv2PolicyMultiRegion;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Resiliencehubv2PolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

Tags assigned to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}

---

### Resiliencehubv2PolicyDataRecovery <a name="Resiliencehubv2PolicyDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyDataRecovery: resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>number</code> | Time between backups in minutes. |

---

##### `timeBetweenBackupsInMinutes`<sup>Optional</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes"></a>

```typescript
public readonly timeBetweenBackupsInMinutes: number;
```

- *Type:* number

Time between backups in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}

---

### Resiliencehubv2PolicyMultiAz <a name="Resiliencehubv2PolicyMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyMultiAz: resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | Multi-AZ disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | Recovery Time Objective in minutes. |

---

##### `disasterRecoveryApproach`<sup>Optional</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

Multi-AZ disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `rpoInMinutes`<sup>Optional</sup> <a name="rpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `rtoInMinutes`<sup>Optional</sup> <a name="rtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyMultiRegion <a name="Resiliencehubv2PolicyMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyMultiRegion: resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | Multi-Region disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | Recovery Time Objective in minutes. |

---

##### `disasterRecoveryApproach`<sup>Optional</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

Multi-Region disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `rpoInMinutes`<sup>Optional</sup> <a name="rpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `rtoInMinutes`<sup>Optional</sup> <a name="rtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyTags <a name="Resiliencehubv2PolicyTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

const resiliencehubv2PolicyTags: resiliencehubv2Policy.Resiliencehubv2PolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#key Resiliencehubv2Policy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/resiliencehubv2_policy#value Resiliencehubv2Policy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2PolicyAvailabilitySloOutputReference <a name="Resiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput">targetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyAvailabilitySlo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---


### Resiliencehubv2PolicyDataRecoveryOutputReference <a name="Resiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes">resetTimeBetweenBackupsInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeBetweenBackupsInMinutes` <a name="resetTimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes"></a>

```typescript
public resetTimeBetweenBackupsInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput">timeBetweenBackupsInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeBetweenBackupsInMinutesInput`<sup>Optional</sup> <a name="timeBetweenBackupsInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput"></a>

```typescript
public readonly timeBetweenBackupsInMinutesInput: number;
```

- *Type:* number

---

##### `timeBetweenBackupsInMinutes`<sup>Required</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```typescript
public readonly timeBetweenBackupsInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyDataRecovery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---


### Resiliencehubv2PolicyMultiAzOutputReference <a name="Resiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach">resetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes">resetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes">resetRtoInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisasterRecoveryApproach` <a name="resetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach"></a>

```typescript
public resetDisasterRecoveryApproach(): void
```

##### `resetRpoInMinutes` <a name="resetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes"></a>

```typescript
public resetRpoInMinutes(): void
```

##### `resetRtoInMinutes` <a name="resetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes"></a>

```typescript
public resetRtoInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput">disasterRecoveryApproachInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput">rpoInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput">rtoInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disasterRecoveryApproachInput`<sup>Optional</sup> <a name="disasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput"></a>

```typescript
public readonly disasterRecoveryApproachInput: string;
```

- *Type:* string

---

##### `rpoInMinutesInput`<sup>Optional</sup> <a name="rpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput"></a>

```typescript
public readonly rpoInMinutesInput: number;
```

- *Type:* number

---

##### `rtoInMinutesInput`<sup>Optional</sup> <a name="rtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput"></a>

```typescript
public readonly rtoInMinutesInput: number;
```

- *Type:* number

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyMultiAz;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---


### Resiliencehubv2PolicyMultiRegionOutputReference <a name="Resiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach">resetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes">resetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes">resetRtoInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisasterRecoveryApproach` <a name="resetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach"></a>

```typescript
public resetDisasterRecoveryApproach(): void
```

##### `resetRpoInMinutes` <a name="resetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes"></a>

```typescript
public resetRpoInMinutes(): void
```

##### `resetRtoInMinutes` <a name="resetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes"></a>

```typescript
public resetRtoInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput">disasterRecoveryApproachInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput">rpoInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput">rtoInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disasterRecoveryApproachInput`<sup>Optional</sup> <a name="disasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput"></a>

```typescript
public readonly disasterRecoveryApproachInput: string;
```

- *Type:* string

---

##### `rpoInMinutesInput`<sup>Optional</sup> <a name="rpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput"></a>

```typescript
public readonly rpoInMinutesInput: number;
```

- *Type:* number

---

##### `rtoInMinutesInput`<sup>Optional</sup> <a name="rtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput"></a>

```typescript
public readonly rtoInMinutesInput: number;
```

- *Type:* number

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyMultiRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---


### Resiliencehubv2PolicyTagsList <a name="Resiliencehubv2PolicyTagsList" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2PolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>[]

---


### Resiliencehubv2PolicyTagsOutputReference <a name="Resiliencehubv2PolicyTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Policy } from '@cdktn/provider-awscc'

new resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2PolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags">Resiliencehubv2PolicyTags</a>

---



